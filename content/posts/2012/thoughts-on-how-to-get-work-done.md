---
title: Thoughts On How To Get Work Done
date: 2012-11-24
category: Software Development
tags:
- development
- developer
- job
- work
- process
comments:
- id: 2712
  author: Martin Vahi
  author_url: https://github.com/martinvahi
  date: '2014-02-19 06:38:00 +0200'
  content: |-
    A few remarks.
    If something is "a standard", then in software development it means that it's already technologically outdated. Ideas that have proven themselves, are helpful, but "standards", no way. As the saying goes: the good thing about "standards" is that there are so many to choose from.
    What regards to the "quality" then that's a term that I avoid using, because my understanding of "quality" often amounts to "reliability", whilst other peoples' understanding of "quality" amounts first and foremost to functionality and visual aspects. For example, according to my understanding IT-security related topics are only about reliability, the ability to withstand attackers. Computational complexity (memory usage patterns, etc.) are nothing but reliability in terms of being able to withstand greater data sets, etc.
    It is a fact that a customer is not able to cover all reliability aspects within its acceptance tests. Hence the ability of IT-companies to sell crap. After all, lack of reliability is something that appears after the system has been in use for years. The morale: only buy from providers that feel an urge to stay in business in the long run. Software companies that are owned by business people rather than IT-people differ from the ones that are owned by IT-people by a fact that business people can just move from IT-business to food industry or car industry or oil industry without suffering from the bad reputation that they earned by supplying unreliable software. Big Business can get away with far greater scams than freelancers, because freelancers must protect their reputation, but Big Business just dismisses a few managers, may be even the CEO, releases some professionally assembled Press Release and continues with an upgraded version of the same-old-same-old. An example: the British Petroleum and its Deepwater Horizon catastrophe. (I find it hard to believe that the managers of the British Petroleum suddenly started to take environmental safety seriously.)
    What regards to the rest of the ideas in the blog post, then I prefer to avoid making my current comment lengthier than it already is. If I were to summarize my comments about the rest of the ideas, then the key phrases would be: different people need to have the freedom to experiment with different approaches to stay motivated and to thrive, evolve; new "best practices" are created by the "sinners" of "old best practices"; expressions like "good" and "bad" reflect nothing but subjective preference, e.g. there is no "most optimal solution", only parameters that can differ from solution to solution, etc.
    I hope that my comment is helpful. Thank You for reading.
---
I have been working as a Software Developer for nearly exactly two years now. During that time I have learned <span style="text-decoration: underline;">a lot</span>. Seriously, I used to write spaghetti code, but now I am all wrapped up in good architecture, continuous integration, separation of concerns and testing, to mention a few.

For the longest time I did what I do alone - but at long last there is some hope on the horizon. This post serves as a collection of knowledge / a list of guidelines to my future colleagues.

<h1>Be Proud Of Your Work</h1>

<ul>
<li><strong>Produce quality</strong>. Your code should be well-crafted, conform to standards (whenever possible) and make you want to sigh happily once you commit it. Instantly attack any function that looks like a mess and make it better. Challenge yourself by asking whether what you just did could be done better.</li>
<li><strong>Test your changes</strong>. Whether this means automated tests (PHPUnit) or even manual point-and-click - you should be testing your stuff. Claims like "works for me" leave you in a bad light and make you feel like crap later.</li>
<li><strong>Accept constructive criticism.</strong> Code reviews are important. Be smart enough to accept / give out code review comments without taking it personally. Learn from experience.</li>
<li><strong>Respect the client.</strong> Customers are our bread. Treat them respectfully, explain things, communicate on a timely fashion.</li>
</ul>

<h1>Play Well With Others</h1>

<ul>
<li><strong>Document concisely</strong>. PHPDoc is your friend - write a short summary to all of your functions, classes, logic that is not immediately obvious. Keep in mind that the person reading your comments is a developer too - have some respect for their intelligence and do not waste time with needless lines of text.</li>
<li><strong>Share ideas</strong>. Programming is a collaborative business. Pair program for an hour or two with a buddy (more, if possible). Debate over best approaches to a particular problem. Introduce new technology to team-members.</li>
<li><strong>Do not break stuff.</strong> <em>git commit -m "Broke the importer script"</em>. Why? Be reasonably sure your commits won't break the build. If they do, take responsibility and fix it.</li>
<li><strong><a href="http://www.informit.com/articles/article.aspx?p=1926692">Don't touch his code!</a>  </strong>Be careful about "improving" work done by others - especially if it is not your project. Changing <em>function foo_bar()<strong> </strong></em>to<em> function fooBar()</em> can result in a lot of bad air. Be willing to discuss why you changed something and only do it if your aim is to improve, not force something into your own patterns.</li>
<li><strong>Commit often</strong>. Use version control. Seriously. Just do it. Every discrete change should have its own commit and a meaningful commit message (with a reference to the issue ID). Review the diff of other commits (code review).</li>
<li><strong>Be ready to help.</strong> Accept pair programming invitations. Explain unfamiliar concepts without malice or judgement.</li>
</ul>

<h1>Keep The Ball Rolling</h1>

<ul>
<li><strong>Keep learning.</strong> Developers learn something new as often as possible. Programmers just blunder along with their baggage of knowledge as long as possible. Browse <a href="http://news.ycombinator.com/">hackernews</a> / <a href="http://reddit.com/r/programming">reddit</a> / etc before / after work. Read technical blogs. Experiment with ideas and take risks.</li>
<li><strong>Participate in community events</strong>. <a href="/2012/garage48-2012-tallinn-impressions">Garage48</a> is a pride to the Estonian startup community, <a href="http://devclub.ee/">Devclub</a> brings together the best and brightest. Meet new people. Gain new experience. Learn new stuff.</li>
<li><strong>Promote technical excellence</strong>. Put emphasis on doing something well over doing something cheap. Recognize good architecture and give credit where credit is due.</li>
<li><strong>Refactor</strong>. Legacy code is nightmare-ish - and when do the clients ever pay for maintenance? Refactor and improve old systems whenever possible with baby steps. Optimize a long SQL query while working on something unrelated. Run "auto-format" when opening a spaghetti file.</li>
<li><strong>Don't overspend.</strong> Sadly, you can not rebuild the entire system unless the customer agrees to pay. Do what is necessary and some more, but do keep it contained.</li>
</ul>

Be passionate about what you do and try to do it well. <a href="http://workisnotajob.com/en">Work is not a job</a> - and software developers have one of the best jobs on the planet.

![Modern day software development comics](/content/2012/11/software.jpg)
