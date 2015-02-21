var app = angular.module("myApp", []);

/*app.run(function($rootScope){
	$rootScope.name="Rajesh patel";
});
*/

var apiKey = 'MDE4MzQwNjk5MDE0MjQ1MTA5OTJlNWMzYg001',
nprUrl = 'http://api.npr.org/query?id=10003&fields=title,byline,text,audio,image,pullQuote,all&output=JSON&apiKey=MDE4MzQwNjk5MDE0MjQ1MTA5OTJlNWMzYg001';

app.controller('PlayerController', ['$scope','$http', function($scope, $http){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'C:/Users/Public/Music/Sample Music/Kalimba.mp3';
	
	$http({
	    method: 'JSONP',
	    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  	}).success(function(data, status) {

     	$scope.programs = data.list.story;

  	}).error(function(data, status) {
    // Some error occurred
 	});


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
