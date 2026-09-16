---
title: 'Pi Hacking #3'
date: 2013-02-02
subtitle: ETV Viewers Count
category: Hardware
tags:
- python
- api
- raspberry pi
- err
- etv
---

Just for fun and practice - wouldn't it be cool to have a 4-digit, 7-segment LED display that shows the number of online visitors to... something?

A nice candidate for the data provider was [ETV](http://etv.err.ee), a national public television station that's viewable online. Its web interface refreshes the viewer count via HTTP queries to an internal JS API that suits our needs quite well.

<a href="http://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack">Hooking up the LED display backpack</a> was easy. Some quick Python code to do the parsing and display... and we have a nice physical, real-time counter to see how many people are watching the channel at the moment.

::gist{id="4698881"}
::
