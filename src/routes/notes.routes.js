const { Router } = require('express')
const router = Router()

const {renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote} = require('../controllers/notes.controller');

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// Formulario de creación
router.get('/notes/add',isAuthenticated, renderNoteForm);

// Envio de formulario
router.post('/notes/new-note',isAuthenticated, createNewNote);

// Obtención de todas las notas
router.get('/notes',isAuthenticated, renderNotes);

// Editar una nota
router.get('/notes/edit/:id', isAuthenticated,renderEditForm);
router.put('/notes/edit-note/:id',isAuthenticated, updateNote);

// Eliminar nota
router.delete('/notes/delete/:id',isAuthenticated, deleteNote);

module.exports = router;