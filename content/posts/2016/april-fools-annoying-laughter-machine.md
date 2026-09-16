---
title: 'April Fools: Annoying Laughter Machine'
date: 2016-04-03
subtitle: Building a simple motion-activated April Fools prank
category: Projects
image: /content/2016/04/fools/header.jpg
---

I was in a shopping center and a cheap children's toy - they call them "[laughter bags](https://www.photopoint.ee/en/unusual-gifts/359605-laughter-bag-keyring-orange)" - caught my eye. It is an electronic audio player in a "cute" bag. You press on the bag and it plays a loud [laughing sound](https://www.youtube.com/watch?v=O2Hemd_FUzw). The first of April was almost upon us and I decided to use this to prank my colleagues.

The bag contained some padding foam and a white box which housed the electronics. I took the box apart to get at the internals:

- A 3x1.5V battery pack
- An integrated circuit with the prerecorded sound
- A small speaker

![All the parts](/content/2016/04/fools/parts.jpg)

The trigger for the bag was a mechanical pressure switch. I quickly identified that I could remove the switch and achieve the "activation" of the circuit by feeding a `HIGH` signal into one of the input leads of the IC, rendering any mechanical stimuli useless and allowing me to use digital logic to activate the laughter.

I added a small motion sensor module and hooked everything up with alligator clips to test my new setup. The motion sensor had three pins: `VCC`, `GND` and `OUT`. The `OUT` pin would go `HIGH` for a second or two whenever the sensor discovered movement. This matched perfectly with the expectations of my sound module.

![Proof of concept solution](/content/2016/04/fools/poc.jpg)

The prototype was a working motion-detecting circuit that would play a very loud, very annoying sound whenever motion was detected.

Next, I soldiered everything together with a couple of extra wires: the motion sensor and the sound module would both draw VCC and GND from the battery pack and the output of the `HIGH` signal from the PIR sensor would go to the mechanical switch pin on the sound IC.

![All parts, connected](/content/2016/04/fools/connected.jpg)

For the packaging, I took the first suitable enclosure I could find, which turned out to be the box for an Apple Trackpad.

![Making the case](/content/2016/04/fools/holes1.jpg)
![Making the case](/content/2016/04/fools/holes2.jpg)

I cut a hole for the PIR sensor and taped all components to to the inside of the box. I superglued four rubber legs to the top of the box to make deployment easier. I've learned some things; no body parts were accidentally superglued to one another this time.

![PIR sensor](/content/2016/04/fools/pir.jpg)
![Completed device](/content/2016/04/fools/completed.jpg)

The project took two hours to complete. The next day - the first of April -, I went to the office early and installed the device under my target's desk, with the motion sensor facing her way. She would sit down and hear a loud laughter whenever she moved.

![Installing the device](/content/2016/04/fools/installed.jpg)

Unfortunately, it misfired: I think I had configured the motion sensor to be too sensitive and it triggered while people were walking by. Another colleague discovered the prank. The box was returned to me soon after - under my own table, of course.

![](/content/2016/04/fools/fleep.png)

Nevertheless, I consider this to be a quick and easy prank - and well executed, too.

> Trolling game strong.

_No code or schematics for this project._
