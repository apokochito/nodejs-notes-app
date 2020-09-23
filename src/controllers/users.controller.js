const { request } = require("express");

const users = {};
const User = require('../models/User');
const passport = require('passport');

users.getSignUpForm = (request, response) => {
    response.render('users/signUp');
}

users.signUp = async (req, res) => {
    let errors = [];
    const { name, email, password, confirmed_password } = req.body;
    if (password != confirmed_password) {
        errors.push({ text: "Your password do not match." });
    }
    if (password.length < 4) {
        errors.push({ text: "Your password must be at least 4 characters." });
    }
    if (errors.length > 0) {
        res.render("users/signUp", {
            errors,
            name,
            email
        });
    } else {
        // Look for email coincidence
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash("error_msg", "This Email is already in use.");
            res.redirect("/signup");
        } else {
            // Saving a New User
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPass(password);
            await newUser.save();
            req.flash("success_msg", "Registered successfully.");
            res.redirect("/tutorials");
        }
    }
};

users.getSingInForm = (request, response) => {
    response.render('users/signIn');
}

users.signIn = passport.authenticate("local", {
    successRedirect: "/tutorials",
    failureRedirect: "/signin",
    failureFlash: true
});

users.logOut = (request, response) => {
    request.logout();
    request.flash("success_msg", "You are logged out now.");
    response.redirect("/signin");
}

module.exports = users;