document.addEventListener("DOMContentLoaded", function () {

  let count = 1;

  const lang = document.querySelector(".menu__list");
  const burger = document.querySelector(".burger-menu");
  const width = document.documentElement.clientWidth;
  const menu_next = document.querySelector(".next-menu")
  const to_basket = document.querySelector(".product__basket")

  const close = document.querySelector(".close")

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
  $('.count__plus').on('click', function() {
    count++;
    $('.count__number').text(count)
  })
  $('.count__minus').on('click', function() {
    if(count-1 <= 0) {
      console.log(count)
      $(to_basket).removeClass('not-active')
      $('.product__count').addClass('not-active')
    }
    else {
      count--;
      $('.count__number').text(count)
    }
  })
  to_basket.addEventListener('click', function() {
    $(this).addClass('not-active')
    $('.product__count').removeClass('not-active')
  })

  close.addEventListener("click", function() {
    $('.menu').addClass('menu__not-active').removeClass('menu__active')
  })

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("not-active");
    $('.menu').removeClass('menu__not-active').addClass('menu__active')
  });

  lang.addEventListener("click", function () {
    document.getElementById("myDropdown").classList.toggle("show");
  });

  menu_next.addEventListener("click", function() {
    document.querySelector('.cd-secondary-nav').classList.remove('is-hidden')
    document.querySelector('.cd-secondary-nav').classList.toggle('moves-out')

  })

  $('.back-to-menu').on('click', function() {
    console.log($(this).parent('.cd-secondary-nav').parent('ul'))
    $(this).parent('.cd-secondary-nav').addClass('is-hidden').removeClass('moves-out')
  })
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

