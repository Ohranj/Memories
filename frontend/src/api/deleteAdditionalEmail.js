import axios from "axios";

export default (email, cb) => {
    axios({
        method: "delete",
        url: "account/deleteemail",
        data: { email },
    })
        .then(({ status }) => {
            if (status === 201) {
                cb();
            }
        })
        .catch(() => {
            alert("Unable to delete item");
        });
};
