$(document).ready(function(){   
    
    function runCarousel() { 
        
        var func = function (event) {

            event.stopImmediatePropagation();

            var Zzz = document.querySelector(".center").getElementsByTagName('div');
            var radioValue = event.target.getAttribute('value');
            var slideValue = document.querySelector('#d-center').getAttribute('value');
                steps = radioValue - slideValue;
                steps > 0 ? forward(steps) : back(steps);
    
            function forward(steps) {
    
                for (var a = 0; a < steps; a++) {
    
                    firstCh = document.querySelector(".center").getElementsByTagName('div')[0];
    
                    var lastCh = document.querySelector(".center").getElementsByTagName('div')[document.querySelector(".center").getElementsByTagName('div').length - 1];
                    var lastChAttr = lastCh.getAttribute('id');
                    var lastIndex = document.querySelector(".center").getElementsByTagName('div').length - 1;
    
                    for (var n = lastIndex; n > 0; n--) {
                        var takes = document.querySelector(".center").getElementsByTagName('div')[n];
                        var newAttr = document.querySelector(".center").getElementsByTagName('div')[n - 1].getAttribute('id');
                        takes.setAttribute('id', newAttr);
                    }
    
                    firstCh.setAttribute('id', lastChAttr);
                }
            }
    
            function back(steps) {
    
                steps = -steps;
    
                for (var a = 0; a < steps; a++) {
    
                    firstCh = document.querySelector(".center").getElementsByTagName('div')[0];
    
                    var firstChAttr = firstCh.getAttribute('id');
                    var lastCh = document.querySelector(".center").getElementsByTagName('div')[document.querySelector(".center").getElementsByTagName('div').length - 1];
                    var lastChAttr = lastCh.getAttribute('id');
    
                    for (var n = 0; n < document.querySelector(".center").getElementsByTagName('div').length - 1; n++) {
    
                        var takes = document.querySelector(".center").getElementsByTagName('div')[n];
                        var newAttr = document.querySelector(".center").getElementsByTagName('div')[n + 1].getAttribute('id');
                        takes.setAttribute('id', newAttr);
                    }
    
                    lastCh.setAttribute('id', firstChAttr);
    
                }
            }
    
            /***!!kost!!***/
            
            var smItems = document.querySelector('.b').children;
            var length = document.querySelector('.b').children.length;
    
            for (var d = 0; d < document.querySelector('.center').children.length; d++) {
    
                var cardNo = document.querySelector('.center').children[d];
                //console.log('newBlock: ' + cardNo);
    
                for (var f = 0; f < length; f++) {
    
                    //console.log('step: '+steps);
                    var processing = cardNo.children[f]; //меняющаяся карта
                    var classForChange = processing.getAttribute('class');
                    var clNum = classForChange.substring(classForChange.length - 1); //берет последний элемент строки(цифру)
    
                    clNum = +clNum;
                    clNum -= steps;
                    //console.log('clNum + steps: '+clNum);
                    /*!!!!!!!!!!!!*/
    
                    if(steps>0) {
    
                        if (clNum==-3) clNum=2;
                        if (clNum==-2) clNum=3;
                        if (clNum==-1) clNum=4;
                        if (clNum==0) clNum=5;
                    }
    
                    if(steps<0) {
    
                        if (clNum==9) clNum=4;
                        if (clNum==8) clNum=3;
                        if (clNum==7) clNum=2;
                        if (clNum==6) clNum=1;
                    }
    
                    /*!!!!!!!!!!!!*/
                    var mainClass = classForChange.substring(0, classForChange.length - 1);
                    //console.log('before: ' + classForChange);
                    cardNo.children[f].setAttribute('class', mainClass + (clNum));
                    //console.log('after: ' + cardNo.children[f].getAttribute('class'));
                }
            }
        };
    
        document.querySelector('label.container .one').addEventListener('click', func);
        document.querySelector('label.container .two').addEventListener('click', func);
        document.querySelector('label.container .three').addEventListener('click', func);
        document.querySelector('label.container .four').addEventListener('click', func);
        document.querySelector('label.container .five').addEventListener('click', func); 
            
    }

    var windowReadyWidth = $(window).outerWidth();
    
    if (windowReadyWidth >= 1280) {

        runCarousel();

    } else {

        $(".center").slick({

            infinite: true,
            arrow: true,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: '<button type="button" class="gifts-arrow slick-prev"><svg fill="#f2d0cd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 60"><defs><path id="a" d="M-.4.15h34.8v60H-.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M1.58 32.966l25.679 25.68a4.187 4.187 0 0 0 5.918 0 4.19 4.19 0 0 0 0-5.914L10.455 30.009 33.173 7.29a4.182 4.182 0 0 0 0-5.914 4.175 4.175 0 0 0-5.914 0L1.58 27.056a4.155 4.155 0 0 0-1.223 2.953c0 1.07.406 2.145 1.223 2.957zm0 0" clip-path="url(#b)"/></svg></button>',
            nextArrow: '<button type="button" class="gifts-arrow slick-next"><svg fill="#f2d0cd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 60"><defs><path id="a" d="M.6.15h34.8v60H.6z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M33.42 32.966L7.741 58.646a4.187 4.187 0 0 1-5.918 0 4.19 4.19 0 0 1 0-5.914l22.722-22.723L1.827 7.29a4.182 4.182 0 0 1 0-5.914 4.175 4.175 0 0 1 5.914 0l25.679 25.68a4.155 4.155 0 0 1 1.223 2.953c0 1.07-.406 2.145-1.223 2.957zm0 0" clip-path="url(#b)"/></svg></button>',
            responsive: [
               {
                    breakpoint: 971,
                    settings: {
                        slidesToShow: 1
                   }
               }
            ]

        });

    }    
    
});
