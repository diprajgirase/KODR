const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { username, fullName: { firstName, lastName }, email, password } = req.body


    const isuserExist = await userModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })

    if (isuserExist) {
        return res.status(422).json({ message: "User already exists" })
    }

    const user = await userModel.create({
        username,
        fullName: { firstName, lastName },
        email,
        password
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.status(201).json({
        message: "User registered successfully", token: token, user: {
            id: user._id,
            username: user.username,
            email: user.email,
            fullName: user.fullName}
        })

});


router.get('/register', async (req, res) => {
    res.send("Heyyy")
})

module.exports = router;   
