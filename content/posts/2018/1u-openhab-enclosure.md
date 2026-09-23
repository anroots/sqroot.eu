---
title: '1u OpenHAB enclosure'
date: 2018-08-30
subtitle: 'Converting a Soekris 1u rack enclosure into a RPi OpenHAB unit'
category: Hardware
image: /content/2018/rpi-enclosure/header.jpg
---

I have been running [MySensors][] and [OpenHAB][] for a while now. The system is set up on a Raspberry Pi 3, running [OpenHABian][].
I have built and deployed some basic MySensors nodes in my apartment, measuring things like room temperature and humidity. I have
some "smart" IoT devices to control with OpenHAB.

My home automation project begin as a prototype, but by now it's become clear that the system is useful and I want to expand it.
This means that the "I'll just throw a RPi onto a rack shelf" approach needs upgrading. I have a proper rack, why can't the RPi be properly racked?


![Shelf for Rpi](/content/2018/rpi-enclosure/shelf-pi.jpg)

I had an empty Soekris 1u net6501 enclosure, which fit the bill.

## Business Plan

Drill new holes into the Soekris enclosure, mount the Pi-s into it; rackmount the entire thing. No more free-floating Pi-s on a shelf. `#labporn`

Bonus points: replace the stock `NRF24L01+` radio with the more powerful [long-range version][] (external antenna); and support MySensors
`ERROR`, `RX` and `TX` [LED-s](https://www.mysensors.org/build/advanced_gateway).

## The Build

I started by measuring and drawing the layout in Inkscape. By printing the panel design on paper, I could get hole guidelines for drilling.

I planned to mount 3 LED-s to the 1u front panel for MySensors, + a toggle switch for stopping / starting home automation services on the Pi.
The toggle switch would allow Eveli to turn off all home automation services, should something error out and become UnbearablyAnnoying.

![Drilling holes](/content/2018/rpi-enclosure/drilling.jpg)

Light sandpaper took care of removing the original Soekris paint and text. Three layers of spray-paint later I had a nice-looking black front panel.

![Paintjob](/content/2018/rpi-enclosure/paintjob.jpg)

I used through-hole `3mm` LED sockets and a small toggle switch.

![Mounting components](/content/2018/rpi-enclosure/mount.jpg)

I drilled eight `2.5mm` holes for mounting two Raspberry Pi-s (the 2nd Pi just rents the space in the enclosure) and Eveli proceeded
to screw them in place.

![Mounting RPis](/content/2018/rpi-enclosure/girl-mounting.jpg)

![Mounting RPis](/content/2018/rpi-enclosure/mounted-pis.jpg)

I also added two `40mm` fans to the sides of the enclosure for keeping things cool. The fans presented a problem, as they run on standard
`12V`, however I have no such power source available from the Pi-s. This problem will be solved in the future, _somehow_.

![Fans](/content/2018/rpi-enclosure/fans.jpg)

The back of the enclosure (the addon card slot) also got it's hole for the antenna mount of the radio.

![Antenna mount](/content/2018/rpi-enclosure/antenna.jpg)

Electronics on the front panel needed connecting to the PI. I created a very small PCB module for adding the required `300Ω` resistors to the LED-s
and connected them to RPi GPIO pins.

![Front panel electronics](/content/2018/rpi-enclosure/frontpanel-electronics.jpg)

Documentation is important - in three months time, I won't remember what connects to where. I created a quick diagram of the electronics in
[Fritzing][] and printed it onto the inside of the enclosure.

![Schematics](/content/2018/rpi-enclosure/schematics.jpg)

![Schematics, mounted on the inside](/content/2018/rpi-enclosure/mounted-schematics.jpg)

The resulting enclosure looked like this.

![Inside of the enclosure](/content/2018/rpi-enclosure/inside-look.jpg)

I installed the 1u enclosure to my homelab rack.

![Rackmounted](/content/2018/rpi-enclosure/rackmount.jpg)

![Rackmounted](/content/2018/rpi-enclosure/rackmount-closeup.jpg)

## Results

Initial testing showed that everything worked OK - the long-range radio presented no problems and MySensors flashed the appropriate LED-s
when radio activity occurred.

The back-end of the enclosure doesn't look as good as it could - I fed the Ethernet and power cables directly into the PI-s, so it isn't modular.

Future plans involve writing firmware to make the toggle switch work as well as populating the original Soekris `3mm` LED sockets with LED-s: they
will start showing service status on the OpenHAB (MySensors, OpenHAB, MySQL...).

## Project Files

Project files are available from [GitHub](https://github.com/anroots/rpi-enclosure).

[Fritzing]: http://fritzing.org/home/
[MySensors]: https://mysensors.org
[OpenHAB]: https://www.openhab.org
[OpenHABian]: https://github.com/openhab/openhabian
[long-range version]: https://hackaday.com/2016/05/31/fixing-the-terrible-range-of-your-cheap-nrf24l01-palna-module/
