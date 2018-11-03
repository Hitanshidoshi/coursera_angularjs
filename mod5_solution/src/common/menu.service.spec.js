describe('menuservice', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return categories list', function() {
    $httpBackend.whenGET(ApiPath + '/categories.json').respond(['Lunch', 'Soup']);
    menuservice.getCategories().then(function(response) {
      expect(response).toEqual(['Lunch', 'Soup']);
    });
    $httpBackend.flush();
  });

  it('should return menu items for category A', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json?category=A').respond(['Won Ton Soup with Chicken', 'Egg Drop Soup']);
    menuservice.getMenuItems('A').then(function(response) {
      expect(response).toEqual(['Won Ton Soup with Chicken', 'Egg Drop Soup']);
    });
    $httpBackend.flush();
  });


});
