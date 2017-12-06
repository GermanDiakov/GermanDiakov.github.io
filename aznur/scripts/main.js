window.onload = function () {
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

  // window.addEventListener('message', receiveMessage);
  window.addEventListener('message', receiveMessage, false);

  function receiveMessage(event) {

    if (event.origin !== 'https://kunden2.cx9.de')
      return;

    /* if (event.data !== 'scroll')
     return;
     */
    // var temp = parseInt(event.data) + 500;
    //console.log(event.data);


    console.dir(event.data);

    interact.interactionCompleted(event.data);
  }

};

var interact =
{
  currentSite: null,
  previousSite: null,
  interactionCompleted: function (value) {
    console.log("Got Message");

    interact.previousSite = interact.currentSite;
    interact.currentSite = value.page;
    interact.currentHeight = value.height;
    interact.textMsg = value.textMsg;

    // console.log('First height' + interact.currentHeight);
    console.log('Text sample: ' + interact.textMsg);

    if (value.goStart == 1) {
      // window.location = "http://preview.aznur-rent.eu";
      //window.location = "http://aznur-rent.de";
      window.location = "http://naverstaem.ru/portfolio/aznur/";

    } else {

      console.log("Current: " + interact.currentSite + " Prev Site: " + interact.previousSite);

      if (interact.currentSite == 1 && interact.previousSite > 1) {

        window.location = "http://naverstaem.ru/portfolio/aznur/";
        // window.location = "http://preview.aznur-rent.eu";

        //window.location.href = "http://preview.aznur-rent.eu/#reload";

      } else if (interact.currentSite > 1) {
        value= value.height +150;

        console.log(value);

        $(".promo").remove();
        $(".search-holder").addClass('full-width').find('iframe').css("height",value+"px");
        // $(".search-holder").addClass('full-width');
        $(".search-holder iframe").attr("scrolling", "no");
        // var new_height=value+570;

        $(document).ready(function () {
          $('html, body').stop().animate({
            scrollTop: $(".search-holder iframe").offset().top
          }, 450);
          return false;
        });
      }

      if (interact.currentSite == 2) {
        // getElementsByTagName("iframe").contentWindow.location.reload();
        console.log('second page is active')
      }

    }
  }
};


// var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
// var eventer = window[eventMethod];
// var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// // Listen to message from child window
// eventer(messageEvent,function(e) {
//     var key = e.message ? "message" : "data";
//     var data = e[key];
//     //run function//
//     //

//     console.log('message get '+ key.page +'')

// },false);


$(document).ready(function () {
  function pluginsInclude() {
    $('.catalog .slider').slick({
      mobileFirst: true,
      appendArrows: '.catalog .arrays',
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });
  }

  function customCode() {
    $('.submenu-toggle').on('click', function (e) {
      e.preventDefault();

      $(this).parents('li').toggleClass('active');
    });

    // Mobile navigation

    $('.btn-toggle').on('click', function (e) {
      e.preventDefault();

      $('html').toggleClass('sidebar-active');
    });

    $(document).click(function (e) {
      var target = e.target;

      if (!$(target).is('.btn-toggle') && !$(target).parents().is('.mobile-navigation')) {
        $('html').removeClass('sidebar-active');
      }

    });

  }

  function dropDown() {
    // Dropdown lang

    $('.dropdown-btn').on('click', function (e) {
      e.preventDefault();

      $(this).parents('.dropdown').toggleClass('active');
    });

    $(document).click(function (e) {
      var target = e.target;

      if (!$(target).is('.dropdown-btn.active') && !$(target).parents().is('.dropdown')) {
        $('.dropdown').removeClass('active');
      }

    });
  }

  function init() {
    pluginsInclude();
    dropDown();
    customCode();
  }

  init();
});
