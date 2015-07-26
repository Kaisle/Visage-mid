var app = angular.module("mainApp", []);
app.controller("mainCtrl", ['$scope', '$window', function ($scope, $window) {
    $scope.message = "Hello World";
    $scope.heroesURL = "http://cdn.dota2.com/apps/dota2/images/heroes/";
    $scope.sb = "_sb.png"; 
    $scope.itemsURL = "http://cdn.dota2.com/apps/dota2/images/items/";
    $scope.lg = "_lg.png";
    $scope.replayUrl = "https://www.youtube.com/playlist?list=PL35b-n5k1iH-ayVVtOz30W815QiVLvvlH";
    $scope.goToReplays = function () {
        $window.location.href = $scope.replayUrl;
    }
}]);