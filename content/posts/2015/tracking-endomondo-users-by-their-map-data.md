---
category: Writings
title: Tracking Endomondo Users By Their Map Data
date: 2015-07-07
subtitle: How I Know Where You Live
image: /content/2015/07/spy_map_header.png
---

It started with an innocent-looking Facebook status update: my friend Anna<sup>*</sup> was enjoying the good weather by riding her bike and tracking her ride with Endomondo (a social sports statistics service).

![Facebook status update from Endomondo](/content/2015/07/fb_update.png)

Clicking on it took me to Endomondo's homepage where details of the sports activity - including a detailed route map - could be seen.

![Endomondo activity details](/content/2015/07/activity_map.png)

I am a somewhat privacy-aware person and a white-hat "investigator" of infosystems so naturally my first thought was whether the percise map data was public (it was) and how accurately this could be misused by (for example) stalking fans of a published reporter.

# Endomondo Privacy

![Signup form](/content/2015/07/i_agree.png)

New users of Endomondo have to check a box saying they agree with the ToS and [Privacy Policy](https://www.endomondo.com/privacy). Should one actually read the latter, it explicitly states that by default the user's profile and maps for workouts are visible to the public (requiring no sign-up nor "befriending" to gain access).

> Sharing Personal Information and User Generated Content. Default Privacy Settings for users signing up after February 26, 2014: Profile visibility: Public. I prefer to control who can see the map for my workouts. This should be visible to: Public.

Regardless of whether the user is unaware (not conscious of privacy concerns) or uncaring (a choice to be public), the data can be accessed by anyone if it's set to the Public setting.

# Proving a Point

This intrigued me. Most people would not advertise their home address in public (indeed, there has been quite an uproar over the news that [internet domain owners should list their addresses publicly](http://arstechnica.com/tech-policy/2015/06/domain-name-whois-anonymity-hangs-in-the-balance-under-icann-proposal)), but they'd still share relevant meta-data that could be used to violate their privacy.

I wanted an answer: **Given that a semi-active Endomondo user shares his data publicly, how successfully could I use this to determine where they live?**

## Goals

- Can GPS location data be extracted from public Endomondo activities?
- Can I collect this data in sufficient quantities to perform data analysis?
- How accurately can I determine the real address of my target?

I decided to investigate Endomondo-s back-end systems to find whether the data I'm interested in is shared publicly and scrapable, whether I can collect and process it and could I determine someones real address by that data accurately enough that I could show up one morning as they go to work and say hi.

## The Targets

I identified three of my friends who had at least a couple months worth of public running/cycling activity on Endomondo. They would be my willing (but anonymous) data-set for the experiment.

## The Experiment

### Collecting Data From Endomondo

The first part of the task turned out to be relatively easy. The web interface of Endomondo lists user's activity in a calendar view. Clicking on next-previous month buttons does not refresh the web page, which means the data is pulled in dynamically with XHR requests.

![Endo activity calendar](/content/2015/07/activity_calendar.png)

Looking at XHR requests in Chrome DevTools after clicking on an activity icon in the calender revealed a JSON API that lists GPS coordinates for the current activity in a nice, parsable format.

![Endo JSON API](/content/2015/07/inspect_api.png)

I downloaded seven to thirteen data sets (reports from activities) from each target profile and saved them as JSON files.

### Processing The Data

Next, I wrote a small PHP script that would read in all the datasets I had collected, parse it and extract only the relevant information I needed - in this case, the starting and ending GPS coordinates for the activity.

Assuming I'd collected data on only one activity, I would have the following information.

```js
[
	{
		"type": "startingPoint",
		"latitude": 58.00000,
		"longitude": 26.00000
	},
	{
		"type": "endingPoint",
		"latitude": 58.00000,
		"longitude": 26.00000
	}
]
```

Next, I created a simple HTML / JS page which would initialize and display Google Maps. The array of coordinates I compiled previously was
JSON-compatible and easily imported into the script, which would add all the coordinates as location markers on the same map. This way, I had one map with data from several activities. In addition, I used blue markers to mark the end location for the runs and red ones to indicate the starting position.

The result was as I had hoped - a pattern with clusters of markers in the same location with only a few deviations - indicating that the activity was started and ended at the same location. I needed a larger than one data set to increase precision - one run might start and stop on the other side of the street while a dozen runs gives a definitive pattern.

## The Results

I managed to download, process and create a "probably lives here" map for all of my Targets. Keep in mind that I didn't log in to Endomondo to aquire my initial data nor did I actually know their real home addresses (I spoke with each person to explain my experiment and to verify the accuracy of my guess).

### Anna - Accuracy: 100%

![Anna's house on Google Maps](/content/2015/07/spy_map_1.png)
![Anna's house on Google Street View](/content/2015/07/street_view_1.png)

Anna's house was easy to identify. The markers on the map clustered on the street between a schoolhouse and a small private residence, which I assumed was her home.

### Tuule - Accuracy: 100%

![Tuule's house on Google Maps](/content/2015/07/spy_map_2.png)
![Tuule's house on Google Street View](/content/2015/07/street_view_2.png)

Identifying where I could visit Tuule<sup>*</sup> did not cause any problems either. Her markers clustered on the street between two private residences, but some of the markers were in the yard of one of them, identifying the correct house.

### Jakob - Accuracy: ~20 meters

Jakob<sup>*</sup> had clusters of markers in two parts of the city - he'd moved from a university dorm to one of two private residences.

![Jacob's house on Google Maps](/content/2015/07/spy_map_3.1.png)

I identified the dorm building...

![Jacob's house on Google Maps](/content/2015/07/spy_map_3.2.png)
![Jacob's house on Google Street View](/content/2015/07/street_view_3.1.png)

...but couldn't accurately tell which private residence was the correct one.

![Jacob's house on Google Street View](/content/2015/07/street_view_3.2.png)
![Jacob's house on Google Maps](/content/2015/07/spy_map_3.3.png)

## Conclusions

It is relatively easy to tell where one lives by their public sports activity - often with uncanny accuracy. The best part? It doesn't have to be Endomondo specifically - any good GPS data source will do (and they can be combined), be it RunKeeper, Twitter or (yes) Facebook ([Stalking Your Friends with Facebook Messenger](https://medium.com/faith-and-future/stalking-your-friends-with-facebook-messenger-9da8820bd27d)).

As for my project, it was a quick proof-of-concept. It wouldn't be difficult to misuse the publicity of information further: it would not be difficult to write a web application that takes a person's Endomondo name as input, does some processing and outputs her probable address, map and Google Street View a couple of seconds later.

What can one do about this? You're already improving the situation by reading this article and being more aware of privacy issues. You could also turn off the "Public" settings of your Endomondo, [Facebook](http://gizmodo.com/the-complete-guide-to-locking-down-facebook-privacy-for-1630674932) and other social media accounts. Mark might say that privacy is dead, but I believe everyone has a right to keep some parts of their lives to themselves regardless of whether [they have something to hide](https://en.wikipedia.org/wiki/Nothing_to_hide_argument) or not.

Social networks are not bad nor dangerous by themselves. Nor are alcoholic beverages... but there is a reason both should be responsibly consumed by adults.

Think before you share.

--------

<sup>*</sup> - real names and personal data in this article are masked as I do not want to further compromise the privacy of my friends.