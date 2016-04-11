'use strict';

var app = angular.module('cjApp', ['firebase', 'ngMaterial', 'angular-md5', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    // If a route other than status is requested,
    // go to the auth route
    $urlRouterProvider.otherwise('/auth');

    $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: 'components/auth/authView.html',
            controller: 'AuthController as auth'
        })
        .state('status', {
            url: '/status',
            templateUrl: 'components/status/statusView.html',
            controller: 'StatusController as status'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'components/products/productsView.html',
            controller: 'ProductsController as product'
        });
});

app.run(function($rootScope, $state, User) {

    $rootScope.$on('$stateChangeStart', function() {

        var loggedInUser = User.getLoggedInUser();

        if(loggedInUser) {

            $rootScope.loggedInUserData = User.getUserData(loggedInUser.uid);
        }
    });
});


