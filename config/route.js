const router = require('express').Router()
const wrestlersController = require('../controllers/wrestlers')


router.route('/wwewrestlers')
  .get(wrestlersController.index)
  .post(wrestlersController.create)



module.exports = router
