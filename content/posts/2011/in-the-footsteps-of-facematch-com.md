---
title: In the footsteps of facematch.com
date: 2011-01-04
category: Projects
tags:
- ITK
- facematch
- Mark Zuckerberg
- ois
- Shell script
- Social Network
- User agent
---
I get these crazy ideas sometimes...

I was impressed by the scene in [The Social Network](http://www.imdb.com/title/tt1285016) where Mr. Zuckerberg wrote a small program to download hundreds of (girl) pictures to make a site called facematch.com. I knew three things allready:

1. I had seen [a simple shell script to login to a webpage](http://wiki.itcollege.ee/index.php/ITK_m%C3%A4rguandja) that I knew I could easily modify even through I had almost 0 experience with it.
2. I knew our college website made the pictures readily available to logged in users
3. I had about an hours worth of free time tonight.

An hour later I had this script and a folder with about 500 thumbnails.

::gist{id="2656998" file="itk-downloader.sh"}
::

I didn't bother with any fancy config options or downloading every picture, this was ment as a proof of consept. Now all I need to do is write some PHP to make my very own facematch.com! (Naah, I've got better things to do.)