const Patient = require('../models/patientmodel')

const allPatients = async (req, res) => {

    const result = await Patient.find();

    try {
        res.status(200).json({
            success : true,
            data : result
        })
        
    } catch (error) {
        console.log('All patient retrieving error',error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
  
}

const criticalPatients = async (req, res) => {
    const result = await Patient.find({condition:"Critical"})

    try {
        res.status(200).json({
            success : true,
            data : result
        })
        
    } catch (error) {
        console.log('Critical patient retrieving error',error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

const newPatient = async (req,res) => {
    
    const{firstname,lastname,gender,age,doctor,department,condition} = req.body;
    
    const patient = new Patient({
        firstname,
        lastname,
        gender,
        age,
        doctor,
        department,
        condition
    })
    
    try {
        const result = await patient.save();
        res.status(200).json({
            success: true,
            data:result,
            message: `Patient ${firstname}'s record created` 
        })
        
    } catch (error) {
        console.log('new patient creation error',error.message)
        res.status(401).json({
            success: false,
            error: error.message
        })
    }

}

const findPatient = async (req,res) => {
    const id = req.params.id;
    const result = await Patient.findById(id);
    
    try {
        res.status(200).json({
        success:true,
        data:result
    })
    } catch (error) {
        console.log('Patient find error',error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

const updatePatientRecord = async (req,res) => {
    const { doctor,department,condition  } = req.body; 

    try {

        const result = await Patient.findById( req.params.id )

        result.doctor = doctor
        result.department = department
        result.condition = condition 

        result.save()

        res.status(200).json(  {
            success: true,
            data: result,
            message: `Patient record updated. `
        })
        
    } catch (error) {
        
        console.log('update error ',error.message);

        res.status(500).json(  {
            success: false,
            error: error.message 
        })

    }
}

module.exports = {allPatients, newPatient, findPatient, criticalPatients, updatePatientRecord}