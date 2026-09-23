---
title: Girlfriend Puzzle
date: 2017-04-28
subtitle: I built a small electronic puzzle for my girlfriend
category: Projects
image: /content/2017/girlfriend-puzzle/puzzle.jpg
---

Knowing that my girlfriend likes brainy games and it being a while since I last built something, I decided to make her a custom puzzle: a 7x7cm mystery box that, when solved, reveals a secret message.

![Completed puzzle](/content/2017/girlfriend-puzzle/box-4.jpg)

## Design

The project is a cardboard box that is sealed from the top with semi-transparent paper: light can get out of it, but it is not possible to see inside. The box is plain and there is no visible way to operate it.

The multi-layer puzzle was designed as such:

- Realize that tilting the box activates the LEDs (which will shine through the semi-transparent top)
- Figure out that the blinking LEDs have a structure and pattern - red and green flashes are grouped into 8 bit segments, separated by blue flashes
- Discover that it's a binary-encoded message (red = 0; green = 1) and decode it into ASCII decimals: letters
- Translate the sentence from Pig Latin to English

When decoded, the binary message translates into ASCII character codes `73 87 65 89 79 86 69 76 65 89 79 85 89 65 89`
which translates into `IWAY OVELAY OUYAY` which translates into `I LOVE YOU`.

## Build

Bill of materials:

- 3V coin cell battery holder
- CR2032 3V battery
- Bare PCB and 4 PCB stands / spacers for mounting it
- 3 LEDS: green, red, blue
- 3x 100Ω resistors
- ATtiny85 IC
- Tilt-switch (metal ball, not mercury)
- IC socket (8-leg)

The build was straightforward and took only a couple of hours. First, I arranged all the components on
a breadboard and connected the [SparkFun Pocket AVR Programmer](https://www.sparkfun.com/products/9825) to the IC, which enabled me to write and test code for it.

![Project on Breadboard](/content/2017/girlfriend-puzzle/bread-1.jpg)
![Project on Breadboard](/content/2017/girlfriend-puzzle/bread-2.jpg)

With the code complete and the project working on the breadboard, I transferred everything to a PCB, programmed the chip one final time and connected it to the independent, battery-powered unit.

![Project on Breadboard](/content/2017/girlfriend-puzzle/pcb-1.jpg)
![Project on Breadboard](/content/2017/girlfriend-puzzle/pcb-2.jpg)
![Project on Breadboard](/content/2017/girlfriend-puzzle/pcb-3.jpg)

I mounted the PCB into the box with glue and covered it all with semi-transparent paper: the box was complete.

![PCB in the box](/content/2017/girlfriend-puzzle/box-1.jpg)
![PCB in the box](/content/2017/girlfriend-puzzle/box-2.jpg)
![PCB in the box](/content/2017/girlfriend-puzzle/box-3.jpg)

## Reception

She was exited and puzzled by the box and with some pointed clues, did manage to crack it up to Pig Latin, at which point frustration set in. Looking back, I realize that the design of the puzzle was too complex and unfair: I'm a developer; binary, ASCII and Pig Latin are obvious for me; however it is unfair to expect the same from others.

![Decoding the puzzle](/content/2017/girlfriend-puzzle/decoding.jpg)

All in all, it was a fun project to make, but not super fair to solve.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/28vKttjauiM?rel=0" frameborder="0" allowfullscreen></iframe>

Project schematics and code are available [from GitHub](https://github.com/anroots/girlfriend-puzzle).

![Completed puzzle](/content/2017/girlfriend-puzzle/puzzle.jpg)
