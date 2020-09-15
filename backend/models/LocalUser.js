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
    notify: {
        type: Boolean,
        default: true,
    },
});

localSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 8).then((hash) => {
        user.password = hash;
        next();
    });
});

localSchema.pre("findOneAndUpdate", async function (next) {
    if (Object.keys(this._update)[0] === "$push") {
        const document = await this.model.findOne(this);
        document.additionalEmails.length >= 9
            ? next(new Error("Email limit reached"))
            : next();
    }
    next();
});

const LocalModel = model("Local", localSchema);

module.exports = LocalModel;
