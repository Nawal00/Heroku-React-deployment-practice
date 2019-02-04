const Wrestler = require('../models/wrestler')

function indexRoute(req, res) {
  Wrestler
    .find()
    .then(wrestlers => res.status(200).json(wrestlers))
    .catch(err => res.status(404).json(err.message))
}

function createRoute(req, res) {
  console.log('req.body', req.body)
  Wrestler
    .create(req.body)
    .then(wrestler => {
      res.status(201).json(wrestler)
      console.log('wrestler after then', wrestler)
    })
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: indexRoute,
  create: createRoute
}
