const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlEmail = require('../controllers/email.controller');
const jwtHelper = require('../utils/jwtHelper');


router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//router.get('/forgot', ctrlEmail.forgot);
module.exports = router;



