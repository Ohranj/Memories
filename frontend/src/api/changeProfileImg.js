import axios from "axios";

export default (imageData, cb) => {
    const formData = new FormData();
    formData.append("filename", imageData.filename);
    formData.append("file", imageData.file);
    axios({
        method: "post",
        url: "account/newprofileimg",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    })
        .then(({ status }) => {
            if (status === 201) {
                cb();
            }
        })
        .catch((err) => {
            console.log("Error");
        });
};
