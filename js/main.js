(function () {
  "use strict";

  var isMobile = {
    any: function () {
      return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    },
  };

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  el.addClass(effect ? `${effect} animated` : "fadeInUp animated");
                  el.removeClass("item-animate");
                },
                k * 80,
                "easeOutQuart"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);
      $("body").toggleClass("offcanvas");
      $this.toggleClass("active");
    });
  };

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("body").removeClass("offcanvas");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }
    });

    $(window).scroll(function () {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }
    });
  };

  var clickMenu = function () {
    $('#navbar a:not([class="external"])').click(function (event) {
      var section = $(this).data("nav-section"),
        navbar = $("#navbar");

      if ($('[data-section="' + section + '"]').length) {
        $("html, body").animate(
          {
            scrollTop: $('[data-section="' + section + '"]').offset().top - 55,
          },
          500
        );
      }

      if (navbar.is(":visible")) {
        navbar.removeClass("in");
        navbar.attr("aria-expanded", "false");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }

      event.preventDefault();
      return false;
    });
  };

  var navActive = function (section) {
    var $el = $("#navbar > ul");
    $el.find("li").removeClass("active");
    $el.each(function () {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest("li")
        .addClass("active");
    });
  };

  var navigationSection = function () {
    var $section = $("section[data-section]");

    $section.waypoint(
      function (direction) {
        if (direction === "down") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: "150px",
      }
    );

    $section.waypoint(
      function (direction) {
        if (direction === "up") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 155;
        },
      }
    );
  };

  $(function () {
    fullHeight();
    contentWayPoint();
    burgerMenu();
    clickMenu();
    navigationSection();
    mobileMenuOutsideClick();
    detectDayNightMode();
  });
})();

function enableDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function detectDayNightMode() {
  const hours = new Date().getHours();
  if (hours <= 6 || hours >= 20) {
    enableDarkMode();
  }
}
