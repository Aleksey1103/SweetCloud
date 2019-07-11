'use strict'

$(document).ready(function(){

    let windowWidth = $(window).outerWidth();

    if (windowWidth < 971) {

        $(".menu-pop-up").addClass("modal-menu").removeClass("menu-pop-up");

    }

});