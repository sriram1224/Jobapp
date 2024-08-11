const express = require('express');

const router = express.Router();

router.post("/api/jobs");
router.get("/api/jobs");
router.put("/api/jobs/:id");
router.delete("/api/jobs/:id");