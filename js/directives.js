var myDirectives = angular.module('myDirectives',['myController']);

// 注册器加载完所有模块时，此方法执行一次
// myDirectives.run(function($templateCache){
//     $templateCache.put("./view/head.html",'<div> angular测试 </div>')
// })

// 头部
myDirectives.directive('dirHead',[function(){
    return {
        restrict: 'AE',
        controller: function ($scope,$location) {
            $scope.back = function () {
                $location.url("/");
            }
        },
        templateUrl: './views/head.html',
        // trmplateUrl: $templateCache.put('./view/head.html'),
        replace: true
    }
}])

// 侧边栏
myDirectives.directive('dirMenu',function(){
    return {
        restrict: 'AE',
        templateUrl: './views/menu.html',
        controller: function ($scope,$location) {
            $scope.fcxxFlag = true;
            $scope.fcxxToggle = function () {
                $scope.fcxxFlag = !$scope.fcxxFlag;
            }
            $scope.cjczFlag = false;
            $scope.cjczToggle = function () {
                $scope.cjczFlag = !$scope.cjczFlag;
            }
        }
    }
})

// 分页
myDirectives.directive('dirPagination',function () {
    return {
        restrict: 'AE',
        templateUrl: './views/pagination.html',
        controller: function ($scope) {
            $scope.nowPage = 1;
            $scope.pageArr = [1,2,3,4];
            $scope.showSize = 10;
            $scope.pages = 26;
            $scope.count = 256;
        }
    }
})

// 底部
myDirectives.directive('dirFoot',function(){
    return {
        restrict: 'AE',
        templateUrl: './views/foot.html'
    }
})