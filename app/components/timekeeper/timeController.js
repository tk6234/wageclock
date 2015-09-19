angular.module('timeKeeper', ['ngCookies']).controller('timeController', ['$scope', '$location', '$http', '$cookies', function($scope, $location, $http, $cookies) {
			
	$scope.punchIn = function() {	
		
		var wages = ( typeof $cookies.get('wageClock') === 'undefined' ) ? [] : JSON.parse( $cookies.get('wageClock') );
		var date = new Date();
			
		wages.push({
			'wage': $scope.wage,
			'time': date
		});	
		
		$cookies.put('wageClock', JSON.stringify(wages) );					
	 	$location.path('clock');
		return false;
	};
}]);