const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./backend/services/mongoDB");
require("./backend/services/passport");

const { loginRoutes } = require("./backend/routes/login");
const { registerRoutes } = require("./backend/routes/register");

const app = express();
const PORT = process.env.PORT || 8080;

//configure backend handling
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 12,
        keys: ["mykey"],
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Configure routes
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);

//Run server
app.listen(PORT, () => {
    console.log("Server running");
});
