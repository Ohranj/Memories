const router = require("express").Router();

//Fetch user profile from session
router.get("/user", (req, res) => {
    res.send(req.user);
});
////
//

exports.userRoutes = router;
