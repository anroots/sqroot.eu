---
title: Time-coded email service
date: 2011-08-06
category: Projects
tags:
- python
- GUI
- design
- Email
- project
- service
---

Spy movies sometimes include a clever deadman's switch someone set up to activate in the event of their capture and/or death.

My recent idea (while not a new one, but a quick googling didn't turn anything similar up) is just that.

A service that lets you prepare an e-mail and then lies in wait for the moment to send it. Sending the e-mail is delayed as long as the individual keeps regular check-ins with the system.

The project has only the GUI at the moment, I'm planning on writing the backend in Python (GAE), because Heroku's e-mailing limitations look too complex and I want to try something different from PHP.

Update:

I started writing the backend code in Python. An unfortunate surprise was how messy type juggling was in Python. Maybe I'm not doing it right, but I expected more elegance.

![Email service](/content/2011/08/email.png)
