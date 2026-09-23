---
title: Snarky Doorbell
date: 2017-11-19
subtitle: 'I built a smart IoT doorbell for the office. Instead of "ding-dong", the doorbell expresses his snarky feelings with words.'
category: Hardware
image: /content/2017/snarky/cover-img.jpg
---

Snarky Doorbell is a custom-built smart IoT office doorbell.

Instead of the usual monotonic "ding-dong", it has personality: when the doorbell is rung, it responds
with a snarky voice comment in the style of "Ooo, this must be the pizza we ordered!" or
"The developer who gets up and opens the door is immune from the next team meeting invite!"
or "Another victim arrives....muahahahaha!".

![Snarky doorbell](/content/2017/snarky/mugshot.jpg)

## How it Operates

The doorbell is installed to the office space and "listens" to the already existing wireless doorbell ring button
we have behind the door. When a visitor rings the doorbell, first the "regular" doorbell rings and a second later,
the Snarky Doorbell enhances that ring with a snarky voice comment.

## Background

I used to sit very close to the office's outer door. As we had no secretary, it was often me, who answered the door.
I was annoyed by the repeating "ding-dong" ringtone and was motivated to do something about it: what if the doorbell
could speak, and express its feelings? What if I built my own doorbell, that was snarky?

I had [previously messed around with our wireless doorbell](/2015/office-prank-building-a-secondary-remote-to-a-wireless-doorbell) and thought it would be a quick and easy project. Boy, was I wrong - it took over two years to complete it, with various technical challenges.

## The Build

<iframe style="width: 100%" width="700" height="600" src="https://www.youtube-nocookie.com/embed/ut_KckcVxW0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The build process took over two years of intermittent tinkering.

![Build photo](/content/2017/snarky/1.jpg)
![Build photo](/content/2017/snarky/2.jpg)
![Build photo](/content/2017/snarky/3.jpg)
![Build photo](/content/2017/snarky/4.jpg)
![Build photo](/content/2017/snarky/5.jpg)
![Build photo](/content/2017/snarky/6.jpg)
![Build photo](/content/2017/snarky/7.jpg)
![Build photo](/content/2017/snarky/8.jpg)

## Features

- Several custom voice personals ("Easily excitable manager", "Old lady")
- Settings (voice, language, volume) can be changed via knobs on the front panel
- Built-in WiFi HTTP RESTful API server (statistics on doorbell rings)
- Open source project plans
- Non-intrusive integration with the existing doorbell system (uses the same doorbell button)

## Architecture

Our wireless doorbell is a pretty standard one - when the ring button is pressed, it sends a ASK-encoded signal over `433MHz`
radio frequency to the doorbell unit, which listens to it and rings.

Snarky Doorbell is, in essence, another signal receiver. In the doorbell, there is an `Atmega328` chip with a `433MHz` receiver,
that constantly listens for incoming signals. When a signal from the doorbell remote is detected, the module
outputs a `HIGH` signal, that is then sent to a Raspberry Pi pin.

The Pi activates and plays a pre-recorded, randomly picked `.wav` file as the ringtone through a connected `3.5mm` speaker.

The doorbell is enclosed in a wooden enclosure. Front panel has three rotary encoders for controlling doorbell
volume, current voice persona and settings.

## Links

- [Source code and build files](https://github.com/anroots/snarky-doorbell)
- [Build video on YouTube](https://www.youtube.com/watch?v=ut_KckcVxW0&t=1s)
- [Listen to doorbell ringtones](https://github.com/anroots/snarky-doorbell/tree/master/wav/voices/english)

## Credits

The following awesome people gave the doorbell their voice:

- Julian Linke
- Maarit Cimolonskas
- Harles Paesüld
- Tormi Tuuling
- Kaupo Toom
- Ken Kanarik
- Nele Sergejeva
- Ando Roots
- Maria Liiger
- Rauno Meronen
- Tanel Sirp
- Toivo Värbu
