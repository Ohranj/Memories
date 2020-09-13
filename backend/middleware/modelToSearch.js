const GoogleModel = require("../models/GoogleUser");
const LocalModel = require("../models/LocalUser");

module.exports = (req, res, next) => {
    let modelToSearch;
    if (req.user) {
        req.user.toObject().hasOwnProperty("password")
            ? (modelToSearch = LocalModel)
            : (modelToSearch = GoogleModel);
        req.model = modelToSearch;
    }
    next();
};
