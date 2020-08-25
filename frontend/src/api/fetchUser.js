import axios from "axios";

export default () => {
    return axios({
        method: "get",
        url: "account/user",
    });
};
