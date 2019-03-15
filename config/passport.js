const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const keys = require("./index");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passportJwt = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ _id: jwt_payload.id })
        .select("username")
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => done(null, false));
    })
  );
};
