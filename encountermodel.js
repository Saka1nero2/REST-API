const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID :String ,
  dateAndTime :{type:Date , default :Date.now},
  encounterType:String,//Emergency /OPD/Specialist
});

const Encounter = mongoose.model ('Encounter' , encounterSchema);
module.exports = Encounter;