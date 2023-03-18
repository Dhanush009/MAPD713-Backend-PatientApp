const TestRecord = require('../models/testsModel');

const newTestRecord = async (req,res) => {
    
    const {patientId,bloodPressure,respiratoryRate,oxygenLevel,heartbeat,date} = req.body;
    
    const test = new TestRecord({
        patientId,
        bloodPressure,
        respiratoryRate,
        oxygenLevel,
        heartbeat,
        date
    })
    
    try {
        const result = await test.save();
        res.status(200).json({
            success: true,
            data:result,
            message: `Test record created` 
        })
    
    } catch (error) {
        console.log('new test record creation error',error.message)
        res.status(401).json({
            success: false,
            error: error.message
        })
    }

}

const viewTestRecord = async (req,res) => {
    const id = req.params.id;
    const result = await TestRecord.find({patientId:id})

    try {
        res.status(200).json({
        success:true,
        data:result
    })
    } catch (error) {
        console.log('Test Record find error',error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

const viewOneTestRecord = async (req,res) => {
    const id = req.params.id;
    const result = await TestRecord.find({patientId:id})

    try {
        res.status(200).json({
        success:true,
        data:result[result.length-1]
    })
    } catch (error) {
        console.log('Test Record find error',error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

const updateTestRecord = async (req,res) => {
    const { bloodPressure,respiratoryRate,oxygenLevel,heartbeat  } = req.body; 

    try {

        const result = await TestRecord.findById( req.params.id )

        result.bloodPressure = bloodPressure
        result.respiratoryRate = respiratoryRate
        result.oxygenLevel = oxygenLevel
        result.heartbeat = heartbeat 

        result.save()

        res.status(200).json(  {
            success: true,
            data: result,
            message: `Test record updated. `
        })
        
    } catch (error) {
        
        console.log('update error ',error.message);

        res.status(500).json(  {
            success: false,
            error: error.message 
        })

    }
}

module.exports = {newTestRecord, viewTestRecord, updateTestRecord, viewOneTestRecord};
