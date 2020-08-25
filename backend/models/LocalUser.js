const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const localSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    surname: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    profileImg: String,
    memories: Array,
    additionalEmails: Array,
});

localSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 8).then((hash) => {
        user.password = hash;
        next();
    });
});

const LocalModel = model("Local", localSchema);

module.exports = LocalModel;
