const { response } = require("express");
const { request } = require("http");
const Tutorial = require("../models/Tutorial");

const tutorial = {};

tutorial.getTutorialForm = (request, response) => {
    response.render('tutorials/newTutorialForm');
}

tutorial.createNewTutorial = async (request, response) => {
    try {
        const { title, description } = request.body;
        const newTutorial = new Tutorial({ title, description });
        console.log(newTutorial);
        await newTutorial.save();
        response.render('tutorials/newTutorialForm');
    } catch (err) {
        return response.send(err);
    }
}

tutorial.getTutorials = async (request, response) => {
    const tutorials = await Tutorial.find().lean();
    response.render('tutorials/allTutorials', { tutorials });
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