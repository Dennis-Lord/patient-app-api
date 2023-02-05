
const routes = (app) => {
    // add new document (new user document) to records
    app.route('/records')
    .post((req, res) => {
        res.send('POST req to add new doc success')
    })
    
    // get specified document (specified user document)
    app.route('/records/:id') 
    .get((req, res) => {
        console.log(req.params)
        res.send('GET req to get specified doc success')
    })
    
    // add new data to specified document (specified user document)
    .post((req, res) => {
        console.log(req.params)
        res.send('GET req to add new data to specified doc success')
    })
    
    // update specified document (specified user document) 
    .put((req, res) => {
        console.log(req.params)
        res.send('PUT req to update specified doc success')
    })
  
  // delete specified document (specified user document)
  .delete((req, res) => {
    console.log(req.params)
    res.send('PUT req to delete specified doc success')
  })
  
}