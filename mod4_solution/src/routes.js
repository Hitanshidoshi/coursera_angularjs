(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', { //Any name can be given
    url: '/categories',
    templateUrl: 'src/menuapp/templates/allcategories.template.html',
    controller: 'MainCategoryListController as menu',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoryDetail', {
    url: '/category-detail/{category}',
    templateUrl: 'src/menuapp/templates/category-detail.template.html',
    controller: "CategoryDetailController as categoryDetail",
    resolve:{
      lists: ['$stateParams', 'MenuDataService',function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });
  }
})();
