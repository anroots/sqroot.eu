---
title: Time and Cost in Favor Of Security
date: 2011-09-26
category: Software Development
tags:
- html
- php
- security
- kohana
- practices
---
Beginners dilemma: do it properly and actually learn something new or do it so it gets done fast. Never mind the flexibility, security and the feelings of future developers as long as the task at hand gets done with minimal time consumption and makes one look like a pro, for the moment.

That kind of attitude reminds me a mix of The Office and The Simpsons. Yes - you can hack together something that barely manages to fulfill the current requirements... but then someone exploits the broken system or it collapses because a change in the environment or another developer has to do it over again, maybe from his own spare time because the business side can't justify the time spent on refactoring a kind-of working system.

I'm in full agreement that we (the developers) can't follow the golden rules all the time in the real world and compromises must be made to lower the costs... and then I wonder what the clients would say if the company told them point-blank from where the money is/was saved. The fact that the developers think the website/app will never be under any sort of attack, trust the user to input the right kind of data or guard their cookies is naive.

A situation like that is even more passionate when the team is split: one of the developers believes and is willing to do extra work to have some confidence in his creation, the other just does like it's always been done.

# A Real-world Example

Imagine now that you had to set up a WYSIWYG editor with file upload capability - like CKEditor. CKEditor has 2 crucial parts for the server-side. One is the config file, the other the actual (PHP) uploader script. Below is a section of the config.php file.

```
/**
 * This function must check the user session to be sure that he/she is
 * authorized to upload and access files in the File Browser.
 *
 * @return boolean
 */
function CheckAuthentication()
{
    // WARNING : DO NOT simply return "true". By doing so, you are allowing
    // "anyone" to upload and list the files in your server. You must implement
    // some kind of session validation here. Even something very simple as...

    // return isset($_SESSION['IsAuthorized']) && $_SESSION['IsAuthorized'];

    // ... where $_SESSION['IsAuthorized'] is set to "true" as soon as the
    // user logs in your system. To be able to use session variables don't
    // forget to add session_start() at the top of this file.

    return false;

}
```

As you can see, CKEdit doesn't really do anything until true is returned from the <em>CheckAuthentication()</em> function. It's really tempting to do just that and skip the whole auth-thing to win those crucial minutes. The red (figuratively) warnings above don't really mean anything because surely, who'd ever want to attack our site OR who'd ever think to exploit the file upload script? We have one login page in front of the uploading script anyway.

Yeah. So what really happens is that the user doesn't notice anything unless (s)he has some technical knowledge and knows what to look for: an unprotected HTML page that accepts POST data. You've solved the current situation and don't want to go back to deal with the problem. The customer is (wrongly) happy and you get paid.

You should never neglect the most basic security to win time - not on anything that eventually ends up in production. The problem above would be solved by including the framework/code that manages the main site and calling the auth check function. On Kohana 3 it would look like this:

```
define('SUPPRESS_REQUEST', TRUE);
require('../../index.php');
return Auth::instance()->logged_in();
```
Done! Problem solved. Did it really take that long? Assuming you knew something about Kohana and it's modules.

If no-one specifically forbids you from thinking about security, <span style="text-decoration: underline">do</span> think about it. If you're not allowed to write code you're confident in, tell the managers they get what they pay for or find a new job.

![CKeditor](/content/2011/09/cksec.png)