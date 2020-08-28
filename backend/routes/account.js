const router = require("express").Router();
const path = require("path");
const fs = require("fs");

const profileImagePath = path.join(__dirname + "/../uploads/profiles");

//Fetch user profile from session
router.get("/user", (req, res) => {
    res.send(req.user);
});
////
//

router.post("/newprofileimg", (req, res) => {
    console.log(profileImagePath);
});

exports.userRoutes = router;
