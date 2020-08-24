import axios from "axios";

export default (e, { firstname, surname, email, password }) => {
    e.preventDefault();
    axios({
        method: "post",
        url: "register/new",
        data: {
            firstname,
            surname,
            email,
            password,
        },
    });
};
