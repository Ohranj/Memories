const router = require("express").Router();

router.post("/new", (req, res) => {
    console.log(req.body);
    res.sendStatus(201);
});

exports.registerRoutes = router;
