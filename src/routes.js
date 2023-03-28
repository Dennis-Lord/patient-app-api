import { records } from "./model";

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const routes = (app) => {
    // get all records
    // app.route('/records')
    // .get((_req, res) => {
    //     records.find({}, (err, doc) => {
    //         if(err) return console.log(err);
    //         res.json(doc)
    //     })
    // })

    // create new collection, and document
    // app.route('/records/create')
    // .post((req, res) => {
    //     let r = new records(req.body)

    //     r.save((err, doc) => {
    //         if(err) return console.log(err);
    //         res.json(doc)
    //     })
    // })

    // get specific doc by id
    // app.route('/records/:_id')
    // .get((req, res) => {
    //     records.findById(req.params._id, (err, doc) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(doc);
    //     });
    // })

    // update specific document by id
    // .put((req, res) => {
    //     records.findOneAndUpdate({ _id: req.params._id},req.body, { new: true, useFindAndModify: false }, (err, doc) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(doc);
    //     });
    // })

    // delete request
    // .delete((req, res) => {
    //     records.findOneAndRemove({ _id: req.params._id}, (err, doc) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({message: 'Successfully deleted medical record'});
    //     })
    // })

    // backup specific record to firestore
    app.route('/backup/:_id')
    .post((req, res) => {
        // find document to backup
        records.findById(req.params._id, async (err, doc) => {
            if(err){
                res.send(err);
            }

            // fetch request options 
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(doc), // document being backed up to firestore
                redirect: 'follow'
            };

            const d = await fetch("http://127.0.0.1:5001/patient-app-api-de1a9/us-central1/app/create", requestOptions)
            .then((response) => {
                return response
            })

            res.send(d.status)
        });
    })
};

export default routes;