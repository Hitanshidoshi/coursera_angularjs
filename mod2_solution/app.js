(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.showItems();

  toBuy.addBoughtItems = function (index) {
    ShoppingListCheckOffService.addBoughtItems(index);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.showBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  var array1 = [
  {
    name: "Cookies",
    quantity: "10"
  },
  {
    name: "Cheese",
    quantity: "25"
  },
  {
    name: "Jam",
    quantity: "2"
  },
  {
    name: "Bread",
    quantity: "5"
  },
  {
    name: "Butter",
    quantity: "20"
  }
  ];
  // List of shopping items
  var items = [];

  service.showItems = function () {
    return array1;
  };

  service.addBoughtItems = function (index) {
    items.push(array1[index]);
    array1.splice(index,1);
    // items.push(array1(index));
  };

  service.showBoughtItems = function () {
    return items;
  };
  // service.addItem = function (itemName, quantity) {
  //   var item = {
  //     name: itemName,
  //     quantity: quantity
  //   };
  //   items.push(item);
  // };
  //
  // service.removeItem = function (itemIdex) {
  //   items.splice(itemIdex, 1);
  // };
  //
  // service.getItems = function () {
  //   return items;
  // };
}

})();
