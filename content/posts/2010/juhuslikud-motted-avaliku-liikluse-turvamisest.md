---
title: Juhuslikud mõtted avaliku liikluse turvamisest
date: 2010-12-15
category: Opinions
tags:
- privacy
- encryption
- port frowarding
- security
- SSH
- VPN
---

Olen viimasel ajal tavalisest rohkem m&otilde;elnud enda turvalisusest v&otilde;rgus. Olgu, lahingu sotsiaalmeediaga olen juba kaotanud, kuid ma proovin potensiaalset kahju v&auml;hemalt minimeerida, avaldades ainult seda, mida oleks valmis google otsingutulemustes n&auml;gema.

T&auml;na oli IT SPEA-s &uuml;ks v&auml;ga huvitav ettekanne, kus etleja r&auml;&auml;kis, kuidas ta igavusest &uuml;hika k&otilde;rvaltoas elava t&uuml;druku rate parooli k&auml;tte sai. 30 minutiga, google abiga. T&otilde;epoolest, enamus infot liigub avalikus v&otilde;rgus ju t&auml;iesti lahtisel kujul!!! Mul on n&uuml;&uuml;d s&uuml;learvuti, j&auml;relikult kuulun kolledži WiFit kasutades ka ise riskir&uuml;hma. Auditooriumis on 100+ &otilde;pilast, kusjuures paljud neist &otilde;pivad s&uuml;steemiadministraatoriteks. Mida huvitavat igavas loengus ikka teha, kui naiivseid ohvreid otsida?

Tahan l&auml;hiajal ka ise enda masinasse sisse murda, st. uurida, mis toimub under-the hood. Saaks n&auml;iteks Wiresharkiga enda konto logimisandmed plaintext kujul k&auml;tte v&otilde;i teeks endale MITM r&uuml;nnaku. Palju l&otilde;busam oleks seda muidugi loengusaalis istuva tibiga (loodan, et selliseid stereot&uuml;&uuml;pe ITK-s pole) teha, kuid kahjuks on see ebaseaduslik ja karistatav.

&Uuml;ritasin luua SSH tunnelit kolledži v&otilde;rguga. Selline lahendus oleks v&auml;gev, saaksin palju julgemalt omi asju ajada. SSH server vastas mulle, et vabandage, SSH port forwarding pole lubatud. Jama.

Sattusin lugema blogipostitust t&auml;nap&auml;evaste instant-messaging protokollide kohta. Artiklis t&otilde;i autor v&auml;lja protokolli kasutajatingimustest selliseid punkte, nagu "k&otilde;ik vahetatud andmed kuuluvad tegelikult meile". Ajuvaba, kas t&otilde;esti? Keegi ei kisa, sest kes ikka viitsiks igavat teksti lugeda. T&ouml;&ouml;andja eelistab minuga suhelda MSN teel, kuna leiab, et Skypel on m&otilde;ned puudused. Minu arvates kaalub Skype suurem turvalisus P2P ja kr&uuml;peeringu n&auml;ol k&otilde;ik v&otilde;imalikud puudused, oleksin isegi n&otilde;us kasutama GUI-ta rakendust, kui oleks garanteeritud privaatsus. Sarjas "Nikita" suhtleb peategelane laheda, Matrix stiilis tugevalt kr&uuml;peeritud konsoolirakenduse kaudu oma kaasosalisega. Tahaks ka midagi sellist. 

Kasutasin veel hiljuti Adiumi-t oma iMacil. Seal oli v&otilde;imalus alustada kr&uuml;peeritud vestlust. Vajutasin ikooni ja vestluskaaslane k&uuml;sis, kas mu MSN Messenger on katki, saadab talle mingit pr&uuml;gi. Oh, really...

Mida ma j&otilde;uluvana kingikotist tahaksin leida? K&otilde;igepealt mingisuguse VPN v&otilde;i SSH tunneli loomise v&otilde;imalust, et saaksin end igas kohas turvalisemalt tunda. M&otilde;nus oleks ka t&ouml;&ouml;tav, kr&uuml;peeritud ja detsentraliseeritud Instant-Messaging lahendus, mida ka vestluskaaslased toetaksid. P&auml;ris suured soovid, arvestades seda, et paari aasta eest olin t&auml;iesti joovastuses sajakroonisest p&uuml;rotehnikakomplektist ja Windows ME-st.