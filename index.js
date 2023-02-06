import routes from './src/routes'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/patientDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyParser setup 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//collection - records, docs - referred to as folders
// routes to specified document
routes(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})