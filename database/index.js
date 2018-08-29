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

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING
  }
});

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
  }
})

Room.hasMany(Message, {as: 'room'});
User.hasMany(Message, {as: 'user'});

sequelize.sync({
  force: true
});