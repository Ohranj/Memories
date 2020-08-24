const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GoogleModel = require("../models/GoogleUser");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    GoogleModel.findById(id).then((user) => {
        if (user) {
            done(null, user);
        }
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "220310343856-5t95a44ua1l0qj2dstsd80jmgarhki22.apps.googleusercontent.com",
            clientSecret: "AExNWTQfmPzxpTzO5xMG1gCE",
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
