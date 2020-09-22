const { response } = require("express");
const { request } = require("http");

const tutorial = {};

tutorial.getTutorialForm = (request, response) => {
    response.render('tutorials/newTutorialForm');
}

tutorial.createNewTutorial = (request, response) => {
    console.log(request.body);
    response.render('tutorials/newTutorialForm');
}

tutorial.getTutorials = (request, response) => {
    response.send('All tutorials')
}

tutorial.getTutorial = (request, response) => {
    response.send('Render edit form')
}

tutorial.updateTutorial = (request, response) => {
    response.send('Send tutorial')
}

tutorial.deleteTutorial = (request, response) => {
    response.send('Tutorial deleted')
}

module.exports = tutorial;