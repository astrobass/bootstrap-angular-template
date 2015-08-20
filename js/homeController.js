app.controller('homeController', function($scope) {
  $scope.values = ["One", "Two"];
  $scope.value = "";

  $scope.submit = function() {
    $scope.answer = answer;
  };
});