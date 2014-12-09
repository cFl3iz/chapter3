angular.module('App')
.controller('EditorCtrl', function ($scope, $http) {
  $scope.editing = true;

  $scope.view = function (index) {
    $scope.editing = false;
    $scope.content = $scope.notes[index];
  };

  $http.get('/notes').success(function (data) {
    $scope.notes = data;
  }).error(function (err) {
    $scope.error = 'Could not load notes';
  });

});
