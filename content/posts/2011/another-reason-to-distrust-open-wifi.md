---
title: Another reason to distrust open WiFi
date: 2011-09-01
category: Opinions
tags:
- google
- facebook
- privacy
- security
- Wi-Fi
- https
- network
- wep
---
# Foreword

I connected to a wireless open network in a very busy part of Tallinn just moments ago. Something unexpected happened that made me once again thank Tux I&rsquo;m slightly paranoid.

As you should know, wireless networks - especially open and weak (WEP encrypted) ones are dangerous. Dangerous in a sense that everything you send over a network is as visible as if you were giving a lecture. Think it over.

No-one (except maybe Google) cares that you search for restaurant reviews. But what about sensitive information like sent passwords or any other kind of data I have access to, such as...

I was taught the basic skills on how to intercept digital data that&rsquo;s traveling between networks on the first semester of the freshmen year. In fact, any kiddie could pull it off. Because of that knowledge, I tend to avoid logging in to anything unencrypted during my stay outside the pseudo-safety of my home network.

* Login information (Facebook, mail, blog, travel, ANY kind of site)
* Instant messaging sessions
* Vulnerable services running on the machine (file server)

# Some More Background

As you might (not!) know, Facebook only just recently added a <a href="http://mashable.com/2011/01/27/facebook-https/">very important security feature</a> (<em>of course, you have to opt in for it - funny, usually one has to opt out of new &lsquo;features&rsquo;</em>). Enabling secure(r) browsing means that the communication channel between your computer and the Facebook server is unreadable to the dude sitting behind the next table.

I&rsquo;m sure you have connected to a free WiFi hotspot and seen the default welcome page that seems impassable unless you click on the &ldquo;Yes, I take full responsibility for my actions while in your network&rdquo; button. That&#039;s all warm and fuzzy, but it&#039;s also possible to configure the welcome page like so that it redirects you to a website of the owner&rsquo;s choosing after you click on the button. That&rsquo;s usually the companies website.

# So what the hell happened?

With that background comes the main point of the post. The network I connected to had decided that the redirect page (<em>after I click &ldquo;Agree, let me use your WiFi&rdquo;</em>) should be their Facebook page. Okay, all well and good.

Except...

Remember that the connection to Facebook is not encrypted by default? And since I was already logged in from earlier, the data would have moved openly across several network hops, for everyone with motive to see, capture and/or modify.

Even if I weren&rsquo;t already logged in, extensions like <a class="zem_slink" href="http://www.lastpass.com" rel="homepage" title="LastPass">LastPass</a> do that automatically. As if the initial request weren&rsquo;t enough, there are loads of hidden background queries to and from the Facebook server - the chat window, friends online, notifications... all moving over the unsecured HTTP, wireless.

Not scared? You should be. Identity theft could sound like an obscure idea, but think of what you&rsquo;d do if you had a day to live and no responsibility for your actions. You&rsquo;d probably rob a bank or something.

# Conclusion

Weren&#039;t it a beautiful world of rainbows and butterflies if everyone knew at least a little about the threats in (<em>open</em>) networks? If you must check in with your digital social life, opt in/<a href="http://nakedsecurity.sophos.com/2011/01/28/how-to-enable-httpsssl-encryption-to-secure-your-facebook-account/"><strong>enable the goddamn encryption</strong></a>. It&rsquo;s a one-shot deal, doesn&rsquo;t cost you anything and is a hell of a lot better than explaining to Tim that you are not &ldquo;It&rsquo;s complicated&rdquo; with his wife.

Also, a note to the unnamed coffee shop - please don&rsquo;t pull stunts like that - throw the visitor to the wolves... or at least give a five second warning or something!

P.S I&rsquo;d like to know more about what Facebook actually does when the user is idle - what type of queries move between the server and the client. Please leave a comment below if you know something about it.
