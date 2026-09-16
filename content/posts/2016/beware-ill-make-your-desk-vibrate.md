---
title: Beware - I'll Make Your Desk Vibrate
date: 2016-02-20
subtitle: Using a 555 timer to build a time-delayed vibrator
image: /content/2016/02/555/header.jpg
category: Projects
---

_Bzzzzzzzzz!_, you hear and feel your desk vibrating. Is someone calling? No, the phone is silent. Weird. Ten minutes later, it happens again... and again. Most strange! Now it's slightly alarming and creepy: what's happening?!

You've been pranked.

My latest semi-useless project is a small vibrator that can be attached to the underside of a table.

![Vibration module, top view](/content/2016/02/555/5.jpg)

The module is a time-delay circuit that runs on a single 3V battery. You attach it to a table (duct-tape) and walk away. Nothing happens for fifteen minutes, but then, _Bzzzzz!_ - the attached small vibrator motor activates for four seconds, shaking itself and the table it's attached to. The vibration is quite strong and both audible and felt through the table. Fifteen minutes of silence and the vibration repeats.

I built this over the weekend and deployed it on Monday as a practical joke: me and [@valdna_wm](https://twitter.com/valdna_wm) sneaked into the office early, located our target ([@jonnapechter](https://twitter.com/jonnapechter)) and I taped the device under her table while `@valdna_wm` kept watch. She discovered it a couple of hours later. There was a cake on my table the next Monday.

![A thank you cake](/content/2016/02/555/cake.jpg)

## Technical details

The project is an analog circuit - no programmable microcontroller is used. A 555 timer is used in astable mode, powered by a coin-cell battery, with the output pin connected to a vibration motor.

### Power Draw
- `38.3mA` when active (vibration motor running)
- `0.120mA` when in standby (countdown)

With those numbers, I estimate battery life to...

- standby mode = `1312` hours = `54` days
- active mode = `4` hours

### Timing

I chose resistors and a capacitor to achieve `12min` / `3sec` timings. The soldiering introduced electrical errors, the final result was...

- `21min` initial timeout before first run
- `14.47min` timeout for all following runs
- `4sec` working time

![Timer calculations](/content/2016/02/555/calculations.png)

## Photos From The Build

![Breadboarding](/content/2016/02/555/1.jpg)
![First view](/content/2016/02/555/2.jpg)
![Bottom view](/content/2016/02/555/3.jpg)
![Top view](/content/2016/02/555/4.jpg)
![Project schematic](/content/2016/02/555/schematic.png)

## Bill Of Materials

|Amount|Part Type|Properties|
|1|Battery Holders|package battcom_20mm_pth; variant 20pth|
|1|Electrolytic Capacitor|package 100 mil [THT, electrolytic]; capacitance 470µF; voltage 6.3V|
|1|Ceramic Capacitor|package 100 mil [THT, multilayer]; capacitance 10nF; voltage 6.3V|
|1|Schottky Diode|type Schottky; package 300 mil [THT]; part # 1N5819|
|1|PNP-Transistor|type PNP (ECB); package TO92 [THT]|
|1|2.2MΩ Resistor|package THT; pin spacing 400 mil; tolerance ±5%; resistance 2.2MΩ; bands 4|
|1|10kΩ Resistor|package THT; pin spacing 400 mil; tolerance ±5%; resistance 10kΩ; bands 4|
|1|[555 Timer](http://www.mouser.com/ds/2/389/CD00000893-249923.pdf)|package DIP8 [THT]|
|1|[Vibration Motor- ROB-08449](https://www.sparkfun.com/datasheets/Robotics/310-101_datasheet.pdf)|package vibe-motor-10mm; variant 10mm|

## Links

- [555 calculator](http://www.ohmslawcalculator.com/555-astable-calculator)
- [Project files in GitHub](https://github.com/anroots/vibration-555)