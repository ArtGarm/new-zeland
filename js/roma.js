$(document).ready(function(){
	});

$(window).load(function(){
	if ($(window).width() <= 640) {
		$('.doneproject-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true
		});
	}
	else{
		$('.doneproject-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true
		});
	}
});


$(window).resize(function(){
	if ($(window).width() <= 640) {
		$('.doneproject-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true
		});
	}
	else{
		$('.doneproject-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true
		});
	}
});
