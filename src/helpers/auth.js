const helpers = {};

helpers.isAuthenticated = (request, response, next) => {
    if ( request.isAuthenticated()){
        return next();
    }
    response.redirect("/signin");
}

module.exports = helpers;