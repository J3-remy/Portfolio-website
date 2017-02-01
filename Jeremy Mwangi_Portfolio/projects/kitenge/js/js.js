$(document).ready(function(){

	$('#suzana img').mouseenter(function(){
		$(this).animate({
			height:'+=20'

		});
	});
	$('#suzana img').mouseleave(function(){
		$(this).animate({
			height:'-=20'
			
		});
	});

	$('#sarabi img').mouseenter(function(){
		$(this).animate({
			height:'+=20'

		});
	});
	$('#sarabi img').mouseleave(function(){
		$(this).animate({
			height:'-=20'
			
		})
	});


	$('#kanji img').mouseenter(function(){
		$(this).animate({
			height:'+=20'

		});
	});
	$('#kanji img').mouseleave(function(){
		$(this).animate({
			height:'-=20'
			
		});
	});


	$('#yemi img').mouseenter(function(){
		$(this).animate({
			height:'+=20'

		});
	});
	$('#yemi img').mouseleave(function(){
		$(this).animate({
			height:'-=20'
			
		});
	});


	$('#sautisol img').mouseenter(function(){
		$(this).animate({
			height:'+=20'
			

		});
	});
	$('#sautisol img').mouseleave(function(){
		$(this).animate({
			height:'-=20'

			
		});
	});


	$('#rafiki img').mouseenter(function(){
		$(this).animate({
			height:'+=20'

		});
	});
	$('#rafiki img').mouseleave(function(){
		$(this).animate({
			height:'-=20'
			
		});
	});
	$('#aramid img').mouseenter(function(){
		$(this).animate({
			height:'+=40'

		});
	});
	$('#aramid img').mouseleave(function(){
		$(this).animate({
			height:'-=40'
			
		});
	});

	

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800).effect(function(){
			$(this).bounce(1000);
		});
		return false;
	});
		

});

