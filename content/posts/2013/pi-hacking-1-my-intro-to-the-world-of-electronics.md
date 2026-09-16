---
title: 'Pi Hacking #1'
date: 2013-01-24
subtitle: My Intro To The World Of Electronics
category: Hardware
tags:
- python
- raspberry pi
- electronics
- breadboard
- making
- led
image: /content/2013/01/pi/2.jpg
---

A box of <a href="http://raspberrypi.org">Raspberry Pi</a>-s arrived to my workplace near the end of December 2012. They were small and cute and I was hooked.

![Raspberry Pi arrives at work](/content/2013/01/pi/1.jpg)

An order for a personal instance of the Pi was sent shortly after, along with a wishlist of basic electronic play-things from <a href="http://adafruit.com">Adafruit Industries</a>. Total cost - around 100€ (shipping + components + Pi). I had never handled hardware before and my knowledge of physics sucks, but the Pi and Adafruit ready-to-use components and tutorials have brought the entry-barrier really low. I though I could manage.

![Order of components](/content/2013/01/pi/2.jpg)

<h2>Learning to soldier</h2>

The <a href="http://adafruit.com/products/914">Adafruit Pi Cobbler Breakout Kit</a> <a href="http://learn.adafruit.com/adafruit-pi-cobbler-kit/overview">needed soldiering</a> - and I didn't have the tools nor the knowledge. The<a href="http://robot.itcollege.ee/"> robotics club</a> of <a href="http://itcollege.ee">The Estonian Information Technology College</a> was willing to help. My buddy Mikk taught me soldiering and under two hours I had an assembled cobbler (and a 7-digit LCD display backback) - yay!

![Pi cobbler](/content/2013/01/pi/soldiered-cobbler.jpg)
![Double checking connections](/content/2013/01/pi/checking-the-board.jpg)

<h2 style="clear: both;">Switching LED-s on and off</h2>

The nicest thing about the Raspberry Pi is that it's just Linux. You can run Python and nano and <em>cat</em> <em>/etc/crontab</em> on it. The GPIO and its library make programmatic control easy.

My first Pi project was to light LED-s from Python. I followed Adafruit tutorial: "<a href="http://learn.adafruit.com/raspberry-pi-e-mail-notifier-using-leds/python-script">Raspberry Pi E-mail Notifier Using LEDs</a>", but changed the script to just blink red/green LED-s. <a href="https://gist.github.com/4627503">The script</a> is run via cron once every ten minutes and the LED-s blink on and off.

![Pi with LEDs](/content/2013/01/pi/pi-with-two-leds.jpg)

<h2>Fun with 7-segment, 4-digit LCD-s</h2>

Next tutorial: <a href="http://learn.adafruit.com/matrix-7-segment-led-backpack-with-the-raspberry-pi/overview">Matrix and 7-Segment LED Backpack with the Raspberry Pi</a> taught how to connect a the wonderful 4-digit, 7-segment display to the Raspberry Pi. Some tinkering with the software, quick connection via the breadboard cables and voila - we have a working clock demo.

![Clock demo](/content/2013/01/pi/clock-demo.jpg)

<h2>The WebIDE</h2>

![WebIDE](/content/2013/01/pi/pi-webide.png)

The guys at Adafruit have a <a href="http://learn.adafruit.com/debugging-with-the-raspberry-pi-webide">web-based IDE</a> for the Pi. Haven't tried it out yet, but this should make prototyping even easier.

<h2>Summary</h2>

The Raspberry Pi is a wonderful tool for learning. I managed to build my first simple project in three hours, having never done any robotics or hardware programming before. As for the future: I'd like to make something to help with my day-job. Something involving LED-s, buttons, 7-digit displays and Git/Jenkins servers. Read more about it soon-ish.
