(function () {

  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'menuItems', 'InfoService'];
  function SignUpController(MenuService, menuItems, InfoService) {
    var $ctrl = this;
    var items = [];
    var specific_item = [];

    // $ctrl.menuItems = menuItems;
    for (var i = 0; i < menuItems.menu_items.length; i++) {
      var item = menuItems.menu_items[i].short_name.toLowerCase();
      // var specific_item = menuItems.menu_items[i];
      items.push(item + "");
      // specific_items.push(specific_item + "");
    }
    // console.log("items", items);

    $ctrl.checkDish = function () {
      // console.log("items", items);
      if ($ctrl.user != undefined && $ctrl.user.dish != undefined) {
      var dish = $ctrl.user.dish.toLowerCase();
      if (items.indexOf(dish) != -1) {
        $ctrl.invalidDish = false;
      } else {
        $ctrl.invalidDish = true;
      }
    }
  };

  $ctrl.submit = function () {
    $ctrl.completed = true;
    var infoData = [];
    infoData.push($ctrl.user.firstname);
      infoData.push($ctrl.user.lastname);
      infoData.push($ctrl.user.email);
      infoData.push($ctrl.user.phone);
      infoData.push($ctrl.user.dish);


    // console.log('firstname', infoData[2]);
    InfoService.set(infoData);
    var dish = $ctrl.user.dish.toLowerCase();
    for (var i = 0; i < menuItems.menu_items.length; i++) {
      if (menuItems.menu_items[i].short_name.toLowerCase().indexOf(dish) != -1) {
        specific_item.push(menuItems.menu_items[i]);
        break;
      }

    }
    // console.log('specific_item', specific_item[0].name);
    InfoService.setSpecificData(specific_item);
  };


  }

})();
