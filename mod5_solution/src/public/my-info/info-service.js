(function () {
  'use strict';

  angular.module('public')
  .service('InfoService', InfoService);

  function InfoService() {
    var service = this;
    var savedData = {};
    var specificData = {};

    service.set = function (data) {
      savedData = data;
      // console.log('firstname', savedData);
    };

    service.get = function () {
      return savedData;
    };

    service.setSpecificData = function (data) {
      specificData = data;
      // console.log('specific_item', specificData[0].name);
    };

    service.getSpecificData = function () {
      return specificData;
    };

  }
})();
