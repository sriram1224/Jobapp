const express = require('express');

const router = express.Router();
const jobController  = rewuire('../controllers/job.js')

router.post("/api/jobs");
router.get("/api/jobs");
router.put("/api/jobs/:id");
router.delete("/api/jobs/:id");