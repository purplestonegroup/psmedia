$(document).ready(function(){
	$('#menu').slicknav();


	$(window).load(function() {
	  $('.flexslider').flexslider({
	    animation: "slide"
	  });
	});
	

	// hide #back-top first
	$("#back-top").hide();
		
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	$('.least-gallery').least();

});
	

