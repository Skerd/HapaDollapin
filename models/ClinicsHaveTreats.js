const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClinicsHaveTreatsSchema = new Schema({
    c_id:{
        type: String,
        required: true
    },
    t_id:{
        type: String,
        required: true
    }
});

module.exports = ClinicsHaveTreats = mongoose.model('ClinicsHaveTreats', ClinicsHaveTreatsSchema);