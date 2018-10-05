(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckcontroller', LunchController)
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.item = "";
      $scope.message = "";

      $scope.check = function () {

      var str = $scope.item.split(",");
      var count = 0;
      console.log(str);
      // for (var i = 0; i < str.length; i++) {
      //
      // }
        if (str.length > 0 && str.length <= 3 && str[0] != "") {
          $scope.message = "Enjoy!";
        
        }else if (str.length > 3) {
          $scope.message = "Too much!";
        } else if (str.length === 0 || str[0] == ""){
          $scope.message = "Please enter data first";
        }else {
          $scope.message = "Wrong input";
        }
      };
    }

})();
