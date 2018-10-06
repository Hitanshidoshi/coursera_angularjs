(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckcontroller', LunchController)
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.item = "";
      $scope.message = "";

      $scope.check = function () {

      var str = $scope.item.split(",")
      // var str1 = str.filter(Boolean).length;
      var nonEmpty = str.filter(function(e) {
        return String(e).trim();
      });
      var str1 = nonEmpty.length;

      var count = 0;

      
        if (str1 > 0 && str1 <= 3 && str[0] != "") {
          $scope.message = "Enjoy!";

        }else if (str1 > 3) {
          $scope.message = "Too much!";
        } else if (str1 === 0 || str[0] == ""){
          $scope.message = "Please enter data first";
        }else {
          $scope.message = "Wrong input";
        }
      };
    }

})();
