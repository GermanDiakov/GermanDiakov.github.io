/**
 * Created by naverstaem on 16/03/15.
 */

var carouselMainContainer = $('.news-carousel');
var carouselContainer = $('.news-items');
var carouselItem = $('.news-item');
var carouselPrevControl = $('.news-controls .left');
var carouselNextControl = $('.news-controls .right');

$('.carousel-items').css({
    'width': $('.carousel-block').length * 300,
    'left': ($(window).width()) / 2,
    'margin-left': -($('.carousel-block').length * 300) / 2
});

$(document).on('click', ".carousel-button-right", function () {
    var carusel = $(this).parents('.carousel');
    right_carusel(carusel);
    return false;
});

$(document).on('click', ".carousel-button-left", function () {
    var carusel = $(this).parents('.carousel');
    left_carusel(carusel);
    return false;
});

function left_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items").css({"left": "-=" + block_width + "px"});
    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
    $(carusel).find(".carousel-items").animate({left: ($(window).width()) / 2}, 200);
    $(carusel).find('.center').removeClass('center').prev().addClass('center');
}

function right_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find('.center').removeClass('center').next().addClass('center');
    $(carusel).find(".carousel-items").animate({left: "-=" + block_width + "px"}, 200, function () {
        $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
        $(carusel).find(".carousel-items").css({"left": ($(window).width()) / 2});
    });
}