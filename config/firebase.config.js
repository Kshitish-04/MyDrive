const Firebase = require('firebase-admin');

const serviceAccount = require('../mydrive-4c4c8-firebase-adminsdk-fbsvc-0f386f1e86.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: "mydrive-4c4c8.firebasestorage.app"
});

module.exports = Firebase;