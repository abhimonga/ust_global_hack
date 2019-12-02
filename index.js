// const admin = require('firebase-admin');
// const express = require('express');
// let serviceAccount = require('./public/key.json');
// var path = require('path');
// var bp = require('body-parser');
// global.friends = [];
// global.arr = [];
// var port = process.env.port || 3000;
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// var app = express();
// app.use(express.static(path.join(__dirname, 'public')));

// let db = admin.firestore();
// var ref = db.doc("/public/js");

// app.set('view engine', 'ejs')
// app.get('/', (req, res) => {
//     console.log(__dirname);

//     res.render('C:/Users/aryan/Desktop/hack_kerala/views/pages/index.ejs', { friends });

// });

// db.collection('Users').doc("hPIVlpvVzrZn2zso1pIqiLi7hDF3").get()
//     .then((snapshot) => {
//         var size = snapshot.data().friends.length;
//         // var size = snapshot.data().friends.size();
//         for (var i = 0; i < size; i++) {
//             friends[i] = snapshot.data().friends[i];
//             arr[i] = friends[i];
//         }
//         console.log(friends[0])
//             // var db2 = db.collection("Users").doc(friends[0]).get().then(snapshot => {
//             //     console.log(snapshot.val())
//             // }).catch(err => {
//             //     console.log(err);
//             // });
//         let cityRef = db.collection('Users').doc(`${friends[0]}`);
//         let getDoc = cityRef.get()
//             .then(doc => {
//                 if (!doc.exists) {
//                     console.log('No such document!');
//                 } else {
//                     console.log('Document data:', doc.data());
//                 }
//             })
//             .catch(err => {
//                 console.log('Error getting document', err);
//             });

//     })

// .catch((err) => {
//     console.log('Error getting documents', err);
// });



// app.listen(port, () => {
//     console.log("connected successful");
// })