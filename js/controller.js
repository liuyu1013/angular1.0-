var myController = angular.module("myController",[]);
// 登录
myController.controller('login',['$scope','$location',function($scope,$location){
    $scope.greeting = {
        username: "angular1.0路由测试",
        pass: ""
    };
    $scope.submit = function () {
        $location.url('/list');
    }
}])
// 房间信息列表
myController.controller('list',['$scope',function($scope){
    $scope.menuCheck = 'list';
    $scope.checkFlag = false;
    $scope.lists = [
        {id:1,type:"",ssld:"10号楼",dyh:"10-305",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:2,type:"",ssld:"10号楼",dyh:"10-306",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:3,type:"",ssld:"10号楼",dyh:"10-307",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:4,type:"",ssld:"10号楼",dyh:"10-308",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:44,type:"",ssld:"10号楼",dyh:"10-309",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:55,type:"",ssld:"10号楼",dyh:"",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:44,type:"",ssld:"10号楼",dyh:"",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:33,type:"",ssld:"10号楼",dyh:"",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:11,type:"",ssld:"10号楼",dyh:"",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""},
        {id:23,type:"",ssld:"10号楼",dyh:"",floor:2,area:270.0,symj:270.0,cx:"朝北",syzt:"未出租",ssqy:"1区",bz:""}
    ]
}])

// 楼盘信息维护
myController.controller('info',['$scope',function($scope){
    $scope.menuCheck = 'info';
    $scope.infos = {
        bianhao: "0001",
        name: "北控宏创昌平园产业基地",
        addr: "北京市昌平区",
        wylx: "",
        kfdw: "北控宏创科技有限公司",
        sjdw: "",
        jsdw: "北京建工集团",
        zdmj: "40000.1",
        symj: "使用面积",
        lhmj: "10980.0",
        kgrq: "2009-08-23",
        jgrq: "2011-05-31",
        jzrq: "",
        tel: "",
        email: "",
        dz: ""
    }
    $scope.biaojus = [
        {id:1,bianhao:"电11111",name:"电表"},
        {id:2,bianhao:"水22222",name:"水表"},
        {id:3,bianhao:"气33333",name:"燃气"}
    ]
}])
