
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//CreateSchema

const ClinicsFromDb = new Schema({

    name: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      required: false,
    },
    email: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    }

});
//,{ collection : 'Clinic' }
module.exports = Clinic = mongoose.model('Clinics', ClinicsFromDb);