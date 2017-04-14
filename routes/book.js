const router = require('express').Router()
const knex = require('../db')

//Book table CRUD routes

router.get('/', (req, res) => {
  knex('book')
    .then(books => {
      res.status(200).send(books)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  knex('book').where('id', parseInt(req.params.id))
    .then(book => {
      res.status(200).send(book)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.post('/', (req, res) => {
  knex('book').where('title', req.body.title).first()
    .then(book => {
      if (book) {
        return [book.id];
      } else {
        return knex('book')
          .returning('id')
          .insert({title: req.body.title,
                   genre: req.body.genre,
                   description: req.body.description,
                   image_url: req.body.image_url})
      }
    })
    .then((bookIds) => bookIds[0])
    .then(bookId => {
      res.status(200).send({book_id: bookId})
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.put('/:id', (req, res) => {
  knex('book').where('id', parseInt(req.params.id)).del()
    .update({title: req.body.title,
             genre: req.body.genre,
             description: req.body.description,
             image_url: req.body.image_url})
    .then(() => {
      res.status(200).send()
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  knex('book').where('id', parseInt(req.params.id)).del()
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    res.status(503).send(err.message)
  })
})

module.exports = router
