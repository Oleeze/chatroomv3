const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const router = require('./router.js');
const socket = require('socket.io')
const models = require('../database')

const server = app.listen(8080, () => console.log('Listening on post 8080'))
const io = socket(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(router);

let findMessages = (id, socket) => {
   models.Message.findAll({
    where: {roomId: id}
}).then(data => {
  io.emit('grabMessages', data);
})
}



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
