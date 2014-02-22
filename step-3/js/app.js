var myApp = angular.module('studentApp', []);
myApp.controller('Ctrl', function ($scope) {
	$scope.student = { 
		"name": "Pierre Zemb",
		"class" : "CIR3" ,
		"text" : "Seems like a nice guy"
	}
});