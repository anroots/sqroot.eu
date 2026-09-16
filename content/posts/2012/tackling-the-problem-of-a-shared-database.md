---
title: Tackling the problem of a shared database
date: 2012-05-28
category: Software Development
tags:
- api
- database
- database design
- web service
- shared database
---
The following is a description of a database design problem I'm currently trying to solve.

## Background

We (my company) have several small web apps, all made for the same client, all using some portion of shared data (data that's the same within the context of the client's business). So each app has it's own Employees table, Objects table, Prices table... and in most cases the data is identical.

The problem is that if a new employee is hired by the client all web apps need manual data update and that's costly in terms of human resources.

## The solution

Use a central database, "guarded" by a web service for authentication, authorization, logging.

Each smaller app would then still have it's own employee, objects, prices table, but they would hold only values that are specific for that app and can not be put into the central database. The tables would also hold a reference (PK) for the corresponding row in the central database.

The smaller apps would then make a query to the web service each time they need data about some shared row.
CRUD operations would go through the web service.

## The problem

Is this really how it's done? How could one do that better?
Another problem is with queries: now it's impossible to put any shared columns to a single SQL statement (WHERE x=y)

Alternatives I've considered:
<ul>
<li>Hold a full copy of this shared data in each of the smaller apps, but sync any changes to the central database (and other apps). Also sync changes from the central database. What if sync is interrupted? = inconsistent data</li>
<li>Put ALL the shared data to the central database. Would not work for relational databases.</li>
</ul>

Any references to articles, blog posts discussing this are appreciated.
