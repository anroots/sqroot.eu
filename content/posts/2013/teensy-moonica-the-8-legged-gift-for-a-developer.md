---
title: Teensy Moonica, The 8-Legged Gift for A Developer
date: 2013-06-17
category: Projects
tags:
- python
- c#
- project
- electronics
- circuit
- teensy
- microcontroller
- usb
comments:
- id: 2687
  author: Katrin
  author_url: ''
  date: '2013-06-17 12:39:02 +0300'
  content: "Übernunnu!\r\n\r\nIt looks really adorable and I'm pretty sure it can
    be a very useful tool also for IT system administrators... So good work and I
    hope that Moonica has won the heart of its new owner and of course the heart of
    other octopus-electronics-lovers! :) \r\n\r\nAnd a little message from the EIK
    robotics club (HAL vol 2):\"We hope to see you here again with your new cool projects
    as well! :)\""
---

A <a href="http://waher.net">good friend of mine</a> had a birthday coming up and I found myself socially obligated to do something about that. The idea - use my skills as a developer to <a href="http://makershed.com">MAKE</a> something developer-ish. This was a collaborative project with <a href="http://sokeri.org/">Valeria</a>.

<blockquote>

  I buy more things than I make. I used to think it was a sign of some kind of capitalistic progress to be able to buy food and gifts instead of making them myself, but I’m not sure anymore. When it comes to difference making there is a different trend line. Money can come and go, but my time on this planet is finite. How I spend my time, or who I spend it with means more than anything else in my universe. From at least the selfish view, giving my time is the most valuable gift I can give.<br />
  <a href="http://scottberkun.com/essays/49-how-to-make-a-difference/">Scott Berkun, essay #49 - How to make a difference</a>

</blockquote>

<h1>Idea</h1>

Build hardware that can interface with a computer (via the USB port) and send input commands to the PC that can be detected and processed. As a bonus, include output devices such as LED-s that could be activated from code.

The idea came from the fact that I found myself typing PHPUnit commands for different test suites manually way too often. Wouldn't it be great to activate a test suite with a press of a button and have a green LED light up when everything is done? (or a red on in case of a failure). "Normal" people would go "???" about this, but trust me, for a developer, this is good stuff.

![UI draft](/content/2013/06/ui-draft.jpg)

I came up with a rectangular-shaped control panel. Really fancy stuff, like you see in sci-fi movies or airplanes. Excited, I got in touch with a mutual friend who also happens to be a designer. A brainstorming session and a couple of hours later and the original idea had been morphed into a much cuddlier version - a USB soft toy.

The toy would be an octopus with eight legs, each leg would act as a switch. I was to build the electronics innards while she'd do the sewing part.

<h2>Parts</h2>
<ul>
<li><a href="http://www.pjrc.com/teensy/index.html">Teensy 2.0 Microcontroller (with pins)</a></li>
<li><a href="http://uk.farnell.com/te-connectivity-amp/1-215297-6/socket-vertical-1row-16way/dp/3419174?Ntt=1-215297-6">1-215297-6 Socket</a></li>
<li>2x RGB LED</li>
<li><a href="http://www.adafruit.com/products/1010">8x pushbuttons</a></li>
<li>1x Piezo Buzzer</li>
<li>6x 960R resistors for the LED-s</li>
<li>Some wire for connecting the components</li>
<li><a href="http://www.oomipood.ee/en/product/cable-161/cable-161-usb-2-0-cable-a-male-mini-usb">Mini USB cable for the Teensy</a></li>
<li>Heat-shrink tubing in different sizes</li>
</ul>
<h2>Tools</h2>
<ul>
<li>Adjustable temperature soldering iron and solder, solder paste</li>
<li>Hot air gun for the heat shrink</li>
<li>Wire-handling tools: pliers, strippers, clippers</li>
<li>Digital multimeter</li>
<li>Breadboard and jumpers for prototyping</li>
<li>Helping Hands</li>
</ul>
<h1>The Build</h1>

![Breadboard](/content/2013/06/build.jpg)

Prototyping was quite fast. This was my first bigger build and I had to figure out how to use PWM to control the buzzer and LED brightness. In no time at all, the circuit was assembled on my breadboard. I used the equipment of the robotics lab of EIK to assemble and solder the circuit.

Software was a bit trickier. A lot of hours went into refactoring and documentation. The most complex part was serial communication. Initially, I tried to be verbose, sending button events as long strings ("Button 1 pressed") and parsing the string in Python. Then I saw <a href="http://www.youtube.com/watch?v=Cy9MIoG5z4s">Saying a Lot with Very Little (Arduino Digital Input to Python</a> and refactored the code to send all button states as one byte - much more efficient way of communication.

<h2>Oops!</h2>

We - me and Val - had hacking evenings on several occasions. During the last one, an accident happened. It turns out that the contacts of microswitches are actually quite fragile (go figure) and do not like to be abused. I managed to break one of the already assembled switches which meant no joy for that evening. All of the switches needed replacement by a stronger version (and also where the solder connections were made at a correct angle to begin with). Adafruit's tactile square buttons fit the build and replaced the less durable buttons.

<h1>Finale</h1>

Moonica - the name of our animal - was stuffed and wrapped and given to the birthday boy (although by the time the project was finished the actual birthday was two months into the past).

![Moonica](/content/2013/06/moonica.jpg)

The project was great fun to do and also taught us a lot. I got into electronics in January 2013 and this was the first "official", non-prototype build. I learned to program in C / Arduino, got to try out PWM and implement serial interfacing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/a_wgeVvpjbw" frameborder="0" allowfullscreen></iframe>

<h1>Links</h1>
<ul>
<li><a href="https://plus.google.com/photos/110367256187822089038/albums/5889699940176485425">Build photos</a></li>
<li><a href="http://www.youtube.com/watch?v=a_wgeVvpjbw&amp;feature=youtu.be">Project video on YouTube</a></li>
<li><a href="https://www.circuitlab.com/circuit/s6dr46/teensy-moonica/">Schematic</a></li>
<li><a href="https://github.com/anroots/teensy-moonica">Source code</a></li>
</ul>
