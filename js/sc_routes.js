SCApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
		when('/', {
			templateUrl: 'partials/p_index.html',
			controller: 'SCMain'
		}).
		when('/aboutus', {
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl'
		}).
		when('/sponsors', {
			templateUrl: 'partials/p_sponsors.html',
			controller: 'SCMain'
		}).		
		when('/members', {
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl'
		}).		when('/divisions', {
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl'
		}).
		when('/divisions/spacecraft', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		}).
		when('/divisions/robotics', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		}).
		when('/divisions/rocketry', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		}).		
		otherwise({
			templateUrl: 'partials/p_index.html',
			controller: 'sc_main'
		});
 }]);