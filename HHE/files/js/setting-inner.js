

(function(){
  "use strict";

  	$(document).ready(function($){
      
        // tanv
        var tnav_int = $('.tnav-container > ul > li.active ul').size();
        
        if ( tnav_int > 0 ) {
            $('.tnav-container').show();
        };

        // add table stley into room section -- tab content

        $('article table').addClass('table table-hover full-width ');
        var snav_page_active = $('.snav-container > ul > li.active').size(); 

        // windows height// 
        
        function resizeLayout() { 
            var window_height = $( window ).height();
            var window_width = $( window ).width();

        }; //end resizelayout


        // window resize
        $(window).resize(function() {
            resizeLayout();
        });    

        resizeLayout();
        

        //yourtube video css
        $('iframe[src*="youtube.com"]').each(function() {
            //var url = $(this).attr("src")
            $(this).wrap( "<div class='video-container'></div>" )
        }); 


        // hotel gallery
        var hotel_gallery_int = $('.hotel-gallery #lightSlider > li').size();
        var hotel_gallery = $('.hotel-gallery #lightSlider');

        hotel_gallery.lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 7
        });


        // hotel detail offers 
        var hotel_details_offer_int = $('.hotel-special-offers__carousel .item').size();
        var hotel_details_offer_holder = $('.hotel-special-offers__carousel');
        if (hotel_details_offer_int > 3 ) {
             hotel_details_offer_holder.owlCarousel({
                loop:true,            
                autoplay: false,                            
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
                        nav:true,
                        margin:20
                    }                
                }
            });            
        };

        // our member
        var our_member_int = $('.members-group-list li').size();
        if (our_member_int > 0) {
              var wall = $('.members-group-list').GITheWall({
                  nextButtonClass: 'fa fa-arrow-right',
                  prevButtonClass: 'fa fa-arrow-left',
                  closeButtonClass: 'fa fa-times'
              });
            
        };


	}); // end document load 

}()); // end function strict


$(window).load(function() {

});

//
