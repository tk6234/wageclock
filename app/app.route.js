wageClock.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/clock', {
			//templateUrl : 'app/components/clock/clockView.html',
			templateUrl: 'app/components/template/page.html',
			controller: 'clockController'
		})
		.otherwise({
		  title: 'Home Page',
		  templateUrl: 'app/components/template/page.html',
		  controller: 'homeController',
		});
});