'use strict'

$(document).ready(function(){

    var eventClickTouch;

    if ("ontouchstart" in document.documentElement) {

        console.log("It a touch screen device.");
        eventClickTouch = "touchstart";

    } else {

        console.log("Others devices");
        eventClickTouch = "click";
    }
    

    $(".menu-list__link").on(eventClickTouch, function(event){
        
        if ($(this).hasClass("dropdown-active")) {

            event.preventDefault();

        }

    });



    $(".dropdown-active").hover(
        
        function() {

            $(this).find(".dropdown-menu").slideDown();        

        },
    
        function() {

            $(this).find(".dropdown-menu").slideUp();   

        }
    
    );


    
     $(".btn-search").on(eventClickTouch, function(event){

        event.preventDefault();
        
        let searchFildeWidth = $(this).offsetParent().parent().find(".search-container").css("width");
        
            if (searchFildeWidth == "0px") {

                $(".search-container").css({width: "0", padding: "0"}).find(".search-container__field").css({display: "block", padding: "0"});
                $(this).offsetParent().parent().find(".search-container").animate({width: "100%", padding: "0 20px"}, 300, function(){

                    $(this).find(".search-container__field").css("padding", "0 18px");

                });
               
            } else {

                $(this).offsetParent().parent().find(".search-container").find(".search-container__field").css("padding", "0");
                $(this).offsetParent().parent().find(".search-container").animate({width: "0", padding: "0"}, 300, function(){

                    $(this).offsetParent().parent().find(".search-container").find(".search-container__field").css("display", "none"); 

                });

            }

    });


    $(".block-quantity__btn").on(eventClickTouch, function(){

        let btnType = this.dataset.btnMark,
            quantityValue = $(this).offsetParent().find("input[name='quantity']").val();

            if (btnType == "plus") {

                quantityValue++;

            } else if (btnType == "minus") {

                while (quantityValue > 1) {

                    quantityValue--;
                    break;
                } 
            }

        $(this).offsetParent().find("input[name='quantity']").val(quantityValue);
      
        showFinalOrderAmount();
        changeElementSize();

    });

    

    $(".block-presentation-grid__pic").on(eventClickTouch, function(){

        let imgSrc = $(this).find("img").attr("src");

            $(".modal-container").find(".modal-container__img").css("display", "block");
            $(".modal-container").find("img").attr("src", imgSrc);
            $(".modal-container").fadeIn(); 

            $(".modal-container__btn-close").on(eventClickTouch, function(){

                $(".modal-container").fadeOut(function(){

                    $(this).find(".modal-container__img").css("display", "none");
                    
                });

            });

    });



    $(".block-presentation-grid__btn").on(eventClickTouch, function(){

        let videoSrc = $(this).attr("src");

            $(".modal-container").find(".modal-container__video").css("display", "block");
            $(".modal-container").find("iframe").attr("src", videoSrc);
            $(".modal-container").fadeIn(); 

            $(".modal-container__btn-close").on(eventClickTouch, function(){

                $(".modal-container").find("iframe").attr("src", "");
                $(".modal-container").fadeOut(function(){

                    $(this).find(".modal-container__video").css("display", "none");
                    
                });

            });

    });



    $(".btn-open").on(eventClickTouch, function(){

        $(".btn-close").show();
        $(".modal-menu").css("display", "flex").animate({top: "0px"}, 500);

    });

    $(".btn-close").on(eventClickTouch, function(){

        let backTop = $(".modal-menu").outerHeight();

        $(".modal-menu").animate({top: -backTop}, 500, function(){

            $(".modal-menu").removeAttr("style");
            $(".btn-close").hide();

        });

    });


    $("#blockOrderBtn").click(function(event){

        event.preventDefault();

        $(".modal-alert").css({"display": "flex", "opacity": "0"}).animate({opacity: 1}, 300);
        
        $(".modal-alert__btn").click(function(){

            $(".modal-alert").animate({opacity: 0}, 300, function(){

                $(".modal-alert").removeAttr("style");
                $("form[name='sendOrder']").submit();
            });

        });

    });

    $(".gifts-arrow").on(eventClickTouch, function(){

        let giftSetsItem = document.getElementsByClassName("block-gifts__item slick-active")[0],
        cost = giftSetsItem.dataset.itemCost;

        document.getElementById("minCost").innerText = cost;

    });


     $(window).scroll(function(){        

        let position = $(window).scrollTop(),
            elementTop = $(".menu-pop-up").css("top");

            if (position >= 300 && elementTop == "auto") {

                $(".menu-pop-up").css({"display": "grid", "top": "-80px"}).animate({top: "0px"}, 500);

            } else if (position < 300 && elementTop == "0px") {

                $(".menu-pop-up").animate({top: "-80px"}, 500, function(){

                    $(".menu-pop-up").hide().css("top", "auto");
                    $(".menu-pop-up").find(".search-container").css({width: "0", padding: "0"}, 500);
                    $(".menu-pop-up").find(".search-container__field").css({padding: "0px"});
                    
                });
                
            } else {

                return position;

            }
    });



    $(".block-goods__btn").on(eventClickTouch, function(){

        let windowSize = $(window).outerWidth(),
            groupName = $(this).attr("id");

            if (windowSize > 600) {

                $(".product-list").hide();            
                $("." + groupName).css({"display": "grid", "opacity": "0"}).animate({opacity: "1"});
                

            } else {

                $(".product-list").slick("unslick").hide();                     
                $("." + groupName).css({"display": "grid", "opacity": "0"}).animate({opacity: "1"});
                $("." + groupName).slick({

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
                            breakpoint: 600,
                            settings: "unslick"
                        }
                    ]
                });

            }

            $(".block-goods__btn").removeClass("btn_active");
            $(this).addClass("btn_active");

    });



    $(".block-products").find(".product-list-item:gt(15)").hide();

    $(".block-products__btn").on(eventClickTouch, function(){

       let counter = $(this).attr("id");

       if (counter != "all" && counter != "hideAll") {

            let maxIndex = 16 * counter,
                minIndex = maxIndex - 16;

                $(".product-list-item").hide();
                $(".product-list-item:lt(" + maxIndex + ")").fadeIn();
                $(".product-list-item:lt(" + minIndex + ")").hide();
                $(".block-products__btn").removeClass("btn_active");
                $(this).addClass("btn_active");

       } else if(counter == "all") {

        $(".product-list-item").fadeIn();
        $(".block-products__btn").hide();
        $(this).text("Скрыть").attr("id", "hideAll").fadeIn();
        
       }  else {

        $(".product-list-item:gt(15)").fadeOut();
        $(this).fadeOut().text("Показать все").attr("id", "all");
        $(".block-products__btn").fadeIn();

       }
       
    });    



    $(".btn-order").on(eventClickTouch, function(){

        let elementClassName = $(this).attr("class");

        $("[class^='" + elementClassName + "']").removeClass("checked").offsetParent().find("input[type='checkbox']").removeAttr("checked");
        $(this).addClass("checked").offsetParent().find("input[type='checkbox']").attr("checked", "checked");

        
    });

   

    function showFinalOrderAmount() {

        $("form[name='submitOrder'").find("input[name='finishedAmount'").val(function(){

            let numberOfproducts = $(".basket-grid-item").length,
                amountArray = [];
    
                for (let i = 0; i < numberOfproducts; i++) {

                    let numberOfItems = document.getElementsByClassName("basket-grid-item")[i].querySelector("input[name='quantity']").value,
                        itemCost = document.getElementsByClassName("basket-grid-item")[i].querySelector("input[class='item-cost']").value;

                        document.getElementsByClassName("basket-grid-item")[i].querySelector("input[name='item-amount']").value = parseFloat(numberOfItems) * parseFloat(itemCost);    
                        amountArray[i] = document.getElementsByClassName("basket-grid-item")[i].querySelector("input[name='item-amount']").value;
                    
                }
    
                let amountArraySum = 0;
    
                    for (let n = 0; n < amountArray.length; n++) {
    
                        amountArraySum += parseFloat(amountArray[n]);
    
                    }    
                    
                return amountArraySum;
    
        });

    }

    function changeElementSize() {

        $(".basket-submit__amount").attr("size", function(){

            let elementValue = $(this).val(),
                 elementSize = elementValue.length - 1;
     
                 return elementSize;           
     
         });

    }
  
    showFinalOrderAmount();
    changeElementSize();        

});