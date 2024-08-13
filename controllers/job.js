const Jobmodel = require("../models/job");


const createJob = async (req, res) => {
    try {
         const jobobj = req.body;
    const newJob = new Jobmodel(jobobj);
    const newlysavedjob = await newJob.save();
    const jobId = newlysavedjob._id;
    res.json({
        success: true,
        message: 'Job created successfully',
        JobId: jobId,
    })
    }
    catch (error) {
        
        res.json({
            success: false,
            message: 'Internal server error',
        });
    }
   
};

const listJob = async (req, res) => {
     try {
        const jobId = req.params.id;

    const joblist = await Jobmodel.find(jobId);
   
    res.json({
        success: true,
        message: 'Job listed successfully',
        result: joblist,
    })
    }
    catch (error) {
        
        res.json({
            success: false,
            message: 'Internal server error',
        });
    }
    
};
const editJob = async (req, res) => {
     try {
         const jobId = req.params.id;
    
   await Jobmodel.findByIdAndUpdate(jobId, req.body);
       
    res.json({
        success: true,
        message: 'Job edited successfully',
    })
    }
    catch (error) {
        
        res.json({
            success: false,
            message: 'Internal server error',
        });
    }
   
};

const deleteJob = async (req, res) => { 
     try {
        const jobId = req.params.id;
    await Jobmodel.findByIdAndDelete(jobId);

    res.json({ 
        success: true,
        message: 'Job deleted successfully',

    })
    }
    catch (error) {
        
        res.json({
            success: false,
            message: 'Internal server error',
        });
    }
    
}

const jobController = {
    createJob,
    listJob,
    editJob,
    deleteJob,
};
module.exports = jobController;
