'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('anaximander'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
