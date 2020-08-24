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
    });
};
