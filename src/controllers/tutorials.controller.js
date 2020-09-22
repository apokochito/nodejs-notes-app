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
        response.redirect('/tutorials');
    } catch (err) {
        return response.send(err);
    }
}

tutorial.getTutorials = async (request, response) => {
    const tutorials = await Tutorial.find().lean();
    response.render('tutorials/allTutorials', { tutorials });
}

tutorial.getTutorial = async (request, response) => {
    const tutorial = await Tutorial.findById(request.params.id).lean();
    response.render('tutorials/editTutorial', { tutorial });
}

tutorial.updateTutorial = async (request, response) => {
    const {title, description} = request.body;
    await Tutorial.findByIdAndUpdate(request.params.id, {title, description});
    response.redirect('/tutorials');
}

tutorial.deleteTutorial = async (request, response) => {
    await Tutorial.findByIdAndDelete(request.params.id);
    response.redirect('/tutorials');
}

module.exports = tutorial;