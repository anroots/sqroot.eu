---
title: 'Simple And Secure Identity Protection: LastPass + YubiKey'
date: 2014-08-17
category:
- Writings
tags:
- privacy
- security
- password
- lastpass
- yubikey
- two factor authentication
- identity theft
- token
---

How many online accounts do you have? How many of them use the same password? Is this password a simple word like 'Bananas123'? Thought so. Your're screwed.

If you're reading this post, you're probably an 'internet person', use many online services from banking to Facebook and let's face it, probably have insecure passwords to most of them. After years of hearing my friends moan about...

<ol>
<li>forgetting their password to a particular site</li>
<li>having to type a long password</li>
<li>not wanting to use a securer password since it's too complicated to remember</li>
<li>rejecting a semi-secure password I've generated for them (see #3)</li>
<li>getting hacked</li>
</ol>

... I realized that I too, have some of those problems. Most critically, my passwords aren't really that secure and could be brute-forced relatively quickly. In addition, I reuse my passwords (guilty).

The first step is realizing you have a problem. Time for solutions.<a id="more"></a><a id="more-4186"></a>

<h1>The Last Password You Have To Remember</h1>

I've been using <a href="https://lastpass.com/">LastPass</a> (<a href="https://www.youtube.com/watch?v=AXwdzWaf4RI">watch a video</a>) to manage and remember my passwords for years but so far, it's been a matter of convenience: automatically logging into places with the same password. Now, after seeing my friend write on Facebook that she got hacked, I finally had the required incentive to take action.

For three nights in a row, I went through all of my online accounts and changed the password to every last one of them. I honestly can not remember all of the services I've signed up to over the years, but luckily, my LastPass vault had a good overview, of more than fifty services. Some of them I no longer use and a fraction of them had a "Delete account" link, which I shamelessly clicked. Others got their passwords changed to a long, completely random string like "<em>orC+S9j7.k0!89aEUh?vVH5</em>".

<h2>The Consequences</h2>
<ol>
<li>I'm now an unattractive target to personalized password-stealing attacks (not using any guessable personal words + see #2)</li>
<li>Most large-scale brute-force attacks (trying do guess passwords from a list of password hashes) fail against my password: a large alphabet (letters, numbers, symbols), randomness and length (no password I generated is smaller than X characters, unless the service had a max length restriction)</li>
<li>Even if my password on some service is compromised, it has no effect on the rest of my accounts since no account shares a password with another account</li>
<li>I am now dependent on LastPass: I can not access any of my other accounts without first signing in to LastPass</li>
</ol>

This is all well and good, except...

<blockquote class="twitter-tweet" lang="en">
<a href="https://twitter.com/Yubico">@Yubico</a> <a href="https://twitter.com/SQrooted">@SQrooted</a> As long your Passwords are stored in any kind of Cloud , it isnt really save...

— Archangel Blue 58 (@ArchangelBlue58) <a href="https://twitter.com/ArchangelBlue58/statuses/499305669443727360">August 12, 2014</a>
</blockquote>


There is now a single point of failure: LastPass. If my master password was compromised, LastPass turned out to <a href="http://www.dailymail.co.uk/news/article-2337863/PRISM-Google-Facebook-DID-allow-NSA-access-data-talks-set-spying-rooms-despite-denials-Zuckerberg-Page-controversial-project.html">be evil</a> or the password safe somehow got hacked, I'd be doomed.

From what I've read on the net on how LastPass operates and how they react to security breaches, I'm confident in trusting them with my safe of encrypted passwords. Yes, nothing is 100% secure, but you have to start trusting at some point.

As for keeping my master password safe:

<ol>
<li>Use a secure (long, random) password</li>
<li>Take the usual precautions: don't log in from an untrusted source, don't let anyone see you type the password etc</li>
<li>Use <a href="http://searchsecurity.techtarget.com/definition/two-factor-authentication">two-factor authentication</a></li>
</ol>
<h1>Two Factor Authentication</h1>

Most banks (except Estonian ones, for we have <a href="http://www.id.ee/index.php?id=30470">ID-cards</a>) require you to have some form of secondary identification, usually in the form of a code card. The same idea applies here: you have your password (something you know) and some form of a physical token (something you have). Login succeeds only when the two are used together, so when someone gets your password he can't log in because he does not have the physical token and when you lose your token the finder can not log in because he does not know your password.

There's a company out there that specializes in creating such tokens: enter <a href="http://www.yubico.com/">YubiKey</a>.

<blockquote>

  The rapid growth of online identity theft has exposed the vulnerabilities of logging with a username and password. Any information that is static, or stored on a device connected to the Internet, can be copied and misused by malware. Security experts agree that the best way to secure an online identity is to move out the user credentials to a separate device that is not connected to the Internet, and which generates a new and encrypted pass code every time it is used. Also, for strong two factor authentication it is recommended to combine the hardware authentication device with a PIN or a password – something you have + something you know. - <a href="http://www.yubico.com/about/intro/yubikey/">YubiKey Website</a>

</blockquote>

A YubiKey is a small USB device that goes into your USB port and fits on your key ring for portability. The basic premise is simple: you log into your LastPass vault with your master password and are required to provide a unique password, generated by YubiKey. Just insert the device, press a button and the YubiKey creates a random password on the spot for you to log in with.

This isn't a magical solution to all your online identity security problems, but using secure two factor authentication (which I consider YubiKey to be) and a good master password goes a long, long way, making less than sophisticated attacks against you fail (unless you're really foolish yourself).

<h1>So...</h1>

I am comfortable with my current state of security practices: I don't log in from public devices, have strong, unique passwords to every service I use and a secure way to access them through two-factor authentication.

If you a) have short, easy passwords or b) reuse passwords, you should really do something about that. After all, "<a href="http://lifehacker.com/5785420/the-only-secure-password-is-the-one-you-cant-remember">The Only Secure Password Is the One You Can’t Remember</a>". You don't have to go all nuts, but I'd at least advise you to adopt LastPass (or similar) into your daily life and start generating random and secure(r) passwords for your services.

You will be glad you did this when you read another "my account just got hacked" post on your Facebook wall.

In case you're interested how to use LastPass with Yubikey: <a href="http://www.yubico.com/products/yubikey-hardware/lastpass-yubikey/">LastPass YubiKey</a>. Also, see <a href="http://www.ted.com/talks/lorrie_faith_cranor_what_s_wrong_with_your_pa_w0rd">Lorrie Faith Cranor: What’s wrong with your pa$$w0rd?</a>

