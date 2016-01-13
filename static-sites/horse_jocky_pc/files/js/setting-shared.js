





jQuery(document).ready(function($) {
        
        if ( isDesktop ) {
             if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                $('body').addClass('safari');        
            }           
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

        };
        //
        resizeLayout();

        // add year in js
        var datejs = new Date();
        var year = datejs.getFullYear(); 
        var year_int = $('#year').size();

        if (year_int > 0 ) {
          $('#year').html(year);
        };
        //

        //
        $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            beforeShow: function () {
                if (this.title) {
                    // New line
                    this.title += '<br />';
                    
                    // Add Pinterest button
                    //this.title += '<a href="//pinterest.com/pin/create/button/?url=pageUrl&media=imgUrl&description=myDescription" data-pin-config="above"  data-pin-do="buttonPin" data-url="' + this.href + '"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a> ';


                    // Add FaceBook like button
                    //this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
                }
            },
            afterShow: function() {

            },
            openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
                title : {
                titlePosition: 'inside',

                }
            }
        });





    //flexslider
        if ($().flexslider) {
            $("#mainslider .flexslider").flexslider({
                animation: "fade",
                useCSS: true,
                controlNav: true,
                directionNav: true,
                prevText: '',
                nextText: '',
                smoothHeight: false,
                slideshowSpeed:8000,
                animationSpeed:1000,
                start: function( slider ) {
                    slider.find('.slide_description').children().css({'visibility': 'hidden'});
                    slider.find('.flex-active-slide .slide_description').children().each(function(index){
                        var self = $(this);
                        var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                        setTimeout(function(){
                            self.addClass("animated "+animationClass);
                        }, index*200);
                    });
                },
                after :function( slider ){
                    slider.find('.flex-active-slide .slide_description').children().each(function(index){
                        var self = $(this);
                        var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                        setTimeout(function(){
                            self.addClass("animated "+animationClass);
                        }, index*200);
                    });
                },
                end :function( slider ){
                    slider.find('.slide_description').children().each(function() {
                        $(this).attr('class', '');
                    });
                }
            });

        }
        //

        $('.mobile-pnav .c-icon-menu,.main-nav-overlay .pop-up__close').on('click', function(e) {
            e.preventDefault();
            $('.full-screen-pop-up.main-nav-overlay').toggleClass('on');
        });

        $('.book-now-top-right,.c-icon-calendar,.search-box-pop-up__close').on('click', function(e) {
            e.preventDefault();
            $('.search-box-pop-up').toggleClass('on');
        });


        $('.read-more-holder,.welcome .pop-up__close').on('click', function(e) {
            e.preventDefault();
            $('.full-screen-pop-up.welcome').toggleClass('on');
        });

        $('.read-more-holder').one('click', function() {
            $(".full-screen-pop-up.welcome .container").mCustomScrollbar();
        });

        $('.mobile-pnav .c-icon-menu').one('click', function() {
            $(".full-screen-pop-up.main-nav-overlay #pop-up-navs").mCustomScrollbar();
        });





    // drop down menu
        $('ul.navbar-nav > li').each(function() {

           if ($(this).children('i').length === 0   ) {

                if ( $(this).find("ul").length > 0 ) {
                };    
           }

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
        //

        //scroll 
      
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

        //** back top top **//
        $('.back-to-top').on('click', function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });  

        // tnav
        var tnav_init = $('.tnav-container> ul > li > ul> li ').size();
        if (tnav_init < 1) {
            $('.tnav-container').hide();
        };


    });



    // for small height laptop

    




// makes sure the wwole site is loaded
$(window).load(function() {

    $('body').addClass('loaded');


    var waypoint2 = new Waypoint({
        element: document.getElementById('one-column-carousel'),
        handler: function(direction) {
            $(this.element).toggleClass('into_view', direction === 'down');
            this.destroy()
        },
        offset: '50%'
    });

});

$(window).on('beforeunload', function(){
    $('body').removeClass('loaded');
});
