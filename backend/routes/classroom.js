const express = require('express');
const Classroom = require('../models/classroom');
const router = express.Router();

// Create Classroom
router.post('/', async (req, res) => {
    const { name, startTime, endTime, days, teacher } = req.body;
    try {
        const classroom = new Classroom({ name, startTime, endTime, days, teacher });
        await classroom.save();
        res.status(201).json(classroom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Classrooms
router.get('/', async (req, res) => {
    try {
        const classrooms = await Classroom.find().populate('teacher');
        res.json(classrooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;