const express = require('express');
const admin = require('firebase-admin');
let serviceAccount = require('./public/key.json');
var port = process.env.port || 3000;
var path = require('path');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const bp = require('body-parser');
let db = admin.firestore();



var app = express();
app.use(bp.json({ limit: '50mb' }));
app.use(bp.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
// db.collection('Users').doc("8w6P2AW4mfPUjar43soHfzK8fOi2").get()
//     .then((snapshot) => {
//         var size = snapshot.data().friends.length;
//         // var size = snapshot.data().friends.size();
//         for (var i = 0; i < size; i++) {
//             request[i] = snapshot.data().request[i];

//         }
//         for (var i = 0; i < size; i++) {
//             console.log(request[i])
//         }

//     })
//     .catch((err) => {
//         console.log('Error getting documents', err);
//     });
app.post('/new', (req, res) => {
    var uuid = req.body.ida;
    var oid = req.body.idb;
    console.log(uuid, oid);
});
app.post('/old', (req, res) => {
    var uuid = req.body.idc;
    var oid = req.body.idd;
    console.log(uuid, oid);
})
app.listen(port, () => {
    console.log("connected successfully");
})