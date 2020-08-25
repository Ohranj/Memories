const router = require("express").Router();
const passport = require("passport");

//Authenticate with google
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/home");
});
////
//

//Login with local
router.post("/local", passport.authenticate("local"), (req, res) => {
    res.status(201).send("ok");
});
////
//

//Logout user
router.get("/logout", (req, res) => {
    req.logout();
    req.session = null;
    res.redirect("/");
});
////
//

exports.loginRoutes = router;
