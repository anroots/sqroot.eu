---
title: Object-orientated and functional paradigms
date: 2012-05-03
category: Learning
tags:
- IT College
- opinion
- object-orientated
- design pattern
- paradigm
- essay
---
I've been writing code for well over half a decade now... and I feel like the journey is just beginning. This article is a collection of subjective musings about object-orientated and functional paradigms, their advantages, disadvantages and use in real world software engineering, from the viewpoint of a \[arguably young\] software developer.

\[It's also a hometask for <a href="https://itcollege.ois.ee/subject/view?subject_id=127">I230</a>\]

<h2>Definitions</h2>

Almost any software project can be classified as functional or object-orientated. I say almost, because sometimes, the lines tend to get a little bit blurry, with both methodologies used in conjunction.

> In computer science, functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids state and mutable data. - <a href="http://en.wikipedia.org/wiki/Functional_programming">Wikipedia</a>

> Object-oriented programming (OOP) is a programming paradigm using "objects" – data structures consisting of data fields and methods together with their interactions – to design applications and computer programs. Programming techniques may include features such as data abstraction, encapsulation, messaging, modularity, polymorphism, and inheritance. - <a href="http://en.wikipedia.org/wiki/Object-oriented_programming">Wikipedia</a>

Both methodologies have their merits and demerits, both of them are used in the real world and what's most important: they work.

<h2>Briefly about history</h2>

Functional programming became a trending topic from the early days of computer science (the 1950s - 1960s), with languages such as Lisp and Haskell. The languages were based on mathematical abstractions, lambda-expressions and combinatory logic.
Object-orientated techniques became more widespread in the 1990s and languages such as Smalltalk, Delphi and Foxpro utilized the abstract techniques offered by OO.

Today's industrial worlds seems to move more and more towards to object-orientated approach since infosystems are becoming larger, more complex and collaboration effort between developers increases, with sometimes hundreds (if not thousands) of developers working on a single project.

<h2>Abstraction</h2>

I followed the traditional learning curve of software development by first learning about functions and getting more abstract from there. That's the beauty of object-orientated design: it's abstract. "Abstract", you might say, "isn't it the same as foggy and confusing?" No, not quite. The Holy Grail of software engineering is modularity and reusability. <a href="http://www.catb.org/~esr/faqs/hacker-howto.html#believe2">No problem should ever have to be solved twice</a> (Eric Raymond) and the abstraction offered by well-designed objects allows for reusability in a wide variety of different projects. By using a high-level approach we \[the developers\] are able to design for general situations and implement the specifics when the situation arises. Techniques such as abstract and <a href="http://jadendreamer.wordpress.com/2011/05/13/php-tutorial-learning-oop-class-basics-extending-classes/">extended classes</a> offer ways to hide implementation-specific logic from components that do not need them.

Whenever I speak of object-orientated design I find myself drawn to a kind of religious war, similar to the ever-spanning <a href="http://www.geek.com/articles/apple/apple-fanaticism-similar-to-religious-devotion-according-to-scientists-20110519/">Mac - vs PC</a>. That might have been an overstatement, but I can not deny the fact that I almost always argue for the sake of OO practices. Maybe it silly. Maybe it's not. The reality is that there is no right or wrong approach, the determining factor is the project. It's silly to start designing objects for a less-than-fifty code line snippet and in contrast, challenging to build Twitter with linear progression, global state and function calls. What I'm trying to say is: functional programming is mainly used for small-scale projects whereas objects come into play with larger, more complex infosystems.

Such complex projects need a level of modularity and abstraction. OO concepts such as inheritance ('extending'  a common parent to define new, implementation-specific functionality and get the common design 'for free'), interfaces, abstract classes and horizontal reuse - all of those are part of OO and enable developers to divide work into smaller, discrete pieces that later fit together to form a larger system.

<h2>Handling load</h2>

Speaking of larger systems (in terms of load): functional software tends to be (but not always!) faster and able to handle more load. An example: frameworks are often object-orientated (Kohana, CodeIgniter, .NET...), but the drawback is memory usage.

> I may lose out in development time up to 50% compared to someone developing the same solution without Framework, but I will end up with a system that can easily be hundred times as fast, if not more. - <a href="/2011/be-a-developer-not-a-programmer">Kristo Vaher</a>

<em>[Interesting video lecture (in Estonian): [Taavi Talvik speaks about Erlang](https://vimeo.com/40120636), a resiliant and fast functional programming language.]</em>

Execution speed may well be the determining factor of a paradigm choice for a project. When you're building an API that needs to scale well, you'll probably put performance first and don't want to "spend" memory for storing instances of classes in memory. Again, that doesn't mean Object-Orientated paradigms fail at API building - untrue.

<h2>Global state</h2>

One of the biggest differences in the two paradigms is scope. Scope, in terms of programming environment, defines the visibility of data. In PHP5 (which is a object-orientated programming language) an example of a typical global variable, as common for functional environments, is  the <code>$_GET</code> variable. The variable is a accessible from anywhere from the code. In contrast, an object variable declared <code>private</code> is only visible from inside the current object instance. OO purist would call it bad: in case of a global variable there are no access restrictions, meaning one can never be certain about the state of the variable, whether the data in it is valid or who and when changed it.

Objects are independent entities that encapsulate data from the global environment (one can think of them as biological cells) and define their own access rules and methods for handling this data. This behavior is desirable for a variety of reasons. Take, for example input validation. An object can define a method for changing an e-mail address and then check to see if it's valid. Accessing data through object interfaces allows for validation, authorization and logging, all of which are requirements for high-risk infosystems such as banking or personal data archives.

<h2>Maintenance</h2>

OO design is interesting in the academic sense, but there is a pitfall: the learning curve and discipline required to maintain OO design in already existing projects. The fact is that OO is a step up in terms of complexity from more traditional, functional approach. Say that you're on a deadline and the project needs a quick bugfix. There's a choice: to duplicate (copy-paste) some lines of code or to deal with design, maybe modify the inheritance structure of classes and document the changes in the diagram models and documentation. The first is easy and fast, the second more difficult to choose.

I've worked on projects where development and maintenance worked just so: to add new functionality, you copy existing one. What that achieves is duplicate code (see above for a note of reusability) and messy design, which could result in unmaintainable codebase as time passes.

<h2>Conclusions</h2>

Both object-orientated and functional paradigms have their strengths and weaknesses, but it can't be said that one is better than the other. Preferring a style in the context of a project is possible due to its unique restraints and requirements, but saying that OO (or functional programming) is always better is simple-minded. The world is moving towards abstraction and reuse as projects grow larger and more complex and that creates a natural environment for object-orientated design to flourish, however knowing about both paradigms is a requirement to excel.

> The world is moving towards abstraction and reuse as projects grow larger and more complex and that creates a natural environment for object-orientated design to flourish.

<h3>Resources used for writing this article:</h3>
<ol>
<li><a href="http://www.catb.org/~esr/faqs/hacker-howto.html#believe2">http://www.catb.org/~esr/faqs/hacker-howto.html#believe2</a></li>
<li><a href="http://en.wikipedia.org/wiki/Functional_programming">http://en.wikipedia.org/wiki/Functional_programming</a></li>
<li><a href="http://en.wikipedia.org/wiki/Object-oriented_programming">http://en.wikipedia.org/wiki/Object-oriented_programming</a></li>
<li><a href="/2011/be-a-developer-not-a-programmer">/2011/be-a-developer-not-a-programmer/</a></li>
</ol>
