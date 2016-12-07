
app.controller('directiveController', ['$rootScope', '$scope', 'myService', 'myFactory', function ($rootScope, $scope, myService, myFactory){

	$scope.newName = "kishor";
	$rootScope.newName = $scope.newName;
	$scope.car     = true;
	$scope.$watch('car', function (newVal, oldVal, scope) {
		//console.log('Old Value: '+oldVal);
		//console.log('New Value: '+newVal);
	})
	$scope.service = myService.sayHello('Raj');
	//$scope.factory = myFactory.sayHello('Arya');

	var msg 	   = new myFactory('call factory function');
	$scope.msg     = msg.getMsg();

	var newmsg 	   = new myFactory('again call factory function');
	$scope.newmsg     = newmsg.getMsg();

}]);
app.controller('firstController', ['$rootScope', '$scope', 'myService', 'myFactory', function ($rootScope, $scope, myService, myFactory){
	//$scope.firstName = "Raj";
	//console.log($scope);
	$scope.firstStudent = {
		name: "Raj",
		age	: 25,
		subject: [
			"math",
			"Science"
		]
	}

	$scope.setGrade = function (firstStudent){
		console.log('click on setGrade function in firstStudent controller')
		firstStudent.grade = "A+";
	}
	
	//$scope.abc = myService.sayHello('123');
	//$scope.xyz = myFactory.sayHello('456');
	
}]);

app.controller('productController', ['$rootScope', '$scope', 'myService', 'myFactory', function ($rootScope, $scope, myService, myFactory){

	$scope.product1 = {
		name: "TV",
		price: 2000,
		stock: true
	}
	$scope.product2 = {
		name: "Phone",
		price: 4000,
		stock: true
	}
	$scope.product3 = {
		name: "Laptop",
		price: 10000,
		stock: false
	}

	$scope.showData = function (data){
		console.log(data);
	}

	//$scope.ABC = myService.sayHello('ABC');
	//$scope.XYZ = myFactory.sayHello('XYZ');
}]);

app.controller('rootscopeController', ['$rootScope', '$scope',function ($rootScope, $scope) {
	$scope.subject = $rootScope.newName;
	console.log($scope.subject)
}])

app.controller('filterController',['$rootScope', '$scope', 'myService', 'myFactory', function ($rootScope, $scope, myService, myFactory) {
	$scope.example1 = 1;
  	$scope.example2 = 2;
  	$scope.example3 = 3;
  	$scope.example4 = 4;
 	$scope.example5 = 777;
  	$scope.example6 = 1901;
 	$scope.example7 = 0;
  	$scope.example8 = 'Seven'

  	
}])

