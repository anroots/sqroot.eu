---
title: On Customers Who Submit Bug Reports
date: 2013-02-16
category: Software Development
tags:
- coding
- development
- bug report
- issue
- custormer
- communication
- bug
- project management
---
<blockquote>
  [22:17.29] * Bill sent file Screen Shot 2013-02-15 at 22.16.49 .png.<br />
  [22:18.09] /David: Yeah, probably<br />
  [22:18.16] /David: Will have to do something about that.<br />
  [22:18.43] /David: Submit a bug report :D Or better yet, a pull request that fixes the problem.<br />
  [22:19.02] Bill: Er...<br />
  [22:19.11] Bill: That <strong>was</strong> a bug report.

</blockquote>

I'm sure you've familiar with the joys of handling customer bug reports - especially when the customer is, shall we say, not a computer person. There has been <em>some</em> ranting on the subject, from both sides. The developers curse the obscure descriptions that often go in the style of "X won't work, fix now", the customers can't understand how the problem isn't immediately obvious.<br />

Most people accept that production code - especially when the customer isn't willing to pay for reasonable testing - has bugs in it. Those bugs get stumbled upon by unsuspecting users and eventually reported to the developers who then have to...

<ol>
<li>Replicate the bug</li>
<li>Patch the code</li>
<li>Hope that they actually solved the problem the right way</li>
<li>Get it into production (which might take time)</li>
</ol>

The problem with bug reports is that people who usually submit them aren't technical people - nor should they be. An accountant might not realize that the development needs to know <em>n</em> details about the bug and his local environment to locate and fix it.

It is important to communicate and learn new things. The best collaboration between a development company and a customer happens when both parties respect each other, are honest and <strong>collaborate</strong>.

It is the job of a developer to explain things so that people without a degree in computer science can comprehend what's happening. In the case of quality bug reports it boils down to...

<ol>
<li>Explaining the process of submitting a bug report (possibly using a tool like GitHub)</li>
<li>Having a customer who comprehends the explanation and is willing to follow the etiquette</li>
<li>Keeping the lines of communication active, honest and polite</li>
</ol>

It's a joy to get a bug report that contains all the information that helps me, the developer, fix the error quickly. Details like those include...

<ul>
<li>A short summary (the title)</li>
<li>Step-by-step descriptions of what was done when encountering the problem</li>
<li>Description of the expected result</li>
<li>What happened instead</li>
<li>Screenshot(s) of the problem</li>
<li>Client environment information (Windows, latest Chrome)</li>
<li>...</li>
</ul>

Bug report template formats differ, but generally have between six-to twelve fields. It's good to get as much details as you possibly can, but avoid overwhelming people with the complexity of submitting a bug report. It depends on the person, really. Sometimes you might be lucky and get someone who understands that what might take him two minutes to write up might decrease your workload by an hour and get his problem solved that much faster. Other times the best you can get are the words "broken", "critical" and "now".

Do have a process for submitting and managing bugs... and do try to subtly or not so subtly convert your users to follow it. In the end, you both win.

How do you manage bugs in your team? Do you have clients who help you solve bugs faster?

