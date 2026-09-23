---
title: Ubuntu ja Creative Zen
date: 2009-08-26
excerpt: Mõnus, väike ja tubli mängija, au Creative'le.
category: Misc
tags:
- linux
- creative
- mp3
---

Sain sünnipäevaks [Creative Zen mp3 mängija](http://en.wikipedia.org/wiki/ZEN_(portable_media_player)). Mängija on ise täitsa tubli - suur värviline ekraan, kauakestev aku, video- ja pildinäitamine jne. Kahjuks on see ehitatud Windowsi jaoks ning Linuxiga tuleb natuke vaeva näha. Õnneks avastasin, et nii Banshee kui Amarok (linuxi vaste Media Playerile) suudavad mängija avastada ning muusikat kopeerida. Ning, mõningase uurimise järel õnnestus osaliselt tööle saada ka kalendritugi (jah, mängija näitab kalendrit).

Linux vajab mängijaga suhtlemiseks libmtp teeki. Kiire otsing Synapticust ning kõik peaks töötama - arvuti tunneb mängija ära ning hoiab muusikat up-to-date. [Gnomad2](http://www.ehow.com/how_5012008_sync-zen-using-ubuntu-maybe.html) aitab andmefailide saatmisel.

Kalendri jaoks tuleb paigaldada mtp-tools ja tofrodos  (sudo apt-get install mtp-tools tofrodos) ning Googlest või Evolutionist eksporditud .ics fail konvertida DOS formaati käsuga unix2dos kalender.ics . Saadud faili saab mängijasse käsuga mtp-sendfile 6651416.ics "My Organizer/6651416.ics" .Voila'.

Videot saab konvertida programmiga [WinFF](http://winff.org/html_new).

Mõnus, väike ja tubli mängija, au Creative'le. Muide, pakis olnud "odavad" kõrvaklapid on täitsa head ning vastupidavad.
