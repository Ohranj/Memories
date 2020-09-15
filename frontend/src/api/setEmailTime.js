import axios from "axios";

export default (checked) => {
    axios({
        method: "post",
        url: "account/email",
        data: { checked },
    })
        .then(console.log("Notification changed"))
        .catch(console.log("Error"));
};
