const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const GoogleModel = require("../models/GoogleUser");
const LocalModel = require("../models/LocalUser");

require("dotenv").config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    GoogleModel.findById(id).then((user) => {
        if (user) {
            done(null, user);
        } else {
            LocalModel.findById(id).then((user) => {
                if (user) {
                    done(null, user);
                }
            });
        }
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/login/google/callback",
            proxy: true,
        },
        (accessToken, refreshToken, profile, done) => {
            GoogleModel.findOne({ email: profile._json.email }).then((user) => {
                if (user) {
                    done(null, user);
                } else {
                    new GoogleModel({
                        firstname: profile.name.givenName,
                        surname: profile.name.familyName,
                        email: profile._json.email,
                        profileImg: "default1.jpg",
                    })
                        .save()
                        .then((user) => {
                            done(null, user);
                        });
                }
            });
        }
    )
);

passport.use(
    new LocalStrategy(
        { usernameField: "email" },
        (username, password, done) => {
            LocalModel.findOne({ email: username }, (err, user) => {
                if (user) {
                    bcrypt.compare(password, user.password).then((isMatch) => {
                        isMatch ? done(null, user) : done(null, null);
                    });
                } else {
                    return done(null, null);
                }
            });
        }
    )
);
