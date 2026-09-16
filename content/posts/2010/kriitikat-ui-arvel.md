---
title: Mõttefragmente veebipõhistest kasutajaliidestest.
date: 2010-10-02
category: Software Development
tags:
- eesti
- GUI
- kasutajaliides
- UI
- UI design
- web design
---

Mida tahab veebiteenuse kasutaja rohkem? Praktilist funktsionaalsust, silmailu v&otilde;i lihtsust? K&uuml;simus, millega kasutajaliideste disainerid pidevalt vastamisi seisavad. Ei saa teha Autocadiga v&otilde;rdse funktsionaalsusega GUI-d, millega saab teha biljon erinevat tegevust, ning hoida see samas silmale ilus (Word 2010) ja rumalatele arusaadav Web 2.0-laadsed teenused). Kes on teenuse kasutajad? Mida nad vajavad?

Septembri alguses tahtsin end Eesti riigiportaali kaudu Tallinna elanikuks registreerida - mis on ju tore, e-riik ja e-teenused, lihtsa toimingu p&auml;rast ei pea linnavalitsusse kohale minema. Vastavat vormi avades avastasin, et uue aadressi sisestamine ei ole &uuml;ldsegi kerge. Vorm oli jagatud osadeks: &uuml;he v&auml;lja asemel, kuhu saaks vabas vormis aadressi kirjutada, olid valikvastustega eraldi v&auml;lja toodud eri &uuml;ksused (maakond, linn, linnaosa). Kasutatud oli <a class="zem_slink" href="http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="wikipedia" title="Ajax (programming)">AJAX</a>it, ja klassikalist hierarhiat, st. alustada tuli suurimast &uuml;ksusest ning seej&auml;rel t&auml;itis AJAX allpool asuva valikukasti. Kas m&auml;rkate probleemi?

Sellisel vormil on muidugi oma eelised, aga antud juhul oli see halvasti l&auml;bim&otilde;eldud. J&otilde;udes valikutega oma majani, ei suutnud ma valida oma korterinumbrit, kuna s&uuml;steem arvas, et seda ei eksisteeri. Lehe allservas oli kontaktaadress ning paari p&auml;eva p&auml;rast tuligi vastus, et administraator oli aadresside andmebaasi minu korterinumbri k&auml;sitsi lisanud. Vaene administraator. Kas tal tuleb sama teha veel ~300 000 korda?

S&uuml;steemis v&otilde;iks kasutada Google Maps stiilis lahendust: kasutaja valigu punkt kaardil, v&otilde;i sisestagu aadress &uuml;hte tekstiv&auml;lja ning s&uuml;steem olgu nii tark, et saaks andmed valideeritud ja t&ouml;&ouml;deldud.

Andmete valideerimine on t&uuml;&uuml;tu. Inimesed, kes on programme koostanud ja kasutaja sisestustega tegelenud, peaksid n&otilde;ustuma. N&auml;ide <a class="zem_slink" href="http://www.php.net/" rel="homepage" title="PHP">PHP</a>-st. k&uuml;sides kasutajalt tema nime. Saadud vastust tuleb kontrollida, kusjuures edevam veebileht teeb seda nii kliendi arvutis (Javascript) kui serveris. Kas nimi sisaldab numbreid? Kas on tegemist keelatud s&uuml;mbolitega (MySQL injection)? Kas ta on min &lt; X &lt; max pikkusega v&otilde;i hoopis t&uuml;hi? Ahvatlev on kasutaja eest m&otilde;tlemine &auml;ra teha, asendades tekstikasti valikvastustega. V&auml;ga hea, kui tahate teada &quot;Kas olete abielus?&quot; - Jah, Ei. Mitte nii v&auml;ga, kui k&uuml;site arvamust.

IRL korraldas Septembris 2010 oma veebilehel arvamusk&uuml;sitluse. Puhttehniliselt muidugi h&auml;sti koostatud ja ilusa v&auml;ljan&auml;gemisega. Samas - Mari-Liis Jakobson: &quot;Mis puudutab vastusevariantidega k&uuml;simusi, siis sealt on n&auml;ha, et ega erakonda t&otilde;en&auml;oliselt kodaniku arvamus niiv&auml;ga ei huvita, sest probleemide kohta uurimise asemel on nad sinna oma valmislahendused juba &uuml;les pannud.&quot; (<a href="http://www.postimees.ee/?id=311803">Postimees</a>). Massilise k&uuml;sitluse puhul on n&otilde;nda andmeid palju kergem t&ouml;&ouml;delda, kuid samas saadakse nii ebat&auml;psemat infot.

Mis ma kogu selle jauramisega &ouml;elda tahan? Enne, kui mingit kasutajaliidest teha, tuleks veidike m&otilde;elda, kui lolli / targa inimese kasutada see l&auml;heb, kui palju neid inimesi on, mida nad praktiliselt vajavad ning mida koostaja sealt tagasi tahab saada.
