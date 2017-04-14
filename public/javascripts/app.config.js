(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'bookList',
        url: '/books',
        component: 'bookList'
      })
      .state({
        name: 'bookPage',
        url: '/books/:id',
        component: 'bookPage'
      })
      .state({
        name: 'book',
        url: '/bookPage/:id',
        component: 'book'
      })
      .state({
        name: 'author',
        url: '/authors/:id',
        component: 'author'
      })
  }
}());
