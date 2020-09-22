const { Router } = require('express');
const router = Router();
const { getSignUpForm, getSingInForm, signIn, logOut, signUp } = require('../controllers/users.controller');

// New user
router.get('/signup', getSignUpForm);
router.post('/signup', signUp);

// Login user
router.get('/signin', getSingInForm);
router.post('/signin', signIn);

// Logout user
router.get('/logout', logOut);

// Delete user
//router.delete('/tutorial/delete/:id', deleteTutorial)

module.exports = router;