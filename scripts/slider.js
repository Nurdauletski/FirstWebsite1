$('.slider__body').slick({
    dots: true,
    arrows:false,
    accessibility:false,
    autoolaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight:true,
    nextArrow:'<button type="button" class="slick-next"></button>',
    prevArrow:'<button type="button" class="slick-prev"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {}
    }]
  });