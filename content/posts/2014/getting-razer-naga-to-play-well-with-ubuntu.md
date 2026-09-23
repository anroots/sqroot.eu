---
title: Getting Razer Naga To Play Well With Ubuntu
date: 2014-06-09
category: Misc
tags:
- linux
- mouse
- udev
- razer
- driver
---

I have a <a href="http://www.razerzone.com/gaming-mice/razer-naga/">Razer Naga</a> gaming mouse which, unfortunately, doesn't work well out of the box with Linux / Ubuntu. Here's how you can remedy the problem somewhat.

Install <a href="http://bues.ch/cms/hacking/razercfg.html">Razer device configuration tool</a>. The instructions are on the project page, the install is not overly difficult. This gives you the power to tinker with various mouse settings, most importantly the scan resolution (mouse cursor movement speed).

![Razer](/content/2014/06/razer.png)

I also ran into a problem where the scan resolution would reset itself to 1000 each time I disconnected the mouse (including putting the system to sleep). The default udev rule installed by razercfg did not work, so I modified it to use a custom script. If you're new to udev, read <a href="http://hackaday.com/2009/09/18/how-to-write-udev-rules/">How To Write udev Rules</a>.

::gist{id="259cdb7c6e28b36ca711"}
::

