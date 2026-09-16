---
title: 3 Reasons Why You Should Support Standardized Markdown
date: 2015-02-02
category: Software Development
tags:
- programming
- markdown
- standards
---

I'm working on a software project that integrates with a web-based instant messaging service. One of the tasks involved is formatting text using their version of Markdown, which doesn't conform to the [industry-accepted specification](http://commonmark.org).

Being annoyed with that (and with the fact that I have to implement their specification myself, instead of using a readily-available library), I decided to list some reasons why I think they are in the wrong.<br />

# #1: Your integration partners can use existing parser libraries

Open source is cool: there are readily available solutions for common problems. You need to transform Markdown into HTML? HTML into Markdown? Easy! Search for Markdown in your package manager ([Composer](https://packagist.org/search/?q=markdown), [npm](https://www.npmjs.com/search?q=markdown), [gem](https://rubygems.org/search?utf8=%E2%9C%93&query=markdown) etc), install the dependency and do something like

```js
markdown.toHTML("Hello *World*!")
```

Few lines of code and no hassle. Custom vendor syntax would require developers to first write a parser library for your particular product only. Extra development time, extra support (bugs and API upgrades) and extra money spent on things other than the actual product.

# #2: Out-of-the-box support from third party applications

Many platforms, libraries and applications already support Markdown. Should it happen that their output becomes your input (or the other way around), you might find that it works out of the box. No need for a custom adapter script.

# #3: No need to write a language specification

Many developers and end-users are already familiar with the Markdown specification. You don't have to write (and maintain) a lengthy Text Formatting Specification document, then teach it to all of your consumers (teaching non-technical folk a new language syntax can be a daunting task!). Following an accepted standard means you don't have to reinvent the wheel.

# #4 (free point, yay!): Implementing Markdown support might be quite easy

Depending on your product, it might be possible to include support for Markdown the same way your consumers do: by using an existing library. You could pass incoming messages through a parser library and get full Markdown support out of the box without having to do the hard work. Win-win!

--------------

By the way: this very blog post is written and formatted purely with Markdown.

**Links**
* [CommonMark Spec](http://commonmark.org)
* [Daring Fireball, Markdown spec](http://daringfireball.net/projects/markdown/syntax)
