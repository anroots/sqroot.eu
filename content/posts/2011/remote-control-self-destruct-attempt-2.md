---
title: 'Remote control / self-destruct attempt #2'
date: 2011-02-12
category: Projects
tags:
- python
- fortumo
- bash
- remote control
---

I took another crack at my geeky idea - creating a remotely activated self destruct script. (Python / shell)

How it works:&nbsp;SMS -&gt; PHP controller script with my message in GET request -&gt; Message stored in file -&gt; Periodic controller script running in PC -&gt; if file contains something, execute and reset it.


The &quot;Self destruct&quot; isn&#039;t quite fancy, basically it just wipes the MBR.


[Link to GitHub project](https://github.com/anroots/projects-archive/tree/master/self-destruct-2)

