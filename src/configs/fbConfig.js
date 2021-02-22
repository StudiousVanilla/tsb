import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSZNeDIU8ipUtAT0b0I-I9ryK52LmceE0",
    authDomain: "tsb-test-91c52.firebaseapp.com",
    projectId: "tsb-test-91c52",
    storageBucket: "tsb-test-91c52.appspot.com",
    messagingSenderId: "462193472914",
    appId: "1:462193472914:web:4fdd884b77b9644dc0bd4b",
    measurementId: "G-PY53022PVV"
  };

firebase.initializeApp(firebaseConfig)

export default firebase