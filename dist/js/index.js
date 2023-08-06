const mobileNavToggle = document.querySelector(".mobile-nav__toggle");

mobileNavToggle.addEventListener("click", () => {
  mobileNavToggle.parentElement.classList.toggle("mobile-nav--open");
});

$(document).ready(function () {
  $(".testimonials__cards").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
