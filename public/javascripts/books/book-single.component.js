(function() {
  'use strict'

  angular.module('app')
    .component('book', {
      controller: bookController,
      bindings: {book: '='},
      templateUrl: './bookSingle.html'
    })
}());

function bookController(bookService) {
  const vm = this

  vm.$onInit = function () {
    vm.book.authors = []
    bookService.getAuthors(vm.book.id)
      .then(authors => {
        let promiseArray = []
        authors.data.forEach(function(bookAuthor) {
          promiseArray.push(bookService.getAuthor(bookAuthor.author_id))
        })
        return Promise.all(promiseArray)
          .then(response => {
            vm.book.authors = response
          })
          .catch(err => {
            console.log(err)
          })

      })
      .catch(err => {
        console.log(err)
      })
  }

  // vm.toggleComments = function() {
  //   return vm.showComments = !vm.showComments
  // }
  //
  // vm.addComment = function(e, post_id, comment) {
  //   e.preventDefault()
  //   let thisComment = {content: comment}
  //   postService.newComment(post_id, thisComment)
  //     .then(response => {
  //       vm.post.comments.push(thisComment)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  //
  // vm.upVotePost = function(e, post_id) {
  //   e.preventDefault()
  //   postService.upVote(post_id)
  //     .then(response => {
  //       vm.post.vote_count = response.data.vote_count
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  //
  // vm.downVotePost = function(e, post_id) {
  //   e.preventDefault()
  //   postService.getPost(post_id)
  //     .then(response => {
  //       if (response.data.vote_count > 0) {
  //         postService.downVote(post_id)
  //           .then(response => {
  //             vm.post.vote_count = response.data.vote_count
  //           })
  //           .catch(err => {
  //             console.log(err)
  //           })
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
}
