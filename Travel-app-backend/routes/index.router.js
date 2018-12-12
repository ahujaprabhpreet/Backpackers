const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPackage = require('../controllers/package.controller');
const ctrlFeedback = require('../controllers/feedback.controller');
const ctrlBlog = require('../controllers/blog.controller');
const ctrlContactus = require('../controllers/contactus.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/feedbacks', ctrlFeedback.createFeedback);
router.post('/blogs', ctrlBlog.createBlog );
router.post('/contactus', ctrlContactus.createContactus );
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/package', ctrlPackage.package);
router.get('/displayfeedbacks', ctrlFeedback.feedback);
router.get('/displayblogs', ctrlBlog.blog);
module.exports = router;



