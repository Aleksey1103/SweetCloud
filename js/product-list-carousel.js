'use strict'

$(document).ready(function(){
   
        $(".product-list").slick({

            infinite: true,
            arrow: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            mobileFirst: true,
            respondTo: "window",
            prevArrow: '<button type="button" class="gifts-arrow slick-prev"><svg fill="#f2d0cd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 60"><defs><path id="a" d="M-.4.15h34.8v60H-.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M1.58 32.966l25.679 25.68a4.187 4.187 0 0 0 5.918 0 4.19 4.19 0 0 0 0-5.914L10.455 30.009 33.173 7.29a4.182 4.182 0 0 0 0-5.914 4.175 4.175 0 0 0-5.914 0L1.58 27.056a4.155 4.155 0 0 0-1.223 2.953c0 1.07.406 2.145 1.223 2.957zm0 0" clip-path="url(#b)"/></svg></button>',
            nextArrow: '<button type="button" class="gifts-arrow slick-next"><svg fill="#f2d0cd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 60"><defs><path id="a" d="M.6.15h34.8v60H.6z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M33.42 32.966L7.741 58.646a4.187 4.187 0 0 1-5.918 0 4.19 4.19 0 0 1 0-5.914l22.722-22.723L1.827 7.29a4.182 4.182 0 0 1 0-5.914 4.175 4.175 0 0 1 5.914 0l25.679 25.68a4.155 4.155 0 0 1 1.223 2.953c0 1.07-.406 2.145-1.223 2.957zm0 0" clip-path="url(#b)"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1080,
                    settings: "unslick"
                },
                 {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    } 
                }, {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
    
        });
        
    let windowWidth = $(window).outerWidth();

         if (windowWidth <= 680) {

            $(".product-list").slick("slickSetOption", {respondTo: "slider",}, true);  

        }

    $(window).on("resize", function(){

        let windowResizeWidth = $(window).outerWidth();

            if (windowResizeWidth <= 680 ) {
      
                $(".product-list").slick("slickSetOption", {respondTo: "slider",}, true);

            } else {

                $(".product-list").slick("slickSetOption", {respondTo: "window",}, true);

            }

    });

});