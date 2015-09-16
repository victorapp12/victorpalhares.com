app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$routeProvider.
		when('/', {
		templateUrl: 'views/home.html',
		controller: 'ListProjectCtrl'
	});

	$routeProvider.
		when('/about', {
		templateUrl: 'views/about.html'
	});

	$routeProvider.
		when('/contact', {
		templateUrl: 'views/contact.html'
	});

	$routeProvider.
		when('/project/:id', {
		templateUrl: 'views/project.html',
		controller: 'DetProjectCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});
	
    $locationProvider.html5Mode(true);

}]);
