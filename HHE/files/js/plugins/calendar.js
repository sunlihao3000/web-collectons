
$(document).ready(function() {


var eventsCarousel = $('#events_cal_carousel');

function initEventsCarousel(){

  eventsCarousel.owlCarousel({
    navText: [
                    "<i class='c-icon-arrow-left'></i>",
                    "<i class='c-icon-arrow-right'></i>"
                ],

    margin:10,
    URLhashListener:true,
    startPosition: 'URLHash',
    responsive : {
          // breakpoint from 0 up
          0 : {
              items: 1
          },
          // breakpoint from 480 up
          480 : {
            items: 1,
            dots:false
          },
          // breakpoint from 768 up
          768 : {
            items: 3,
            nav:false,
            dots:true
          }
      }
  });

};


$('.date_has_event').each(function() {

    $(this).click(function() {
        $('.date_has_event').removeClass('clicked');
        $(this).addClass('clicked');
    }); 

});

var cal_ajax_nav = function() {

      eventsCarousel.data('owlCarousel').destroy();
      $('#events_cal_carousel div').remove();
      eventsCarousel.removeAttr('class');

    $.post($(this).attr('href'), function(data) {
      $('#events_cal_header_wrapper').html($(data).find('#events_cal_header_wrapper').html());
      $('#events_cal_wrapper').html($(data).find('#events_cal_wrapper').html());
      $('#events_cal_carousel').html($(data).find('#events_cal_carousel').html());

      initEventsCarousel();
      $('#events_cal_header_wrapper a.cal-nav').bind('click', cal_ajax_nav);

      $('.date_has_event').each(function() {

        $(this).click(function() {
            $('.date_has_event').removeClass('clicked');
            $(this).addClass('clicked');
        }); 
        // options
        var distance = 10;
        var time = 250;
        var hideDelay = 500;
        
        var hideDelayTimer = null;

        // tracker
        var beingShown = false;
        var shown = false;

        var trigger = $(this);
        var popup = $('.events ul', this).css('opacity', 0);

        // set the mouseover and mouseout on both element
        $([trigger.get(0), popup.get(0)]).mouseover(function() {
          // stops the hide event if we move from the trigger to the popup element
          if(hideDelayTimer)
            clearTimeout(hideDelayTimer);

          // don't trigger the animation again if we're being shown, or already visible
          if(beingShown || shown) {
            return;
          }
          else {
            beingShown = true;

            // reset position of popup box
            popup.css({
              bottom : 20,
              left : -76,
              display : 'block' // brings the popup back in to view
            })

            // (we're using chaining on the popup) now animate it's opacity and position
            .animate({
              bottom : '+=' + distance + 'px',
              opacity : 1
            }, time, 'swing', function() {
              // once the animation is complete, set the tracker variables
              beingShown = false;
              shown = true;
            });
          }
        }).mouseout(function() {
          // reset the timer if we get fired again - avoids double animations
          if(hideDelayTimer)
            clearTimeout(hideDelayTimer);

          // store the timer so that it can be cleared in the mouseover if required
          hideDelayTimer = setTimeout(function() {
            hideDelayTimer = null;
            popup.animate({
              bottom : '-=' + distance + 'px',
              opacity : 0
            }, time, 'swing', function() {
              // once the animate is complete, set the tracker variables
              shown = false;
              // hide the popup entirely after the effect (opacity alone doesn't do the job)
              popup.css('display', 'none');
            });
          }, hideDelay);
        });
      });
    });
    return false;
  }

  initEventsCarousel();

  $('#events_cal_header_wrapper a.cal-nav').bind('click', cal_ajax_nav);
});