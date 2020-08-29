import axios from "axios";

export default ({ name, email }, cb) => {
    axios({
        method: "post",
        url: "account/newemail",
        data: {
            name,
            email,
        },
    });
    cb();
};
