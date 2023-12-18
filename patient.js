const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema ({
  patientId: String,
  surname : String ,
  otherName: String,
  phoneNumber: String ,
  residentialAddress :String,
  emergencyContact:{
    name:String,
    phoneNumber:String,
    relationship:String,
  },

});

const Patient = mongoose.model('Patient' , patientSchema);
module.exports =Patient;

