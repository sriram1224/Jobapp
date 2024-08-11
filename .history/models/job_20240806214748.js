
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema( {
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
    salary: {
        type: Number,
    },
});