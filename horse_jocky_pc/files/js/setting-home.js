

  	$(document).ready(function($){



        var owl_three_center_inti = $('.three-columns-carousel-center .carousel-container .item').size();
        var owl_three_center = $('.three-columns-carousel-center .carousel-container');



        if (owl_three_center_inti > 2 ) {

            owl_three_center.owlCarousel({
                loop:true,
                autoplay: false,
                nav:false,
                center:true,
                mouseDrag:true,
                autoWidth:true,
                responsive:{
                    0:{
                        items:1,
                        dots:true,
                    },
                    768:{
                        items:2,
                        dots:true,
                        nav:false
                    },
                    1200:{
                        items:3,
                        dots:false,
                        margin:30,
                        startPosition: 1,
                    }
                }
            });

        };

        var owl_one_init = $('.one-column-carousel .carousel-container .item').size();
        var owl_one = $('.one-column-carousel .carousel-container');



        if (owl_one_init > 0 ) {

            owl_one.owlCarousel({
                loop:true,
                margin:0,
                autoplay: false,
                nav:false,
                mouseDrag:true,
                items:1,
                responsive:{
                    0:{
                        dots:true,
                    },
                    768:{
                        dots:true,
                        nav:false
                    },
                    1200:{
                        dots:false,
                    }
                }
            });

        };



    });// 





// makes sure the whole site is loaded
$(window).load(function () {



});

