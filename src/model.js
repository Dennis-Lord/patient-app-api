const mongoose = require('mongoose');
const { Schema } = mongoose

const folders = new Schema({
    userId: 'string',
    hName: 'string',
    address: {
        type: 'object',
        country: 'string',
        post: 'string'
    },
    hcontact: 'array',
    hemail: 'string',
    hwebsite: 'string',
    profile: {
        type: 'object',
        dategenerated: 'date',
        name: 'string',
        gender: 'string',
        title: 'string',
        age: 'string',
        bloodType: 'string',
        sponsors: {
            type: 'object',
            nameofprovider: 'string',
            providersacronym: 'string',
            idnumber: 'string',
            verificationtag: 'string',
        },
        bodymeasurements: {
            type: 'object',
            weight: {
                type: 'object',
                dateRecorded: 'date',
                measure: 'string',
                unit: 'string',
            },
            height: {
                type: 'object',
                dateRecorded: 'date',
                measure: 'string',
                unit: 'string',
            }
        }
    },
    medicalfolder: {
        type: 'object',
        medicalfiles: {
            type: 'object',
            diseasename: 'string',
            diagnosisdate: 'string',
            treatementstarted: 'string',
            treatementended: 'string',
            flag: 'string',
            practisioner: {
                type: 'object',
                nameofpractisioner: 'string',
                title: 'string',
                practisionersnotes: {
                    type: 'object',
                    notesDate: 'string',
                    time: 'string',
                    notes: 'string',
                    }
        },
        diagnosis: 'string',
        complaints: 'array',
        examinations: {
            type: 'object',
            bodypart: 'string', 
            eresult: 'string'
            }
        ,
        recommendations: 'string',
        drugadministered: {
            type: 'object',
            startdoses: {
                type: 'object',
                date: 'string',
                time: 'string',
                drugname: 'string',
                route: 'string',
                dose: {
                    amount: 'string',
                     unit: 'string'
                    },
                },
            infusions: {
                type: 'object',
                date: 'string', 
                time: 'string', 
                infusion: 'string'
                },
            drugs: {
                    type: 'object',
                    startdate: 'string',
                    drug: 'string',
                    route: 'string',
                    fregduration: 'string',
                    // seek clearance
                }
            ,
        },
        fourhourchart: {
            type: 'object',
                date: 'string',
                temperature: {
                    type: 'object',
                    unit: 'string',
                    measure: {
                        type: 'object',
                        time: 'string',
                        value: 'string',
                    },
                
                },
                pulserate: {
                    type: 'object',
                    unit: 'string',
                    measure: {
                        type: 'object',
                        time: 'string',
                        value: 'string'
                    },
                },
                respirations: {
                    type: 'object',
                    measure: {
                        type: 'object',
                        time: 'string',
                        value: 'string',
                    },
                }
    
            }
        },
        analysisfiles: {
                type: 'object',
                analysisname: 'string',    
                registrationdate: 'string', 
                reportdate: 'string',
                reportflag: 'string',
                labname: 'string',
                country: 'string',
                address: 'string'
                },
                result:{
                    type: 'object',
                    name: 'string',
                    resultobserved: 'string',
                    flag: 'string', 
                    unit: 'string', 
                    referencerange: 'string', 
                    polarity: 'string',
                    remarks: 'string'
                },
            },
        referrals: {
            type: 'object',
            referringh: 'string',
            referredh: 'string',
            nameofdoctor: 'string',
            summaryofhistory: 'string',
            referingdiagnosis: 'string',
            investigationsandmanagement: 'string',
            durationofmanagement: 'string',
            reason: 'string',
            signatureandstamp: 'string'
        },
        documents: {
            type: 'object',
            documentid: 'string',
            document: {
                type: 'object',
                name: 'string',
                tag: 'string',
                image: 'string',
                }
            }
    }
)

export const records = new mongoose.model('records', folders); 
