const Jobmodel = require("../models/job");


const createJob = async (req, res) => {
    try {
         const jobobj = req.body;
    const newJob = new Jobmodel(jobobj);
    const newlysavedjob = await newJob.save();
    console.log(newlysavedjob);
    res.json({
        success: true,
        message: 'Job created successfully',
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
        const {minsalary, maxsalary} = req.query;
    const joblist = await Jobmodel.find({
        $and: [{ salary: { $gte: minsalary } }, { salary: { $lte: maxsalary } }],
    });
   
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
    const jobId = req.params.id;
    console.log(jobId);
   await Jobmodel.findByIdAndUpdate(jobId, req.body);
       
    res.json({
        success: true,
        message: 'Job edited successfully',
    })
};

const deleteJob = async (req, res) => { 
    const jobId = req.params.id;
    await Jobmodel.findByIdAndDelete(jobId);

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
