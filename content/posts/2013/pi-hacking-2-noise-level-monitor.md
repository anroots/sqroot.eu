---
title: 'Pi Hacking #2'
date: 2013-01-30
subtitle: Noise Level Monitor
category: Hardware
tags:
- python
- project
- breadboard
- raspberry
- pi
---

My second Pi hacking project: a noise monitor. The setup uses a <a href="http://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack">7-segment, 4-digit LED backpack from Adafruit</a>, a red LED, USB mic and some clever/simple Python code.

Ambient noise is measured from the USB mic via a python ALSA interface. The measured level is displayed on the LED screen (up to 4 digits). Measurement is done in 0.01 second intervals, but the display only changes when a set threshold and time is exceeded. When the noise exceeds a set point, the red LED lights to indicate a noisy environment.

Setting up the 4-digit display was amazingly simple. Seriously. One only has to buy and soldier the backpack (leaving the heavy work to Adafruit), connect it to the Pi and call set_digit() from python to change the display state. Amazing.

It truly is. The Pi and ready-made components and tutorials enabled me to go from zero to this in just under a day of continuous learning.

::gist{id="4647548"}
::