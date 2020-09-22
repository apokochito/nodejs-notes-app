const users = {};

users.getSignUpForm = (request, response) => {
    response.render('users/signUp');
}

users.signUp = (request, response) => {

}

users.getSingInForm = (request, response) => {
    response.render('users/signIn');
}

users.signIn = (request, response) => {
    
}

users.logOut = (request, response) => {
    
}

module.exports = users;