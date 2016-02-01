(function($){

  // add this into global

 function no_banner_image() {
    //console.log($('#mainslider img').length);
    if ($('#mainslider img').length < 1) {
        $('body').addClass('no-banner');
    };
  }

  // end

  $('#social-stream').dcSocialStream({
    feeds: {
      twitter: {
        id: '381595917',
        images:'small',
        retweets: true,
        out: 'thumb,text,share',
        url: 'assets/helper/twitter.php'
      },
      facebook: {
        id: '157606679987',
        image_width: '5',
        intro: '',
        comments: '0',
        url: 'assets/helper/facebook.php'
      },
      youtube: {
        id: 'FilmTrailerZone/UUPPPrnT5080hPMxK1N4QSjA',
        out:'intro,thumb,title,share'
      },
    },
    rotate:{
      delay: 0
    },
    twitterId: '381595917',
    filter: true,
    wall: true,
    height:'350',
    cache: false,
    max: 'limit',
    limit: 5,
    iconPath: 'assets/img/social/',
    imagePath: 'assets/img/social/',
  });

  $('#social-stream-pinterest').dcSocialStream({
    feeds: {
      pinterest: {
        id: 'knightsbrook'
      },
    },
    rotate:{
      delay: 0
    },
    filter: true,
    wall: true,
    height:'550',
    cache: false,
    max: 'limit',
    limit: 5,
    iconPath: 'assets/img/social/',
    imagePath: 'assets/img/social/',
  });

  $('#instagram').pongstgrm({
    accessId: '715df7750f5840cea8248a8f9418e86b',
    accessToken: '30728997.715df77.b7e4cf95766c41bd955125a5e7a7b8b6',
    show: 'recent',
    count: 4
  });

  no_banner_image();

  $('#isotope').isotope({
    // options
    itemSelector: '.blog-post',
    percentPosition: true,
    columnWidth: '.blog-post'
  });

  $('.sort-button').click(function(e){
    if($(this).next().hasClass('active')){
      $(this).next().toggleClass('active');
    } else {
      $('.blog-sort-options').removeClass('active');
      $(this).next().toggleClass('active');
    }
  });
  $('.close-filter').click(function(e){
    $(this).closest('.blog-sort-options').removeClass('active');
  });

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.blog-sort').length) {
      $('.blog-sort-options').removeClass('active');
    }
  });

})(jQuery);

jQuery(window).load(function(){

  /**
   ** Filter by the first tab from social stream
   ** Get the first tab attribute (data-filter), add class active and call isotope plugin
   **
   **/
  var selector = $('.social-tabs .dcsns-toolbar li a:eq(3)').addClass('iso-active').attr('data-filter');
  var $stream = $('#social-stream .stream');
  $stream.isotope({filter: selector, sortBy : 'postDate'});

})