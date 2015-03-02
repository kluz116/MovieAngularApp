var app = angular.module('app', []);

app.service('MovieService',function($http){
	var url ='http://api.trakt.tv/movies/trending.json/b8caafb7791ecda877a0eb782dd127ac?callback=JSON_CALLBACK';
//AIzaSyBbattT5NvmqbnrabXIA_Fx2PdMJ7dFVW8
	this.get = function(){

		//return [1,2,3];
		return $http.jsonp(url);
	}
});

app.controller('MoviesController', function ($scope, MovieService){
	//$scope.names = ["john", "peter", "mark","suzan","tom"];
	//$scope.input='some text';
	$scope.movies = MovieService.get().then(function(response){

$scope.movies = response.data;


	});
});