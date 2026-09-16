---
title: Pomodoro On A Breadboard
date: 2013-02-19
category: Hardware
tags:
- breadboard
- led
- raspberry
- pi
- pomodoro
- hardware
- lcd
- button
- toggl
- time tracking
comments:
- id: 1417
  author: Aleksandr
  author_url: ''
  date: '2013-03-04 09:58:16 +0200'
  content: Very Cool! But I guess you have a typo in a toggl web site address ;-)
- id: 1418
  author: David
  author_url: http://sqroot.eu
  date: '2013-03-04 10:02:17 +0200'
  content: Indeed! How embarrassing... Is fixed now.
image: /content/2013/02/pomodoro-breadboard.jpg
---

This is the project that taught me how to read physical switches from the Raspberry Pi. The idea is simple: a <a href="http://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro clock</a> that can be used to track work/rest time.

<h2>Components</h2>
<ul>
<li>A START/PAUSE switch</li>
<li>A RESET switch</li>
<li>Four 5mm dimmed LEDs for tracking completed Pomodoro-s</li>
<li><a href="https://www.adafruit.com/products/880">Adafruit 4-digit 7-segment display backpack</a></li>
<li>4 x 300R resistors for the LEDs</li>
<li>2x 1k and 2x 10k resistors for the switches</li>
<li>Jumpers, breadboard, Pi</li>
</ul>
<h2>Usage</h2>

Press the START button to begin a new Pomodoro. The display lights up and starts counting towards the 25 minute mark. Once there, the system enters STANDBY mode and lights the first LED to indicate the completed Pomodoro. Press START after the break to begin again. On the fifth Pomodoro the system is reset and you should take a longer break.

<h2>Code</h2>

The Python script is <a href="https://gist.github.com/anroots/4988673">on GitHub</a>. The circuit diagram (my first one, mind you) is available <a href="https://www.circuitlab.com/circuit/fr26sz/pomodoro-circuit/">on CircuitLab</a>.

<h2>Advanced stuff</h2>

Connect this to <a href="https://www.toggl.com">Toggl</a> [API](https://github.com/toggl/toggl_api_docs) to record your Pomodoros.

![Pomodoro on a breadboard](/content/2013/02/pomodoro-breadboard.jpg)

