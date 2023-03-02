// turn on main slider 
$(document).ready(function(){
	$('.slider-main__body').slick({
		autoplaySpeed: 15000,
		autoplay: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		useCSS: true,
		arrows:true,
		dots:true,
		slidesToShow:1,
		draggable: true,
		swipe: true,
		appendArrows:$('.controls-slider-main__arrows'),
		appendDots:$('.controls-slider-main__dots'),
		prevArrow: document.querySelector('#main-slider-arrow-prev'),
		nextArrow: document.querySelector('#main-slider-arrow-next'),
	});

	$('.slider-rooms__body').slick({
		adaptiveHeight: true,
		autoplaySpeed: 15000,
		autoplay: false,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		useCSS: true,
		arrows:true,
		dots:true,
		slidesToShow:1,
		variableWidth: true,
		// slidesToScroll:1,
		draggable: true,
		swipe: true,
		appendArrows:$('.slider-rooms__arrows'),
		appendDots:$('.slider-rooms__dotts'),
		prevArrow: document.querySelector('#room-slider-arrow-prev'),
		nextArrow: document.querySelector('#room-slider-arrow-next'),
	});

	$('.slider-tips__body').slick({
		adaptiveHeight: true,
		autoplaySpeed: 15000,
		autoplay: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		useCSS: true,
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		draggable: true,
		swipe: true,
		appendArrows:$('.slider-tips__arrows'),
		appendDots:$('.slider-tips__dotts'),
		prevArrow: document.querySelector('#tips-slider-arrow-prev'),
		nextArrow: document.querySelector('#tips-slider-arrow-next'),
	});
});


	// for opacity sticker on main slider
	// window.onload = activeSlide();

	function activeSlide(){
		var sticker = document.getElementsByClassName('slider-main__content');
		// var parentSlider =  document.getElementsByClassName('slider-main__slide');
		// var parentSlider = sticker.parentElement('.slider-main__slide');
		if (sticker.parentElement.classList.contains('slick-active')){
			sticker.style.opacity = "1";
			sticker.style.background = "red";
		// sticker.style.cssText = `@media (min-width: $md2+px) {opacity: 0; border: 2px solid black}`;
	}
	} 		
