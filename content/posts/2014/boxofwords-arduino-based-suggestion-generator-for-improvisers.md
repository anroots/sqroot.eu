---
image: /content/2014/06/pcb_back.jpg
title: BoxOfWords - Arduino-Based Suggestion Generator for Improvisers
date: 2014-06-16
category: Hardware
tags:
- project
- prototyping
- improvisation
- electronics
- hardware
- lcd
- arduino
- pcb
- atmega328
- sd
- make
comments:
- id: 2718
  author: Martin Vahi
  author_url: ''
  date: '2014-06-21 22:47:00 +0300'
  content: "Electronics can be lots of fun, but it's nice to get maximum amount of
    results for the same time that is spent on having fun. Applications that can be
    created in the form of free software that runs on \"standard\" hardware, should
    not be implemented in special purpose hardware, unless the hardware is as easy
    to create as printing a page of paper from a laser printer and even then there's
    still the issue that exists with paper books: physical hardware is cumbersome
    and harder to store than bitstreams.\n\nRight now You only have one instance of
    the box, but if You wrote the application as an Android software, then You could
    offer the benefits of the application to all of Your friends and add a link to
    the application to Your Resume. (A link to a video that explains the general idea:
    \nhttps://www.youtube.com/watch?v=2fcpT5zz07w )\n\nUnless You are creating custom
    microchips (for about 3k€ it is possible to get about ten, 10, of them), custom
    electronics is only good for switching power (motors, lights, solenoids, etc.)
    and receiving measurement data (door switches, pressure sensors, light sensors,
    etc.). Ordinary computers, including the Raspberry Pi, can usually do most of
    the computing, unless You are developing computerized ordnance (programmable canon
    shells, rockets, things like that).\n\nA few links to products (in shops in Tallinn)
    that might interest You:\n\nhttp://www.oomipood.ee/product/vell_vtstrip5/ise-seadistuv-puhastaja-l-otilde-ikur\nhttp://ittgroup.ee/et/e-shop/detail/3-draiverid/flypage|ask/208-servo-draiver-6-usb?sef=hcfp\nhttp://ittgroup.ee/et/e-shop/detail/9-muundurid/flypage/60-usb-i2c?sef=hcfp\n\nThank
    You for reading. :-)"
- id: 2719
  author: Ando David Roots
  author_url: ''
  date: '2014-06-21 23:17:00 +0300'
  content: |-
    Thank you for your comment. I agree, the production of custom-built hardware IS several (hundred) times higher than doing it in software. In addition, software replication costs are near zero. Solutions like the BoxOfWords would be economical to realize as software so that it could be easily distributed, modified, replicated and even sold.

    However, I'd like to clarify the purposes of the project. The goal wasn't to earn money, fame or distribute it to a wider audience. I took those factors into account when planning this. I wanted to create something unique, something that took considerable effort to create, something 'real' in the sense that you could hold it in your hand and think, "damn, there's some affection right there".

    Quoting from the [Teensy Moonica](/2013/teensy-moonica-the-8-legged-gift-for-a-developer/) project:

    "Money can come and go, but my time on this planet is finite. How I spend my time, or who I spend it with means more than anything else in my universe. From at least the selfish view, giving my time is the most valuable gift I can give." (S. Berkun)

    From that, I stick to my decision that MAKE-ing this with my two hands and electronic components was the right choice. As for replication, all interested parties can make it themselves, the schematics and code are available. They only need to be willing to invest effort. Again, this isn't meant to be a "$ cp -r", 1-sec-and-done solution.

    Every script kiddie can make an application these days. Codecademy is growing in popularity, as are code generation tools. Electronics is not that far yet and requires a wider skill-set, both intellectual and physical, hence looking even better on ones resume.

    I disagree strongly to the notion that making more complex circuits than an ON / OFF switch or a temperature reader is all that it's economical for a amateur user to do. There are some pretty damn impressive projects (http://knowable.org) that utilize the power of hackable hardware modules. Everyone has their motivation, be it learning, creating, teaching - the fact of the matter is that even though it might be doable in software there are valid reasons to take the road less traveled by. And I think that's awesome.

    Sorry - the links are meaningless to me without context. Wire strippers? - already on my shelf.
- id: 2720
  author: Martin Vahi
  author_url: ''
  date: '2014-06-21 23:48:00 +0300'
  content: "Than You for the answer. :-)\n\nApplying finite effort X to a project
    that has higher yield does not lessen the effort. \n\nA few more links to products
    that might become handy:\n\nhttp://www.oomipood.ee/product/esac305/8/smd-jootepasta-sustlas-8g-2-5ml-sn96-5ag3cu0-5-25-45um-217\nhttp://www.oomipood.ee/product/chem-wik%20s5/tinasukk-3mm-1-5m\n\n\n\n:-)"
- id: 2721
  author: Martin Vahi
  author_url: ''
  date: '2014-06-22 00:56:00 +0300'
  content: |-
    I do not have the time to do that project myself right now, but an interesting application to do might be the determining of the 3D coordinates of a talking person by measuring the sound with multiple microphones and using time differences that it takes to reach the mics for calculations.

    The calculations do not have to be real-time. Those can be done with a "powerful" PC, but the measurement has to be "bare metal", something with microcontrollers with ADC's. I would start the experimentation with a triangle that has mics at every vertex and I would have fourth (4.) mic at the "top of the pyramid" that has the 3 mics at its lower corners. The purpose of the electronics would be extremely precise time measurement and signal gathering from the 4 mics. All calculations, analysis, would be done on a PC. The end result might work soft-realtime, but during the development of the analysis algorithm, the measurement data is read from pre-stored files.

    If that device could be hooked up with Android, then a more advanced version of it might have military applications: determine flight path of planes, small arms fire, may be some sonar applications, etc. It might be even developed to an appliance that is interface compatible with home security systems.

    Some of the inspiration sources:
    http://en.wikipedia.org/wiki/Phased_array
    http://en.wikipedia.org/wiki/X-ray_computed_tomography
    http://en.wikipedia.org/wiki/Magnetic_resonance_imaging
    http://en.wikipedia.org/wiki/SOSUS
- id: 17231
  author: Erna
  author_url: ''
  date: '2015-02-06 14:44:25 +0200'
  content: "What you are promoting may go together with different present on-line
    outlets iff you're utilizing \ndiscount coupons correctly.\n\nFeel feee to surf
    to my blog post - <a href=\"http://miniURL.fouiner.info/newport_coupons__couponcabin_749269\"
    rel=\"nofollow\">cigarette coupons info</a>"
---

BoxOfWords is a hand-held, cigarette-box sized electronics project for improvisational theatre practitioners.

The purpose of the project is to offer randomized word suggestions during an improv workshop or a training session.

BoxOfWords has a memory card reader, control buttons and a small LCD screen. The improviser selects his preferred word file (emotions, locations, professions...) and can call up new randomized suggestions to the LCD screen with a press of a button.

The project was built as a present to [Trent Pancy](http://www.trentasaurus.com), the organizer of the <a href="http://finlandimprovfestival.com">Third Annual Finland International Improv Festival</a>.

This was my second successfully completed production electronics project and the first to include a custom-made PCB and run on batteries.

<h1>Operation</h1>

The purpose of the device is to offer randomized words of a certain word category file. For example, we have the following text files (on the SD card): <code>emotions.txt</code>, <code>locations.txt</code>, <code>adjectives.txt</code> and so on. The user selects his desired category (word file) and the device calls up random words from that file.

There are four navigation buttons: back, left, right, enter.

A simple usage scenario would be as follows:

<ul>
<li>Power On</li>
<li>Main Menu is shown (the title of the first file)</li>
<li>The user navigates to the desired file ([right], [right], [enter])</li>
<li>A random word from that file is shown</li>
<li>The user wants another random word ([right])</li>
<li>The user wants another category ([back], [right], [enter])</li>
<li>A random word from that file is shown</li>
<li>.....</li>
<li>Power Off</li>
</ul>
<h1>Technical Challenges</h1>

I learned a lot through the project. Here are the things I found most challenging.

<h2>Power</h2>

Portable projects need a power source. I decided to use 4xAA batteries. They're cheap (compared to Li-ion or power banks), offer larger capacity than a 9V battery and output just the right voltage (6V). An article on [Let's Make Robots](http://letsmakerobots.com) taught me how to regulate that voltage to a stable 5.0 volts using the Lm2940ct-5 low-dropout voltage regulator. I soldered my first power regulation circuitry.

![On breadboard](/content/2014/06/breadboard.jpg)

<h2>Reading files from an SD card</h2>

The main menu should let users choose between txt word files on the SD card. Initially, I planned to just read the contents of a directory and list all the found files on the LCD. After over six hours of hacking with the SD library I was unable to get a file listing into a workable array of strings so I abandoned the idea and decided to use preset file names: <code>WORDS_00.TXT</code>, <code>WORDS_01.TXT</code> and so forth.

![LCD](/content/2014/06/lcd_on.jpg)

This put some limits to the project and I settled on having exactly eight files to choose from (this is an artificial limit, I could as well have chosen to have sixteen). That way, I would know exactly which files are present on the card.

The user still needed some way of distinguishing between files (which file contained Emotions?) so I created a settings system.

The SD card has a file called <code>SETTINGS.TXT</code> which looks like this.

<pre>brightness=199
scrollSpeed=180
title0=Emotions
title1=Professions
title2=Relationships
title3=Locations
title4=Random words
title5=Adjectives
title6=Film Styles
title7=Activities</pre>

The file contains two runtime settings and human-readable titles for all of the eight word files. The titles are mapped to the files (<code>title0</code> = <code>WORDS_00.TXT</code>) and the LCD shows not the actual file name but the configured title.

<h2>The PCB</h2>

Soldering the PCB was a challenge on its own. I've tried to make a PCB before, failed twice, <a href="/2014/attiny85-melody-module">succeeded once</a>. The task involves working with delicate parts, lots of small wires and tin. There's always a chance for something shorting.

I spent a whole day with preparing the wires (instead of soldering ribbon cable directly to the board I opted for a more modular, but complex solution and used headers) and soldering the parts together. At the end of the day, I was spent but victorious: all of the connections worked, there were no shorts and I had my spiders-nest of a PCB, ready for action.

![PCB](/content/2014/06/pcb.jpg)
![PCB backside](/content/2014/06/pcb_back.jpg)
![PCB on hand](/content/2014/06/handheld.jpg)

<h2>Physical enclosure</h2>

The project needed a nice-looking, sturdy case which would ideally be as small as possible for comfortable handling. The material of the enclosure needed to be easily workable with hand-held tools for I have no access to 3D printing or computerized mills.

The first attempt of creating the enclosure was with a thick paper pencil holder I saw at the supermarket. The material was easy to work with (it's basically paper) and sturdy enough to protect the project from deformation. In the end, the enclosure proved to be too small to fit all of the components and wires and I had to look for an alternative.

The local electronics supply store stocked the perfect plastic box with thick walls, the right size and sleek look. It took some work and creative use of tools to create the openings for the LCD, SD and switches, but the result was satisfactory.

![Enclosure](/content/2014/06/enclosure1.jpg)
![Enclosure](/content/2014/06/enclosure2.jpg)
![Enclosure](/content/2014/06/enclosure3.jpg)
![Enclosure](/content/2014/06/enclosure4.jpg)

<h2>Fixing the parts in place</h2>

The various modules needed to stay securely in place inside the enclosure. For that, I used screws, super glue and velcro.

The project gave me reason to visit the hardware store for the first time in my life, voluntarily. I bought a few dozens of 3mm metal and wood screws (the smallest they had), which fit perfectly to the PCB and LCD mounting holes. The SD card required smaller screws which I was unable to obtain so I used super glue which turned out to be really effective.

Inspired, I thought to glue the power switch to the enclosure - but it turns out it's easy to superglue a plastic rocker switch shut. I had to install a replacement.

A lot of 3mm screws, bolts, nuts and washers were used to secure various elements. I used a combination of screws and velcro to secure the battery pack.

![Enclosure legs](/content/2014/06/legs.jpg)

<h2>Long text on the 16char LCD</h2>

I had to take into account that some of the suggestions might be long: <em>Acting Director / Stage worker</em>, longer than the maximum length of the LCD. The solution? Scrolling the text (marquee). Programming the function for that caused some headache, the end result was satisfactory, but could have been better.

<h2>Reading push-buttons</h2>

I'd made a mistake in soldering the four input buttons: pressing one button would result in the neighbouring buttons <code>analogRead</code> value to lower dangerously low, too. As a result, pressing one button would be identified as pressing two buttons at once. I had a choice: redo the button module (some hours of risky PCB work) or create a software workaround.

I opted for the latter and created a function that determined which of the buttons had the closest <code>analogRead</code> value to ground. Still, a logic error in the code that dealt with reading the buttons delayed project completion by a week, resulting in missing the perfect window for handing over the gift.

I discovered the error some time later during a debugging session and was quite annoyed at myself when changing

<pre>if (buttonValues[i] &lt; buttonValues[i-1])</pre>

to

<pre>if (buttonValues[i] &lt; buttonValues[lowestIndex])</pre>

yielded the desired result.

<h1>Lessons learned</h1>

I'd do a few things differently if I had to start over.

<h2>Include a programming header</h2>

I had a breadboard setup of my project attached to an Arduino where I tested the code I developed. Once I was reasonably certain the code worked as I wanted it to I would remove the Atmega chip from the PCB, put it into the Arduino, program it, then press it back into the PCB IC socket. The process was time consuming, delicate (at any point I could have damaged one of the pins of the IC) and annoying. My next Atmega PCB will include a <a href="http://atmega32-avr.com/adding-icsp-header-to-your-arduinoavr-board-using-isp10pin-microcontroller/">convenient ICSP header</a> that allows me to program the chip without removing it from the socket.

<h2>Cannot set LCD contrast with PWM</h2>

At first, I wanted both the brightness and contrast of the LCD to be controllable from the software. I used two PWM pins for that. Unfortunately, the contrast can not be controlled as simply: the LCD module went nuts and started displaying gibberish.

After some searching around in the Arduino forums, I found an explanation: <a href="http://www.pcbheaven.com/circuitpages/PWM_LCD_Contrast_Control/">you need a low-pass filter</a> for that. I didn't bother and just used a small trimpot.

<h2>Test for power consumption</h2>

I didn't test the power usage of the project before it was assembled and already shipped. Getting an idea on how much power the project consumes, both on standby and operating mode (reading the SD card) would let me give an estimate on how long the batteries last.

<h2>Optimize power</h2>

There wasn't a lot of focus on power optimization. I know I could increase the battery lifetime by a large margin if I tried: shutting of the IC when no buttons are pressed, caching SD card results, dimming the backlight...

<h2>Think about PCB fabrication</h2>

Frizing, the software I used to design the circuitry, also has a <a href="http://fab.fritzing.org/fritzing-fab">PCB fabrication service</a>. Basically, I send them the blueprints for the board and get a professional, sleek-looking PCB some days later in the mail, ready for soldering.

This would look so much more professional and as an added bonus - no jumper wires. A nest of crossing wires beneath the board is a risk: any one of them might come loose, especially during mounting.

I calculated the fabrication of my board to cost around 30-40 euros.

<h2>Put more work into designing the exterior</h2>

Some of the edges of the holes I cut into the enclosure aren't smooth. Putting more effort into that would yield more professional-looking results.

I used ordinary paper to print out the labels for the controls, then laminated the printout. Using a photo paper would look nicer or better yet, figuring out how to paint the designs to the plastic...

<h1>Skill-ups</h1>

Skills obtained or perfected with this project: (Arduino) / C programming, PCB design and production, manufacturing (enclosure), electrical engineering, soldering, UX design

<h1>Conclusion</h1>

Overall, I am very satisfied with the result. I stared the project during the winter of 2014 while still in the army (I had my minimal prototyping electronics kit and a laptop with me, I used to work on the programming during our scarce spare time in the common area) and finished in June. The day when the last bug (malfunctioning [enter] button) was fixed and I finally mailed the finished project to Trent felt so fulfilling - I had accomplished something that took me a lot of time and effort to create.

I'm satisfied with the amount of knowledge I got from this project. The code and schematics are open source, hopefully it's of help or inspiration to someone somewhere.

![Finished product](/content/2014/06/finished_small.jpg)

<h2>Links</h2>
<ul>
<li><a href="http://knowable.org">Box Of Words @ Knowable</a></li>
<li><a href="https://github.com/anroots/box-of-words">GitHub (source code and schematics)</a></li>
<li><a href="http://finlandimprovfestival.com">Third Annual Finland International Improv Festival</a></li>
<li><a href="http://improv.ee/in-english/">Improvisational Theater in Estonia</a></li>
</ul>
