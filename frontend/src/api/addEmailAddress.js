import axios from "axios";

export default ({ name, email }, cb) => {
    axios({
        method: "post",
        url: "account/newemail",
        data: {
            name,
            email,
        },
    })
        .then(({ status }) => {
            if (status === 201) {
                cb(name, email);
            }
        })
        .catch(() => {
            alert("Maximum number of emails reached");
        });
};
