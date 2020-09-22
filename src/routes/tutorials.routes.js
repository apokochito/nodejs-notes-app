const { Router } = require('express');
const router = Router();
const { getTutorialForm, createNewTutorial, getTutorials, getTutorial, updateTutorial, deleteTutorial } = require('../controllers/tutorials.controller');

// New tutorial
router.get('/tutorial/add', getTutorialForm);
router.post('/tutorial/add', createNewTutorial);

// Get all tutorials
router.get('/tutorials', getTutorials);

// Edit tutorial
router.get('/tutorial/edit/:id', getTutorial);
router.put('/tutorial/edit/:id', updateTutorial);

// Delete tutorial
router.delete('/tutorial/delete/:id', deleteTutorial)

module.exports = router;