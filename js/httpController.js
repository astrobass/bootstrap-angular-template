app.controller('httpController', function($scope, $http) {
  var req = {
    method: 'GET',
    url: 'http://www.google.com',
    headers: {
      'Content-Type': 'application/soap+xml; charset=utf-8'
    },
  };

 $http(req)
  .success(function(data, status) {
    $scope.data = data.substring(0,120);
    $scope.status = status;
  })
});