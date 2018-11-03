(function () {

  'use strict';
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'InfoService', 'ApiPath'];
  function MyInfoController(MenuService, InfoService, ApiPath) {
    var $ctrl = this;
    $ctrl.registered = false;
    $ctrl.basePath = ApiPath;
    var infoData = [];
    var specificData = [];
    $ctrl.infoData = InfoService.get();
    console.log($ctrl.infoData.length);
    if ($ctrl.infoData.length != undefined ) {
      $ctrl.registered = true;
    } else {
      $ctrl.registered = false;
    }
    console.log("registered",$ctrl.registered);
    // $ctrl.user.firstname = $ctrl.infoData[0];
    // console.log($ctrl.user.firstname);
    $ctrl.specificData = InfoService.getSpecificData();
    console.log($ctrl.specificData);
  }
})();
