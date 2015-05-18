var app = angular.module("mainApp", []);
app.controller("mainCtrl", function ($scope) {
    $scope.message = "Hello World";
    $scope.heroesURL = "http://cdn.dota2.com/apps/dota2/images/heroes/";
    $scope.sb = "_sb.png"; 
    $scope.itemsURL = "http://cdn.dota2.com/apps/dota2/images/items/";
    $scope.lg = "_lg.png"; 
});