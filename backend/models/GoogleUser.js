const { Schema, model } = require("mongoose");

const googleSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    surname: String,
    email: {
        type: String,
        required: true,
    },
    profileImg: String,
    memories: Array,
    additionalEmails: Array,
});

const GoogleModel = model("Google", googleSchema);

module.exports = GoogleModel;
