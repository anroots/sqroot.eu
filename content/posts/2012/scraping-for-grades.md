---
title: Scraping for grades
date: 2012-03-02
category: Projects
tags:
- html
- Ruby
- school
- mechanizer
- scripting
---
The student information system (ÕIS) our college is using satisfies most (if not all) the requirements presented to it. Still, I found a fault: there's no API and I wanted to get notified ASAP when a new grade is added.
Some background: I recently started a wonderful online learning course: SAAS-class.org (<a href="https://www.coursera.org/saas/class">https://www.coursera.org/saas/class</a>) where I got the opportunity &amp; incentive to dive into Ruby (on Rails).
So, my first ever Ruby class was born. The code uses Mechanize to log into the grade system, navigates to the correct page and scrapes the grades into an Hash structure. The end user can basically just do this:
```ruby
require "itk_grades"
# Create instance and save login data
ITK = ITKGrades.new("user", "pass")
# Fetch &amp; scrape grades from ÕIS.
ITK.fetch
#ITK.grades # Returns a hash of all grades
# Print all grades
ITK.print
```
You can see the full code over @ <a href="https://gist.github.com/1944799">GitHub</a> or the college <a href="https://wiki.itcollege.ee/index.php/ITKGrades.rb">Wiki</a> (in Estonian).
![Screenshot](/content/2012/03/terminal.png)