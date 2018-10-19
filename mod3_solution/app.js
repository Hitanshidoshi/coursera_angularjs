
(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
      items: '<',
      onRemove: '&',
      emptyBox: '<',
      nothingFound: '<'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundCtrl',
    bindToController: true
    };
    return ddo;
  }
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;


    narrow.found = MenuSearchService.getItems();

    narrow.searchItems = function () {
      if(narrow.searchTerm == undefined || narrow.searchTerm == null || narrow.searchTerm == ""){
        narrow.emptyBox = true;
        MenuSearchService.clear();
      }else{
      narrow.emptyBox = false;
      narrow.nothingFound = false;
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
      .then (function (result) {
        narrow.found = result;
        if (narrow.found.length === 0) {
                // console.log("Nothing found");
                narrow.nothingFound = true;
              } else {
                narrow.nothingFound = false;
              }
      });
    }
    };
    narrow.removeItem = function(itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
}
  function FoundItemsDirectiveController() {
    var foundCtrl = this;

    foundCtrl.nothingFound1 = function () {
      // console.log("Value is:" ,foundCtrl.items.length);
      if (foundCtrl.items.length === 0) {
        return true;
      }
      return false;
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {

    var service = this;

    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          // process result and only keep items that match
      var items = result.data.menu_items;
        foundItems = [];
        // console.log(" items: ",items[0]);
        // console.log(" items: ",items[1]);
      for (var i = 0; i < items.length; i++) {
        var matchedItem = items[i].description;

        // console.log("value of i :",i);
        // console.log(" items: ",items[i]);
        if (matchedItem.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(items[i]);
          // console.log("found items: ",foundItems[i]);

        }
      // return processed items
    }
    // console.log("items: ",foundItems);
    return foundItems;
      });
    };
  service.clear = function() {
  foundItems.splice(0, foundItems.length);
  }

    service.getItems = function () {
      return foundItems;
    };

  service.removeItem = function(itemIndex) {
    foundItems.splice(itemIndex, 1);
};
  }
})();
