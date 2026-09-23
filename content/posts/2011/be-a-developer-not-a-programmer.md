---
title: 'Opinions: Be a Developer, Not a Programmer'
date: 2011-09-06
subtitle: 'Part I'
category: Software Development
tags:
- programming
- php
- design
- framework
- development
- opinion
- ORM
- SQL
---
The following is a transcript of a debate between me an a friend of mine - [Kristo Vaher](http://waher.net) - about different ways of developing software. Published with his permission.

### Ando Roots

Developing PHP is messy on its own...but when you have different views of the words "elegance", "simplicity" or DRY with your colleague...

### Kristo Vaher

PHP is very elegant. When you write a wrapper for everything. It's like having PHP wear makeup.

### Ando Roots

I spent a day writing everything in ORM, using built-in modules of the framework, CRUD generation etc... then my co-worker slash project manager told me he'd do it himself and basically dumped most of what I did.

Elegant ORM became hand-written SQL, `$_POST` data parsing/filtering became a function with gazillion parameters, all passed by hand.

I'm a bit crossed now.

I think there"s going to be a ranting blog post sometime in the future with justifications why my way was better. I'm a perfectionist, but also, we don't live in an era where you have to mysql_real_escape_string() on every row of code any more.

### Kristo Vaher

Your way is better, but you are also dangerously close to becoming an idealist, which can hurt projects. There"s this thing called "good enough" principle. It is more important to deliver a working product than to write perfect code.

### Ando Roots

I'm aware of the danger... but I've also seen how projects that were delivered like that have become so huge, slow, error prone and unmaintainable they need to be replaced.

### Kristo Vaher

The basic idea is really that if you spend less time to deliver, you give more time to get feedback. If you work for a month on a startup project before getting end-user feedback and does really suit the needs to end user, you have wasted a month on developing a prototype that otherwise you could have developed in a week. Even our own Challengo is a good example of that, hack-filled code, but it won the best prototype award.

In the end of the day you need to seek balance between the two. Best developers are still very fast, because they are dirty sometimes. Being quick and dirty does not mean being less secure or less functional, dirty code can still sustain hurricanes of security attacks. I know it may feel "bad", but I can assure you that "knowing" how to do things better and compromising to get things done faster is sometimes the better way to go.

What should be really avoided is writing projects into ditches though, which is usually writing huge chunks of procedural code that is all tightly coupled and to replace one part of the system in refactoring process requires replacing everything else too.

### Ando Roots

Why the hell can't the world be [Agile](http://agilemanifesto.org)? In the rainbow-filled fictional universe, clients would review progress / give feedback every day. In reality, twice a week will often suffice.

Best developers are fast - but if you start reinventing the wheel by writing SQL by hand, writing login by hand, basically not taking advantage of the best frameworks offer in terms of speed, modularity, existing functionality.... Using frameworks properly - and I don't mean writing perfect code, just reusing what's already there like ORM - gives you blazingfast speed comparable to Rails or Django... and you have to learn to use it only once.

I abhor messy code that isn't commented or is just plain wrong, but I see the necessity of ignoring the rules sometimes. As you said, [G48](http://garage48.org) is a good example.

Another thing, if I'm forced to write code that way, my creativity and productivity goes down. You could say the same about writers / designers. If the idea of a book goes against what you believe in, you still manage to write it somehow, but it isn't nearly as good as say, some of the works of J.K. Rowling.

A good foundation is the basis of everything. Every project should have a solid understanding on what and how they build it. Let the functions be messy inside as long as their signatures and usage is thought out and modular - meaning that if you want to add a new field, you don't have to "replace everything else too".

This could be a good discussion at the next [Devclub](http://devclub.ee).

### Kristo Vaher

There"s a difference between software development evangelists (people who preach) and actual developers. The real world of software development is different. Of course Agile methods would be brilliant, but they are extremely slow and are almost impossible to implement in wide array of cases (especially social apps). It's similar with quality assurance, unless you"re working in a corporation with a Q&A team, you have to test your software yourself.

Reinventing the wheel is bad (and should not be avoided), but so is always being boxed by framework that claims to do everything and then requires hacks should something need exceptions. This will lead to a situation where framework is used with numerous overwritten classes and methods that will be just as bad in the long run. I've personally always been a library-focused developer, I have dozens of classes and tools, but I don't use an actual framework, because frameworks hold me back too much. I don't like to rewrite classes and methods because that adds to overhead, I want to avoid it as much as possible.

What I have ended up with is couple of "project setup" libraries for API services or MVC solutions and go from there. I can get basic service up and running in no-time and can expand it in any direction without any overhead from what a framework would force. PHP especially is in itself a templating language and loss of speed when developing certain things of a website is quickly made up should something custom need to be implemented. I don't mind faster frameworks, but I prefer not to be dependent on them.

What most frameworks do is that they simplify tedious tasks when in fact they should simplify complicated tasks - but the latter is not possible without massive overhead on the system. I may lose out in development time up to 50% compared to someone developing the same solution without Framework, but I will end up with a system that can easily be hundred times as fast, if not more.

The right approach is the middle ground. If you"re creating a website or something that is very much like a website, then using larger frameworks is very good. But if you"re writing a web service that simply has a web based frontend, then such frameworks are a hassle and will only hamper the speed of the end result.

Reality is that if success matters, it is all about being fast and getting feedback as quickly as possible and being able to change things very quickly in whatever direction required. If you"re not fast, you"re just not good enough. Things can always be refactored later on (and refactoring cannot be avoided by either methods).

Creativity of software developers cannot be compared to creativity of writers and designers, it's a separate process. Software serves creative needs, development it's not creative itself, it's just functional.

I would like to think I am an "artist" when writing software, but it's not really art. But if it works well and ends up creating emotions to the end user, then the idea or solution is creative. Code itself and programming is not.

But yes, it's a good topic of discussion! :)