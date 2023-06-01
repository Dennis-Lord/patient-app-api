const mongoose = require('mongoose');
const { Schema } = mongoose

const folders = new Schema({
    labTests: 'array',
    referrals: 'array',
    sponsor: 'array',
    //  name: 'string',
    //  acronym: 'string',
    //  id: 'number',
    //  pName: ,
    //  registration: 'string',
    //  expiration: 'date'
    xRay: 'array',
    // name, doctor, link
    profile: {
        type: 'object',
        dateGenerated: 'date',
        name: 'string',
        gender: 'string',
        title: 'string',
        age: 'number',
        bloodType: 'string',
        weight: {
            type: 'object',
            dateRecorded: 'date',
            measure: 'number',
            unit: 'string',
        },
        height: {
            type: 'object',
            dateRecorded: 'date',
            measure: 'number',
            unit: 'string',
        },
        allergy: 'string'
    },
    medicalCard: {
        type: 'object',
        name: 'string',
        id: 'string',
        registration: 'string',
        hospital: 'string'
    },
    hospital: {
        type: 'object',
        name: 'string',
        postal: 'string',
        street: 'string',
        website: 'string',
        contact: 'string',
        email: 'string'
    },
    lab: {
        type: 'object',
        name: 'string',
        postal: 'string',
        street: 'string',
        website: 'string',
        contact: 'string',
        email: 'string'
    },
    checkUps: 'array',
    // title, flag, date,
    tips: 'string',
    event: 'string'
}
)

const records = new mongoose.model('records', folders); 

export {records};