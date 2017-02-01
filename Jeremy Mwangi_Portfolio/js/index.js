(function ($) {
  "use strict"
  
  var $window;
  
  function stickyNavigation () {
    var $this = $(this),
        navScrolled = "nav--scrolled",
        siteHeader = $('.site-header').height(),
        navbar = $('.navbar');
    
    if($this.scrollTop() > siteHeader) {
      navbar.addClass(navScrolled);
    } else {
      navbar.removeClass(navScrolled);
    }
  } 
  
  $(function () {
    var $window = $(window);
    
    $window.scroll(stickyNavigation);
  });
})(jQuery);

$(function(){

  
  var w  = $(window).width();
  var h = $(window).height();

  
  var lineCount = $(".code").height() / 25;
  for(var i = 1; i <= lineCount; i++){
    $(".line-count").append("<span>"+i+"</span>")
  }

  
  $(window).hover(function(e){
    lineCount = $(".code").height() / 25;
    var pY = e.pageY;
    for(var c = 1; c <= lineCount; c++){
      if(pY > $(".line-count span:nth-child("+c+")").offset().top && pY < $(".line-count span:nth-child("+c+")").offset().top + 25){
          $(".line-count span:nth-child("+c+")").css({
            background:"rgba(255,255,255,.1)"
          })
      }
    }
  },function(){
    $(".line-count span").css({
      background:"#272822"
    })
  });

  
  $(".code-items .code-item").append('<span class="directional-arrow"></span>')

  
  $(".code-items .code-item .directional-arrow").click(function(){

    if($(this).parent().hasClass('close')){
      $(this).parent().removeClass('close')
      $(".code-item-content",$(this).parent()).show();
      
      $(".line-count").html("");
      var lineCount = $(".code").height() / 25;
      for(var i = 1; i <= lineCount; i++){
        $(".line-count").append("<span>"+i+"</span>")
      }
    }else{
      $(this).parent().addClass('close');
      $(".code-item-content",$(this).parent()).hide();
      
      $(".line-count").html("");
      var lineCount = $(".code").height() / 25;
      for(var i = 1; i <= lineCount; i++){
        $(".line-count").append("<span>"+i+"</span>")
      }
    }

  })
  

});
var lang = {
  "html": "80%",
  "css": "80%",
  "javascript": "45%",
   "angular": "30%",
  "wordpress": "70%",
  "php": "50%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});
$(document).ready(function() {
  // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});