const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const GoogleModel = require("../models/GoogleUser");
const LocalModel = require("../models/LocalUser");

//Multer setup
const profileImagePath = path.join(__dirname + "/../uploads/profiles");

const multerStorageDetail = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, profileImagePath);
    },
    filename: (req, files, cb) => {
        const filename = files.originalname;
        cb(null, filename);
    },
});

const multerUpload = multer({
    storage: multerStorageDetail,
    fileFilter: (req, file, cb) => {
        if (
            !file.mimetype == "image/png" ||
            !file.mimetype == "image/jpeg" ||
            !file.mimetype == "image/jpg"
        ) {
            cb(null, false);
            return cb(new Error("File type not allowed"));
        }
        cb(null, true);
    },
});

//Routes
//Fetch user profile from session
router.get("/user", (req, res) => {
    res.send(req.user);
});
////
//

//Update user profile image, save to server and change in MongoDB
router.post("/newprofileimg", multerUpload.single("file"), (req, res) => {
    req.model.findByIdAndUpdate(
        req.user.id,
        { profileImg: req.file.originalname },
        (err, user) => {
            user ? res.sendStatus(201) : res.sendStatus(401);
        }
    );
});
////
//

//Add an additional email address for notification
router.post("/newemail", (req, res) => {
    console.log(req.body, req.model);
    //req.model.findByIdAndUpdate(req.user.id)
});

exports.userRoutes = router;
