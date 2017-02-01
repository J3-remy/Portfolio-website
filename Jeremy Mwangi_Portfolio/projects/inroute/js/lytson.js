$(window).load(function() {
		// Animate loader off screen\
		setTimeout(function(){
        $('.spinner').fadeOut('slow');
    	},5000);
    	$('#menu-button').on('click', function() {
		  $(document.body).toggleClass('menu-open');
		});
});


/*---smooth scroll--*/
$(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1000, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });

$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(1000);



$('.skip').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(2000, newpage);

});



function newpage() {

window.location = newLocation;

}

});