---
title: How Often Am I Interrupted?
date: 2015-08-10
subtitle: Analysis of Time-Tracking Data
image: /content/2015/08/days_graph_negative.png
category: Software Development
---

It [is](https://www.ironistic.com/the-cost-of-distractions-on-developers) [widely](http://windward.net/blogs/why-any-interruption-no-matter-how-short-has-a-giant-negative-impact) [recognized](https://programmers.stackexchange.com/questions/46252/how-to-explain-a-layperson-why-a-developer-should-not-be-interrupted-while-neck) [that](https://www.youtube.com/watch?v=ULcPdcIrOo4) an interruption into a creative process causes loss of concentration and productivity.

This is especially true for software developers who are "in the zone". The general theory is that most interruptions - however short - destroy the mental model of whatever the developer was currently working on and it takes additional time to get back to it.

[![Don't interrupt me comics](/content/2015/08/programmer_interrupted.png)](http://heeris.id.au/2013/this-is-why-you-shouldnt-interrupt-a-programmer)

> A programmer takes between 10-15 minutes to start editing code after resuming work from an interruption. (Parnin:10)

Paul Graham [argues](http://www.paulgraham.com/makersschedule.html) that programmers operate in a so-called maker's schedule where they need long periods of uninterrupted time to really focus on the problem at hand and do their tasks well. Yet it seems that interruptions are an unavoidable fact in our lives as developers (working from an (open) office).

> An interrupted task is estimated to take twice as long and contain twice as many errors as uninterrupted tasks. ([Czerwinski:04](https://dl.acm.org/citation.cfm?doid=985692.985715))

I've recently found that my productivity suffers quite a lot and decided to investigate and track the number of times I was interrupted during a month (two sprints). After all, you can not improve what you do not measure.

This is the summary of the data I collected.

# Research Methods   

I recorded most interruptions from 15th of July to the 10th of August 2015 using [Toggl](https://toggl.com). Unfortunately, there were interruptions that went unrecorded - small, minute breaks of concentration either external (answering a question from [Fleep](https://fleep.io)) or internal (I really wanted to browse [Reddit](https://www.reddit.com/r/programming)).

The recorded times do not take into account the time it takes to get back on the previous task. For the summary reports (below), I've rounded times into full hours. Unless otherwise noted, I work with sums - the total numbers for four weeks.

*Interruption*: something not planned into the sprint. A server that blew up (out of HDD space) and needed fixing, someone asking for help with a problem (explaining / pair programming), unscheduled meeting etc.

# Analysis

I exported four weeks of time-tracking data from Toggl. Let's take a look.

## Sprint Breakdown

During a month, I spent a total of 30 hours (sum of 70 logged interruptions) doing something that was not planned into sprints.

![Time summary](/content/2015/08/sprint_summary.png)

* Sprint #25: &sum; 14 hours
* Sprint #26: &sum; 16 hours

It seems that the amount of time I lost each sprint stays roughly the same.

A week contains 40 hours of work time. A sprint is two weeks. Two sprints is `40h * 2 * 2 = 160h`, out of which 30 hours (18.75%) was spent on non-sprint issues.

## Day Breakdown

![Time by days](/content/2015/08/days_graph.png)
![Days count graph](/content/2015/08/days_count_graph.png)

* Mondays - 7h x16
* Tuesdays - 3h x7
* Wednesdays - 8h x16
* Thursdays - 6h x10
* Fridays - 7h x19

The day I get most work done is Tuesday. Fridays get almost three times as many interruptions as Tuesdays. On average, I am interrupted 3.5 times per day.

## Category Breakdown

![Interruptions by category](/content/2015/08/interruptions_by_category.png)

I tagged each interruption into one of the following categories.

* Bureaucracy (emails, reports): 2h, x4 (5.71%), average 30 min
* Consultations (teaching, tech support): 8h, x26 (37.14%), average 18 min 
* DevOps (something blew up): 13h, x23 (32.86%), average 33 min
* Meetings (unscheduled): 2h, x2 (2.86%), average 1h
* Team (someone in my scrum team had a problem): 5h, x15 (21.43%), average 20min

## Hour Breakdown

![Interruptions by time](/content/2015/08/interruptions_by_time.png)

Most interruptions occur first thing in the morning (09) or after noon (14, 15).

## The Average Interruption

I will most likely be interrupted on a Friday at 09am for 18 minutes by someone asking for tech support.

## Actual Time Lost?

Given that 30 hours went into interruptions only (70 incidents) and knowing that it takes about 15 minutes to get back "online", we can do `70 x 15min = 1050min = 17h` and get a naive number of `30h + 17h = 47h` (29.37%) of "lost" time from a 160h work period.

Interruptions happen. From the data, I could claim that I lose about `3.5 * 18min + 3.5 * 15min ≈ 2h` every day. Data aside, I feel that the actual impact is way higher as I do not remember the last time I could calmly "hack away" at something and really immerse myself in the problem.

# Solutions?

I started in my current company as a developer, but my responsibilities have smoothly transitioned more to the devops / educational / support field. As such, I can not just make myself completely unavailable and not care if a server blows or a developer is lost in the complexities of Bamboo.

We've had two suggestions on how to mitigate the impact of interruptions:

* Make it known that people shouldn't disturb you (unless it's burning) after 10am and before 4pm.
* Take one day each week when you work from home. Turn off Fleep and just hack.

Both solutions have potential. I'll probably experiment with the second one.

## Train People On DevOps

From the data it's clear that most interruptions are either DevOps or tech-support related. I can reduce those interruptions by investing more into DevOps - making systems more resilient (implement monitoring, auto-restart policy...) and by training others to have a larger understanding of DevOps, so they could solve their smaller problems on their own.


## Empower Developers

On that note, I (we) should also promote the idea of not being helpless: as developers, we constantly face problems and unknowns. We should be able to handle most of them by ourselves (and Stack Overflow).

For example, Composer. It might take a developer 2 minutes to ask me what's the difference between `composer install` and `composer update` or it might take her 10 minutes to Google and read the blog article which explains it in more detail. The former is quicker for her, but it takes 15 + 2 minutes from my time *and* encourages the mindset of not solving ones own problems.

> yes, it is a long text, what is the solution? - (from a Fleep chat)

I feel that people have allowed themselves become too helpless and/or lazy. Everyone wants the quick fix, not realizing that if they won't spend some additional time actually researching and understanding why some problem arose, they will be just as helpless in the future.

----------

Besides those two insights, I have no real solution. Developers struggle with interruptions all over the world. If you have found a way to deal with this - please let me know.


*I take this opportunity to apologize to You, the co-worker to whom I've caused (and will be causing) numerous interruptions.*