const mongoose = require('mongoose');
const { Schema } = mongoose

const folders = new Schema({
    id: 'string',
    m_files: 'string'
})

export const records = new mongoose.model('records', folders); 
