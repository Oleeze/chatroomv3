const express = require('express')
const router = express.Router();
const model = require('../database')


router.get('/rooms', (req, res) => {
  model.Room.findAll()
  .then((err, data) => {
    if(err) {
      console.log(err);
    }
    res.send(data);
  })
})

router.get('/messages', (req, res) => {
  model.Message.findAll({
    where: {
      roomId:1
    }
})
  .then((err, data) => {
    if(err) {
      console.log(err);
    }
    res.send(data);
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