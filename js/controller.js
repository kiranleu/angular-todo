angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Angular Todo!";
    })
    .controller('RegisterController', function($scope, UserAPIService, store) {
 
        $scope.registrationUser = {};
        var URL="https://morning-castle-91469.herokyapp.com/";

        $scope.editTodo = function(id){
        	$location.path ("/todo/edit" + id);
        };

        $scope.deleteTodo = function(id) {
        	TodoAPIService.deleteTodo(URL + "todo/" + id, $scope.username, $scope.authToken).then (function (results)){
        		console.log(results);
        	}.catch(function(err){
        		console.log(err);
        	});
        	};
        


        $scope.login = function(){
        	UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data). tehn (function(results){
        		$scope.token= results.data.token;
        		console.log($scope.token);
        	}).catch(function(err){
        		console.log(err.data);
        	});
        }
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
 
            UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Angular Todo");
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                    console.log(err);
                });
                .controller('TodoController', function($scope, $location, TodoAPIService, store) {
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');
 
        $scope.todos = [];
 
        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.username = $scope.username;
                $scope.todos.push($scope.todo);
 
                TodoAPIService.createTodo(URL + "todo/", $scope.todo, $scope.authToken).then(function(results) {
                    console.log(results)
                }).catch(function(err) {
                    console.log(err)
            };
            .controller('EditTodoController', function($scope, $location, $routeParams, TodoAPIService, store) {
        var id = $routeParams.id;
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.username = $scope.username;
 
                TodoAPIService.editTodo(URL + "todo/" + id, $scope.todo, store.get('authToken')).then(function(results) {
                    $location.path("/todo");
                }).catch(function(err) {
                    console.log(err);
        };
    });
        