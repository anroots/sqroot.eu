---
title: 'FNP: Simple Flowchart App'
date: 2011-04-02
category: Projects
image: /content/2011/04/flowchart.jpg
tags:
- programming
- html
- php
- Ruby
- Flowchart
- Languages
---

So, it's friday again, the night of partying and alcohol consuming, or in some cases, coding. Here is another one of my FNP (Friday Night Projects), in this case, a simple example on how (not?) to write a simple flowchart app.


At first, the idea was to do it in Ruby, for learning purposes, and in much larger scale. Users would get a quick signup and the ability to CRUD (Create, Retrieve, Update, Delete) flowcharts... but I gave up on that and chose to write only the UI part with minimal PHP backing. The code is meant to support only one flowchart and the data is hardcoded in PHP (you could ditch the JSON and put it in the HTML too if you wanted to).


The project includes some CSS and image files, a PHP script that outputs JSON data with flowchart questions+answers and a HTML template with minimal jQuery code to retrieve JSON from the PHP file.


[How Men And Women Argue](http://www.maxim.com/amg/humor/stupid-fun/83602/how-men-women-argue.html) was chosen as a base to work on. Total time spent: ~2hrs. The questions and answers are in a PHP array (ideally you'd want to involve a database for that). The code (excluding used 3rd party CSS) is released under [Don't be a Dick Public Licence](http://www.dbad-license.org).


So, without further ado...

[View the project in GitHub](https://github.com/anroots/projects-archive/tree/master/flowchart-app)
