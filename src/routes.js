import { records } from "./model";

const routes = (app) => {
    // get all records
    app.route('/records')
    .get((req, res) => {
        records.find({}, (err, doc) => {
            if(err) return console.log(err);
            res.json(doc)
        })
    })
    // post record
    app.route('/records')
    .post((req, res) => {
        let r = new records(req.body)

        r.save((err, doc) => {
            if(err) return console.log(err);
            res.json(doc)
        })
    })

    app.route('/records/:id')
    .get((req, res) => {
        records.findById(req.params.id, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
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