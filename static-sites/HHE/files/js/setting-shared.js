



(function(){
  "use strict";

    $(document).ready(function($) {
        
        if ( isDesktop ) {
             if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                $('body').addClass('safari');        
            }           
        };



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


        function toggle(trigger,target,triggerOnClass,triggerOffClass,triggerSlide) {

            trigger.click(function() {
                
                function triggerSlideToggle(slide) {

                    if (typeof slide === 'undefined') {
                        target.toggleClass('on');
                    }else if ( slide === 'true') {
                        target.slideToggle();                         
                    }
                }

                if (( typeof triggerOnClass === 'undefined') && (typeof triggerOffClass === 'undefined') || triggerOnClass == "" && triggerOffClass == ""  ) {
                    
                    triggerSlideToggle(triggerSlide);

                } else {

                    var triggerChildren = trigger.find('.' +triggerOnClass);
                    var triggerChildrenOff = trigger.find('.' +triggerOffClass);

                    if ( trigger.hasClass(triggerOnClass) ) {

                        trigger.removeClass(triggerOnClass).addClass(triggerOffClass);

                    } else if( trigger.hasClass(triggerOffClass) ){

                        trigger.removeClass(triggerOffClass).addClass(triggerOnClass);

                    } else if ( triggerChildren.hasClass(triggerOnClass)) {
                        triggerChildren.removeClass(triggerOnClass).addClass(triggerOffClass);
                    } else if ( triggerChildrenOff.hasClass(triggerOffClass) ) {
                        triggerChildrenOff.removeClass(triggerOffClass).addClass(triggerOnClass);
                    };  


                    triggerSlideToggle(triggerSlide);          
                   
                };

                
            });

            return false;
        }

        function hoverToggleClass(trigger,targetClass){

            trigger.hover(function() {

                if (typeof targetOnClass !== 'undefined') {
                    
                    $(this).closest('targetClass').toggleClass('on');
                    
                } {
                    if (trigger.parent('div').length > 0) {
                         $(this).parent().toggleClass('on');
                     } else {
                        $(this).toggleClass('on');
                     }
                   
                };
            });
            return false;
        };


        hoverToggleClass($('.pulse_holder .c-icon-down'));
        //toggle($('.home .welcome .separator-holder .fa-stack-1x'), $('article.main'),'c-icon-plus','c-icon-minus', 'true' );
        toggle($('.menu-button .c-icon-menu'), $('.full-screen-pop-up.main-nav-overlay') );
        toggle($('.full-screen-pop-up__close.main-nav-overlay'), $('.full-screen-pop-up.main-nav-overlay ') );
        toggle($('.cal-button .btn-group'), $('.search-box-pop-up') );
        toggle($('.cal-button .c-icon-cal-text'), $('.search-box-pop-up') );
        toggle($('.search-box-pop-up__close'), $('.search-box-pop-up') );

        
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
		
	
    // our members
    
	   var owl_our_members_inti = $('.our-menmbers-holder .item').size();
	   var owl_our_members = $('.our-menmbers-holder');


		if (owl_our_members_inti > 0) {

			 owl_our_members.owlCarousel({
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
						items:2
					},
					768:{
						items:5
					},
					1024:{
						items:5,
						autoWidth:false
					},
					1200:{
						items:7,
						autoWidth:true
					}                
				}
			});
					   
		};
		//	


        //*** 'Search by Map' btu pass var map_int to open map as default ***

        function getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            //console.log(vars);
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
            }
            return(false);
        }

        getQueryVariable();

        var get_group_id = getQueryVariable("group");


        if(get_group_id) {
            $('body').scrollTo('#group-map');
            setTimeout(function (){
                $('.members-group-list #item-'+get_group_id ).trigger('click');

            },500);

            //$
        }

        //*** end ***



    });

    $(window).on('beforeunload', function(){
        $('body').removeClass('loaded');
    });

    // for small height laptop
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

    


}()); 


// makes sure the wwole site is loaded
$(window).load(function() {

    $(".status").fadeOut('', function() {});

    $(".preloader").delay(600).fadeOut("slow", function() {
        $('body').addClass('loaded');  
    });

});
// 
