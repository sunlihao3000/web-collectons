



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
    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : true,
        width       : '80%',
        height      : '80%',
        helpers : {
            title : {
                titlePosition: 'inside',
            }           
        },
        afterShow: function() {
            $('.fancybox-wrap').swipe({
                swipe : function(event, direction) {
                    if (direction === 'left' || direction === 'up') {
                        $.fancybox.prev( direction );
                    } else {
                        $.fancybox.next( direction );
                    }
                }
            });
        },
        afterLoad : function() {
        }         
    });


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
    //

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
                    '<i class="zmdi zmdi-chevron-left"></i>',
                    '<i class="zmdi zmdi-chevron-right"></i>'
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

    // footer gallery 
    if ($('.footer-gallery .item').length > 3) {
        $('.footer-gallery .holder').owlCarousel({
            loop:true,
            margin:0,
            autoplay: false,                       
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>'
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
                    nav:true
                },
                1024:{
                    items:4,
                    dots:false,
                    nav:true
                }         
            }
        });

    };


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
                //cal_half_element_height();

                $('.height-half').each(function() {
                    cal_half_element_height2($('.c-height-full'), $(this),16,'height');
                });

                var this_e_height = $('.c-height-full').height();

                console.log(this_e_height);
                if (this_e_height > 0) {
                   var total_half_height = (this_e_height + this_e_height/2)/2;
                   if (total_half_height > 0) {
                        $('.total-half-height').css('height',total_half_height);
                   };
                };

            };        
        }, 100);  

        //
        cal_half_element_height();
        //
        get_parent_height($('.parent-height'),$('.children-height'));

        if ( window_width > 420) {
            get_another_element_height_on_me($('#mainslider'),$('.mega-menu'),'height');    
            $('.mega-menu').removeClass('on_mobile');        
        } else{
            $('.mega-menu').addClass('on_mobile');
        };
        //


    }

    resizeLayout();

    $( window ).resize(function() {
        resizeLayout();
    });



    sample_hover($('.footer-logos-holder'));
    
    $('.click-link').each(function() {
        sample_hover($(this));
    });
    
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
    $('.header--menu.menu a,.menu .close-btn').on( "click", function() {
        $('.header--menu.menu a').children('i').toggleClass('clicked');
        $('.full-screen-fixed-top.menu').toggleClass('on');
        $('body').toggleClass('overflow-h');
    }); 

    $('.header--menu a').one( "click", function() {
        $(".full-screen-fixed-top.menu >.container").mCustomScrollbar();         
    }); 

    //call book panel h
    $('.header--book.not-mobile > a,.close-btn-h').on( "click", function() {
        $('.search-box-horizontal,.header-three-columns').toggleClass('on');
        $('.header--book.not-mobile').toggleClass('off');
    });  

    $('.header--book.on-mobile > a,.booking .close-btn').on( "click", function() {
        $('.full-screen-fixed-top.booking').toggleClass('on');
        $('body').toggleClass('overflow-h');
    });  

    $('.header--book.on-mobile > a').one( "click", function() {
        $(".full-screen-fixed-top.booking >.container").mCustomScrollbar();         
    }); 

    $('.ratecode input').each(function() {
    
        $(this).on('focusout', function(e) {             
            var this_input_val = $(this).val();
            if (this_input_val == "") {
                $(this).val('Have a Code?');
            };         
        });
    
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
            $('.footer-links .link-holder').toggleClass('on');           
        }); 
    };

    //
    //
    $('.menu-toggle').each(function() {
    
        $(this).on('click', function(e) { 
            e.preventDefault();
            $(this).toggleClass('on');    
    
        });
    
    });
    //

    //
    $('.snav-holder-inner').on( "click", function() {
        $('.mega-menu').toggleClass('on');
        $('body,html').animate({
            scrollTop: 0
        }, 800);         
    });
    //
    $('.close-mega-menu').on( "click", function() {
        $('.mega-menu').toggleClass('on');
        $('.snav-holder-inner .menu-toggle').toggleClass('on');  

    }); 


    if ( $('.snav-holder .horizontal-links li').length > 6) {
        
        $('.snav-holder .horizontal-links').owlCarousel({
            loop:true,
            margin:0,
            autoplay: false,                       
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>'
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
                    nav:true
                },
                1024:{
                    items:4,
                    dots:false,
                    nav:true
                },
                1200:{
                    items:6,
                    dots:false,
                    nav:true
                }                         
            }
        });
    };

    //
    //
    //
    var room_features_icon_height = $('.room-feature-icons').height();
    
    if (room_features_icon_height > 0) {
        if (room_features_icon_height > 130) {
            $('.room-feature-icons').css('height', 130);
            $('.room-features .item-trigger').addClass('show');

            $('.room-features .item-trigger').on( "click", function() {
                $(this).toggleClass('on');
                $('.room-feature-icons').toggleClass('opened');

                if ( $('.room-feature-icons').hasClass('opened')) {
                    $('.room-feature-icons').css('height',room_features_icon_height);
                } else {
                    $('.room-feature-icons').css('height',130);
                };
            });             

        };
    };

    //
    $('ul.vertical-links > li').each(function() { 

        $this = $(this);  

        if ( $(this).children('ul').length > 0 ) {  
           


                $(this).addClass('has-children');
                //var this_href = $(this).children('a').attr('href'); 
                $this.append( "<span><i class='c-icon-down'></i> </span>");  

                if ($('html').hasClass('touch')) { 
                    //alert('Touch Screen');
                    // stop the frist click
                    //$(this).children('a').one("click", function(e) {e.preventDefault();});
                    //
                    
                    $(this).children('span').on("click",function(){
                        $(this).parent().toggleClass('hover');
                    });

                } else { 
                    //alert('No Touch Screen');
                  
                    $(this).on(
                        {mouseenter: function() {

                            $(this).addClass('hover');
                       
                        },mouseleave: function() {

                            $(this).removeClass('hover');                  
                        }
                    });

    

           };//

        }


    });


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

