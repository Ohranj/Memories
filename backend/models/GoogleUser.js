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

googleSchema.pre("findOneAndUpdate", async function (next) {
    if (Object.keys(this._update)[0] === "$push") {
        const document = await this.model.findOne(this);
        document.additionalEmails.length >= 9
            ? next(new Error("Email limit reached"))
            : next();
    }
    next();
});

const GoogleModel = model("Google", googleSchema);

module.exports = GoogleModel;
