
const mongoose  = require ("mongoos")
const JobSchema = {
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
};