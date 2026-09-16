---
title: Lessons learned
date: 2012-03-17
category: Software Development
tags:
- mmorpg
- php
- project
- framework
- dragon knight
- open source
---
With the past two years, there's been an incredible development in my experience and knowledge as a software developer. Still, it's important to look back at ones mistakes and learn from them.
I still have the complete source code and database of my very first large scale program.  The year was 2007 (I think) when I first discovered the <a href="http://dragon.se7enet.com/dev.php">Dragon Knight open source MMORPG project</a>. In no time at all I had the system up and running in localhost and the next summer (or two) went into learning web technologies, programming and CS in general.
Now, as part of a software testing course assignment, I had the incentive to look back and write down some notes.
<ul>
<li>Don't use PHP closing tags in php-only files</li>
<li>If you have a single entry point (framework index.php), do a check in the first line of every file that the entry point is used. Kohana does that with a constant defined check that dies on failure.</li>
<li>DRY: put config into one place</li>
<li>Use InnoDB relational tables</li>
<li>Don't mix Models, Views, Controllers in a single file - use arhitecture. It's also DRY!</li>
<li>I18n mostly everything. You don't have to actually translate it, just make it translatable in the future. In Kohana: use the __() function. For javascript, find a library.</li>
<li>Keep font sizes and color contrasts readable</li>
<li>Always let the user visually distinguish where (s)he is in terms of navigation. Breadcrumbs are a good idea. Back links should be present in multi-staged navigation. Logo should link to the index page. The user shouldn't feel lost.</li>
<li>Main navigation should be visible on all pages (there are justified exceptions)</li>
<li>Be consistent: an UI element that act the same should always look so, too. Don't make one link blue, the other green, if they behave the same. DO make a link red if it's dangerous, but not simply for fun.</li>
<li>Avoid opening multiple popup windows, use modal dialogs, tooltips, javascript plugins to present the information. When you do open a popup, make sure it's sized so that the user doesn't have to resize it to see the whole content.</li>
<li>Don't hardcode system messages via a query string (...&amp;messageID=1) (nor ?message=Please+Try+Again)</li>
<li>Test against security vulnerabilities! Malicious input (injection, XSS) in particular.</li>
</ul>
