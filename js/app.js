angular.module('myApp',['ngRoute','myController','myDirectives'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'./views/login.html',
                controller:'login'
            })
            .when('/list',{
                templateUrl:'./views/list.html',
                controller:'login'
            })
            .when('/info',{
                templateUrl:'./views/info.html',
                controller:'login'
            })
            .otherwise({redirectTo:'/'});
    }])
