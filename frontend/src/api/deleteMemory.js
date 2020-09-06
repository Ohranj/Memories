import axios from "axios";

export default (memory, cb) => {
    axios({
        method: "delete",
        url: "memory/delete",
        data: { memory },
    })
        .then(({ status }) => {
            if (status === 201) {
                cb();
            }
        })
        .catch((err) => console.log(err.response));
};
