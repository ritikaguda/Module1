(function () {
  'use strict';
  angular.module('LunchChecker', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.list = "";
    $scope.messageCheck = "Please enter data first";
    function message(listSize) {
      if (listSize <= 3) {
        return "Enjoy!"
      }
      else if (listSize > 3) {
        return "Too much!"
      }
      else{
        return "Please enter data first"
      }
    };
    $scope.checkList = function () {
      var arrayOfList = $scope.list.split(",");
      var listSize = arrayOfList.length
      if ($scope.list.length==0) {
        listSize=0;
      }
      $scope.messageCheck=message(listSize);
    };
  }
})();
