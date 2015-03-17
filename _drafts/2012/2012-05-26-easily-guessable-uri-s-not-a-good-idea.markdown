---
layout: post
status: publish
published: true
title: 'Easily guessable URI-s: not a good idea'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: I was buying an E-ticket to a cinema the other day when I noticed something
  strange... and quite scary. Namely, the Print Ticket URI that outputs a PDF version
  of the ticket had only two dynamic parts in it, both of them really short numeric
  strings.
wordpress_id: 2515
wordpress_url: http://sqroot.eu/?p=2515
date: '2012-05-26 16:50:22 +0300'
date_gmt: '2012-05-26 13:50:22 +0300'
categories:
- Writings
tags:
- Web application
- cinema
- uri schema
- hacking
comments: []
---
<p>I was buying an E-ticket to a cinema the other day when I noticed something strange... and quite scary. Namely, the Print Ticket URI that outputs a PDF version of the ticket had only two dynamic parts in it, both of them really short numeric strings.</p>
<p>That's actually OK, the window was on a HTTPS connection and I assumed viewing the ticket required login...but no. Opening up Chrome in Incognito mode yielded a scary result: the file was visible to anyone on the web.</p>
<p>The URI for my ticket was in the following format:</p>
<p class="info" style="font-size: 16px;">https://www.yyy.ee/et/checkout/printer/XXXXXX/XXXXXXX/</p>
<p>... where X represents a numeric value (range 0-9). It's easy to guess what the numbers mean. The first part is the ticket number (the number itself was actually printed on the ticket), the second is some kind of an authorization or storage ID for the printing system.</p>
<p>It's a safe bet to guess that the ticket number is like any other Primary Key in a database: sequentially growing, so for example, the next person to buy a ticket from the cinema would have a ticket number of XXXXXX + 1. As for the second seven-digit number, it could also be in an easily guessable format (most likely sequential, like the ticket ID), but even if the number is random, it's nevertheless easily guessable because of the limited alphabet and string length. You could even buy two tickets at once and then compare the ticket number with the second value to guess it's calculation algorithm.</p>
<p>The results of such paractices is that anyone with basic programming knowledge would be able to write a simple algorithm and steal other users tickets. All they'd have to do is get ahold of valid ticket URI-s that haven't been used yet, print the tickets and watch free movies.</p>
<p>Below is a proof-of-concept pseudo-algorithm for getting a list of sold tickets:<br />
<script type="text/javascript" src="https://gist.github.com/2794030.js?file=stealticket.py"></script></p>
<p><strong>Update</strong>: They have now fixed the problem (in response to me pointing it out) by replacing the two numbers with a hash string. I'm still having my doubts about the validity of the solution, but since I didn't take the time to discover what the second parameter meant, I'm unable to try to reproduce / crack the hashing algorithm.</p>
<p><em>The purpose of this article is purely educational. You should not try this in practice. The author of this article takes no responsibility for any consequences.</em></p>
