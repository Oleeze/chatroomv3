const Sequelize = require('sequelize');
const sequelize = new Sequelize('chatroomv3', 'Oleg', 'Password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err);
  })

const Room = sequelize.define('room', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  }
});

const Message = sequelize.define('message', {
  message: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  username: {
    type: Sequelize.STRING,
  }
})

Room.hasMany(Message, {as: 'room'});

module.exports = { Message, Room };