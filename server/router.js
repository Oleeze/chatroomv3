const router = require('express').Router();
const models = require('../database')

router.get('/rooms', (req, res) => {
  models.Room.findAll()
    .then (data => {
      res.status( 200 ).send(data)
    })
    .catch( error => {
      res.send( error )
  })  
})

router.get('/messages', (req, res) => {
  models.Message.findAll({
    where: req.query,
    order: [['updatedAt', 'DESC']]
})
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    res.send(error);
  })
})

module.exports = router;