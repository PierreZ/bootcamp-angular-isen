var myApp = angular.module('studentApp', []);
myApp.controller('Ctrl', function ($scope) {

	$scope.selected="All"
	$scope.students = new Array();
	$scope.student = {};
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

	$scope.classes = new Array();

	$scope.classes.push("All");

	$scope.classes.push("CIR3");
	$scope.classes.push("CIR2");
	$scope.classes.push("CIR1");
	$scope.classes.push("CSI3");
	$scope.classes.push("M1");	


	$scope.remove = function (name){
    	angular.forEach($scope.students, function(student,key) {
      		if (student.name==name) {
      			$scope.students.splice(key,1);
      		};
    	});
    };
	$scope.addStudent = function (){
		$scope.students.push($scope.student);
    };

    $scope.setSelected = function (select){
    	$scope.selected = select;
    }

	
});
