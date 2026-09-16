---
title: Victim of a XSS Attack Speaks
date: 2013-02-10
category: Misc
tags:
- security
- vulnerability
- hacking
- xss
- wordpress
- spam
- attack
comments:
- id: 1207
  author: Artjom Kurapov
  author_url: http://kurapov.name
  date: '2013-02-24 01:03:42 +0200'
  content: Maybe its not the hosting, its your misconfiguration, or old Wordpress
    holes?
- id: 1208
  author: David
  author_url: http://sqroot.eu
  date: '2013-02-24 01:09:10 +0200'
  content: 'My Wordpress core is/has been/will be the latest, I upgrade relatively
    quick. Misconfiguration - quite possible. My strongest suspects are still 3rd
    party addons, tho: themes and plugins.'
---

Yesterday, my blog was hacked. I woke up at five am in the morning to write a new post and discovered the following:

![Hacked webpage](/content/2013/02/hacked.png)

Frack. Frack for the sake of the time it takes to fix this (I've discovered that time is a very valuable resource, especially in IT).

I'm not going to go into my opinions about the motivation or intentions of the attacker - suffice to say it'd be a scolding essay about <a href="http://www.youtube.com/watch?v=IHJVolaC8pw">maturity</a> and what matters in life.

<h2>Point of attack?</h2>

My initial thought was that the shared web server had been compromised. Up until this point I used a hosting provider who I had no faith in. The server had had unexpected downtimes (the longest spanning three to four days) and speed problems.

![Uptime report](/content/2013/02/uptime-report.png)

I used a <a href="http://www.yougetsignal.com/tools/web-sites-on-web-server/">reverse IP checker tool</a> to see if any of the other sites on the same machine were affected. About 10% were.

Server access logs looked normal - nothing like someone was attempting (and finally succeeding) a brute-force-ish approach. Wordpress file modification times and contents were fine, too.

The other possibility is of course the database. Unfortunately, I couldn't find the string anywhere. I run a network installation of wordpress and the other domains hosted on the same files, database, were fine - so the attack must be living on the database and only on tables associated with my blog.

I wrote a letter to the hosting provider, asking them to look into this from their end and to notify the other affected customers and went to work, deciding to deal with this later.

<h1>At it with a rested head</h1>

Having narrowed down the location of the problem (the database), I Googled around and <a href="http://wordpress.org/support/topic/website-repeatedly-hacked">found a similar topic on the WP forums</a>. It turns out the blog was working just fine - the HTML renders correctly and is transferred over HTTP (view source). Disabling Javascript fixes the problem. The logical conclusion? A <a href="http://blog.sucuri.net/2012/10/wordpress-themes-xss-vulnerabilities-and-secure-coding-practices.html">XSS attack</a>.

> Cross-Site Scripting attacks are a type of injection problem, in which malicious scripts are injected into the otherwise benign and trusted web sites. Cross-site scripting (XSS) attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end-user.

The blog loads in the visitors browser, but contains a bit of Javascript that activates as soon as the page is rendered and replaces its content with something else. Looking at the page source, this was exactly the case:

![Hacked webpage source](/content/2013/02/hacked-blog-source.png)

The blog engine had been tricked to store and then serve up a snipet of malicious code that transformed the appearance of the blog dramatically, making it practically useless.

The code that is injected via a XSS attack could be whatever - code that redirects you to a porn website; something that tries to invade your privacy or in this case, just some digital grafiti. The phrase "Algerian to the core" cannot be found from blog files or the database because <a href="http://scriptasylum.com/tutorials/encode-decode.html">it is encoded</a> and then decoded on runtime.

<h2>Fixing the problem</h2>

A search for the encoded text in PMA quickly found the exploited record in the <em>wp_options</em> table.

![XSS in PMA](/content/2013/02/pma.png)

The attack had targeted a Widget and replaced its contents with a script. Looking under <em>Appearance -&gt; Widgets</em> revealed that my previous widgets had been deleted and replaced with a Text Widget that served the malicious code.

![Hacked widget](/content/2013/02/hacked-widget.png)

Delete the widget and suddenly everything works again. The blog name and character encoding (Settings -> Reading) also needed changing. The encoding was set to UTF-7.

![UTF-7 encoding](/content/2013/02/utf.png)

<h2>Afterthoughts</h2>

I never learned the original point of entry - the "how" and "where" the attack entered my system. I put it down to having insecure versions of certain third party extensions and reset my security. The incident caused me quite a bit of inconvenience, but also gave the incentive to finally switch to a better hosting provider. As the morale of the story: don't assume your stuff is secure, ever. Have backups. Be paranoid. And teach your friends about this stuff, like I hope this post will do.

Read more: <a href="http://wordpress.org/support/topic/calling-all-site-owners-hacked-by-walangkaji-badi-etc-need-some-help?replies=83">http://wordpress.org/support/topic/calling-all-site-owners-hacked-by-walangkaji-badi-etc-need-some-help?replies=83</a>

