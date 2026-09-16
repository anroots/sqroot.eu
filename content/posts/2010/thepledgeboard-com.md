---
title: thepledgeboard.com
date: 2010-11-12
category: Projects
tags:
- facebook
- web 2.0
- 43 Things
- AJAX
- Facebook Platform
- pledge
- pledge board
- social media
- YouTube
---

So I saw a certain movie which had the following part in it: in order to get accepted into a college fraternity, the newbies had to complete 50 tasks. It was proudly called The Pledge Board.

After doing some some digging (not a lot) in The Net I was left disappointed: all that amazing technology (Web 2.0, Social Media (& social networking), Server-side scripting...) and no similar place on the web?

The Goal: Build a site that let's a taskmaster create a custom Pledge Board, add some participants and follow their progress (FB integration).

The idea - let's call it ThePledgeBoard.com - uses two major, existing services - why reinvent the wheel? Facebook serves as the social component while [43things.com](http://43things.com) does the heavy lifting. The purpose of the site is to unify them and do some customization to suit our needs. Let me start by explaining how the service works.

Users authenticate via Facebook Connect and are allowed to create a new taskboard or join an excisting one. By default, a new board should be populated with 10-20 most popular tasks (the site should keep track on them with a SQL database). Some fancy AJAX and jQuery effects are optional. The actual tasks are managed by [43Things API[(http://www.43things.com/about/view/web_service_api) (which also uses FB Connect for identification). 

Once the taskboard is complete, the creator invites some people to complete it - as a team or single-handedly. Again, FB makes this easy. When the user has finished a task he can check it as complete and post proof (a photo) to 43things/FB. A story is posted on the user's wall. The interaction with the services should be managed by the site. 

So that's the basic principle. I haven't thought everything through, but that leaves all the more to Your imagination.
