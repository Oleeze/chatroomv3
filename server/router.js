const router = require('express').Router();
const models = require('../database')
const passport = require('passport');

//auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'),(req, res) => {

  res.redirect('../lobby')
})



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
  console.log(req.body);
  models.Room.create( req.body )
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.log(error);
  })
})



router.post('/messages', (req, res) => {
  console.log(req.body)
  models.Message.create( req.body)
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/user', (req, res) => {
  
})

module.exports = router;