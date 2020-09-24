const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.send('Note add');
};

notesCtrl.createNewNote = (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title , description});
    console.log(newNote);
    res.send('Nueva nota');
};

notesCtrl.renderNotes = (req, res) => {
    res.send('Todas las notas');
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('Edición de una nota');
};

notesCtrl.updateNote = (req, res) => {
    res.send('Nota Actualizada');
};

notesCtrl.deleteNote = (req, res) => {
    res.send('Nota eliminada');
};

module.exports = notesCtrl;