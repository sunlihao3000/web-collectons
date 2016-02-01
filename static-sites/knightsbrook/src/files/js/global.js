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



//For checking if a string is empty, null or undefine
function isEmpty(str) {
    return (!str || 0 === str.length);
}

//For checking if a string is blank, null or undefined 
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

//For checking if a string is blank or contains only white-space
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

var isMobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
var isDesktop = !(isMobile);



/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var isMobileOnly = jQuery.browser.mobile;

function getMonthName() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var get_current_date = new Date();
    var get_current_month = month[get_current_date.getMonth()];
    $('body').addClass(get_current_month);
}



// active tabs by lihao
function activeTab(tabTitle,tabContent,activeClass,callBackFunctionName) {
                    
    tabTitle.each(function() {

        if ($(this).hasClass(activeClass) ) {

           var findTabId = $(this).attr('data-id');

            tabContent.each(function() {
                
                var findContentHolderId =  $(this).attr('id');

                if ( findTabId == findContentHolderId ) {
                    
                    $(this).addClass(activeClass);

                    // callback a function
                    if (callBackFunctionName) {

                        var callback_function = new Function(callBackFunctionName);

                        try {
                            callback_function();
                        }catch(err) {
                            console.log(callBackFunctionName + "is not a function");
                        }                                    
                        
                    };
            
                };

           });

           
        };    

    });                           
};


    function change_image_src(element) {
        


        if (isMobileOnly) {

            if (element.attr('data-mobile-image')) {
                //console.log('here');
                element.attr("src", element.attr('data-mobile-image'));
                element.removeAttr("data-mobile-image"); 
                element.removeAttr("data-desktop-image");  

            } else if (element.attr('data-desktop-image')) {
                element.attr("src", element.attr('data-desktop-image'));
                element.removeAttr("data-desktop-image"); 
                element.removeAttr("data-mobile-image");   
            } else {
                return false
            }

        } else {
            if (element.attr('data-desktop-image')) {
                //console.log('here');
                element.attr("src", element.attr('data-desktop-image'));
                element.removeAttr("data-desktop-image"); 
                element.removeAttr("data-mobile-image");    

            } else if (element.attr('data-mobile-image')) {

                element.attr("src", element.attr('data-mobile-image'));
                element.removeAttr("data-mobile-image"); 
                element.removeAttr("data-mobile-image");   
            } else {
                return false;
            }

        } 


    }


    function get_another_element_height_on_me(another_element,on_me,on_my_style){
        if (another_element) {
            var another_element_height = another_element.height();
            if (another_element_height > 0) {
                if (on_me) {                   
                    if (on_my_style) {
                        on_me.css(on_my_style,another_element_height);
                    } else{
                        on_me.css('height',another_element_height);
                    };
                };
            };            
        };
        
    }


    function cal_half_element_height(){

        $('.boxes--vertical').each(function() {
                
            if ( $(this).find('.height-full').length > 0 ) {

                this_height = $(this).find('.height-full').height();
                //console.log(this_height);
                if ( $(this).find('.height-half').length > 0 ) {
                    this_half_height = (this_height - 16)/2;
                    console.log(this_half_height);
                    if (this_half_height > 0 ) {
                       $(this).find('.height-half').css('height', this_half_height); 
                    };
                };

            };          
        
        });

    }
  
    function cal_half_element_height2( full_height_element, half_height_element,space_justment,on_my_style){


        if (full_height_element && half_height_element) {

            this_height = full_height_element.height();
            console.log(this_height);
            var space;
            
            if (space_justment > 0 ) {
                space = space_justment;
             } else{
                space = 0;
            };
                                    
            if ( this_height/2 > 0) {
                this_half_height = (this_height - space)/2;
                if (on_my_style) {
                    half_height_element.css(on_my_style, this_half_height);
                } else{
                    half_height_element.css('height', this_half_height);
                };
                
            };

           
        } else{
            console.log('this fucntion parameters setting not correctly!');
            return false
        };

    }      
    


    function get_parent_height(parent,children) {
        var parent_height = parent.height();
        parent.find(children).css('height', parent_height);
    };    


    //***sample hover function***
    // work on desktop
    // work on touch devices
    // ** this function has dependence on jquery and modernizr **
    // function only add class on the parenet of tragger
    // parameters: 
    //   1. tragger:element. like $('.hover-trigger')
    //   2. hover_class:string. if not hover class passed, the default class is "hover"
    //   
    function sample_hover(tragger,hover_class) {

        if (Modernizr.touch) { 

            // on touch 
            if (tragger) {

                if (hover_class) {
                    tragger.on('touchstart', function(e) {  
                        tragger.parent().addClass(hover_class);
                    });

                } else{
                    tragger.on('touchstart', function(e) {  
                        tragger.parent().addClass('hover');
                    });                   
                };
                  
            } else{
                // stop function if not tragger element passed
                // console.log("not tragger element set up");
                return false
            };
        
     
        } else {

            // on desktop

            if (tragger) {
                
                if (hover_class) {

                    tragger.on({
                        mouseenter: function () {
                            //stuff to do on mouse enter
                            tragger.parent().addClass(hover_class);
                        },
                        mouseleave: function () {
                            //stuff to do on mouse leave
                            tragger.parent().removeClass(hover_class);
                        }
                    });

                    
                } else{

                    tragger.on({
                        mouseenter: function () {
                            //stuff to do on mouse enter
                            tragger.parent().addClass('hover');
                        },
                        mouseleave: function () {
                            //stuff to do on mouse leave
                            tragger.parent().removeClass('hover');
                        }
                    });



                };
                
            } else {
                // stop function if not tragger element passed
                // console.log("not tragger element set up");
                return false                
            };



        }

    }// end function

function my_parallax(){
    var scrolled = $(window).scrollTop();
    //console.log(scrolled);
    $('.my_parallax_background').css('top',-(scrolled*0.05)+'px');
    $('.my_parallax_background_children').css('bottom', 100 +(scrolled*0.8)+'px');
}

