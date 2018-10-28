(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['items'];
function MainCategoryListController(items) {
  var menu = this;
  menu.items = items;
}

})();
