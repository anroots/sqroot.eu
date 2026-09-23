---
title: ATtiny85 Melody Module
date: 2014-02-28
category: Hardware
tags:
- electronics
- hardware
- attiny85
- arduino
- pcb
---

The project is a tinderbox-sized PCB with a microprocessor and a piezo buzzer. When a trigger (a reed switch) is activated, a preprogrammed melody is played.

<em>In the army, we have private Te, whose "theme song" is considered to be the theme from Mario, the video game. My evil plan is to install the device under his closet so that when he opens it, a magnet under the door moves away from the reed switch and the device activates.</em>

<h1>Hardware</h1>

The circuit itself is nothing complicated. The IC gets 3V from the battery and runs in standby mode. The trigger pin (2) is connected to a reed switch, the buzzer to the first PWM pin (5). There is a on-off switch (which actually works as a resistor (?!), passing 2.6V when OFF and 3.0V when ON). The loudness of the sound can be regulated with a trimpot. Three header pins pass out (or in) power, ground and the trigger.

![Schematic](/content/2014/02/MelodyModule_Schematic.png)

<h1>Optimizing Power Usage</h1>

I read <a href="http://www.openhomeautomation.net/arduino-battery">How to Run an Arduino for Years on a Battery</a> and wanted to try it out. After all, what use is a project that dies after the first day of operation?

I coded the IC to check the trigger pin every second (<code>delay(1000);</code>). This way, the circuit drew 4.5 mA of power (in average) and taking into account the capacity of the CR2032 battery - 225mAh - <a href="http://www.digikey.com/us/en/mkt/calculators/battery-life.html">I calculated</a> it to last about 35 hours. Not a whole lot.

Including the <a href="https://github.com/jcw/jeelib">JeeLib</a> library and doing <code>Sleepy::loseSomeTime(1000);</code> instead of <code>delay(1000);</code> reduced the power draw to 0.008 mA (!!!), giving me approximately <strong>27 months of standby battery life</strong>.

The circuit draws 5mA of power while active (playing the melody).

I wonder whether I made a calculation mistake somewhere. 56 148% improvement with three lines of code? Unreal.

<hr />

The project files are available <a href="https://github.com/anroots/attiny85-melody-module">@ GitHub</a>.

<iframe width="420" height="315" src="https://www.youtube-nocookie.com/embed/_KI-yGdVnyY" frameborder="0" allowfullscreen></iframe>

