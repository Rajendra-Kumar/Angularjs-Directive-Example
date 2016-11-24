"use strict";

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/directive');
        $stateProvider
        // this is route used for acess services using resolve method for asynchronus 
            .state('directive', {
                url: "/directive",
                templateUrl: "html/pages/directiveType.html",
                controller: "directiveController"
            })
            .state('directive.first', {
                url: "/first",
                templateUrl: "html/template/first.html",
                controller: "firstController"
            })
            .state('directive.second', {
                url: "/second",
                templateUrl: "html/template/second.html",
                controller: "productController"
            })
            .state('rootscope', {
                url: "/rootscope",
                templateUrl: "html/pages/rootscope.html",
                controller: "rootscopeController"
            })

            /*.state('signup', {
                url: "/signup",
                templateUrl: "html/pages/signup.html",
                controller: "SignupController"
            }) */
                   
    }
]);

app.run(function($rootScope, $state, $location) {
    //console.log($state);
    $rootScope.$state = $state;
    //console.log($rootScope)
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var path;     
        /*if(localStorage.getItem('access_token') == null){
            path = localStorage.getItem('path');
            if(path == null){
                path = '/login'
                $location.path(path);
                $rootScope.verticalMenu = false;
            }else{
                 //console.log(path);
                $location.path(path);
                $rootScope.verticalMenu = false;
            }
           
        }else{
            path = localStorage.getItem('path');
            if(path == '/dashboard'){
                $location.path(localStorage['path']);
                $rootScope.verticalMenu = 'html/templates/verticalMenu.html';
            }       
        }*/
    });   
      
});

