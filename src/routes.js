
const routes = (app) => {
    // get all records
    app.route('/records')
    .get((req, res) => {
        res.send('success')
    })
    // post record
    app.route('/records')
    .post((req, res) => {
        res.send('success')
    })

    app.route('/records/:id')
    .get((req, res) => {
        res.send('success')
    })
    // post request 
    .post((req, res) => {
        res.send('POST req to add new doc success')
    })
    // put request
    .put((req, res) => {
        console.log(req.params)
        res.send('PUT req to update specified doc success')
    })
    // delete request
    .delete((req, res) => {
        console.log(req.params)
        res.send('PUT req to delete specified doc success')
      })
};

export default routes;