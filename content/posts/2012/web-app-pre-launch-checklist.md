---
title: Web App Pre-Launch Checklist
date: 2012-08-11
category: Software Development
tags:
- php
- app
- checklist
- launch
---
This is my checklist for deploying PHP / Kohana based web application projects.

<h2>Pre-develop</h2>
<ol>
<li>Will the layout be responsive or fixed?</li>
<li>How to address the user (informal / formal)</li>
<li>URL scheme - readable, semantic, short</li>
</ol>

<h2>Frontend</h2>
<h3>Markup</h3>
<ol>
<li>Does it have a favicon?</li>
<li>Does it have a &lt;title&gt; tag that changes for every page?</li>
<li>Does it have &lt;meta&gt; author, description, charset?</li>
<li>Did you <a href="https://browserling.com/">test the layout</a> with IE 7, 8, 9, Opera, Firefox, Chrome?</li>
<li>Did you test it with common screen resolutions?</li>
<li>Does the main logo link to the front page?</li>
<li>Does the HTML validate?</li>
<li>Does it have (Google) Analytics?</li>
<li>Did you optimize and concatenation script, style and image (thumbs!) resource?</li>
<li>Does it have a print stylesheet?</li>
</ol>
<h3>User Experience</h3>
<ol>
<li>Did you go over all the texts, tooltips, instructions one more time? Can they be made <a href="http://developer.android.com/design/style/writing.html">more specific and shorter</a>?</li>
<li>Does it have an informative 404 page?</li>
<li>Do you have informative help texts?</li>
<li>Are you validating forms with JS?</li>
</ol>
<h2>Backend</h2>


<ol>
<li>Are system-level folders, resources protected (.htaccess)?</li>
<li>Does it have a separate database username?</li>
<li>Are events logged?</li>
<li>Can it do self-diagnosis and notification on critical errors?</li>
<li>Did you protect against unauthorized usage (permission checks on certain actions)?</li>
</ol>
<h3>Database</h3>


<ol>
<li>Is the database indexed?</li>
<li>Is the database documented (ERD, comments)?</li>
</ol>

## Resources

<ul>
<li><a href="http://www.smashingmagazine.com/2009/04/07/15-essential-checks-before-launching-your-website/">http://www.smashingmagazine.com/2009/04/07/15-essential-checks-before-launching-your-website/</a></li>
<li><a href="http://www.boxuk.com/blog/the-ultimate-website-launch-checklist">http://www.boxuk.com/blog/the-ultimate-website-launch-checklist</a></li>
</ul>
