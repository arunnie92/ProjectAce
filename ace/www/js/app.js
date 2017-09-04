// Ionic ace App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ace' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ace = angular
                    .module('ace', ['ionic', 'ngCordova'])
                    .run(ionicPlatform)
                    .config(config)
                    .run(run);

function ionicPlatform($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
        StatusBar.styleDefault();
        }
    });
}

function config($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })

        .state('forgot_password', {
            url: '/forgot_password',
            templateUrl: 'templates/forgotPassword.html',
            controller: 'ForgotPasswordController'
        })

        .state('register_part1', {
            url: '/register_part1',
            templateUrl: 'templates/register_part1.html',
            controller : 'RegisterController'
        })

        .state('register_part2', {
            url: '/register_part2',
            templateUrl: 'templates/register_part2.html',
            controller : 'RegisterController'
        })

        .state('register_part3', {
            url: '/register_part3',
            templateUrl: 'templates/register_part3.html',
            controller : 'RegisterController'
        })

        .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: '/templates/tabs.html'
        })
    
        .state('tabs.account', {
            url: '/account',
            views: {   
                'account-tab': {
                    templateUrl: 'templates/account.html',
                    controller: 'AccountController'  
                }
            }
        })

        .state('tabs.settings', {
            url: '/account/settings',
            views: {   
                'account-tab': {
                    templateUrl: 'templates/settings.html',
                    controller: 'AccountController'
                }
            }
        })        
        
        .state('tabs.information', {
            url: '/account/information',
            views: {   
                'account-tab': {
                    templateUrl: 'templates/editInformation.html',
                    controller : 'EditInformationController'
                }
            }
        }) 

        // Main controller needs to grab users location based off coordinates
        // then post to the database
        // then grab users close to the current location based off distance
        .state('tabs.main', {
            url: '/main',
            views: {
                'main-tab': {
                    templateUrl: 'templates/main.html',
                    controller: 'Main_Controller'
                }
            }
        })
    
        .state('tabs.matches', {
            url: '/matches',
            views: {
                'matches-tab': {
                    templateUrl: 'templates/matches.html',
                    controller: 'MatchesController'
                }
            }
        })
        
        .state('tabs.detail', {
            url: '/matches/:matchId',
            views: {
                'message-tab' : {
                    templateUrl: 'templates/message.html',
                    controller: 'ListController'
                }
            }
        })
    
    $urlRouterProvider.otherwise('login')
}

function run($rootScope) {
    $rootScope.user = null;
}
