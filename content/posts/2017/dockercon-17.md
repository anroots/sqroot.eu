---
title: DockerCon 17
date: 2017-10-24
subtitle: Thoughts from DockerCon 17 Europe
category: Events
image: /content/2017/dockercon/dockercon.jpg
---

[DockerCon 17 Europe](https://europe-2017.dockercon.com) happened in Copenhagen
from 16 - 19 October and I got to be part of it. Some thoughts.

![DockerCon badge](/content/2017/dockercon/badge.jpg)

## MTA, I say again, MTA

Opening keynotes on both days focused very much on (over) selling Docker Enterprise Edition to the audience, mostly through its "MTA" - Modernizing Traditional \[Legacy\] Apps - program. Docker, Inc. really wants people to buy its products and (partner) consulting services and to get them on the Docker bandwagon.

You take a traditional, legacy app, that ticks away in some VM and you Dockerize it. Then, run it in a Swarm or Kubernetes cluster and benefit from higher resource utilization and security. You won't have to refactor the application, Dockerization is seamless.

![Imagine how the world should work](/content/2017/dockercon/imagine.jpg)

IT budget is 80% maintenance, 20% innovation. Docker explained that money for consulting services and Docker EE could be found from the 80% maintenance budget, because converting traditional apps to Docker actually saves money due to better resource utilization.

## Runtime Security

How do you audit containers? Say you have a Kubernetes cluster in production and an attacker gains a foothold. How do you know when it happens, what happened?

Enter [Sysdig Secure](https://sysdig.com/product/secure). It's a paid product that hooks into kernel syscalls of the Kubernetes
host and is able to see everything that happens on the machine. An admin configures a bunch of rules, like "files in `/usr/bin` should not change" or "outbound network connections should not be opened" and when those rules are violated, an alert is sent. Administrators are able to see X seconds into the past and future, to determine exactly what happened:

- which shell commands were run
- what files were touched
- what network activity and to where happened
- ...

It's a very powerful product; I was quite impressed. Sadly, it's paid (not usable in my personal projects) and pricing details are not clear. However, for enterprise settings, it seems ideal for container security monitoring.

## Effective Docker Images

I've seen Docker images of 700+MB, where developers have "just used Ubuntu" as their base image while Alpine would have worked, too. It is important to understand how to build Docker images that are small, because they build and pull faster and consume less disk space.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/abbyfuller?ref_src=twsrc%5Etfw">@abbyfuller</a> on how to get devs to care about disk space: &quot;Put devs oncall. You build it, you run it... Because no one wants to wake @ night&quot;</p>&mdash; Ando David Roots (@SQrooted) <a href="https://twitter.com/SQrooted/status/920284177999818752?ref_src=twsrc%5Etfw">October 17, 2017</a></blockquote>

## Culture

Technology is easy. Culture is hard. How can we get folks to work together and not to build silos of dev vs ops? This is still a mystery to me.

![Culture](/content/2017/dockercon/culture.jpg)
![Devops](/content/2017/dockercon/devops.jpg)
![Fear](/content/2017/dockercon/fear.jpg)

## Software Supply Chain

We don't usually think about supply chain attacks. We should.

- open source libraries we include in our projects: upgrading old versions; making sure to use trusted projects
- VCS system: will unauthorized people be able to commit?
- build system: who is able to build, when, what?
- Docker registry: is image integrity checked? Are images signed? Can I push unauthorized changes?

![Supply chain session](/content/2017/dockercon/supply.png)

## Documentation

Without good and usable documentation, your project will not fly far. A readme file and/or manual is needed for
both open source as well as in-house projects.

![Coffee recepie](/content/2017/dockercon/coffee.jpg)

## Misc 

- The conference was HUGE: ~5000 participants, huge venue, 8 tracks
- It was well - and not cheaply - organized
- While London is big in a sense that there are 9 million people and the streets are too tight and jammed, Copenhagen is huge in the sense that the buildings are big, with lots of open space between them
- Docker community is large and growing fast

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/lifeatbigbank?ref_src=twsrc%5Etfw">@lifeatbigbank</a> Absolutely loved my first <a href="https://twitter.com/hashtag/DockerCon?src=hash&amp;ref_src=twsrc%5Etfw">#DockerCon</a> and seeing the people who make Docker happen. Will go home with ideas and inspiration. <a href="https://t.co/UzXcdZq0gS">pic.twitter.com/UzXcdZq0gS</a></p>&mdash; Ando David Roots (@SQrooted) <a href="https://twitter.com/SQrooted/status/920693726221094912?ref_src=twsrc%5Etfw">October 18, 2017</a></blockquote>

Overall, the conference was educational and enjoyable. My three takeaways:

- Do CVE scanning on VM-s and images
- Look into Sysdig Secure as a way to do IDS and security incident timelines
- Secure the software supply chain

![Docker walkway](/content/2017/dockercon/walkway.jpg)
