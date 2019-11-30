const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Product = mongoose.model('myProduct');
const myKey = require('../setup/myurl');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = myKey.secret;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            Product.findById(jwt_payload.id)
                .then(product => {
                    if (product) {
                        return done(null, product);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
}
