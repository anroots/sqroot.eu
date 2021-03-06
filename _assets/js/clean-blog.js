$(function() {

	$("img:not(.gallery)").addClass("img-responsive");

  $(".content-container picture").click(function(e){
    window.location.href = e.target.src;
  });

	// Set background image on post pages
	let headerImgContainer = $('.intro-header');
	let headerBackgroundUrl = headerImgContainer.data('background-img');
	if (typeof headerBackgroundUrl !== "undefined" && headerBackgroundUrl.length > 0) {
	  headerImgContainer.css('background-image', 'url(' + headerBackgroundUrl + ')').css('padding', '200px 0');
    }
});


// Google Analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10052990-4']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

