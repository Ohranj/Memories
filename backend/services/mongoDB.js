const { connect } = require("mongoose");

connect(
    `mongodb+srv://ajdorrington:e71gFOXJfqd1p2QR@cluster0.1u9xy.mongodb.net/memories?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => {
        console.log("Database connected");
    })
    .catch(() => {
        console.log("Error connecting database");
    });
