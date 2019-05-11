import * as firebase from 'firebase';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbGnydmZgIgSvM3JWKHlmzcLrh7Lr30PQ",
    authDomain: "expensify-3abec.firebaseapp.com",
    databaseURL: "https://expensify-3abec.firebaseio.com",
    projectId: "expensify-3abec",
    storageBucket: "expensify-3abec.appspot.com",
    messagingSenderId: "228498840750",
    appId: "1:228498840750:web:424b9260867f02dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
