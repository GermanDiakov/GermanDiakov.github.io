'use strict';

$(document).ready(function () {
  function toggleSubcategories() {
    if (window.outerWidth < 768) {
      $('#chistaya-liniya-promo .categories .col .category-lg .main-category .btn').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('active').parents('.main-category').siblings('.subcategories').toggle();
      });
    }
  }

  function pluginInclude() {
    $('.slider').slick({
      mobileFirst: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });
  }

  function init() {
    toggleSubcategories();
    pluginInclude();
  }
  init();
});
//# sourceMappingURL=main.js.map
