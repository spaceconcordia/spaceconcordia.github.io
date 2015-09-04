$(	function() {

	var width_height_ratio = 1.6;
	var width = $('#captioned-gallery').width();	
	var height = width / width_height_ratio;
	
	$('#captioned-gallery').css('height', height + 'px');
	$('#captioned-gallery-companion').css('max-height', height + 'px');
	$('.slider-image').css('height', height + 'px');	

	$('#front-page-gallery').css('min-height', (height+10) + 'px');	

	}
)

$(window).resize(
	function() {

	var width_height_ratio = 1.6;
	var width = $('#captioned-gallery').width();	
	var height = width / width_height_ratio;
	
	$('#captioned-gallery').css('height', height + 'px');
	$('#captioned-gallery-companion').css('max-height', height + 'px');
	$('#front-page-gallery').css('min-height', (height+10) + 'px');	
	}
);


$(document).ready(function(){
	
$( '#parallax-text-spacecraft a' ).mouseover( function() {
	$( '.parallax-cover').css('display', 'none');	
 } 
);

$( '#parallax-text-spacecraft a' ).mouseleave( function() {
	$( '.parallax-cover').css('display', 'block');	
 } 
);

$( '#parallax-text-robotics a' ).mouseover( function() {
	$( '.parallax-cover').css('display', 'none');	
 } 
);

$( '#parallax-text-robotics a' ).mouseleave( function() {
	$( '.parallax-cover').css('display', 'block');	
 } 
);

$( '#parallax-text-rocketry a' ).mouseover( function() {
	$( '.parallax-cover').css('display', 'none');	
 } 
);

$( '#parallax-text-rocketry a' ).mouseleave( function() {
	$( '.parallax-cover').css('display', 'block');	
 } 
);


});