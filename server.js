const express = require("express");
const passport = require("passport");
const path = require("path");
const cookieSession = require("cookie-session");
const modelToSearch = require("./backend/middleware/modelToSearch");

require("./backend/services/mongoDB");
require("./backend/services/passport");
require("dotenv").config();

const { loginRoutes } = require("./backend/routes/login");
const { registerRoutes } = require("./backend/routes/register");
const { userRoutes } = require("./backend/routes/account");
const { memoryRoutes } = require("./backend/routes/memories");

const app = express();
const PORT = process.env.PORT || 8080;

//configure backend handling
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static("./backend/uploads"));
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 12,
        keys: [process.env.COOKIE_KEY],
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Configure routes
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/account", modelToSearch, userRoutes);
app.use("/memory", modelToSearch, memoryRoutes);

//Heroku hosting
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.use(express.static("./backend/uploads"));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "frontend", "build", "index.html")
        );
    });
}

//Run server
app.listen(PORT, () => {
    console.log("Server running");
});
