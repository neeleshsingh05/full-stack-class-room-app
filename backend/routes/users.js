const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const user = new User({ email, password: bcrypt.hashSync(password, 8), role });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;