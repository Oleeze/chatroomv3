const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router.js');
const socket = require('socket.io')
const models = require('../database')
const passportSetUp = require('../config/passport-setup')
const cookieSession = require('cookie-session');
const passport = require('passport')

const app = express();



app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['Oleeze']
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session())

app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))

const server = app.listen(8080, () => console.log('Listening on post 8080'))
const io = socket(server);

io.on('connection', (socket) => {
  console.log('You are connected to socket io')
 
  socket.on('createMessage', data => {
    models.Message.create( data )
    io.emit('getMessages');
  })

  socket.on('createRoom', (data) => {
    models.Room.create(data)
    io.emit('getRooms')

  })



  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
