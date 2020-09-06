const router = require("express").Router();
const mongoose = require("mongoose");
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
                    icon: (function () {
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
                    })(),
                }),
            },
        },
        { new: true },
        (err, document) => {
            !err ? res.sendStatus(201) : res.sendStatus(401);
        }
    );
});

//Delete memory
router.delete("/delete", (req, res) => {
    const { memory } = req.body;
    req.model.findByIdAndUpdate(
        req.user.id,
        {
            $pull: {
                memories: { _id: mongoose.Types.ObjectId(memory) },
            },
        },
        { new: true },
        (err, document) => {
            !err ? res.sendStatus(201) : res.sendStatus(401);
        }
    );
});

exports.memoryRoutes = router;
