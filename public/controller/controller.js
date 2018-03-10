var myApp = angular.module('xoriant', []);

// defining controller
myApp.controller('myCtrl', ['$http', '$scope', function($http,$scope){

$scope.getAllArticles = function() {
  var url = 'http://starlord.hackerearth.com/hackernews';
  $http({
    method : 'GET',
    url    : url
  })
  .then(
  function successCallback(response){
    $scope.articles = response.data;
    // storing data in localStorage
    window.localStorage['myStorage'] = angular.toJson($scope.articles);

  },
  function errorCallback(response){
      alert("Some Error Occured , Check Console");
      console.log(response);
    });
}

 $scope.getAllArticles();

}]);
