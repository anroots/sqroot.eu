---
title: Making the web experience smoother with loading fades
date: 2011-06-15
category: Software Development
tags:
- GUI
- css
- javascript
- HTML element
- JQuery
- Style Sheets
- UX
- Web page
---
CSS3 transitions and jQuery animations have greatly affected the web experience. Following up on the idea, here&#039;s a quick snippet to make the webpage smoothly fade in/out on page loads.

When you click on a link, the page fades out, leaving only white behind, when the loading of the new page is complete, the page fades in again. A couple of things to note though: the trick will only be useful with really small pages, since loading large pictures leaves the user wondering what the hell happened since (s)he can&#039;t see any action. One of the principles of browser design is to show the content as soon as it&#039;s available, hence the page &#039;jumping&#039; one sometimes sees with a slower connection. That said, only use it on cacheable, static and small pages.


First, hide the body of the page with CSS:

```css
body { display: hidden; }
```

...and add the following JavaScript to hide/show the page. Don&#039;t forget to include jQuery first!

```js
$(document).ready(function(){
    $(&#039;body&#039;).fadeIn(&#039;slow&#039;);
});

$(document).unload(function(){
   $(&#039;body&#039;).fadeOut(&#039;fast&#039;);
});
```
Update: After using the technique for a while, I noticed several problems with it. Firstly, what happens when the user doesn&#039;t have JS enabled? The page stays white. JS crashes due to syntax errors also cause failure with fadeIn. Secondly, if the page is large enough, the user might simply leave. A Loading... spinner would fix that.

