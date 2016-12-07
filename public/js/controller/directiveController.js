
app.controller('directiveController', ['$rootScope', '$scope', 'myService', 'myFactory', 'myProvider','newFactory', function ($rootScope, $scope, myService, myFactory, myProvider,newFactory){

	$scope.newName = "kishor";
	$rootScope.newName = $scope.newName;
	$scope.car     = true;
	$scope.$watch('car', function (newVal, oldVal, scope) {
		//console.log('Old Value: '+oldVal);
		//console.log('New Value: '+newVal);
	})
	$scope.service = myService.sayHello('Raj');   // service calling
	//$scope.factory = myFactory.sayHello('Arya');

	var msg 	   = new myFactory('call factory function');  // factory calling
	$scope.msg     = msg.getMsg();

	var newmsg 	   = new myFactory('again call factory function'); // again factory calling
	$scope.newmsg     = newmsg.getMsg();

	$scope.factoryValue = newFactory.getName();
	console.log('newFactory function: '+newFactory.getName());

	$scope.providerValue = myProvider;  // provider calling.

}]);
app.controller('firstController', ['$rootScope', '$scope', 'myService', 'myFactory', 'myProvider','newFactory',function ($rootScope, $scope, myService, myFactory, myProvider,newFactory){
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

app.controller('productController', ['$rootScope', '$scope', 'myService', 'myFactory', 'myProvider', function ($rootScope, $scope, myService, myFactory, myProvider){

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

app.controller('filterController',['$rootScope', '$scope', 'myService', 'myFactory', 'myProvider', function ($rootScope, $scope, myService, myFactory, myProvider) {
	$scope.example1 = 1;
  	$scope.example2 = 2;
  	$scope.example3 = 3;
  	$scope.example4 = 4;
 	$scope.example5 = 777;
  	$scope.example6 = 1901;
 	$scope.example7 = 0;
  	$scope.example8 = 'Seven'

  	
}]);

app.controller('filterMethodController',['$rootScope', '$scope', 'myService', 'myFactory', 'myProvider',function($rootScope, $scope, myService, myFactory, myProvider){

	// for reduce method open...
	var developers = [
	    { name: "Joe", age: 23 },
	    { name: "Sue", age: 28 },
	    { name: "Jon", age: 32 },
	    { name: "Bob", age: 24 }
	], age = 0;

	$scope.age = developers.reduce(function(memo, developer) {
		console.log(memo+' '+JSON.stringify(developer))
	    return memo + developer.age; // return previous total plus current age
	}, 0); // initialize age with 0 that will be passed as memo

	console.log("Sum of all developer ages is " + age); 
	// Output:   Sum of all developer ages is 107

	// for reduce method close...



	// for filter method and map method open

	var doctors = [
	    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
	    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
	    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
	    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
	    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
	    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
	    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
	    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
	    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
	    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
	    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
	    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
	];

	$scope.doctors = doctors.filter(function(doctor) {
	    return doctor.begin > 2000; // if truthy then keep item
	}).map(function(doctor) {
	    return { // return what new object will look like
	        doctorNumber: "#" + doctor.number,
	        playedBy: doctor.actor,
	        yearsPlayed: doctor.end - doctor.begin + 1
	    };
	});

	console.log(JSON.stringify(doctors, null, 4));
	// for filter method and map method close	
}])

