const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required.'],
        minlength: [2, 'First Name must be at least 2 characters long.'],
        maxlength: [25, 'First Name cannot exceed 25 characters.'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.'],
        minlength: [2, 'Last Name must be at least 2 characters long.'],
        maxlength: [25, 'Last Name cannot exceed 25 characters.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email address is required.'],
        trim: true,
        lowercase: true,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;