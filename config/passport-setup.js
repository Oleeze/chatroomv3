const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const models = require('../database/index');
const keys = require('../keys')
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  models.User.findById(id)
  .then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
  //options for the google strategy
  callbackURL:'/google/redirect',
  clientID: keys.clientID,
  clientSecret: keys.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // check if user exists
    models.User.findOne({where: {googleId: profile.id}})
    .then((currentUser) => {
      if (null, currentUser){
        //already have the user
        console.log('Current user is: ',currentUser)
        done(null, currentUser)
      } else {
        models.User.create({
          username: profile.displayName,
          googleId: profile.id,
          photo: profile.photos[0].value
        }).then(data => {
          done(null, data);
        })
      }
    })
  })
)