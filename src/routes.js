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

    app.route('/records/:userId')
    .get((req, res) => {
        records.findById(req.params.userId, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
    })

    // put request to update specified document
    .put((req, res) => {
        records.findOneAndUpdate({ _id: req.params.userId},req.body, { new: true, useFindAndModify: false }, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
    })

    // delete request
    .delete((req, res) => {
        records.findOneAndRemove({ _id: req.params.userId}, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json({message: 'Successfully deleted medical record'});
        })
    })
};

export default routes;