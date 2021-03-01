import { useEffect } from 'react';
import firebase from '../configs/fbConfig'

const Storage = () => {

        // pulls blog information based on number of blogs to fetch
        const getData = () =>{

            // connects to firestore db
            const db = firebase.firestore()
            
            // pulls blog information based on number of blogs and if they are published
            db.collection("blogs")
            .get()
            .then((querySnapshot) => {
                // use length to assign blog number to img
                console.log(querySnapshot.docs.length)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }

    const onChange = async (e) =>{
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        // creates new file, in firebase, called 'file.name'
        const fileRef  = storageRef.child(file.name)
        // adds data to file that was created above
        await fileRef.put(file)
        // url with token so that img can be "displayed / downwloaded" with CORS
        console.log(await fileRef.getDownloadURL());
    }

    useEffect(()=>{
        getData()
    }, [])

    return ( 
        <div>
            <input type="file" name="" id="" onChange={onChange}/>
            <img src="https://firebasestorage.googleapis.com/v0/b/tsb-test-91c52.appspot.com/o/helix.jpeg?alt=media&token=88de44f6-ac3c-4477-8e56-ec8e0751dae1" alt=""/>
        </div>
     );
}
 
export default Storage;