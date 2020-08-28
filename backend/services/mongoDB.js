const { connect } = require("mongoose");

require("dotenv").config();

connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b0iiq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
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
