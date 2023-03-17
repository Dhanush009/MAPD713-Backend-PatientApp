const mongoose = require('mongoose');

const {Schema} = mongoose;

const testSchema = new Schema({
    patientId:{type: String, required: true},
    bloodPressure: {type: String, required: true},
    respiratoryRate:{type: String, required: true},
    oxygenLevel:{type: String, required: true},
    heartbeat:{type: String, required: true},
    date:{type: String, required: true},

})

const TestRecord = mongoose.model("patientTestRecor", testSchema);

module.exports = TestRecord;