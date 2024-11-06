const express = require('express');
const router = express.Router();
// MongoDB User Model
const User = require('./../models/User');
//Password handler
const bcrypt = require('bcrypt');

//Sign-up
router.post('/sign-up', (req, res) => {
    console.log("Received signup request:", req.body);
    let { fname, mname, lname, email, password, confirmpassword } = req.body;
    fname = fname.trim();
    mname = mname.trim();
    lname = lname.trim();
    email = email.trim();
    password = password.trim();
    confirmpassword = confirmpassword.trim();

    const errors = [];

    // Check for required fields
    const fieldsToValidate = [
        { name: 'fname', label: 'First name' },
        { name: 'lname', label: 'Last name' },
        { name: 'email', label: 'Email address' },
        { name: 'password', label: 'Password' },
        { name: 'confirmpassword', label: 'Confirm password' },
    ];

    for (const field of fieldsToValidate) {
        if (!req.body[field.name] || req.body[field.name].trim() === "") {
            errors.push(`${field.label} is required`);
        }
    }


    if (!email) {
        errors.push("Email is required");
    } else {
        // Email format validation
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.push("Enter a valid email address");
        } else {
            // Lanex domain validation
            if (!/^[\w-\.]+@lanexcorp\.com$/.test(email)) {
                errors.push("Please provide a lanex email address");
            }
        }
    }

    // Password confirmation validation
    if (!confirmpassword) {
        errors.push("Confirm password is required");
    } else {
        if (password !== confirmpassword) {
            errors.push("Password mismatch.");
        }
    }

    // Check for existing user
    return User.find({ email }).then(result => {
        if (result.length) {
            errors.push("User with the provided email already exists");
        }

        if (errors.length > 0) {
            return res.json({
                status: "FAILED",
                message: errors.join(', '),
            });
        }

        // User creation
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds).then(hashedPassword => {
            const newUser = new User({
                fname,
                mname,
                lname,
                email,
                password: hashedPassword
            });

            return newUser.save().then(result => {
                res.json({
                    status: "SUCCESS",
                    message: "Signup successful",
                    data: result,
                });
            }).catch(err => {
                res.json({
                    status: "FAILED",
                    message: "An error occurred while saving user account"
                });
            });
        }).catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred while hashing password"
            });
        });
    }).catch(err => {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred while checking for existing user"
        });
    });
});



// Signin
router.post('/', (req, res) => {
    console.log("Received signin request:", req.body);
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    const errors = [];

    // Check for required fields
    if (!email) {
        errors.push("Email is required");
    } else {
        // Email format validation
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.push("Enter a valid email address");
        } else if (!/^[\w-\.]+@lanexcorp\.com$/.test(email)) {
            // Lanex domain validation
            errors.push("Please provide a lanex email address");
        }
    }

    if (!password) {
        errors.push("Password is required");
    }

    // If there are validation errors, return them immediately
    if (errors.length > 0) {
        return res.json({
            status: "FAILED",
            message: errors.join(', '),
        });
    }

    // Check if user exists
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.json({
                status: "FAILED",
                message: "Wrong credential entered"
            });
        }

        // User exists, check password
        bcrypt.compare(password, user.password).then(result => {
            if (result) {
                res.json({
                    status: "SUCCESS",
                    message: "Signin successful",
                    data: user
                });
            } else {
                res.json({
                    status: "FAILED",
                    message: "Wrong credentials"
                });
            }
        }).catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred while comparing passwords"
            });
        });
    }).catch(err => {
        console.error(err);
        res.json({
            status: "FAILED",
            message: "An error occurred while finding user"
        });
    });
    console.log("Received signup request:", errors);
});



module.exports = router;