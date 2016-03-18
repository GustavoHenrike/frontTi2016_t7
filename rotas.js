app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/home', {
        templateUrl: 'view/home.html',
        controller:''
    })
 
    
    .otherwise({
        redirectTo : '/' 
    });

    $locationProvider.html5Mode(false);
}); 