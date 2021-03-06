$(document).ready(function(){
  $('.source-slider__first').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<div class="prev-1"></div>',
    nextArrow: '<div class="next-1"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-1"></div>',
          nextArrow: '<div class="next-1"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-1"></div>',
          nextArrow: '<div class="next-1"></div>'
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-1"></div>',
          nextArrow: '<div class="next-1"></div>'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.source-slider__second').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<div class="prev-2"></div>',
    nextArrow: '<div class="next-2"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>'
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
