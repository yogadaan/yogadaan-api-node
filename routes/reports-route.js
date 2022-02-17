const express = require('express');
const reportsController = require('../controllers/reports');

const router = express.Router();

router.get('/getCases', reportsController.getCases);

router.post('/createCase' , reportsController.createCases);

router.post('/createUser', reportsController.createUser);

router.get('/getUser/:uUID' , reportsController.getUser);

router.get('/getCaseById/:caseId', reportsController.getCaseById);

router.post('/createOrg', reportsController.createOrg);

router.get('/getOrg/:uUID', reportsController.getOrg);

router.post('/acceptCase', reportsController.acceptCase);

router.get('/getServicesNearYou', reportsController.getServicesNearYou);

router.get('/getMyCases/:uUID', reportsController.getMyCases);

router.post('/deleteCaseById/:caseId', reportsController.deleteCaseById);

module.exports = router;