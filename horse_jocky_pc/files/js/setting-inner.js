


$(document).ready(function($){



	var four_int = $('.four-columns-carousel .item').size();
	var four = $('.four-columns-carousel .carousel-container');

	if (four_int > 3 ) {

		four.owlCarousel({
			loop:true,
			margin:10,
			autoplay: false,
			nav:false,
			mouseDrag:true,
			dots:true,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:3,
				},
				1200:{
					items:4,
				}
			}
		});

	};


}); // end document load


$(window).load(function() {

});

//
