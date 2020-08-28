import axios from "axios";

export default (imageData) => {
    axios({
        method: "post",
        url: "account/newprofileimg",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: imageData,
    });
};
