angular.module('routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // This app uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('feelings', {
                url: '/feelings',
                templateUrl: 'templates/feelings.html',
                controller: 'feelingsCtrl'
            })
            .state('problems', {
                url: '/problems',
                templateUrl: 'templates/problems.html',
                controller: 'problemsCtrl'
            })



        $urlRouterProvider.otherwise('/home');


    });