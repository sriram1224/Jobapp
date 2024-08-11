const createJob = async (req, res) => {console.log(req.body);
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
