const mongoose = require('mongoose');
const Demande = require('./demande-admin');
const Schema = mongoose.Schema;

const demandeConge = new Schema({
        
        de_date: {
            type: Date,
            required: true
        },
        a_date: {
            type: Date,
            required: true
        },
        doti: {
            type: String,
            default: 'AAAA'
        },
    }
)

const DemandeConge = Demande.discriminator('DemandeConge_', demandeConge);
module.exports = DemandeConge;