const router = require("express").Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const MemoryModel = require("../models/Memory");

const cloudinary = require("../services/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req) => {
        return {
            folder: req.user.id,
            allowedFormats: ["jpg", "png", "jpeg"],
            transformation: [{ width: 500, height: 500, crop: "limit" }],
        };
    },
});
const parser = multer({ storage });

const selectIcon = (occasion) => {
    switch (occasion) {
        case "Birthday":
            return "local_bar";
        case "Holiday":
            return "airplanemode_active";
        case "Friends":
            return "people";
        case "Achievement":
            return "star";
        case "Other":
            return "favorite";
    }
};

//Upload new memory
router.post("/upload", parser.single("file"), (req, res) => {
    const { title, date, occasion, blurb } = req.body;
    req.model.findByIdAndUpdate(
        req.user.id,
        {
            $push: {
                memories: new MemoryModel({
                    title,
                    date,
                    scenario: occasion,
                    blurb,
                    memoryImg: req.file.path,
                    icon: selectIcon(occasion),
                }),
            },
        },
        { safe: true, new: true },
        (err, document) => {
            document ? res.sendStatus(201) : res.sendStatus(401);
        }
    );
});

exports.memoryRoutes = router;
