const { Schema } = require("mongoose");

const memorySchema = Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    scenario: {
        type: String,
        required: true,
    },
    blurb: String,
    memoryImg: {
        type: String,
        required: true,
    },
});

module.exports = memorySchema;
