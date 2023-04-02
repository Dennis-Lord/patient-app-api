const mongoose = require('mongoose');
const { Schema } = mongoose

const folders = new Schema({
    hName: 'string',
    hLocation: {
        type: 'object',
        country: 'string',
        postal: 'string',
        street: 'string'
    },
    hContact: 'array',
    hEmail: 'string',
    hWebsite: 'string',
    patientProfile: {
        type: 'object',
        dateGenerated: 'date',
        name: 'string',
        gender: 'string',
        title: 'string',
        age: 'number',
        bloodType: 'string',
        sponsor: {
            type: 'object',
            name: 'string',
            acronym: 'string',
            id: 'number',
            verification: 'string',
            expiration: 'date'
        },
        bodymeasurements: {
            type: 'object',
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
            }
        },
        allergy: 'string'
    },
    medicalFolder: {
        type: 'object',
        files: 'array',
        analysisFiles: 'array',
        // {
        //     type: 'object',
        //     title: 'string',    
        //     registrationDate: 'string', 
        //     reportDate: 'string',
        //     reportflag: 'string',
        //     labName: 'string',
        //     country: 'string',
        //     address: 'string',
        //     street: 'string'
        // }
    },
    }
)

export const records = new mongoose.model('records', folders); 

