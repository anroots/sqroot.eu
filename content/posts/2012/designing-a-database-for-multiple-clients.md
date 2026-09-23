---
title: Designing a database for multiple clients
date: 2012-05-30
category: Software Development
tags:
- design
- database
- database design
- erd
- architecture
---
I've had several projects where one codebase &amp; database needed to serve multiple clients. Another assignment with similar requirements is upcoming soon so this is a good time to reflect on some design strategies.

There are at least three distinct ways to design a database that ought to hold information for several clients.

<h2>Separate databases</h2>

This was my first approach, on my first project. The idea was that all clients run the same code, but the database in use gets decided dynamically by the domain name. So, `www.xxx.ee` would use the database `project_xxx_ee` and `www.yyy.ee` would get `project_yyy_ee`. The schema of those databases would be identical and their number unlimited. The approach worked and for a while everyone were happy.

The problem with this design is maintainability. Since the project I used this in was developed incrementally there was need for frequent database changes. Making a minor change required doing the same in all databases, manually. I didn't have any tools to do this so the solution was to do it by hand in PMA.

<h2>One database with client_id</h2>

Another way of holding data for multiple clients is to do it all in one database, but bind each row with `client_id`. The data for all clients is stored in the same table, but always references to the owner, ie client with a foreign key. It's easy in InnoDB.

Such approach offers easier maintainability (you only need to make some schema change in one table), but the drawback is data portability and encapsulation. Say you wanted to extract all the data for one client - you can't, at least not with a traditional SQL export... and if your code has security bugs the data of another client might be displayed, modified or even deleted.

<h2>The Wordpress approach</h2>

Wordpress does a mixed approach: there's only one database, but each site in your network gets it's own table. You can dump the data of a client easily, privacy breaches are migrated better, but there's still the problem of maintainability, namely you'd need a tool to apply a database modification in all the tables after the system has been running for a while.

<h2>The best solution?</h2>

It's difficult to say which strategy would be the wisest or if the 'right' choice is even listed here. My current method is to bind everything with a user or client and it seems to work quite well. What's certain is that I need to get my hands on a well-written database design book and learn more.

Update: Read this - <a href="http://www.brentozar.com/archive/2011/06/how-design-multiclient-databases/">How To Design Multi-Client Databases</a>
