---
title: 'Webapp idea: #nowplaying radio'
date: 2011-02-14
category: Projects
tags:
- twitter
- programming
- Ruby
- Ruby on Rails
---

An oppurtunity to learn Ruby on Rails. Use a Twitter library to fetch tweets with the hashtag #nowplaying.

Present the user with an interface with exactly one button: Play

Parse Twitters results and fetch songs from youtube (embedded player, ajax/iframe)

User clicks play, the #nowplaying radio begins.

Ideas for later: add features such as result narrowing, sharing etc.

# Update:

I actually coded this during the day and got some insight into Rails. The coding part was actually quite easy, taking into account that I&#039;d never met Ruby before, but the real obstacle was deployment.

Heroku is awesome, really, but the beginner - I - failed miserably with dependencies (twitter and youtube gems). Long story short, 2 hours of messing with git, Gemfile and bundle and I gave up. The app works, but only in localhost. Maybe I&#039;ll get help later.

![Screenshot of the now playing app](/content/2011/02/nowplaying.png)