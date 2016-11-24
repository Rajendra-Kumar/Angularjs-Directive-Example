

app.directive('helloWord', function (){
		return {
			restrict: "EA",
			template: "<h3>this is hello word para.</h3>"
		};	
});

app.directive('firstPara', function (){
		return {
			restrict: 'EA',
			templateUrl:'html/template/firstStudent.html',
			controller: function ($scope){
				console.log($scope);
				$scope.setGrade = function (student){
					console.log('click on setGrade function in directive controller')
					student.grade = "B+";
				}
			}

		};	
});

app.directive('productPara', function (){
		return {
			restrict: 'EA',
			scope	: {
				name: '@',
				data: '='
			},
			/*template:'<div><h4>{{name}} costs {{price}}</h4></div> <div><button class="btn btn-danger" ng-click="name=\'Yes Change it\'">Change name </button></div>',*/
			templateUrl: 'html/template/product.html',
			controller: function ($scope){
				$scope.nameChange = function (data){
					console.log('click on nameChange function in directive controller')
					data.name = "Yes Change it";  // work on change value when using = scope;

					//$scope.name = "Yes Change it"; 	// work on change value when using @ scope;

				}
			},
			link: function(scope,element,attribute){
				//console.log(scope);
				//console.log(element);
				//console.log(attribute);
				element[0].innerHTMl = "yesss change by element in link function";
			}

		};	
});


app.directive('compileExample', function () {
		return{
			restrict: 'EA',
			scope: {
				newname: '='
			},
			template:'<div><input type="text"  ng-model="newname"></input></div>',
			replace: true,
			/*compile: function (tElem, tAttrs){
				//console.log(name + ': compile tElem => ' + tElem.html());
				//console.log(name + ': compile  tAttrs=> ' + tAttrs);
				return {
		          pre: function(scope, iElem, iAttrs){
		            console.log(name + ': pre link => ' + iElem.html());
		          },
		          post: function(scope, iElem, iAttrs){
		            console.log(name + ': post link => ' + iElem.html());
		          }
		        }
			},*/

			link: function (scope,element,attribute) {
				console.log(scope.newname);
				scope.$watch('newname', function (newVal, oldVal, scope) {
					console.log('Old Value: '+oldVal);
					console.log('New Value: '+newVal);
				});
			}
		}
})






