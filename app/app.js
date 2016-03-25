'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'angularUtils.directives.dirPagination'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', [ '$scope', '$http', function($scope, $http) {
  // Simple Get request and bind data to the Scope of our App
  $http({
    method : 'Get',
    url : 'http://jsonplaceholder.typicode.com/photos'

  }).then(function successCB(response) {
    // Do something if server response is successful
    $scope.photoData = response.data;

  }, function errorCB(response) {
    // Do something if error happens or server returns an error response
    $scope.photoData = response.statusText;
  });

}])
