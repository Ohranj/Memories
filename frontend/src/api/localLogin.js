import axios from "axios";

export default (e, { email, password }) => {
    e.preventDefault();
    axios({
        method: "post",
        url: "login/local",
        data: {
            email,
            password,
        },
    })
        .then(({ status }) => {
            console.log(status);
        })
        .catch((err) => console.log(err.response, "no match"));
};
