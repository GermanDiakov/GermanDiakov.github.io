$(document).ready(function() {

    $( '#ri-grid' ).gridrotator( {
        rows : 11,
        columns : 8,
        maxStep : 2,
        interval : 2000,
        w1024 : {
            rows : 5,
            columns : 6
        },
        w768 : {
            rows : 5,
            columns : 5
        },
        w480 : {
            rows : 6,
            columns : 4
        },
        w320 : {
            rows : 7,
            columns : 4
        },
        w240 : {
            rows : 7,
            columns : 3
        }
    } );

    $('#dg-container').gallery();

    $('.slider-item').click(function(){
        event.preventDefault();
    });

    $('.popup .close').click(function(){
        $(this).parents('.popup').fadeOut('slow');
    });

    $('.popup-link').click(function(){
        $($(this).attr('href')).fadeIn('slow');
    });


    function scrollAnim(){
        var $el = $('.steps');
        $el.viewportChecker({
            classToAdd: 'animate',
            offset: 100,
            repeat: false
        });
    }

    $(window).load(function () {
        scrollAnim();
    });


});