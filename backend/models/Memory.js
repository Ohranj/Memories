const { Schema, model } = require("mongoose");

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
    icon: String,
});

const MemoryModel = model("Memory", memorySchema);

module.exports = MemoryModel;
