



(function($){
      

    // add year in js
    var datejs = new Date();
    var year = datejs.getFullYear(); 
    var year_int = $('#year').size();

    if (year_int > 0 ) {
      $('#year').html(year);
    };

    // when a href has emailto, the page will unload
    // so, add class( click-email), to prevent the unload page happen
    $('a[href^="mailto:"]').on('click', function() {
        $('body').addClass('click-email');
    });

    //add current month to body class;
    getMonthName();
    //
    //flexslider
    if (jQuery().flexslider) {
        
        jQuery("#mainslider .flexslider").flexslider({
            animation: "fade",
            animationLoop: true,
            useCSS: true,
            controlNav: true,   
            directionNav: true,
            prevText: "prev",
            nextText: "next",
            smoothHeight: false,
            slideshowSpeed:4000,
            animationSpeed:1000,
            start: function( slider ) {
                slider.find('.slide_description .holder').children().css({'visibility': 'hidden'});
                slider.find('.flex-active-slide .slide_description .holder').children().each(function(index){
                var self = jQuery(this);
                var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                setTimeout(function(){
                        self.addClass("animated "+animationClass);
                    }, index*200);
                });
            },
            after :function( slider ){
                slider.find('.flex-active-slide .slide_description .holder').children().each(function(index){
                var self = jQuery(this);
                var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                setTimeout(function(){
                        self.addClass("animated "+animationClass);
                    }, index*200);
                });
            },
            end :function( slider ){
                slider.find('.slide_description .holder').children().each(function() {
                    jQuery(this).attr('class', '');
                });
            }
        });


    }
    // end flexslider
    // 



    $('.data-change-image').each(function() {
    
        change_image_src($(this));        
    
    });



    get_another_element_height_on_me($('#mainslider'),$('.site-content-container'),'top');




    get_parent_height($('.parent-height'),$('.children-height'));


    // home content trigger
    
    $('.home-content-trigger').on( "click", function() {
        
        $(this).parent().toggleClass('on');
        $(this).children('i').toggleClass('rotate180');
    }); 


    // three items 
    if ( $(".three-items-holder .item").length > 2 ) {

           $('.three-items-holder').owlCarousel({
                loop:true,
                margin:25,
                autoplay: false,                       
                navText: [
                    '<i class="c-icon-arrow-thin-left"></i>',
                    '<i class="c-icon-arrow-thin-right"></i>'
                ], 
                responsive:{
                    0:{
                        items:1,
                        dots:true,
                        nav:true
                    },
                    768:{
                        items:2,
                        dots:true,
                        nav:false
                    },
                    992:{
                        items:3,
                        dots:true,
                        nav:false
                    },
                    1024:{
                        items:3,
                        dots:false,
                        nav:true
                    }         
                }
            });

    }



    function resizeLayout() {

        var window_height = $( window ).height();
        var window_width = $( window ).width();

        if ( isDesktop ) {
            $('body').removeClass('short-height');
            if (window_height < 768) {
                $('body').addClass('short-height');
            };
        };  

       //init
        setTimeout(function(){ 
            if (window_width > 767 ) {
                cal_half_element_height();
            };        
        }, 100);  

        //
        cal_half_element_height();
        //
        get_parent_height($('.parent-height'),$('.children-height'));


    }

    resizeLayout();

    $( window ).resize(function() {
        resizeLayout();
    });



    sample_hover($('.footer-logos-holder'));

    $('.boxes--vertical .click-link').each(function() {
          sample_hover($(this));   
    });
    

    // 
    var wow;
    wow = new WOW({
          boxClass:     'css-animate',      // default
          animateClass: 'animated', // default
          offset:       50,          // default
          mobile:       true,       // default
          live:         true        // default
        }
    )
    wow.init();

    // call full screen popup
    $('.header--menu a,.close-btn').on( "click", function() {
        $('.full-screen-fixed-top').toggleClass('on');
    }); 

    $('.header--menu a').one( "click", function() {
        $(".full-screen-fixed-top >.container").mCustomScrollbar();         
    }); 

    //call book panel h
    $('.header--book > a,.close-btn-h').on( "click", function() {
        $('.search-box-horizontal,.header-folding').toggleClass('on');
    });  


    //scroll 
    //
    var top = $(window).scrollTop();
    var direction;

    $(window).scroll(function(){
        var cur_top = $(window).scrollTop();          
        if(top < cur_top)
        {
            direction = 'down';

            $('body').addClass('scroll-down');  
        }else {
            direction = 'up';

            if (cur_top == 0 ) {
                direction = 'top';
                $('body').removeClass('scroll-down');
            };
        }
        top = cur_top;
    });

    // -- end scroll    
    // 
    
    if (isMobile) {
        $('.footer-logos-holder').parent().addClass('hover');

        $('.menu-toggle').on( "click", function(e) {
            e.preventDefault(); 
            $('.menu-toggle,.footer-links .link-holder').toggleClass('on');           
        }); 
    };

//
//
//
})(jQuery);



$(window).load(function () {
    $('body').addClass('loaded');
    if (isDesktop) {
        skrollr.init({
            forceHeight: false
        });
    //        
    };    
});


$(window).scroll(function(e){
  my_parallax();
});

$(window).on('beforeunload', function(){
    if ( $('body').hasClass('click-email') ) {

    } else if ($('html').hasClass('lt-ie10')) {

    }else {
        $('body').removeClass('loaded');
    };
    
});

