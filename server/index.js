const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router.js');
const models = require('../database')
const port = process.env.PORT || 8080;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))




let getMessages = (data) => {
  models.Message.create( data )
}

let getRooms = (data) => {
  models.Room.create(data)
}

io.on('connection', (socket) => {
  console.log('You are connected to socket io')
  console.log(io.engine.clientsCount)
  socket.on('createMessage', (data) => {
    getMessages( data )
    io.emit('getMessages');
  })
  socket.on('createRoom', (data) => {
    getRooms(data)
    io.emit('getRooms')
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('typing', (data) => {
    console.log(data);
    socket.broadcast.emit('broadcast', data);
  })
})

server.listen(port, () => console.log('Listening on port 8080'));