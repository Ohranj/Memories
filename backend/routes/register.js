const router = require("express").Router();
const LocalModel = require("../models/LocalUser");

router.post("/new", (req, res) => {
    const { firstname, surname, email, password } = req.body;
    LocalModel.findOne({ email }, (err, user) => {
        if (user) {
            return res.sendStatus(409);
        }
        new LocalModel({
            firstname,
            surname,
            email,
            password,
            profileImg: "default1.jpg",
        })
            .save()
            .then(() => res.sendStatus(201));
    });
});

exports.registerRoutes = router;
