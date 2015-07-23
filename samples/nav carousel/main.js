

$(document).ready(function() {  
        
        var number_items = 3;
        var carousel = $('#carousel-ul');
        var li_width =(carousel.parent().outerWidth())/number_items;
        //var init_item_width = carousel.children().outerWidth();

        var margin = 5;
        var item_width = li_width + (margin*2);
        var animate_time = 500;

        function init_carousel(){

            carousel.wrap("<div class='carousel-holder'></div>");
            carousel.children().css({
                width: li_width,
                marginLeft:margin,
                marginRight:margin
            });
            carousel.css('left','-' + item_width + 'px');
            carousel.children().first().before(carousel.children().last());
        }

        init_carousel();
        

        function nav_click(elements,nav_direction) {
   
            elements.click(function(e){ 

                e.preventDefault();

                if (nav_direction == "left" ) {
                     var left_indent = parseInt(carousel.css('left')) + item_width;    
                 } else if( nav_direction == "right") {
                    var left_indent = parseInt(carousel.css('left')) - item_width;    
                 };  

            
                carousel.animate({
                    left:left_indent
                    }, animate_time, function() {
                        if (nav_direction == "left" ) {
                             carousel.children().first().before(carousel.children().last());  
                         } else if( nav_direction == "right") {
                            carousel.children().last().before(carousel.children().first());   
                         };                       
                        carousel.css({'left' : '-' + item_width + 'px'});  
                });

      
            });  

        }

        nav_click($('#left_scroll'), 'left');         
        nav_click($('#right_scroll'), 'right');       

  });  