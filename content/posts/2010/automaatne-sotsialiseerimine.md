---
title: Automaatne sotsialiseerimine
date: 2010-11-09
category: Projects
tags:
- python
- bot
- dbus
- pidgin
---

Otsustasin kirjutada programmijupi, mis minu eest "viisakalt" MSN-is juttu räägiks.

Kasutasin Ubuntut, Pidgin'it ja Python'it. Pidgini plussiks on mitme protokolli toetus ja dBus, mis asja võimalikuks teeb.

Tekstide genereerimisega aitas `solvangud.ee`, sealt sai vastused tekstifaili salvestatud. Uue sõnumi saabudes valib Python tekstifailist sobiva vastuse (tegin isegi veidi semi-semantilist võrdlemist lähtetekstiga) ning vastab minu nimel.

Idee: kasutada tekstifaili asemel suvalist lähtekoodifaili. Kood pole põhjalikult testitud.

Enne käivitamist tuleb samasse kausta teha fail solvangud.txt ning igale reale paigutada üks lause, mida robot vastama hakkab.
::gist{id="2656981"}
::
