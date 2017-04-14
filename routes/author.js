const router = require('express').Router()
const knex = require('../db')

//Author table CRUD routes
router.get('/', (req, res) => {
  knex('author')
    .then(authors => {
      res.status(200).send(authors)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  knex('author').where('id', parseInt(req.params.id))
    .then(author => {
      res.status(200).send(author)
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.post('/', (req, res) => {
  knex('author').where({name: req.body.name}).first()
    .then(author => {
      if (author) {
        return [author.id];
      } else {
        return knex('author')
          .returning('id')
          .insert({name: req.body.name,
                   bio: req.body.bio,
                   image_url: req.body.image_url})
      }
    })
    .then((authorIds) => authorIds[0])
    .then(authorId => {
      res.status(200).send({author_id: authorId})
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.put('/:id', (req, res) => {
  knex('author').where('id', parseInt(req.params.id))
    .update({name: req.body.name,
             bio: req.body.bio,
             image_url: req.body.image_url})
    .then(() => {
      res.status(200).send()
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  knex('author').where('id', parseInt(req.params.id)).del()
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    res.status(503).send(err.message)
  })
})

module.exports = router
