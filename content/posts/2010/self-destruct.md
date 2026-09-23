---
title: Self Destruct
date: 2010-10-28
category: Projects
tags:
- linux
- python
- idea
- unix
- utility
---

This idea has been stuck in my head ever since I saw a certain spy movie. I haven't found any similar software in the Net so far.

An Unix program, ideally in Python, that can be activated with a hotkey. Ideal for spys, superhero sidekicks (Chloe Sullivan!) and any paranoid individual. The main goal is to make the PC unusable *very quickly* and securely wipe all data.

The first can be achieved by overriding the MBR and disabling all input. The program should achieve the first goal in a matter of seconds. The rest can take some time in the hope that the potential threat doesn't realize the data is being destroyed. It should then proceed to format the hard drives and then start writing them over with random data. 2 passes should be sufficient. The final (3rd) pass should write only 0-s to make the disks appear to be untouched. Finally the PC should shut down/restart.

But how does one wipe the OS while still using it? If the wiper is located on a external media (a bootable thumb drive), the process would be too slow. Imagine the situation: our vigilante gets an intruder alert, giving her 30 seconds to flee the premises. And the bad guys find her waiting for the system to reboot so that the wiper program could be activated. Not good.

Any thoughts on how to make this happen are welcome in the comments section.
