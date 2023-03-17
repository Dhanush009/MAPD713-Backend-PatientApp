const express = require('express');

const router = express.Router();

const {allPatients,newPatient,findPatient, criticalPatients, updatePatientRecord} = require('../trans/dbtrans')
const {newTestRecord,viewTestRecord, updateTestRecord} = require('../trans/testTrans')

router.get('/all',allPatients);
router.post('/newpatient',newPatient);
router.get('/patient/:id', findPatient);
router.post('/newrecord/:id', newTestRecord);
router.get('/testrecord/:id', viewTestRecord);
router.get('/criticalpatients', criticalPatients);
router.put('/updatetest/:id', updateTestRecord);
router.put('/updatepatient/:id',updatePatientRecord);

module.exports = router