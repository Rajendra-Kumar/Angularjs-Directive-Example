
app.controller('directiveController', ['$rootScope', '$scope', function ($rootScope, $scope){

	$scope.newName = "kishor";
	$rootScope.newName = $scope.newName;
	$scope.car     = true;
	$scope.$watch('car', function (newVal, oldVal, scope) {
		//console.log('Old Value: '+oldVal);
		//console.log('New Value: '+newVal);
	})
}]);
app.controller('firstController', ['$rootScope', '$scope', function ($rootScope, $scope){
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
		
	
}]);

app.controller('productController', ['$rootScope', '$scope', function ($rootScope, $scope){

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
}]);

app.controller('rootscopeController', ['$rootScope', '$scope',function ($rootScope, $scope) {
	$scope.subject = $rootScope.newName;
	console.log($scope.subject)
}])

app.controller('filterController',['$rootScope', '$scope', function ($rootScope, $scope) {
	$scope.example1 = 1;
  	$scope.example2 = 2;
  	$scope.example3 = 3;
  	$scope.example4 = 4;
 	$scope.example5 = 777;
  	$scope.example6 = 1901;
 	$scope.example7 = 0;
  	$scope.example8 = 'Seven'
}])

