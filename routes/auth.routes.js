const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
    '/', 
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length 8').isLength({min: 8})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                });
            }

            const {email, password} = req.body;
            const candidate = await User.findOne({email});

            if(candidate) {
                return res.status(400).json({message: 'The user already exists'});
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'User found'});

        } catch(e) {
            res.status(500).json({message: 'Something went wrong, please try again'});
        }
});


router.post(
    '/log', 
    [
        check('email', 'Enter your email').normalizeEmail().isEmail(),
        check('password', 'Enter your password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                });
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});

            if(!user) {
                return res.status(400).json({message: 'User not found'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return res.status(400).json({message: 'Incorrect password'});
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn:'1h'}
            );

            res.json({token, userId: user.id});

        } catch(e) {
            res.status(500).json({message: 'Something went wrong, please try again'});
        }
});

module.exports = router;