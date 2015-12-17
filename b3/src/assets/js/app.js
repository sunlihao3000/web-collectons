// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

jQuery(window).load(function(){
    
    //
    //flexslider
    if (jQuery().flexslider) {
        
        jQuery("#mainslider .flexslider").flexslider({
            animation: "fade",
            useCSS: true,
            controlNav: true,   
            directionNav: false,
            prevText: "prev",
            nextText: "next",
            smoothHeight: false,
            slideshowSpeed:4000,
            animationSpeed:1000,
            start: function( slider ) {
                slider.find('.slide_description').children().css({'visibility': 'hidden'});
                slider.find('.flex-active-slide .slide_description').children().each(function(index){
                var self = jQuery(this);
                var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                setTimeout(function(){
                        self.addClass("animated "+animationClass);
                    }, index*200);
                });
            },
            after :function( slider ){
                slider.find('.flex-active-slide .slide_description').children().each(function(index){
                var self = jQuery(this);
                var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                setTimeout(function(){
                        self.addClass("animated "+animationClass);
                    }, index*200);
                });
            },
            end :function( slider ){
                slider.find('.slide_description').children().each(function() {
                    jQuery(this).attr('class', '');
                });
            }
        });


    }
    // end fkexslider
    // 

});


