import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy} from '../functions/colorChanges'
import firebase from '../configs/fbConfig'

const Blogs = () => {


    // sets sate for blogs that will populate page
    const [blogs, setBlogs] = useState([{title:'Loading...'}]);

    // pulls blog information based on number of blogs to fetch
    const getData = () =>{

        // connects to firestore db
        const db = firebase.firestore()
        
        // pulls blog information based on number of blogs and if they are published
        db.collection("blogs").where('published', '==', true)
        .get()
        .then((querySnapshot) => {
            // addes blog data to blogsArray
            let blogArray = []
            querySnapshot.docs.forEach(doc =>{
                blogArray.push(doc.data())
            })

            // sort blogArray by date
            const sortedArray = blogArray.sort((a, b) => a.date > b.date ? -1 : 1)

            // update Sate
            setBlogs(sortedArray)
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    

    useEffect(()=>{
        buttonToOrange()
        sideBarNavy()
        getData()
    }, [])


    return ( 
        <main className='blogs-container'>
            <div className="blogs-title-container">
                <h2 className="blogs-title">TSB Blog</h2>
            </div>
            <div className="blog-info-container">
                {blogs.map((blog)=>(
                    <div key={blog.title}>
                        <p>{blog.title}</p>
                    </div>
                ))}
            </div>
            <Bookingbtn/>
        </main>
     );
}
 
export default Blogs;