import routes from './src/routes'

const express = require('express')
const app = express()
const port = 3000

// routes / endpoints
//collection - medicalRecords, docs - referred to as medical folders

// get all records
app.get('/records', (req, res) => {
  res.send('GET req to records collection success')
})

// add new document (new user document) to records
app.post('/records', (req, res) => {
  res.send('POST req to add new doc success')
})

// get specified document (specified user document)
app.get('/records/:id', (req, res) => {
  console.log(req.params)
  res.send('GET req to get specified doc success')
})

// add new data to specified document (specified user document)
app.post('/records/:id', (req, res) => {
  console.log(req.params)
  res.send('GET req to add new data to specified doc success')
})

// update specified document (specified user document)
app.put('/records/:id', (req, res) => {
  console.log(req.params)
  res.send('PUT req to update specified doc success')
})

// delete specified document (specified user document)
app.delete('/records/:id', (req, res) => {
  console.log(req.params)
  res.send('PUT req to delete specified doc success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})