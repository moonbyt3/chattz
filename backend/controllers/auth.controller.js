import bcrypt from 'bcryptjs';

import User from '../models/user.model.js'

export const login = (req, res) => {
    console.log('login');
}

export const signUp = async (req, res) => {
    try {
        const {fullName, userName, password, passwordConfirmation, gender} = req.body;
        if (password !== passwordConfirmation) {
            return res.status(400).json({
                error: 'Passwords don\'t match'
            })

        }

        const user = await User.findOne({userName});

        if (user) {
            return res.status(400).json({
                error: 'User with this name already exists'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const firstName = fullName.split(' ')[0];
        const lastName = fullName.split(' ')[1];

        const profileImage = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;
        
        const newUser = new User({
            fullName: fullName,
            userName,
            password: hashedPassword,
            gender,
            profileImage: profileImage
        })

        await newUser.save();
        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            profileImage: newUser.profileImage,
            gender: newUser.gender
        })
    } catch (err) {
        console.log('Error in sign up controller ', err.message);
        res.status(500).json({
            error: err.message
        })
    }
}

export const logOut = (req, res) => {
    console.log('log out');
}