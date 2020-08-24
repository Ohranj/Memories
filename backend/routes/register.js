const router = require("express").Router();

router.post("/new", (req, res) => {
    console.log(req.body);
});

exports.registerRoutes = router;
