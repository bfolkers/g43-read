(function() {
  'use strict'

  angular.module('app')
    .component('author', {
      controller: authorController,
      bindings: {author: '='},
      templateUrl: './authorSingle.html'
    })
}());

function authorController(authorService) {
  const vm = this


  vm.$onInit = function () {

  }

}
