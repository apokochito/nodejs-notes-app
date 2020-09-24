const { Router } = require('express')
const router = Router()

const {renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote} = require('../controllers/notes.controller');

// Formulario de creación
router.get('/notes/add', renderNoteForm);

// Envio de formulario
router.post('/notes/new-note', createNewNote);

// Obtención de todas las notas
router.get('/notes', renderNotes);

// Editar una nota
router.get('/notes/edit/:id', renderEditForm);

// Envío del cambio
router.put('/notes/edit/:id', updateNote);

// Eliminar nota
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;