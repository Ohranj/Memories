import axios from "axios";

export default (e, { firstname, surname, email, password }, resetInputs) => {
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
    })
        .then(() => resetInputs())
        .catch((err) => alert("User already exists"));
};
