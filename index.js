const admin = require('firebase-admin');
const express = require('express');
let serviceAccount = require('./public/key.json');
var path = require('path');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

let db = admin.firestore();
var friends = [];
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    console.log(__dirname);
    res.render('C:/Users/aryan/Desktop/hack_kerala/views/pages/index.ejs');
})
db.collection('Users').doc("8w6P2AW4mfPUjar43soHfzK8fOi2").get()
    .then((snapshot) => {
        var size = snapshot.data().friends.length;
        // var size = snapshot.data().friends.size();
        for (var i = 0; i < size; i++) {
            friends[i] = snapshot.data().friends[i];

        }
        for (var i = 0; i < size; i++) {
            console.log(friends[i])
        }

    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
app.listen(3000, () => {
    console.log("connected successful");
})