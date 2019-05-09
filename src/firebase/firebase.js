import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCbGnydmZgIgSvM3JWKHlmzcLrh7Lr30PQ",
    authDomain: "expensify-3abec.firebaseapp.com",
    databaseURL: "https://expensify-3abec.firebaseio.com",
    projectId: "expensify-3abec",
    storageBucket: "expensify-3abec.appspot.com",
    messagingSenderId: "228498840750"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
