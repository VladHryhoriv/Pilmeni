document.addEventListener("DOMContentLoaded", function () {
  const lang = document.querySelector(".menu__list");
  const burger = document.querySelector(".burger-menu");
  const width = document.documentElement.clientWidth;
    console.log(width)
  if(width <= 480 ) {
    const store = document.querySelector(".store").classList.toggle('single-item');
    $(document).ready(function(){
      $('.single-item').slick({
        responsive: [
          {
            breakpoint: 481,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                dots: true,
                prevArrow:' <button type = "button" class = "slick-prev"> <img src="./img/prev.svg" class="next" alt="" srcset=""> </ button>',
                nextArrow: '<button type = "button" class = "slick-next"> <img src="./img/next.svg" class="next" alt="" srcset=""> </ button>'
              }
            }
        ]
      });
    });
    
  }

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("not-active");
    document.querySelector(".menu").classList.remove('menu__not-active')
    document.querySelector(".menu").classList.toggle('menu__active')
  });
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
          centerPadding: '0',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
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
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
});

