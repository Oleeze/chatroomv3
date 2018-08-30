const express = require('express')
const router = express.Router();
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
    where: {
      roomId:1
    }
})
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    res.send(error);
  })
})

router.get('/user', (req, res) => {
  model.User.findAll()
  .then((err, data) => {
    if(err) {
      console.log(err);
    }
    res.send(data);
  })
})

router.post('/rooms', (req, res) => {
  model.Room.create({
    name: 'Lobby2'
  }).then((err, data) => {
    if (err) {
      console.log(err)
    }
    res.send(data);
  })
})

router.post('/messages', (req, res) => {

})

router.post('/user', (req, res) => {
  
})

module.exports = router;