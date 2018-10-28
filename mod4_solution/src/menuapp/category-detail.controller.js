(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController);

// Version with resolving to 1 item based on $stateParams in route config
CategoryDetailController.$inject = ['lists'];
function CategoryDetailController(lists) {
  var categoryDetail = this;
  categoryDetail.lists = lists;

}

})();
