---
title: 'Opinions: Be a Developer… Part III'
date: 2011-11-14
category: Software Development
tags:
- twitter
- programming
- php
- design
- kohana
- Featured
- framework
- discussion
---

This is a continuation of the previous posts, "Opinions: Be a Developer, Not a Programmer Part I" and "Opinions: Be a Developer, Not a Programmer Part II".

# Ando Roots

Just a picking note to begin with: Wordpress is more of a CMS than a pure framework...but never mind that. I wholeheartedly agree with you on the point of Kohana. It’s the fastest and most comfortable to work with PHP framework I’ve used, to date.

Indeed - before writing your first class or function, a developer should know the system he’s building. That’s a fact I’ve come to realize since I started working as a programmer. I used to begin with an idea and then just see where it goes, often tearing down an hours worth of progress. College and the real world taught me to do some initial planning (hey, at least I’m trying), but it’s still difficult to foresee the possible problems in the future. I guess it comes with experience.

Much of the initial planning is usually done by the project manager: collecting client requirements, making technical decisions (if qualified) etc. Still, modelling the database, the system and dreaming up the architecture is the job of a developer or an architect.

I still strongly object to the idea of labelling writing code as a mechanical process. The job of a System Architect is undeniably creative, but so is writing code or even mere functions with fixed signatures. There are many similarities with Mathematics, but even in Math one has to have certain creativity to see the possible paths to the solution.

When speaking of a typical end user (that’s another topic entirely), it’s true that he or she doesn’t really care about how the functions are written nor whether the product is analog or digital... as long as it fills it’s intended role. However, it’s wrong to say that the customer doesn’t benefit from a well-written codebase. Notice, I’m using the phrase well-written instead of beautiful. A painting is beautiful, the code can look like that with proper spacing and indention (and it should), but the characters and comments are what count. A documented, structurally solid and thought trough codebase makes later development and/or maintenance cost effective and ultimately, saves the customer money. If the company has a contract that says they’ll fix any and all bugs for free and the codebase is unmaintainable or undocumented, the cost of maintenance skyrockets.

I’m ashamed to admit it, but by your definition, I’m a programmer. I get an assignment and start to work on it, keeping in mind in-code documentation, a solid design and TDD. Sometimes I screw up (again, the inexperience) and have to start a particular piece of functionality using a different approach (and that's only natural). I do think about usability, but the priority is to get the system up and running...and when that happens, the next project flies in. Not to mention the lack of feedback so I’d know how to improve the system from the user’s point of view.

You’re right in that I haven’t done any Agile development before. Nevertheless, I’d like to visit conventions like Tampere goes Agile and find out exactly what’s true. I for one don’t believe that Agile consumes huge loads of money for bureaucracy. The biggest investment on the client’s part is to iron out the specifics of the application with the help of the team and that’s only for their own benefit because if they don’t know what it is they want, they usually don’t get it. With that point, I’d like to copy the Agile Manifest from <a href="http://agilemanifesto.org/">http://agilemanifesto.org/</a>.

<ul>
<li>Individuals and interactions over processes and tools</li>
<li>Working software over comprehensive documentation</li>
<li>Customer collaboration over contract negotiation</li>
<li>Responding to change over following a plan</li>
</ul>

We (you and I) build different systems. I work on a small company and know the possible expansion opportunities for my applications are virtually nonexistent since they are for internal, specific usage, not for a public service like Twitter. Therefore, frameworks always win in my case (I don’t want to reinvent strlen only to see if I could squeeze an extra millisecond out of it). If my system indeed needed to respond to thousands of queries per second, I’d ditch everything I could... but at the moment, it’s not a problem: the client’s company hires 100 new people, we increase the memory of the VPS by another GB. Different tools for different situations.

I believe most of us collect code snippets, samples and libraries like photographers: always ready with a camera. They’re extremely useful... but they don’t make the man. If your external HDD is stolen, you have to continue as normal. It’s the knowledge, experience and the ability to reason and envision what makes a worthy developer.

--------

This concludes this miniseries of discussions. You're welcome to further the discussion by leaving a comment down below.