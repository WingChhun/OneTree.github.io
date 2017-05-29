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
//---------COVER ANIMATIONS
$('.js-wp-cover').waypoint(function (direction) {
    //cover
    $('.js-wp-cover').addClass('animated bounceInDown');
}, {
    offset: '0%'
});
$('.js-wp-cover1').waypoint(function (direction) {
    $('.js-wp-cover1').addClass('animated fadeIn');
}, {
    offset: '80%'
});
$('.js-wp-cover2').waypoint(function (direction) {
    //moto
    $('.js-wp-cover2').addClass('animated bounceInUp');
}, {
    offset: '0%'
});
//-------FEATURES ANIMATIONS
$('.js-wp-1').waypoint(function (direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '70%'
});
$('.js-wp-2').waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '70%'
});
$('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '70%'
});
$('.js-wp-4').waypoint(function (direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '70%'
});
//-------TIMELINE ANIMATIONS
$('.js-wp-time').waypoint(function (d) {
    $('.js-wp-time').addClass('animated fadeInDown');
}, {
    offset: '80%'
});
$('.js-wp-time1').waypoint(function (d) {
    $('.js-wp-time1').addClass('animated fadeInRight');
}, {
    offset: '75%'
});
$('.js-wp-time2').waypoint(function (d) {
    $('.js-wp-time2').addClass('animated fadeInLeft');
}, {
    offset: '90%'
});
//-------PARALLAX ANIMATIONS
$('.js-wp-para').waypoint(function (d) {
    $('.js-wp-para').addClass('animated fadeInDown');
}, {
    offset: '90%'
});
//-------PRODUCTS- CARDS ANIMATINOS
$('.js-wp-para').waypoint(function (d) {
    $('.js-wp-para').addClass('animated fadeInDown');
}, {
    offset: '90%'
});
$('.js-wp-card').waypoint(function (d) {
    $('.js-wp-card').addClass('animated bounceInUp');
}, {
    offset: '80%'
});
$('.js-wp-card2').waypoint(function (d) {
    $('.js-wp-card2').addClass('animated bounceIn');
}, {
    offset: '80%'
});
//-------NUMBERS ANIMATIONS
$('.js-wp-num').waypoint(function (d) {
    $('.js-wp-num').addClass('animated zoomIn');
}, {
    offset: '80%'
});
$('.js-wp-num1').waypoint(function (d) {
    $('.js-wp-num1').addClass('animated zoomInDown');
}, {
    offset: '83%'
});
$('.js-wp-num2').waypoint(function (d) {
    $('.js-wp-num2').addClass('animated zoomInUp');
}, {
    offset: '83%'
});
//-------TESTIMONIAL ANIMATIONS
//-------CONTACT