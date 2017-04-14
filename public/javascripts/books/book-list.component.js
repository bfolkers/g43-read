(function() {
  'use strict'

  angular.module('app')
    .component('bookList', {
      controller: bookListController,
      templateUrl: './bookList.html'
    })
}());

function bookListController(bookService) {
  const vm = this

  vm.$onInit = function () {
    vm.getBooks()
    vm.orderBy = 'title'
  }

  vm.getBooks = function() {
    bookService.getBooks()
      .then(books => {
        vm.books = books.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
