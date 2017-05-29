//Start every Javascript document with doc.ready
$(document).ready(function () {
    //Sticky Header past Cover Section, 970 refers to height of browser)
    $(window).scroll(function () {
        //If 
        if ($(window).scrollTop() > 970) {
            //select nav bar, add bootstrap sticky header class
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            //remove the navbar-fixed-top class
            $('.navbar').removeClass('fixed-top');
        }
    });
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
//Waypioint animatinos for Features
$('.js-wp-1').waypoint(function (direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '70%'
});
$('.js-wp-2').waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});
$('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});
$('.js-wp-4').waypoint(function (direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});