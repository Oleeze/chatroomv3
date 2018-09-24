const Sequelize = require('sequelize');
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     5432,
    host:     'ec2-54-227-237-27.compute-1.amazonaws.com',
    logging:  true //false
  })
} else {
  sequelize = new Sequelize('chatroomv3', 'Oleg', 'Password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  })
}


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

//Uncomment for fresh database and run once, then comment again
// sequelize.sync()
// .then(() => {
//     Room.create({
//       name: 'Lobby1',
//   }).then(room => {
//     console.log('success');
//   }).catch(err => {
//     console.log(err);
//   })
//   Message.create({
//     roomId: 1,
//     username: 'Oleg',
//     message: 'Hello there lobby1'
// }).then(message => {
//   console.log('success');
// }).catch(err => {
//   console.log(err);
// })
// })


module.exports = { Message, Room };