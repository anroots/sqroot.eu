---
title: Sidestepping Web Parental Controls With Sshuttle In Linux / Mac
date: 2014-02-26
category: Misc
tags:
- VPN
- sshuttle
- proxy
- censorship
- wifi
- router
- dns
---

I was travelling in a bus with free WiFi and needed some music. My go to solution? Youtube. Surprisingly, the bus company had blocked the domain, probably to avoid freeloaders like me overloading the network.

![Youtube, blocked](/content/2014/02/youtube_blocked.jpg)

Since I don't like censorship and thought streaming music (without video) to be fair use, I took it as a challenge.

Here's how you can bypass domain blocks without a personal <a href="http://visual.ly/what-consumer-vpn">VPN</a> (you should get a VPN). You'll need...<br />

<ol>
<li>Some basic knowledge of the command line.</li>
<li>Software: <a href="https://github.com/apenwarr/sshuttle">apenwarr / sshuttle</a> (a transparent proxy server)</li>
<li>SSH access to a remote server. Tip: lots of universities provide students with SSH accounts.</li>
</ol>

<h1>A poor mans VPN</h1>

Download and run sshuttle. The guide is in the README of the GitHub repository, but it should go somewhere along the lines of...

```bash
$ git clone https://github.com/apenwarr/sshuttle.git
$ cd sshuttle
$ ./sshuttle --dns -r anroots@enos.itcollege.ee 0/0
```

The `--dns` flag is important. Replace `anroots@enos.itcollege.ee` with your login and server and enjoy unfiltered access.

![Youtube, unblocked](/content/2014/02/youtube_unblocked.jpg)
