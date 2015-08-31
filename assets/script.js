$(
	function() {

	var width_height_ratio = 1.6;
	var width = $('#captioned-gallery').width();	
	var height = width / width_height_ratio;
	
	$('#captioned-gallery').css('height', height + 'px');
	$('#captioned-gallery-companion').css('height', height + 'px');
	$('.slider-image').css('height', height + 'px');
	

	$('#front-page-gallery').css('min-height', (height+30) + 'px');	

	}
)

$(window).resize(
	function() {

	var width_height_ratio = 1.6;
	var width = $('#captioned-gallery').width();	
	var height = width / width_height_ratio;
	
	$('#captioned-gallery').css('height', height + 'px');
	$('#captioned-gallery-companion').css('height', height + 'px');
	$('.slider-image').css('height', height + 'px');	
	}
);
