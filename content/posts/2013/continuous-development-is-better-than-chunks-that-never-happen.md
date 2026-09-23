---
title: Continuous Development Is Better Than Chunks That Never Happen
date: 2013-01-20
category: Software Development
tags:
- development
- work
- customer
- business
- money
---
I wanted to take a moment to rant about the way we develop (web application) projects.

Suppose you work in a small software development company with several clients, where the workflow looks something like this:

New Project -> Develop Project -> Deploy Project -> New Project

Makes sense? Construction of houses - yes. Software development - not so much.

The above process doesn't have a working maintenance and development phase. Sure, you fix the occasional bug or two, but that's not enough. Technology changes frighteningly fast. We didn't have [Twitter Bootstrap](https://getbootstrap.com/2.3.2/) two years ago, yet by now it has conquered the web. Projects with any kind of vision should be continuously developed, refactored, upgraded and tinkered with. New technology (where appropriate) should replace the old, more features could be added to improve the system. Instead, we just drop the code in production and leave it in cryogenics for years - and when the inevitable time comes to upgrade your PHP to version 5 the ship has sailed - it's cheaper to rebuild the project from scratch.

Why do we not exercise our projects after the initial development? The reason, of course, is money - or lack thereof. Smart, tech-savy customers realize the need to keep up with technological advances, the benefit of improving the existing system and are willing to pay. Unfortunately for the development company, money is money... and sometimes, more often than not, you'll have to deal with people who just don't see it that way.

To be fair - not every project needs constant tinkering. I'm speaking mainly about information system with a large degree of visibility and constantly changing business environment.

I'd like to say that this is a purely business problem and the reason we have the sales department. Sadly, no. In my opinion, the problem boils down to...

<ul>
<li>Culture - nationality and the state of software development in the area</li>
<li>The developers not being able to "dumb it down", speak the users language and/or "sell it" to the management</li>
<li>Not being able to produce examples from the real world</li>
<li>"Old fashioned" clients who want to pay a fixed amount for their sandwich and <span style="text-decoration: underline;" data-mce-mark="1">no more</span> - waterfall vs agile</li>
</ul>

Overcoming those obstacles is a team effort and needs the support of everyone involved, including the client - who should be educated by the team as to why it's actually more cost-saving / efficient / easier to work in incremental steps and spread the cost over time.

Many of the projects I've worked with deserve additional development - be it more features or improving the existing parts that were overlooked during initial development: efficiency, code smells and ease of use. When you're on the open market it's often the non-functional requirements that determine who gets paid.
