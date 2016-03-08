var OneVill = angular.module('OneVill', ['ngAnimate','ui.router'])
.config(function($stateProvider){
	$stateProvider.state("index",{
		url:"",
		controller:"LoginCtrl",
		templateUrl:"templates/login.html"
	})
	$stateProvider.state("signup",{
		url:"/signup",
		controller:"SignUpCtrl",
		templateUrl:"templates/signup.html"
	})
	$stateProvider.state("Entry",{
		url:"/entry",
		controller:"LoginCtrl",
		templateUrl:"templates/entry.html"
	})
	$stateProvider.state("forgotPwd",{
		url:"/forgotPassword",
		controller:"forgotPwdCtrl",
		templateUrl:"templates/forgotPassword.html"
	})
	$stateProvider.state("eMarket",{
		url: "/eMarket",
		controller: "LoginCtrl",
		templateUrl:"templates/eMarketForm.html"
		
	})
	$stateProvider.state("eMarket.buy",{
		url: '/buy',
		templateUrl: 'templates/buy.html',
		controller: 'eMarketFormCtrl'
	})
	$stateProvider.state("eMarket.sell",{
		url: '/sell',
		templateUrl: 'templates/sell.html',
		controller: 'eMarketFormCtrl'
	})
	$stateProvider.state("dashboard",{
		url:"/dashboard",
		controller:"dashboardCtrl",
		templateUrl:"templates/dashboard.html"
	})
	$stateProvider.state("dashboard.userProfile",{
		url:"/userProfile",
		controller:"dashboardCtrl",
		templateUrl:"templates/userProfile.html"
	})
	$stateProvider.state("dashboard.family",{
		url:"/family",
		controller:"dashboardCtrl",
		templateUrl:"templates/family.html"
	})
	
})

  .controller('forgotPwdCtrl', function forgotPwdCtrl($scope) {
	 
	  console.log("forgotPwd");
   

  

})
.controller('dashboardCtrl', function dashboardCtrl($scope) {
	 
	 
   

  

})
.controller('eMarketFormCtrl', function eMarketFormCtrl($scope,$location) {
	

  

})
 .controller('LoginCtrl', function LoginCtrl($scope,$location) {
	 
	 function init(){
		/*  divTop = ($(document).height() - $(".button-section").height()) / 2;
    $(".button-section").css("margin-top", divTop);
    $(".e-market").width($(".knowledge-service").width());
   /* $(".e-market").click(function () {
        $.load("views/e-market.html");
    });*/
	 }
	  console.log("login");
   
	$scope.loginFunc= function(data){
		var loginDetails=data;
		console.log(data);
		$location.path("/entry");
	}
	$scope.knowledgeService=function(){
		$location.path("/dashboard/userProfile");
	}
	$scope.eMarket=function(){
		$location.path("/eMarket/buy");
	}
	$scope.EntryPage=function(){
	$location.path("/entry");
}
	init();
  

})

  
  .controller('SignUpCtrl', function SignUpCtrl($scope) {
	    console.log("signup");
     $scope.registerFunc= function(data){
		var registerDetails=data;
		console.log(data);
	}
	$scope.pwdCheck=function(data){
		console.log(data);
		if(data.password != data.confirmPassword)
		{
			$scope.pwdError=true;
		}
		else{
			$scope.pwdError=false;
		}
	}
  });
 