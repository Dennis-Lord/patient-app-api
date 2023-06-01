import { db } from "../firebaseConfig";
import { records } from "./model";
import { doc, updateDoc, getDoc } from "firebase/firestore";
// import { Buffer } from 'node:buffer';

// module import - cipher
// const {
//     scrypt,
//     randomFill,
//     createCipheriv,
//     scryptSync,
//     createDecipheriv,
//   } = require('node:crypto');


const routes = (app) => {

    // const fill = new Uint8Array(16);

    // app.route('/e').post((req, res) => {
    //     // const value = req.params.value;
    //     console.log(req.body)
    //     res.send({body: req.body})


    //     const algorithm = 'aes-192-cbc'; // algorithm used to cipher
    //     const password = 'password'; // Password used to generate key

    //     // First, we'll generate the key. The key length is dependent on the algorithm.
    //     // In this case for aes192, it is 24 bytes (192 bits).
    //     // scrypt(password, 'salt', 24, (err, key) => {
    //     //     if (err) throw err;
    //     //     // Then, we'll generate a random initialization vector
    //     //     randomFill(fill, (err, iv) => {
    //     //     if (err) throw err;
    //     //         console.log(iv)
    //     //     const cipher = createCipheriv(algorithm, key, iv);
        
    //     //     let encrypted = cipher.update(value, 'utf8', 'hex');
    //     //     encrypted += cipher.final('hex');
    //     //     res.send(encrypted);
    //     //     });
    //     // });   
    // })

    // app.route('/d/:enc').get((req, res) => {
    //     const value = req.params.enc;

    //     const algorithm = 'aes-192-cbc'; // algorithm used to cipher
    //     const password = 'password'; // Password used to generate key

    //     const key = scryptSync(password, 'salt', 24);
    //     // The IV is usually passed along with the ciphertext.
    //     const iv = fill; // Initialization vector.

    //     const decipher = createDecipheriv(algorithm, key, iv);

    //     // Encrypted using same algorithm, key and iv.
    //     const encrypted =value;
    //     let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    //     decrypted += decipher.final('utf8');
    //     res.send(decrypted); 
    // })

    // get all records
    app.route('/records')
    .get((_req, res) => {
        records.find({}, (err, doc) => {
            if(err) return console.log(err);
            res.json(doc)
        })
    })

    // create new collection, and document
    app.route('/records/create')
    .post((req, res) => {
        let r = new records(req.body)

        r.save((err, doc) => {
            if(err) return console.log(err);
            res.json(doc)
        })
    })

    // get specific doc by id
    app.route('/records/:_id')
    .get((req, res) => {
        records.findById(req.params._id, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
    })

    // update specific document by id
    .put((req, res) => {
        records.findOneAndUpdate({ _id: req.params._id},req.body, { new: true, useFindAndModify: false }, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json(doc);
        });
    })

    // delete request
    .delete((req, res) => {
        records.findOneAndRemove({ _id: req.params._id}, (err, doc) => {
            if(err){
                res.send(err);
            }
            res.json({message: 'Successfully deleted medical record'});
        })
    })

    // backup specific record to firestore
    app.route('/backup/:_id')
    .post((req, res) => {
        const documentId = req.params._id;
        const userId = req.query.user;

        const doc_update = doc(db, "records", userId);

        // find document to backup
        const localDoc = records.findById(documentId, (err, doc) => {
            if(err){
                res.send(err);
            }
            const stringifiedDoc = JSON.stringify(doc);
            const alteredDoc = stringifiedDoc.replace("_id", "id")
            const finalDoc = JSON.parse(alteredDoc)
            
            updateDoc(doc_update, {
                "medical_data": finalDoc
                }).then(r => {res.sendStatus(200)});
        });
        
        // console.log(localDoc);
        // res.send(JSON.parse(localDoc))
        
        // const stringifiedDoc = JSON.stringify(obj);

        // const doc_update = doc(db, "records", userId);
        // const alteredDoc = stringifiedDoc.replace("_id", "id")
        // const finalDoc = JSON.parse(alteredDoc)
        // return finalDoc;

        

        // const update = updateDoc(doc_update, {
        //     medical_folders: arrayUnion(finalDoc)
        //     }).then(r => {return r});

        //     res.send(update)
    })

    app.route('/get-app-id/:hospitalId')
    .get(async(req, res) => {
        const hospital_id = req.params.hospitalId;
        const docRef = doc(db, 'connect',  `${hospital_id}`);

        const appid = await getDoc(docRef).then(snapshot => {
            if(snapshot.exists()) {
                const userAppId = snapshot.data()
                return userAppId;
              }
              else{
                return null
              }
          }).catch(e => {
              return e;
          })
        
        // res.send(appid)
        res.json(appid)
    })
};

export default routes;