---
title: A Bit Pissed About Kohana Affairs
date: 2013-02-11
category: Software Development
tags:
- php
- coding
- kohana
- framework
- opinion
- web
- open letter
- community
---

<a href="http://kohanaframework.org">The Kohana Framework</a> is great, it's been my constant and extremely capable companion for years. I can prototype stuff quickly and flexibly, I have the tools I need, but the framework manages to stay lightweight. Still, I am a bit crossed at the community.

There are <a href="http://kohana-modules.com">many useful modules</a> that extend Kohana, except maybe the two I miss most at the moment: a module to manage static JS and CSS assets and something to make working with <a href="http://waher.net/archives/1158">API-centric systems</a> fun and elegant. I found some <a href="http://ivank.github.com/blog/2011/11/kohana-assets-done-right/">\[1\]</a> <a href="https://github.com/coreyworrell/Kohana-Assets">\[2\]</a> examples, but nothing I'd have had much faith in or that looked easy to use.

More specifically, I needed a way to auto-load scripts based on convention-over-configuration rules (script path matches dir/controller/action) and to include specific presets of libraries with some views. For the API part, I'm trying to consume the API as the core of my system. That means support for good authentication, authorization, encoding, versioning and yes, REST-ish (not entirely) mechanisms.

On why I did not accept the existing "solutions"... It might just be the documentation - granted, Kohana has problems in that field, too. Still, are you trying to claim that there exist no such modules that satisfy my (in my humble opinion) quite basic needs?

I'm using my own Assets manager and API modules at the moment, but ideally, I'd like to move on to something with enough community support. Something quality-ish. Something I don't have to spend time in to re-invent.

Please, Kohana people: the framework has potential, I wouldn't be using, teaching and advocating its use otherwise... but, please: let's focus on getting the documentation in order and making sure the basics are well-satisfied in the form of good, supported modules.

In my own part, I'll do what I can to make that happen.

P.S! PSR shows promise, too.