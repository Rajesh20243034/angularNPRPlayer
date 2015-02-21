var app = angular.module("myApp", []);

/*app.run(function($rootScope){
	$rootScope.name="Rajesh patel";
});
*/
app.controller('PlayerController', ['$scope', function($scope){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'C:/Users/Public/Music/Sample Music/Kalimba.mp3';
	
	$scope.play = function() {
	    $scope.audio.play();
	    $scope.playing = true;
  	};

  	$scope.stop = function() {
	    $scope.audio.pause();
	    $scope.playing = false;
  	};

  	$scope.audio.addEventListener('ended', function() {
	    $scope.$apply(function() {
	    $scope.stop()
	    });
  	});

  	
}]);
app.controller('RelatedController', ['$scope', function($scope){
		
}]);
