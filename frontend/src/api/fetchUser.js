import axios from "axios";

export default () => {
    return axios({
        method: "get",
        url: "account/user",
    })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });
};
