import axios from "axios";

export default ({ filename, file, title, blurb, date, occasion }, cb) => {
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("file", file);
    formData.append("title", title);
    formData.append("blurb", blurb);
    formData.append("date", date);
    formData.append("occasion", occasion);
    axios({
        method: "post",
        url: "memory/upload",
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
            console.log(err.response);
        });
};
