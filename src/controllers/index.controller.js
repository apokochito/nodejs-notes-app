const index = {};

index.renderIndex = (request, response) => {
    response.render('index')
};

index.renderAbout = (request, response) => {
    response.render('about')
};

module.exports = index;