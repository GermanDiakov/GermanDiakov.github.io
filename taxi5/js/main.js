$(document).ready(function(){

    function headerScroll() {

        if ($(window).width() > 1199) {

            if ((window.pageYOffset || document.documentElement.scrollTop) > 15) {
                $('header >.navbar').addClass('fixed');
            }
            else {
                $('header >.navbar').removeClass('fixed');
            }

            if ((window.pageYOffset || document.documentElement.scrollTop) > 50) {
                $('header >.navbar').addClass('scroll');
            }
            else {
                $('header >.navbar').removeClass('scroll');
            }
        }
    }

   headerScroll();

    $(document).on('scroll', headerScroll);

    $(".main-menu a, a.logo").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-95 + "px"
        }, {
            duration: 500
        });
        return false;
    });


    function tabsHeightChange() {
        $(this).parents('.tabs-slider-block').css('height', $(this).height());
    }

    $('.tabs-slider-block .nav-tabs a').click(function(){
        tabsHeightChange();
    });



    function sliderHeight() {
        var maxHeight = -1;
        $('#benefits .carousel-inner .item').each(function() {
            if ($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        });

        $('#benefits .carousel-inner .item').each(function() {
            $(this).height(maxHeight);
        });

        $('#for-company .carousel-inner .item').each(function() {
            if ($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        });

        $('#for-company .carousel-inner .item').each(function() {
            $(this).height(maxHeight);
        });
    }

    sliderHeight();

    $(document).on('resize', sliderHeight);


    $('.investors__reload').on('click', function(){
        event.preventDefault();

        var el = $(this).addClass('rotateIn');

        setTimeout(function() {
            el.removeClass('rotateIn');
        }, 1000);

    });

    $('.tabs-slider-block.benefits').on('load', function(){
        var elementLink = $(this).find('.tab-pane.active');
        var elementH = $(elementLink).height();

        $("#benefits").css("height", elementH+300);

    });

    $('button.navbar-toggle').click(function(){
        $('header >.navbar').toggleClass('scroll');
    });

    $(".checkbox input[type=checkbox]").click(function(){
        $(this).siblings('i').toggleClass('active');
    });


    function radioBtnChange() {
        $(".other-parametrs.when input[type=radio]:not(:checked)").parent('label').removeClass('active');
        $(".other-parametrs.when input[type=radio]:checked").parent('label').addClass('active');

        $(".other-parametrs input[type=radio]:checked").each(function(){
            var valChecked = $(this).val();

            if (valChecked === '1') {
                $(this).parent().siblings('label').not('.active').find('.time-block').toggleClass('hidden');
            } else {
                $('.time-block').removeClass('hidden');
            }
        });

    } radioBtnChange();

    $(".other-parametrs.when").change(function(){
        radioBtnChange();
    });

    $('#step1 form >label>input[type=text]').click(function(){
        $(".other-parametrs.visible").removeClass('visible');
        $(this).siblings('.other-parametrs').addClass('visible');

        $(this).siblings('.other-parametrs').find('.back').click(function(){
            event.preventDefault();
            $(this).parents('.other-parametrs').removeClass('visible');
        });
    });

});
