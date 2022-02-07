const express = require('express');
const reportsController = require('../controllers/reports');

const router = express.Router();

router.get('/getCases', reportsController.getCases);

router.post('/createCase' , reportsController.createCases);

router.post('/createUser', reportsController.createUser);

router.get('/getUser/:uUID' , reportsController.getUser);

router.get('/getCaseById/:caseId', reportsController.getCaseById);

module.exports = router;