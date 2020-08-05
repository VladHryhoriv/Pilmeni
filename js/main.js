document.addEventListener("DOMContentLoaded", function () {
  const lang = document.querySelector(".menu__list");

  lang.addEventListener("click", function () {
    document.getElementById("myDropdown").classList.toggle("show");
  });

});

$(document).ready(function(){
  $('.main__slider').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 1,
    dots: true,
    arrows : false,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          centerPadding: '0',
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.users-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    dots: true,
    arrows : false,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});