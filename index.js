// nav start 
$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});
// nav end
  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });





  $('.testi2').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1170: {
        items: 1
      }
    }
  });
  
  $(function() {
      // 1) ASSIGN EACH 'DOT' A NUMBER
      dotcount = 1;
      $('.testi2 .owl-dot').each(function() {
          $(this).addClass('dotnumber' + dotcount);
          $(this).attr('data-info', dotcount);
          dotcount = dotcount + 1;
      });
      // 2) ASSIGN EACH 'SLIDE' A NUMBER
      slidecount = 1;
      $('.testi2 .owl-item').not('.cloned').each(function() {
          $(this).addClass('slidenumber' + slidecount);
          slidecount = slidecount + 1;
      });
      $('.testi2 .owl-dot').each(function() {
          grab = jQuery(this).data('info');
          slidegrab = $('.slidenumber' + grab + ' img').attr('src');
          console.log(slidegrab);
          $(this).css("background-image", "url(" + slidegrab + ")");
      });
      // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
      // TO MAKE IT ALL NEAT 
  
  });



  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  
  