wageClock.controller('clockController', ['$scope', '$cookies', function($scope, $cookies) {
	$scope.pageID		= 'enter-wage';
	$scope.page_header	= '';
	$scope.main			= 'app/components/clock/clockView.html';
	$scope.wages 		= ( typeof $cookies.get('wageClock') === 'undefined' ) ? [] : JSON.parse( $cookies.get('wageClock') );
}]);