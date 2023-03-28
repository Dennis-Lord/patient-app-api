import { db } from "../firebaseConfig";
import { records } from "./model";
import { doc, updateDoc } from "firebase/firestore";

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
    .post( (req, res) => {
        const documentId = req.params._id;
        const userId = req.query.user;

        // find document to backup
        return records.findById(documentId, (err, obj) => {
            const document = JSON.stringify(obj);

            if(document != undefined) {
                const doc_update = doc(db, "records", userId);

                updateDoc(doc_update, {
                medical_document: document
                });
                res.send('success')
            }
            if(err){
                res.send(err);
            }
        })
    })
};

export default routes;