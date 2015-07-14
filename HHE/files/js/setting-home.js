
(function(){

  "use strict";
  
  	$(document).ready(function($){


    // our cultrual
    
   var owl_cultrual_routes_inti = $('.cultrual-routes-holder .item').size();
   var owl_cultrual_routes = $('.cultrual-routes-holder');

    if (owl_cultrual_routes_inti > 3) {

         owl_cultrual_routes.owlCarousel({
            loop:true,
            margin:10,
            autoplay: false,
            dots:false,
            nav:true,
            mouseDrag:true,
            center:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ], 
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:4
                }                
            }
        });
                   
    };

    //

    // our offers
    
   var owl_offers_inti = $('.hotel-offers-holder .item').size();
   var owl_offers = $('.hotel-offers-holder');

    if (owl_offers_inti > 2) {

         owl_offers.owlCarousel({
            loop:true,
            margin:10,
            autoplay: false,
            dots:false,
            nav:true,
            mouseDrag:true,
            center:false,
            navText: [
                '<i class="c-icon-arrow-thin-left"></i>',
                '<i class="c-icon-arrow-thin-right"></i>'
            ], 
            responsive:{
                0:{
                    items:1
                },
                1024:{
                    items:2
                },
                1200:{
                    items:3
                }                
            }
        });
                   
    };

    //hotels read more

    var hotels_items = $('.hotels-holder figure').size();
    if (isDesktop) {
    
        if (hotels_items > 10 ) {
            $('.hotels .separator-holder').show();
            $('.hotels .circle').click(function() { 
                
                if ($('.see-more-holder').hasClass('on') ) {
                    $('.see-more-holder').removeClass('on');
                    $(this).children('p').empty('').text('see more');
                    $(this).children('i').removeClass('fa-minus').addClass('fa-plus');
                } else{
                   $('.see-more-holder').addClass('on'); 
                   $(this).children('p').empty('').text('see less'); 
                   $(this).children('i').removeClass('fa-plus').addClass('fa-minus');  
                };
            });

        };

    };



    });// 

}());  // end function strict





// makes sure the whole site is loaded
$(window).load(function () {



});
