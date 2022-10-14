// BURGER MENU

const NAV = document.querySelector('.navigation');
const BUTTON = NAV.querySelector('.menu-button');
const MENU = NAV.querySelector('.mobile__wrapper');

BUTTON.addEventListener('click', function() {
    NAV.classList.toggle('nav-active');
    document.body.classList.toggle('no-scroll');
});

MENU.addEventListener('click', function() {
    NAV.classList.remove('nav-active');
    document.body.classList.remove('no-scroll');
})

AOS.init();
// SLIDER INTRO

$('.intro__title').slick({
    dots: true,
    vertical: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// SLIDER NEWS

$('.news__list').slick({
  dots: true,
  arrows: false,
  prevArrow: '<img src="img/Left.svg" alt="slick-arrow" class="arrow-left">',
  nextArrow: '<img src="img/Right.svg" alt="slick-arrow" class="arrow-right">',
  slidesToShow: 1,
  infinite: true,
  mobileFirst: true,
  variableWidth: false,
  lazyLoad: 'ondemand',

  
  responsive: [
    {
      breakpoint: 420,
      settings: {
        variableWidth: true,
        lazyLoad: 'ondemand',

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        lazyLoad: 'ondemand',

      }
    },
    {
      breakpoint: 768,
      settings: {
        // slidesToShow: 1,
        variableWidth: true,
        lazyLoad: 'ondemand',

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        prevArrow: '<img src="img/Left.svg" alt="slick-arrow" class="arrow-left">',
        nextArrow: '<img src="img/Right.svg" alt="slick-arrow" class="arrow-right">',
        lazyLoad: 'ondemand',
      }
    }
  ]
});

  $('.view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});



  function initMap() {
    const CENTER = { lat: 40.66269967882884, lng: -73.89080823791476 };
    const SVG_MARKER = {
      url: 'img/marker-map.svg',
    };
    const MAP = new google.maps.Map(document.getElementById("map"), {
      center: CENTER,
      zoom: 11
    });
      let marker = new google.maps.Marker({
        position: { lat: 40.67269967882884, lng: -73.89080823791476 },
        map: MAP,
        icon: SVG_MARKER,
      });
  }


  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  