import firebase from '../configs/fbConfig'

const getData = () =>{

    const db = firebase.firestore()

    db.collection("blogs").where('published', '==', true).get()
    .then((querySnapshot) => {
       let blogs = querySnapshot.docs.map(doc => doc.data());
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export default getData