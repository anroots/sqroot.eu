---
title: 'Python: Check that your projects are still alive'
date: 2012-01-06
category: Projects
tags:
- python
- script
- programming
- GitHub
- automation
- Cron
- http
- tool
---
![Screenshot](/content/2012/01/alive.png)
I wrote the following Python script to solve my need to verify all my projects are still up and running. The program itself is simple: given a list of URL-s check that all of them return HTTP status code 200 (OK). On any other status (mainly 500) send a report to the admin.
Best used via crontab every... minutes.
Install: Copy both files to a directory (~/bin works well) and check that dependencies (imports) are satisfied. Configure via http_check.yaml, optionally adding custom actions to http_ok() and http_error() functions inside the main script file.
<a href="https://gist.github.com/1570204">Link to the source (GitHub)</a>