'use strict'

$(document).ready(function(){

    let windowWidth = $(window).outerWidth();

    if (windowWidth < 971) {

        $(".menu-pop-up").addClass("modal-menu").removeClass("menu-pop-up");

    }

        $(window).on("resize", function(){

            let windowResizeWidth = $(window).outerWidth();

                if (windowResizeWidth < 971) {

                    $(".menu-pop-up").addClass("modal-menu").removeClass("menu-pop-up").removeAttr("style");

                } else {

                    $(".modal-menu").addClass("menu-pop-up").removeClass("modal-menu").removeAttr("style");
                    $(".menu-pop-up").find(".btn-close").css("display", "none");

                }

        });

});