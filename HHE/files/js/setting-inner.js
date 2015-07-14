

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





	}); // end document load 

}()); // end function strict


$(window).load(function() {

});

//
