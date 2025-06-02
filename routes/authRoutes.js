const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { forwardAuth } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
  res.render('home');
});


// Render signup page
router.get('/signup', forwardAuth, authController.getSignup);

// Handle signup form submission
router.post('/signup', authController.postSignup);

// Render login page
router.get('/login', forwardAuth, authController.getLogin);

// Handle login form submission
router.post('/login', authController.postLogin);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
