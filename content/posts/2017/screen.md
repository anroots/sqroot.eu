---
title: 'Repurposing an Old Phone: Personal HUD Screen'
date: 2017-12-06
subtitle: Instead of throwing away old hardware, why not put it to good use as a digital "picture frame" on your wall?
category: Projects
image: /content/2017/screen/rev2.jpg
---

I was running with my buddy Priit, when I accidentally dropped my trusty Nexus 5 phone and cracked its screen.
The screen had fractures, but was still perfectly legible; and the hardware still functioned.
So, instead of throwing it away, I gave it a new life on my wall, as a personal "HUD" screen, showing relevant info
such as weather, time and bus schedules.

## Revision #1

The first revision was just a hacked-together `.html` page with some inline Javascript string concatenation.
It fetched relevant data from publicly available API-s and displayed it out. The page took as little work as possible,
to get the prototype usefulness validated.

As I was already running a in-home Openshift3 cluster, deploying it into a Nginx stateless web container
was a non-issue and after two nights of hacking I had a functional prototype.

### Features

- Display current time using [moment.js](https://momentjs.com)
- Show current weather and the forecast for the next three hours using data from [OpenWeatherMap](https://openweathermap.org/api) API
- Show the departure times (using real-time GPS predictions) of busses from my nearest stop using the undocumented and quite horrible CSV "API" from [Tallinn city](https://soiduplaan.tallinn.ee)
- Always-on screen on dark background

![Revision 1](/content/2017/screen/rev1.jpg)

The solution was quick to implement and worked; providing useful information when I was heading out.
However, as quick PoC-s often do, it had its problems:

- The codebase was a mess - literally hacked together into a couple of files. It needed refactoring and "beautification" before I dared show it to anyone
- All config was hardcoded
- It was not very modular nor expandable (with new features)
- After a couple of months, I learned what [screen burn-in](https://en.wikipedia.org/wiki/Screen_burn-in) means

![Screen burn](/content/2017/screen/screen-burn.jpg)

Screen burn-in: the outlines of previous content are visibly "burned in".

## Revision #2

I was satisfied that the concept worked and provided value; time to refactor.

I ordered a cheap-ish, but still good quality (excellent, large screen!) tablet from China -[Teclast T10](https://www.gearbest.com/tablet-pcs/pp_690462.html). This gave me larger screen real-estate and also a better quality (and not broken) touch-screen.

I rewrote the code from zero and split the project into two parts: [screen-frontend](https://github.com/sqroot-eu/screen-frontend) ([Vue.js](https://vuejs.org)) and [screen-backend](https://github.com/sqroot-eu/screen-backend) (Python / Flask). This allowed me to do it in a API-first manner and also keep everything nice and apart.

Getting to know Vue and Webpack without prior major JavaScript experience was a challenge, especially the asset build process (I insist in using CoffeeScript and Sass over their 'plainer' cousins), but finally, I succeeded.

I removed most of the hardcoded values (weather station to use, bus stop ID-s) from the code, which makes it more portable and - in theory - allows others to benefit from the project, although this is not a goal in itself.

I switched to weather data provider to the [national weather service](http://ilmateenistus.ee),
because they have local data (although in XML...) and audio reports.

Why would `http://www.ilmateenistus.ee/ilma_andmed/xml/hoiatus.php` API respond with `HTTP 404` for valid queries is beyond me.
Whoever developed that endpoint owes me 30 minutes of lost time.

I solved the screen burn-in problem by keeping the screen OFF most of the time. The tablet turns the screen ON automatically
for five minutes when the front-facing camera detects motion. This saves the screen, some power and also keeps the ambient
light low at night. This can be done with the [Fully kiosk browser](https://www.fully-kiosk.com/).

### Features

- Show current time
- Show current weather + forecast for the next couple of days
- Play weather forecast in audio form (audio provided by the national weather service)
- Highlight and display weather alerts for my area, if there are any
- Show bus schedule in real-time
- Track investments
- Turn screen ON only if motion is detected

![Revision 2](/content/2017/screen/rev2.jpg)

## Future?

Tentative future plans include refactoring the codebase some more (don't look at my variable names...)
and adding more features, for example a tab that shows readings from home IoT sensors.

As the tablet is running its original Chinese firmware, I don't consider it a "trusted" device: it could
be doing [much more than only detect motion](https://www.cyberscoop.com/android-malware-china-huawei-zte-kryptowire-blu-products)
with its camera. Hence, I will either try to flash
stock Android to it (tried once, failed, any links to tutorials for this specific model are appreciated)
or more likely, use my PFSense & IoT WiFi to block its access to the outside Internet.

## Skill Level-Ups

- First contact with Vue.js, Webpack and with Javascript frontend frameworks in general
- Python / Flask experience
- Open source credz (both the [backend](https://github.com/sqroot-eu/screen-backend) and [frontend](https://github.com/sqroot-eu/screen-frontend) are in GitHub)

The project can be seen and used from [screen.sqroot.eu](https://screen.sqroot.eu) and the backend API is at [api.screen.sqroot.eu](https://api.screen.sqroot.eu).
