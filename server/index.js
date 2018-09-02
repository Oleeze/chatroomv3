const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const router = require('./router.js');
const socket = require('socket.io')
const models = require('../database')

const server = app.listen(8080, () => console.log('Listening on post 8080'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(router);

let Room = models.Room.findAll()



const io = socket(server);

io.on('connection', (socket) => {
  socket.emit('getRooms', Room)
})