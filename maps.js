$(function () {

	function initMap() {

		var location = new google.maps.LatLng(45.4973223, -73.5790288);

		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 17,
			panControl: false,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);

		var marker = new google.maps.Marker({
			position: location,
			map: map,
		});

		var contentString = '<div class="info-window">' +
			'<h3>Where to find us:</h3>' +
			'<div class="info-content">' +
			'<p>H 1029-7<br>1455 De Maisonneuve West<br>Montreal, Quebec<br>H3G 1M8</p>' +
			'</div>' +
			'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 400
		});

			infowindow.open(map, marker);

		var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}];

		map.set('styles', styles);

	}

	google.maps.event.addDomListener(window, 'load', initMap);

});