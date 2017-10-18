angular.module('TodoDirective', []).directive('todoTable', function(){
	return{
		restrict:'E', //A->element
		templateUrl: 'templates/directives/todo-table.html'
	};
};