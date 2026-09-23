---
title: Infosüsteemide eetikaprobleemid
date: 2012-02-18
category: Learning
tags:
- IT College
- arvamus
- eetika
- essee
- infosüsteem
- moraal
---
<em><a href="http://itcollege.ee">Eesti Infotehnoloogia Kolledži</a> aine "<a href="https://itcollege.ois.ee/et/subject/view?subject_id=127">Infosüsteemide analüüs ja projekteerimine</a>" raames. Allpool esitatu on olemuselt pigem esseeistlik töö ning põhineb autori subjektiivsel arvamusel. Soovitav on <span style="text-decoration: underline"><a href="https://docs.google.com/document/d/1Ohclr13DFdidBB0wgnkB8Zo8Tvqe13lH-kCS0y252Rs/edit">lugeda tööd Google Docs keskkonnas</a></span>.</em>
<h1>Ülesande kirjeldus</h1>

Tuua kaks infosüsteemi arendusprojektide näidet, kus arendajad puutusid kokku erinevate eetiliste probleemidega<br />
1. Lühidalt kirjeldada projekt<br />
2. Iseloomustada eetiline probleem<br />
3. Tuua välja huvitatud osapooled<br />
4. Pakkuda välja võimalikud lahendused<br />
5. Selgitada, miks tegemist on just eetilise probleemiga
Pakkuda välja 5 reeglit, kuidas käituda eetiliste probleemide puhul.
<h1 style="text-align: left">Projekt #1: Ehitusfirma kodulehe realiseerimine</h1>
<h3 style="text-align: left">Kirjeldus</h3>

Tarkvaraarendusega tegelevale firmale esitati tellimus ehitusfirma kodulehe ja -haldusliidese tarkvara loomiseks. Loodav koduleht kasutaks üht kujundust, mille sisuala vastavalt valitud lehele vaheldub. Lehti saab luua ja muuta haldusliidesest. Lisaks staatilistele lehtedele sisaldab koduleht ka dünaamilisi osi: mooduleid ning automaatselt genereeritud tekste (sisukokkuvõtted). Mooduliteks on näiteks tehtud tööde moodul, kuhu sisestatud andmete põhjal genereeritakse automaatselt külastajale nähtava lehe sisu või uudiste moodul, mida kuvatakse parempoolses kõrvaltulbas.
<h3>Probleem</h3>

Probleemi vaatleme tarkvaraarendaja seisukohast. Arendaja probleemiks on ressursihaldus. Projektil on piiratud eelarve ning aeg, kuid kliendile tuleks pakkuda parimat kvaliteeti ning realiseerida võimalikult palju kokkulepitud nõuetest. Kvaliteedi saavutamine tähendab muuhulgas ka süsteemi planeerimistegevusi, dokumenteerimist ja testimist.
<ul>
<li>
Kas kujundada süsteem nii, et seda on tulevikus lihtne hooldada ja laiendada või teha “üle põlve”, arvestades praeguseid spetsiifilisi vajadusi (ning riskides tulevikuprobleemidega)?
</li>
<li>
Kas testida süstemaatiliste meetoditega ja põhjalikult teades, et sügava testimise vajadust on hiljem kliendile keeruline põhjendada ning see venitab eelarvet?
</li>
<li>
Kas jälgida standardeid või teha võimalikult kiiresti?
</li>
<li>
Kas pühendada aega ka teiste veebisirvijate toele või kasutada vaid enimlevinute viimaseid versioone?
</li>
</ul>
<h3>Huvitatud osapooled</h3>
<div dir="ltr">
<table style="border: 1px solid #222">
<col width="147" />
<col width="269" />
<col width="*" />
<tbody>
<tr>
<td><strong>Osapool</strong></td>
<td><strong>Huvi</strong></td>
<td><strong>Tulem, huvi avaldumine</strong></td>
</tr>
<tr>
<td>Arendaja</td>
<td>Pakkuda kliendile parimat kvaliteeti, säilitada oma meelerahu ning reputatsioon.</td>
<td>Projekti eelarve ja läbiviimiseks kuluv aeg kasvavad, klient võib olla rahulolematu või keelduda maksmast, minnes pakkuja juurde, kes pealtnäha sama tulemi odavamalt valmistab.</td>
</tr>
<tr>
<td>Projektijuht</td>
<td>Kindlustada kodulehe valmimine eelarve ja tähtaja piires. Tagada kliendi rahulolu.</td>
<td>Surve arendajale tekitab puudujäägid kvaliteedis ja ulatuses. Võimalus, et süsteemi hooldusfaasis avaldub kliendi rahulolematus.</td>
</tr>
<tr>
<td>Tarkvarafirma omanik</td>
<td>Kindlustada projekti edukas lõpetamine ja kliendi maksevalmidus.</td>
<td>Surveahel: Klient -&gt; Omanik -&gt; Projektijuht -&gt; Arendaja</td>
</tr>
<tr>
<td>Klient</td>
<td>Saada määratud eelarve ja ajakuluga kvaliteetne ja kokkulepitud tulemus.</td>
<td>Kompromiss kõigi kolme osas: tavaliselt suurenevad eelarve ja tähtaeg, et tagada aktsepteeritav kvaliteet kõikide nõuete realiseerimine.</td>
</tr>
<tr>
<td>Veebilehe külastaja</td>
<td>Saada hea kasutajakogemus. Leida soovitud info kiiresti.Nautida lehte visuaalselt.</td>
<td>Vigade leidmisel negatiivne tagasiside kliendile, kliendi reputatsiooni langus külastaja silmis.</td>
</tr>
<tr>
<td>Veebilehe hooldaja (tarkvaraarendaja #2)</td>
<td>Teha soovitud muutused süsteemis kiiresti. Teada, et olemasolev süsteem on töökindel ja testitud.</td>
<td>Eelarve suurenemine, kui juba valmis süsteem ei ole tulevikuga arvestanud.</td>
</tr>
<tr>
<td>Veebilehe sisuhaldur (inimene, kes veebilehte infoga täidab)</td>
<td>Suuta täita kõik nõutud tegevused kasutajasõbraliku haldusliidese kaudu.</td>
<td>Puudujääkide ilmnemisel negatiivne tagasiside ülemusele, kaudselt ka tarkvarafirmale.</td>
</tr>
</tbody>
</table>
<h3>Lahendused</h3>

Probleemile pole 100% õiget lahendust, need piirangud on olemas igas projektis ning jäävad ka tulevikus kehtima. Kõige enam ilmnevad ressursiprobleemid klassikalise Waterfall ehk kosemeetodiga, kus kogu projekt on algusest planeeritud ning kasutatavad ressursid lukustatud.
Üheks võimalikuks alternatiiviks oleks agiilse metoodika kasutamine, kus soovid ja teostused tehakse iteratsioonidena. Siis on ootamatused ja muutused kergemini hallatavad ning kliendil on parem ettekujutus projekti seisust.
Agiilse metoodikaga (Scrum) projekti planeerimisel kasutatakse ka järgnevat meetodit: kliendil lastakse valida kolm olulist piirangut neljast (kvaliteet, ulatus, eelarve, raha) ning neljanda hindab arendustiim vastavalt esimese kolme määrangule. Seda  tehnikat kasutades ei lange kogu vastutus arendaja (projekti meeskonna) õlule.
<h3>Eetikaprobleem?</h3>

Tegu on eetikaprobleemiga, mis langeb arendaja õlule, sest just arendaja teab kõige täpsemalt, mis koodi sees toimub. Realiseeritud süsteem võib kliendi ja juhatuse poolt vaadatuna küll ilus ja töötav olla, aga arendaja istub sel ajal häbitundega ja vaikides: koodis on turvaaugud, see on ehitatud standardeid ja metoodikaid järgimata, raskesti hooldatav, dokumenteerimata.
Julgemad arendajad räägivad sel teemal projektijuhi, juhatuse ning isegi kliendiga, küsides juurde aega ning ressursse: eesmärk on neil kõigil ju ühine: kliendile võimalikult kvaliteetse toote pakkumine. Tihti selline läbirääkimine aga ebaõnnestub, sest vajadust ei suudeta mittetehnilisele kliendile piisavalt kästi kommunikeerida või pole klient lihtsalt valmis parema lahenduse eest rohkem maksma.
Olgu olukord milline tahes, tulem jääb siiski liigagi tihti samaks: valmistatakse süsteem, mille selle ehitanud arendaja heameelega prügikasti saadaks.
<h1>Projekt #2:  Catering firma tööde infosüsteem</h1>
<h3>Kirjeldus</h3>

Tarkvarafirma on loonud oma kliendile (kelleks on suur ja mainekas catering firma) infosüsteemi kliendi infohalduse automatiseerimiseks. Süsteem on laiaulatuslik, võimaldades muuhulgas...
<ul>
<li>
Klientide ja kliendiandmete haldamist
</li>
<li>
Ühekordsete ja korduvate tööde sisestust ja haldust
</li>
<li>
Arvete koostamist tehtud tööde põhjal perioodiks (üks kuu)
</li>
<li>
Firma finantsaruannete koostamist
</li>
<li>
Hallatavate objektide (hooned, asutused) haldust
</li>
<li>
Töötajate ja palgagraafikute haldust
</li>
</ul>

Nagu näha, on tegemist  üsnagi andmemahuka ja keerulise süsteemiga. Süsteem sisaldab kliendi poolt aastate jooksul sisestatud andmeid, logisid, üleslaaditud faile ning firmasisest kirjavahetust.
<h3>Probleem</h3>

Olukorda illustreerib hästi analoogia teise, hiljuti meedias tähelepanu saanud analoogse probleemiga. Nimelt esitas “Europe vs Facebook” grupp Iiri andmekaitseorganile nimekirja kaebustega sotsiaalvõrgustik “Facebook” vastu. Kaebused olid seotud suurkorporatsiooni andmekasutusega, nimelt süüdistati firmat klientide andmete ebaeetilises kogumises ja kasutamises.
Olukord on paradoksiaalne. On mõistetav, et iga andmetel põhinev süsteem (Facebook, Gmail, pangad, catering firma infosüsteem) peab oma funktsionaalsuse täitmiseks säilitama tundlikke andmeid. Samas ei soovi andmete omanikud (objektid, füüsilised- ja juriidilised isikud) tihti nende andmete (õigustamata) eksisteerimist kolmandate osapoolte käes, põhjendades seda õigustatud väitega, et selliseid andmeid saab kuritarvitada andmete valdaja või muu juurdepääsuga isiku omakasu huvides.
Catering firma infosüsteemist rääkides on sellisteks isikuteks süsteemis haldaja rolli omavad töötajad ning tarkvarafirma arendajad, kes andmebaasile ja süsteemile vahetut ligipääsu omavad. Siit ka eetikaprobleem: kas catering firma peaks muretsema võimu üle, mida arendajad omavad ning vastupidi; kas arendajad  peaksid võitlema süümepiinadega hooldustöid sooritades?
<h3>Huvitatud osapooled</h3>
<div dir="ltr">
<table style="border: 1px solid #222">
<col width="188" />
<col width="216" />
<col width="220" />
<tbody>
<tr>
<td>Osapool</td>
<td>Huvi</td>
<td>Tulem, huvi avaldumine</td>
</tr>
<tr>
<td>Catering firma töötaja</td>
<td>Säilitada oma andmete privaatsus firmaväliste isikute suhtes: tehtud tööde info, palgagraafik.</td>
<td>Garantii küsimine info kaitsmise kohta tarkvarafirmalt: NDO (non-disclosure-agreement), lepingusätted.</td>
</tr>
<tr>
<td>Infosüsteemi haldaja</td>
<td>Tagada süsteemi andmete õigsus, kontrollida töötajate tegevusi.</td>
<td>Töötajate tegevuse auditeerimine, vastutamine andmete  ja tegevuse õigsuse kohta. Surve tarkvarafirmale programmi hooldus- ja monitoorimisvõimaluste teostamiseks.</td>
</tr>
<tr>
<td>Tarkvarafirma arendaja</td>
<td>Tagada süsteemi toimimine hooldustööde ja edasiarenduste kaudu kasutades selleks andmeid olemasoleva süsteemi toimimise kohta.</td>
<td>Infosüsteemi andmete kasutamine testide koostamiseks. Vastutus mõlema firma ees andmete privaatsuse ja rikkumatuse tagamiseks.</td>
</tr>
<tr>
<td>Tarkvarafirma juht</td>
<td>Tagada süsteemi toimimine, vältida kliendi pretensioone privaatsuse osas.</td>
<td>Kindlustamine, et süsteem andmeid ei hävitaks ega lekitaks. Läbirääkimised kliendiga arendaja soovitatud hooldustööde tasustamiseks.</td>
</tr>
<tr>
<td>Catering firma klient</td>
<td>Saada kvaliteetset teenust, tagada catering firmaga vahetatud info privaatsus kolmandate isikute suhtes.</td>
<td>Catering firma usaldamine oma andmetega. Väärteo kahtlusel pretensioonide esitamine vastava(te)le seadusorganile auditi korraldamiseks.</td>
</tr>
<tr>
<td>Andmekaitseagentuur</td>
<td>Tagada kehtivate seaduste täitmine catering- ja tarkvarafirma poolt.</td>
<td>Pretensioonide töötlemine catering- ja tarkvarafirma vastu. Audit infosüsteemi tööle ja käideldavate andmete kasutusse.</td>
</tr>
</tbody>
</table>

&nbsp;
&nbsp;
<h3>Lahendus</h3>

Tegemist on eetikaprobleemiga, mille tuvastamiseks on raske diskreetseid ja ühetimõistetavaid piiranguid seada. Iga infosüsteemi valdajal lasub moraalne ja eetiline vastutus oma võimu mitte kuritarvitada.
<blockquote>
“With great power there must also come -- great responsibility.”
(suure võimuga käib kaasas suur vastutus)
- Amazing Fantasy #15 (2)
</blockquote>

Kuritarvitamise piir sõltub aga vaatepunktist ja eeldustest.
Info valdajale antakse andmed usalduse alusel: panku usaldatakse konto saldo saladuses hoidma, sotsiaalvõrgustikke isikuandmete puutumatusega. Järelikult on need firmad teinud midagi, mille põhjal on meil alust arvata, et tegu on maineka ja usaldusväärse asutusega. Selle eelduse tekitamiseks peavad asutuse töötajad lähtuma teatud kehtestatud või ühiskonna poolt omaks võetud eetikastandarditest, nagu näiteks Arvutustehnika Eetika Instituudi poolt välja antud <a href="http://computerethicsinstitute.org/publications/tencommandments.html">kümme käsku</a> (1).
Võimu kuritarvitamise ennetamiseks on riiklikul tasandil rakendatud negatiivse tagasiside süsteem: kuritarvitad informatsiooni (näiteks pakub süsteemi arendaja catering firma konkurendile andmeid firma finantsolukorra kohta), lähed vangi. Sellise lähenemise probleemiks on asjaolu, et karistuse rakendamiseks peab rikkumine olema avastatud. Paremini töötab süsteem, kus positiivsete julgustustega - kasvatus, koolitused - julgustatakse inimesi õigesti käituma.
<h3>Eetikaprobleem?</h3>

Andmete kuritarvitamine on internetiajastul ja informatsiooni leviku tõttu aina rohkem tähelepanu saav probleem. Sotsiaalvõrgustike teke on kodanikkonda probleemist informeerinud ning hiljutised seaduseelnõud - SOPA, PIPA, ACTA - on valitsuse vastus probleemiga tegelemiseks.
Tarkvaraarendaja igapäevaelus tuleb tihti ette olukordi, kus töötaja peab kasutama kliendi konfidentsiaalseid andmeid mingi toimingu soovitamiseks. Neil puhkudel tuleb võidelda oma sisemise minaga ning selgitada iseendale, et antud juhul on andmete kasutamine õigustatud ja vajalik. Selle lahingu kaotamisel tuleks sügavamalt üle vaadata andmete kasutamise põhjused. Selline käitumine tagab kliendi usalduse, soodustab ärisuhte jätkumist ning väldib probleeme andmekaitseorganitega.
<h1>Käitumisjuhised tarkvaraarendajale eetiliste probleemidega hakkama saamiseks</h1>

Järgnevalt on toodud viis juhist tarkvaraarendajale eetiliste dilemmade lahendamiseks.
<ul>
<li>Kui seisad ristteel - küsi nõu.Ülemuselt. Projektijuhilt. Kolleegilt.</li>
<li>Säilita kliendi usaldus - ära kuritarvita konfidentsiaalseid andmeid</li>
<li>Lähtu otsuste tegemisel ühiskonna tavadest ja ajaloost.</li>
<li>Kasuta kõiki võimalikke meetmeid oma vigadest tingitud kahju minimeerimiseks.</li>
<li>Informeeri ülemusi ja klienti nende poolt pakutud valikute tagajärgedest.</li>
</ul>
<h1>Viited</h1>
<ol>
<li><a href="http://computerethicsinstitute.org/publications/tencommandments.html">http://computerethicsinstitute.org/publications/tencommandments.html</a></li>
<li><a href="http://en.wikipedia.org/wiki/Uncle_Ben#cite_note-10">http://en.wikipedia.org/wiki/Uncle_Ben#cite_note-10</a></li>
<li><a href="http://beta.wikiversity.org/wiki/IT_eetilised,_sotsiaalsed_ja_professionaalsed_aspektid/Tsensuur,_privaatsus_ja_Internet">http://beta.wikiversity.org/wiki/IT_eetilised,_sotsiaalsed_ja_professionaalsed_aspektid/Tsensuur,_privaatsus_ja_Internet</a></li>
</ol>
