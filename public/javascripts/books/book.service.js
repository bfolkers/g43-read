(function() {
  'use strict'

  angular.module('app')
    .service('bookService', function($http) {

      this.getBooks = function() {
        return $http.get('/book/')
      }

      this.getBook = function(book_id) {
        return $http.get('/book/' + book_id)
      }

      this.getAuthors = function(book_id) {
        return $http.get('/author_book/book/' + book_id)
      }

      this.getAuthor = function(author_id) {
        return $http.get('/author/' + author_id)
      }
      // this.newPost = function(post) {
      //   return $http.post('/api/posts/', post)
      // }
      //
      // this.editPost = function(post_id, post) {
      //   return $http.patch('/api/posts/' + post_id, post)
      // }
      //
      // this.newComment = function(post_id, comment) {
      //   return $http.post('/api/posts/' + post_id + '/comments/', comment)
      // }
      //
      // this.upVote = function(post_id) {
      //   return $http.post('/api/posts/' + post_id + '/votes/', {})
      // }
      //
      // this.downVote = function(post_id) {
      //   return $http.delete('/api/posts/' + post_id + '/votes/', {})
      // }

  })
}());
