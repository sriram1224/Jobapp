const Jobmodel = require("../models/job");


const createJob = async (req, res) => {
    const jobobj = req.body;
    const newJob = new Jobmodel(jobobj);
    await newJob.save();
    console.log(req.body);
    res.json({
        success: true,
        message: 'Job created successfully',
    })
};

const listJob = async (req, res) => {
    res.json({
        success: true,
        message: 'Job listed successfully',
    })
};
const editJob = async (req, res) => {
    res.json({
        success: true,
        message: 'Job edited successfully',
    })
};

const deleteJob = async (req, res) => { 
    res.json({
        success: true,
        message: 'Job deleted successfully',

    })
}

const jobController = {
    createJob,
    listJob,
    editJob,
    deleteJob,
};
module.exports = jobController;
