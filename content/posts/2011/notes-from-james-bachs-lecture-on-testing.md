---
title: Notes From James Bach's Lecture on Testing
date: 2011-09-07
category: Learning
tags:
- programming
- development
- James Bach
- lecture
- Test case
- testing
- unittest
---

IT College had the privilege of [hosting another public lecture](https://www.youtube.com/watch?v=ILkT_HV9DVU&list=UUp-GiyWg_lrNvQZn8rh9YRQ&index=5&feature=plcp), where an international expert took the stand and shared his knowledge.

![JUnit](/content/2011/09/junit.png)

[James Bach](http://www.satisfice.com/), &quot;<a href="http://www.satisfice.com/blog/">The Consulting Software Tester</a>&quot; spoke about what testing really is and gave tips on becoming a professional skeptic.

I&#039;m pleased to say that in my opinion, Mr. Bach is an excellent spokesmen and can keep the audience compelled with occasional jokes and frequent real world examples mixed in.

The topic of testing is a must for any developer and I&#039;m glad to say I learned something to make my software better. Even if it&#039;s as simple as including a maxlength&nbsp;attribute on every input field.

# Lecture Notes

## Knowing the background

You have a simple if / else block, for example:

```
if ( a > 75) {
    light_bulb();
} else {
    sound_alarm();
}
```

How many test cases would you need to cover all the possible scenarios? The obvious answer would be 2: one where <strong>a</strong> is smaller than 75 and the other where <strong>a</strong> is say, 100.&nbsp;<strong>?</strong>

<strong>Wrong.</strong>&nbsp;First question: what the hell is <strong>a</strong>? Is it the number of golfballs or the speed of a vehicle? A tester should always have as much background information as possible, and (s)he should ask additional questions if something is vague. If someone shows you a flowchart of a program it&#039;s a que to seek out the underlying complexity. A flowchart item saying &quot;Read input&quot; might involve steps from creating a new instance of a class to trying to establish a database connection to a remote server prone to failing.

It is the testers job to account to all of that and not to take the word of a programmer or even the designer of the system at face value. If you have an electric engine designed for voltages 90 V - 250 V, you still test it at 80 V, even trough you know it will fail - to test for the unwritten specifications <em>(like to see if it fails catastrophically and explodes, quite possibly killing the user)</em>. However, there&#039;s no point on testing if a sailboat sails on dry land, that ability is not in the requirements&nbsp;list.

## Test coverage

Lets say&nbsp;<strong>a</strong>&nbsp;<em>(the code excerpt above)</em> is the RPM of the blades in a coffee mixer. If the speed is smaller or equal to 75, we want the indicator light to be on and the alarm to go off when the speed rises above 75.

Notice, I said smaller or equal to. The code above doesn&#039;t reflect the case &quot;equal to&quot; so the intention of the programmer and actual code is different. That should be one of the tests: what happens if the speed is not smaller or greater than 75? Does the result match the expected value?

The tests should also cover the possibilities of <strong>a</strong> being a letter or a negative number or maybe `Null` value altogether.

So how many test cases would it take to test all of that? What a silly question. A test case could be small or long, complex or simple or even reuse other testcases. A better question to ask is: &quot;How should I test this?&quot;

Testing offers a constant intellectual challenge. A tester should be creative and think outside the box, make assumptions on how and where a product might fail. Testers are on the path of continuous self-education because of the variety of products and associated information they have to study.

## A "good" tester

&quot;I dropped my phone, I think it might be broken. How do I test it?&quot;

-&nbsp;<strong>Stop.</strong>&nbsp;Don&#039;t give any advice when you aren&#039;t familiar with the situation. What kind of a phone was it? If it was a military one, they&#039;re quite durable. If it&#039;s an expensive little thing, it most likely is injured. Why did you drop it? Was it to test if it breaks? Where did you drop it on - water, bed, carpet, cemented floor? Does testing it require any special equipment?

- Such questions should come as a second nature to a professional sceptic.

There is no &quot;right&quot; way to test something, but there <u>is</u> a practice to avoid: translating specifications and requirements to tests 1:1. A good tester does not copy-paste the documentation to test cases but rather models the system in his/her head to understand it and go beyond it. The piece of paper describing the system doesn&#039;t correspond to the actual world and it&#039;s the tester who checks the intended and imagined result against what&#039;s really happening.

<ul>
<li><strong>Imagine</strong>&nbsp;what might happen in the real world</li>
<li><b>Learn</b>&nbsp;new concepts rapidly to adopt</li>
<li><strong>Question</strong>&nbsp;everything and be ready to justify your reasonings</li>
<li><strong>Focus</strong>&nbsp;on parts of the system, but be able to see the bigger picture</li>
</ul>

The guys who search for bugs are not the enemy to the programmers, in the contrary: a tester should help the programmer by giving feedback and educate the coders to make them write better software<em> (and correct some thought patterns)</em>.

## Parting thoughts

Feeling the weak spots of a system is a skill developed over time. It&#039;s like a detective work - only there are loads of suspects.

Writing tests down (documenting) is economically dangerous and limits the number and variety of tests runs on the product.

Testing cannot be automated. You can check the load of a server, but an automated script can never learn thus lacking the creativity, intuition - humanity - of a real tester. Sure - automated checks help testers by gathering info, but don&#039;t make the mistake of writing a bunch of automated tests instead of hiring a tester.

As a tester, it&#039;s your responsibility to learn new things quickly, be excellent at asking questions, model things in your mind... but also, you have to be able to talk about what you did and carry the meaning without a load of technical jargon. A tester is not the sole person responsible for catching all the bugs, that&#039;s for the whole team to do. Any developer should be only too happy to have a tester in the team because, ultimately, the systems that developers build are the ones that go into usage and fail.


Highly recommended: [watch the recording](https://www.youtube.com/watch?v=ILkT_HV9DVU&list=UUp-GiyWg_lrNvQZn8rh9YRQ&index=5&feature=plcp) of the lecture.