
(function(){

  "use strict";
  
  	$(document).ready(function($){


    // our cultrual
    
   var owl_cultrual_routes_inti = $('.cultrual-routes-carousel .item').size();
   var owl_cultrual_routes = $('.cultrual-routes-carousel');

    if (owl_cultrual_routes_inti > 3) {

         owl_cultrual_routes.owlCarousel({
            loop:true,            
            autoplay: false,            
            nav:false,
            mouseDrag:true,
            center:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ], 
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                480:{
                    items:2,
                    dots:true,
                    margin:10
                },
                1024:{
                    items:3,
                    dots:true,
                    margin:0
                },
                1200:{
                    items:4,
                    dots:false,
                    margin:0
                }                
            }
        });
                   
    };

    //

    // our offers
    
   var owl_offers_inti = $('.hotel-offer-carousel .item').size();
   var owl_offers = $('.hotel-offer-carousel');

    if (owl_offers_inti > 2) {

         owl_offers.owlCarousel({
            loop:true,
            margin:0,
            autoplay: false,
            dots:false,
            nav:false,
            mouseDrag:true,
            center:false, 
            responsive:{
                0:{
                    items:1,
                    dots:true,                    
                },
                768:{
                    items:2,
                    dots:true,
                    nav:false                    
                },
                1200:{
                    items:3,
                    dots:false,                  
                }                
            }
        });
                   
    };

    //hotels read more

    var hotels_items = $('.hotels-holder figure').size();

    
    if (hotels_items > 10 ) {
        $('.hotels .separator-holder').show();
        $('.hotels .circle').click(function() { 

            $('.see-more-holder').slideToggle('slow');
            
            if ( $(this).children('i').hasClass('fa-plus') ) {
                $(this).children('p').empty('').text('see less');
                $(this).children('i').removeClass('fa-plus').addClass('fa-minus');
            } else{
               $(this).children('p').empty('').text('see more'); 
               $(this).children('i').removeClass('fa-minus').addClass('fa-plus');  
            };
        });

    };





    });// 

}());  // end function strict





// makes sure the whole site is loaded
$(window).load(function () {



});

