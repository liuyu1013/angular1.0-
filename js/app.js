var myApp = angular.module('myApp',['ngRoute','myDirectives','myController']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl: "./views/login.html",
        controller: "login"
    }).when('/list',{
        templateUrl: "./views/list.html",
        controller: "list"
    }).when('/info',{
        templateUrl: "./views/info.html",
        controller: "info"
    }).otherwise({
        redirectTo: "/"
    })
})