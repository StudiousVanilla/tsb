import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRA1D6IKIuYtKF016SYEiTThh6nljicWo",
  authDomain: "tsb-blog-a1382.firebaseapp.com",
  projectId: "tsb-blog-a1382",
  storageBucket: "tsb-blog-a1382.appspot.com",
  messagingSenderId: "490921633937",
  appId: "1:490921633937:web:8c633a008db766725eb730"
};

firebase.initializeApp(firebaseConfig)

export default firebase