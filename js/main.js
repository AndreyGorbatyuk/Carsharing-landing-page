$(function(){

	$('.top__slider').slick({
		autoplay:true,
		arrows:false,
		dots:true,
		fade:true,
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots:false,
      }
    },
  ]			
	});

	$('.reviews__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
    {
      breakpoint: 1141,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 846,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 585,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
	});

		$('.menu__btn').on('click', function(){
			$('.menu__list').toggleClass('menu__list--active');
		});
	});