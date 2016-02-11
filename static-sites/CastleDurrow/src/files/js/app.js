
(function($){
      
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


    // four items 
    if ( $(".four-items-holder .item").length > 4 ) {

        $('.four-items-holder').owlCarousel({
            loop:true,
            autoplay: false,                       
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
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
                    items:4,
                    dots:false,
                    nav:true
                }         
            }
        });
    }
    //

    // footer gallery 
    if ($('.footer-gallery .item').length > 3) {
        $('.footer-gallery .holder').owlCarousel({
            loop:true,
            margin:0,
            autoplay: false,                       
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
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
                    dots:true,
                    nav:false
                }         
            }
        });

    };
    //

    function resizeLayout() {

        var window_height = $( window ).height();
        var window_width = $( window ).width();

        var header_height = $('.header-three-columns').height();
        var footer_height = $('.main-site-container').height();

        var main_footer_height = $('.main-site-container').height();
        var four_boxed_height = $('.four-items-carousel').height();
        var welcome_massage_height = $('.welcome-massage-box').height();

        var four_boxed_height_element_hight = $('.four-items-carousel .item-inner-holder').height();


        //home page
        if (window_width > 1023) {
            var four_boxed_position = main_footer_height - four_boxed_height - welcome_massage_height;
            $('.home .main-site-container').css('bottom', - four_boxed_position);
            $('.home .main-site-container').css('top',  'auto');
            //$('.titles-holder').css('bottom',foure_boxed_height);
        } else if (window_width > 767 && window_width <= 1023 ) {
            var four_boxed_position = main_footer_height - four_boxed_height_element_hight - welcome_massage_height;
            $('.home .main-site-container').css('top',  'auto');
             $('.home .main-site-container').css('bottom',  -four_boxed_position);
        } else {
            var four_boxed_position = window_height - four_boxed_height_element_hight;
             $('.home .main-site-container').css('top',  four_boxed_position);   
             $('.home .main-site-container').css('bottom',  'auto');          

        };

        //inside page
        
        setTimeout(function(){ 
            $('.inner .main-site-container').css('marginTop', window_height);

        },50);                
        
        //
        cal_half_element_height();
        //
        get_parent_height($('.parent-height'),$('.children-height'));

    }

    resizeLayout();

    $( window ).resize(function() {
        resizeLayout();
    });


    $('.click-link').each(function() {
        sample_hover($(this));
    });
    
    $('.ratecode input').each(function() {
    
        $(this).on('focusout', function(e) {             
            var this_input_val = $(this).val();
            if (this_input_val == "") {
                $(this).val('Have a Code?');
            };         
        });
    
    });


    if (isMobile) {
        // header
        $('.menu-toggle.header').on( "click", function(e) {
            e.preventDefault(); 
            $(this).toggleClass('on');  
            $('.full-screen-fixed-top.menu').toggleClass('on');  
            $('body').toggleClass('overflow-h');       
        }); 

        // close full screen popup
        $('.menu .close-btn').on( "click", function() {
            $('.full-screen-fixed-top.menu,.menu-toggle.header').toggleClass('on');
            $('body').toggleClass('overflow-h');
        });   

        $('.searchbox-trigger.on-tablet-mobile').on( "click", function(e) {
            e.preventDefault(); 
            $(this).toggleClass('on');  
            $('.full-screen-fixed-top.booking').toggleClass('on');   
            $('body').toggleClass('overflow-h');      
        }); 

        // call full screen popup
        $('.booking .close-btn').on( "click", function() {
            $('.full-screen-fixed-top.booking').toggleClass('on');
            $('body').toggleClass('overflow-h');
        });   

    };

    // Superslides
    //
    $('#slides').superslides({
        animation: 'fade',
        play: 6000,
        pagination: false,
        //inherit_height_from: '.full-screen-background',
        animation_speed: 3000
    });
 
    //
    $('.docts-holder').on( "click", function() {
        $(this).toggleClass('on');
        $('.header-social-icons').toggleClass('on');
    }); 
    //
    //
    //
    $('.menu-toggle.footer').on( "click", function(e) {
        e.preventDefault(); 
        $(this).toggleClass('on');
        $('.footer-links .link-holder').toggleClass('on');           
    }); 
    

    // drop down menu
    $(' .pnav > ul > li,.pnav > ul > li > ul > li').each(function() {


       if ( $(this).children('ul').length > 0 ) {
           

          $(this).on({
              mouseenter: function() {

                $(this).addClass('hover');
                   
              },mouseleave: function() {

                $(this).removeClass('hover');
                  
              }
          });
       };

    }); 

    $('.pnav > ul > li > ul > li').each(function() {
        if ( $(this).children('ul').length > 0 ) {
            $(this).children('a').append("<span class='arrow-right'><i class='fa fa-angle-right'></i> </span>");
        }
    });

   // snav
   $('.snav-container > ul > li').each(function() {
        
        if ($(this).children('ul').length > 0) {
            $(this).children('a').append( "<span class='arrow-left'><i class='fa fa-angle-left'></i> </span> <span class='arrow-right'><i class='fa fa-angle-right'></i> </span>");  
        }

        if ($('.snav-container > ul > li').hasClass('active') ) {
            
            if ($(this).hasClass('active')) {
                $(this).children('a').before("<span class='arrow-left'><i class='fa fa-angle-left'></i> </span>");    
            } else{
                $(this).addClass('not-active');
            };
        
        } else{

            
        };

    });


    // searchbox toggle
    $('.searchbox-trigger.on-desktop').on( "click", function(e) {
         e.preventDefault();
         $(this).parent().toggleClass('on');
    }); 

//
//
//
})(jQuery);


$(window).load(function () {

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

});


