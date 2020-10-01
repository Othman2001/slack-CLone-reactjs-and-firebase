import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCwdnfAYg09gQxAjbq5YeMYQKXUgGqdlPQ",
    authDomain: "slack-clone-b8936.firebaseapp.com",
    databaseURL: "https://slack-clone-b8936.firebaseio.com",
    projectId: "slack-clone-b8936",
    storageBucket: "slack-clone-b8936.appspot.com",
    messagingSenderId: "1016772120898",
    appId: "1:1016772120898:web:6db24f1b3e38a61592f8db",
    measurementId: "G-90MQV642TW"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {auth, provider}
export default db 