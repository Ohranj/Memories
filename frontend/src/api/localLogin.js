import axios from "axios";

export default (e, { email, password }, cb) => {
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
            setTimeout(() => {
                window.location.href = "/home";
            }, 2500);
            cb(status);
        })
        .catch(({ response: { status } }) => cb(status));
};
