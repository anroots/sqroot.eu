---
title: Garage48 Tartu 2011
date: 2011-08-29
subtitle: A good way to spend the weekend
category: Software Development
tags:
- coding
- event
- garage48
- kohana
- Featured
- app
- GitHub
- Android
- development
- g48
- hackathon
- mobile
- social
- startup
- Tartu
image: /content/2011/08/g48.jpg
comments:
- id: 87
  author: Silver Hage
  author_url: http://silverhage.com
  date: '2011-08-29 19:51:24 +0300'
  content: Good read - thanks for the recap.
---
# Intro


My project: *Just Grab It*

> Mobile app that allows you to scan products and add if you like or dislike them. With the Just Grab It application you can easily organize your items to remember and recommend later.

<ul>
<li>URL: http://justgrab.it</li>
<li>Facebook: http://www.facebook.com/Justgrabit</li>
<li>Twitter: http://twitter.com/justgrabitapp</li>
<li>Team: Lauri Saidla, Martin Kangur, Margus Pala, Ando Roots, Esko Felin, Jaanus Jagom&auml;gi, Zahhar Kirillov, Mehis P&auml;rn<br />
			&nbsp;</li>
</ul>

This year&#039;s second hackathon took place in Tartu University Faculty of Mathematics and Computer Science. As usual the teams were locked in a building (some more than others) for 48 hours and a weekend to try changing the world with the help of an overflow of Red Bull and snacks to go with it.

I&#039;d hereby like to give some constructive criticism to those who feel they need it. These are my notes from during the initial pitching:

# Pitching

<ul>
<li>Do NOT turn your back to the audience to look at the slides. If you need to point at something, do it from the side. The slides are for the listeners to grab the key points of your talk. If you can&#039;t help yourself, use no slides at all or a static representative picture.</li>
<li>Turning your back in effect loses your connection with the audience thereby decreasing any credibility you might have gained with your pitch. I joined a theater troupe and they made me quickly lose the bad habit. Again, this is important - don&#039;t stand with your back to the audience.</li>

<li>Since we&#039;re already on the topic - a lot, and I mean A LOT of pitchers had a whole essay written on the slide up to a point where I though I was presented with an scientific article. The slide is meant as a supportive asset to back up your words, not the other way around. Thereby the reason for the repeating questions from the jury/audience: &quot;...but what does it actually DO?&quot;

One of the best ppt-s I&#039;ve seen in my life had just one to five words on a plain background written on each slide and the charismatic speaker used them as slides are meant to be used. Less is more. Look to Google for inspiration.


This is my biggest rant about the weekend. I understand there were practice pitches earlier. Clearly they weren&#039;t through enough or the presenters themselves are to blame. The speakers in Helsinki (October) - use the constructive criticism. Also, since I got an inkling that I&#039;d like to pitch myself soon too - use these words against me when the time comes.
</li>

<li>It was a shame to see a pitcher talking to the floor. I understand uncertainty better than most, but you have to make eye contact with your listeners - the people you&#039;re convincing to trust and invest in your idea.</li>
<li>Be concise. 90 seconds is not a lot of time and as with the limited number of slide<strike>s</strike> your words have to carry. To use fillers and tons of text is to kill the otherwise solid idea. Dead. Gone.</li>
<li>Every single person who made the pitch - especially those not on the field of IT - deserves credit for their courage. So when it&#039;s actually your turn, I dearly wish you thought of something to say - not be forced to admit after 1/2 of the allocated time: &quot;...that&#039;s basically it&quot;. If you&#039;re scared, start with a joke or two. Or let the slide do it for you in a subtle manner.</li>
<li>Scary big auditorium. Lots and lots of people. Mic there for a reason.</li>
</ul>

There. Got it out of my system.

# Friday: Day #1

![G48 1](/content/2011/08/g481.jpg)

The forming of teams in the style unique to G48 went... well, in the end everyone had teams. For a long time I had no idea which project to join, but then an interesting challenge popped up and I went for it. As always, some teams were at maximum capacity, some were disbanded, but every idea that deserved to live got it&#039;s chance.

There were 8 of us: team JustGrabIt - 2 designers, 2 back-end, a marketer, a visionary/project leader, an Android developer and a cross-functional do-it-all, hack-it-all IT guru. A full team. The idea itself can best be explained by it&#039;s website, but basically it&#039;s am Android slash web application for FB style <em>(I do hope they didn&#039;t coin the term)</em> like/dislike of real world objects.

The first evening ended about 2 in the morning with <a href="http://kohanaframework.org/">Kohana</a> (more about my love for it: [That's how easy it is to create Twitter with Kohana 3](/2011/thats-how-easy-it-is-to-create-twitter-with-kohana-3)) and the environment set up, some of the MVC files written - basically being ready to fire at the task ahead at full speed. We used <a href="https://github.com/anroots/">GIThub</a> for VCS and I was unhappy to see yet another person struggle to install it (and Apache2) on The WB OS (World&#039;s Best Operating System).

Sleep awaited on the hard floor of the lecture hall upstairs. I love G48 for leaving the venue open for (24 + 24)h. As expected, Zzzz... was one of the commodities not easily found as opposed to food and coffee which were always plentiful. I think we all suffered a minor case of sleep deprivation, but I&#039;m totally fine with it.

# Saturday: Day #2
Fast-Forward the next day: Early awakening, coffee and coding. And coding. Basically,

```
for (;;) code();
```

Our team was so big, we had 3 &#039;departments&#039;: back-end, mobile, marketing. Communication wasn&#039;t an issue with a project manager in charge and I was only too eager (maybe a bit too so) to take the reins on the architectural level.

My programming buddy had a background of Ruby and PHP so we got along fine<em> (is it true that Java and PHP fightalot?)</em>. Here&#039;s an interesting thought: even though he&#039;s teaching programming as a professor, even he couldn&#039;t crack Facebook login - but not for the lack of trying. I&#039;ve chatted with and heard other developers complain about the same fact. It&#039;s like being in <a href="http://en.wikipedia.org/wiki/Quirks_mode">Quirks Mode</a> all over again.

One of the good things that came out of the weekend was the new experience I gained with building API-s. Now I&#039;ve been on both sides: the user (front-end developer) and the designer and realized I like the role that gets less comments and more complaints from the end-user better.

![G48](/content/2011/08/g482.jpg)

I&#039;m regretful that I didn&#039;t use TDD. I know it&#039;s prototyping and all and we are supposed to <a href="http://en.wikipedia.org/wiki/You_ain%27t_gonna_need_it">YAGNI</a>, but I&#039;d still have liked to have at least a minimum amount of certainty in my code. Only one thing standing in the way: Kohana&#039;s (or rather, PHPUnit&#039;s) inability to make database driven application testing understandable and easy.

I&#039;ve tried to follow Sebastian Bergmann&#039;s tutorial, but quite frankly, it&#039;s confusing as hell, forcing me to deal with XML and god knows what. If only there were such a thing for Kohana + PUnit like YAML database setup-teardown...

The lack of tests got me in trouble, ultimately resulting in an error being said (at least we commented out such debug messages like &#039;you suck&#039;) during the live demo. Still, I&#039;m pleased with the work I did and plan to smooth it over when (not planning to leave another project hanging) I have the time.

Stayed up late (late for programmers usually means ~4am) with The Guru, trying to track down an image upload error. Did you know that you can capture and upload images from Android to an API as a base64 decoded string? Did some more work the next day and finally, just before the demo, wrote some JavaScript for a change.

# Sunday: Day #3
There&#039;s always a frustrating bug in the code you get over and think that&#039;s the biggest obstacle but then come the frantic moments as the clock ticks mercilessly down and you silently say &quot;FUCK!&quot;, get out your earplugs and dive into it. Which, by my careful observation of at least three designers is exactly the way to go to be productive.

Good design is very important in selling your idea. The implemented solutions ranged from no design at all (well, the bare minimum) to some really beautiful stuff, but in the end it&#039;s about delivering the functionality without sacrificing usability nor repelling users by not having something for the eye to rest on. Claim: everyone appreciates art in some form or the other, be it classical music or GUI button design. Compliments to both of our designers who not only knew what they were doing but weren&#039;t afraid to write the needed template code themselves to implement it when the main coders were otherwise occupied.


It&#039;s amazing what you can accomplish with 48 hours of self-sacrifice and dedication towards a common goal. The finished (or pieced together just for the demo) apps were up to the challenge and in my subjective opinion, three-four of them stand a real chance of starting something awesome.

Our team didn&#039;t win any prices, but that&#039;s okay. Often, it&#039;s not about the goal after all... and when projects die or are murdered, successful social ties remain... and good implementations rise to prove themselves.

# Wrap
Garage48 was what I expected it to be - a draining weekend of fun and professional challenges coupled with learning. Eye-opening perspectives from the mentors were appreciated, good-natured mockery equally so. I hereby state that the organizers are awesome and deserve my respect as long as they have it within themselves to continue what they do... and a bit longer.

G48 is a wonderful chance for anyone with an idea - not just IT people - to come forth and give it a shot. If the outcome isn&#039;t what expected, you&#039;ve learned something. If the project soars... who knows - maybe you&#039;re the next Rovio and just <a href="http://shakebeet.com/">shake it</a>.

Inspire. Teamwork. Solve. Conquer.

# Relevant links

<a href="http://forte.delfi.ee/news/digi/garage48-tartus-arendamisel-on-14-projekti.d?id=56638350">Garage48 Tartus: arendamisel on 14 projekti!</a>


<a href="http://www.arcticstartup.com/2011/08/29/qminder-wins-garage48-tartu">Qminder Wins Garage48 Tartu</a>


<a href="http://www.arcticstartup.com/2011/08/29/qminder-wins-garage48-tartu">Garage48 Tartu v&otilde;itis Qminder</a>


<a href="http://www.e24.ee/544762/garage48-voistluse-voitja-aitab-luhendada-jarjekordi/">Garage48 v&otilde;istluse v&otilde;itja aitab l&uuml;hendada j&auml;rjekordi</a>