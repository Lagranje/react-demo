import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBw7yPGxmFFyIW0ytMqcYrU7xYZ2XRd5qo",
    authDomain: "react-demo-ebb31.firebaseapp.com",
    databaseURL: "https://react-demo-ebb31.firebaseio.com",
    projectId: "react-demo-ebb31",
    storageBucket: "react-demo-ebb31.appspot.com",
    messagingSenderId: "771195159637",
    appId: "1:771195159637:web:de48bb175602c7bf3a00dc",
    measurementId: "G-L6MG2K384E"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}