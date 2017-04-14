const router = require('express').Router()
const knex = require('../db')

//Author_Book table CRUD routes

router.get('/', (req, res) => {
  knex('author_book')
    .then(authors_books => {
      res.status(200).send(authors_books)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.get('/author/:id', (req, res) => {
  knex('author_book').where('author_id', parseInt(req.params.id))
    .then(author_books => {
      res.status(200).send(author_books)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.get('/book/:id', (req, res) => {
  knex('author_book').where('book_id', parseInt(req.params.id))
    .then(book_authors => {
      res.status(200).send(book_authors)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.post('/', (req, res) => {
  knex('author_book').insert({author_id: parseInt(req.body.author_id),
                              book_id: parseInt(req.body.book_id)})
    .then(() => {
      res.status(200).send()
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

module.exports = router
