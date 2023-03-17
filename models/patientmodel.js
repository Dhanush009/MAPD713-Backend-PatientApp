const mongoose = require('mongoose');

const {Schema} = mongoose;

const patientSchema = new Schema({
    firstname:{ type: String, required: false},
    lastname:{ type: String, required: false},
    gender:{ type: String, required: false},
    age:{ type: String, required: false},
    doctor:{ type: String, required: false},
    department:{ type: String, required: false},
    condition:{type:String, required: false}
})

const Patient = mongoose.model("patientRec", patientSchema);

module.exports = Patient;