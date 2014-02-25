var myApp = angular.module('studentApp', []);
myApp.controller('Ctrl', function ($scope) {
	$scope.students = new Array();
	$scope.students.push({ 
		"name": "Pierre Zemb",
		"class" : "CIR3" ,
		"text" : "Seems like a nice guy"
	});
	$scope.students.push({ 
		"name": "Brendan",
		"class" : "CIR1" ,
		"text" : "Seems like a weird guy"
	});

	$scope.remove = function (name){
    	angular.forEach($scope.students, function(student,key) {
      		if (student.name==name) {
      			$scope.students.splice(key,1);
      		};
    	});
    };

	
});
