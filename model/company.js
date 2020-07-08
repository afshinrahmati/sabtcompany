const mongooes = require('mongoose');
const Schema = mongooes.Schema;



const CompanySchema = new Schema({
    NAMECOMPANY: {
        type: String,
        unique: true,
        trim: true
    },
    codePost: {
        type: Number,
        required: true,
    },
    nameBoss: {
        type: String,
        required: true,
        trim: true
    },
    Phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})


//comapny===.router+comany require
module.exports = Company = mongooes.model('Company', CompanySchema)