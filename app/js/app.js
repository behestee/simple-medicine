'use strict';

// Declare app level module which depends on views, and components
angular.module('app', ['ui.router','routes', 'controllers', 'services'])
    .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('!');


        }]
    );
