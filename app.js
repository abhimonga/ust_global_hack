const express = require('express');
const admin = require('firebase-admin');
let serviceAccount = require('./public/key.json');
var port = process.env.PORT || 3000;
var path = require('path');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const bp = require('body-parser');
let db = admin.firestore();



var app = express();
app.use(bp.json({ limit: '50mb' }));
app.use(bp.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.post('/new', (req, res) => {
    var uid = req.body.uid;
    var myUid = req.body.myUid;

    db.collection('Users').doc(myUid).get().then((doc) => {
        console.log(doc.data());
        var name = doc.data().username;



        var message = {
            notification: {
                title: name + " sent you a friend request",
            },
            topic: uid

        }

        admin.messaging().send(message)
            .then((response) => {
                console.log('Successfully sent message:', response);
                res.send('Successfully sent message:', response)
            })
            .catch((error) => {
                console.log('Error sending message:', error);
                res.send('Error sending message:', error)
            });
    });

});


app.post('/accept', (req, res) => {
    var uid = req.body.uid;
    var myUid = req.body.myUid;

    db.collection('Users').doc(uid).get().then((doc) => {
        console.log(doc.data());
        var name = doc.data().username;



        var message = {
            notification: {
                title: name + " accepted your friend request!",
            },
            topic: myUid

        }

        admin.messaging().send(message)
            .then((response) => {
                console.log('Successfully sent message:', response);
                res.send('Successfully sent message:', response)
            })
            .catch((error) => {
                console.log('Error sending message:', error);
                res.send('Error sending message:', error)
            });
    });

});

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(port, () => {
    console.log("connected successfully");
})