document.addEventListener("DOMContentLoaded", function () {

  let number = 1;

  const to_basket = document.getElementById("to_basket");
  const count = document.querySelector(".count")
  const count_number = document.querySelector(".count__number")
  const plus = document.querySelector(".plus")
  const minus = document.querySelector(".minus")

  console.log(to_basket)

  plus.addEventListener("click", function () {
    ++number;
    console.log(number)
    count_number.innerHTML = number;
  });

  minus.addEventListener("click", function () {
    
    console.log(number)
    if (number-1 <= 0) {
      to_basket.classList.remove("not-active");
      count.classList.toggle("not-active");
    }
    else {
      number--;
    count_number.innerHTML = number;
    }
  });

  to_basket.addEventListener("click", function () {
    console.log("===============")
    console.log(to_basket)
    this.classList.toggle("not-active");
    count.classList.remove("not-active");
  });
    
});

$(document).ready(function(){
  $('.main__slider').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
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

