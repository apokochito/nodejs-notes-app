const { Router } = require('express');
const router = Router();
const { getTutorialForm, createNewTutorial, getTutorials, getTutorial, updateTutorial, deleteTutorial } = require('../controllers/tutorials.controller');
const { isAuthenticated } = require('../helpers/auth');

// New tutorial
router.get('/tutorial/add', isAuthenticated, getTutorialForm);
router.post('/tutorial/add',isAuthenticated, createNewTutorial);

// Get all tutorials
router.get('/tutorials', isAuthenticated, getTutorials);

// Edit tutorial
router.get('/tutorial/edit/:id', isAuthenticated, getTutorial);
router.put('/tutorial/edit/:id', isAuthenticated, updateTutorial);

// Delete tutorial
router.delete('/tutorial/delete/:id', isAuthenticated, deleteTutorial)

module.exports = router;