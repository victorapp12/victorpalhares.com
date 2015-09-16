/* global app */
app.controller('ListProjectCtrl', ['$scope', 'dtProjetos', function ($scope, dtProjetos) {
  
  $scope.dados = angular.copy(dtProjetos["projects"]);
  $scope.random = function() {
    return 0.5 - Math.random();
  }

}]);


app.controller('DetProjectCtrl', ['$scope', 'dtProjetos', '$routeParams', function ($scope, dtProjetos, $routeParams) {
  
   $scope.dados = angular.copy(dtProjetos.projects[$routeParams.id]);
   
}]);
