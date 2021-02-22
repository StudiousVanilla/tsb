import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy} from '../functions/colorChanges'
import firebase from '../configs/fbConfig'
import placeHolder from '../imgs/landing.png'

const Blogs = () => {


    // sets sate for blogs that will populate page
    const [blogs, setBlogs] = useState('');

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

    const convertDate = (timeStamp) => {
        // now timestamp is in milliseconds
        let date = timeStamp.toDate()
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear()
        let dateString = `${day} ${month} ${year}`
        return dateString
    }
    

    useEffect(()=>{
        buttonToOrange()
        sideBarNavy()
        getData()
    }, [])


    return ( 
        <main className='blogs-container'>
            <div className="blogs-title-container">
                <h2 className="blogs-title">The TSB Blog</h2>
            </div>
            
            {blogs.length>1 && blogs.map((blog)=>(
                <div className="blog-post-container" key={blog.title}>
                    <div className="blog-img-container">
                        <img className='blog-img' src={placeHolder} alt=""/>
                    </div>
                    <div className='blog-info-container'>
                        <div className="blog-date-theme">
                            <span>{convertDate(blog.date)}</span>
                            <span>|</span>
                            <span>{blog.theme}</span>
                        </div>
                        <p className="blog-title">
                            {blog.title}
                        </p>
                        <p className="blog-upper">
                            {blog.upper.substring(0, 300)}...
                        </p>
                        <p className="read-more-link">Read more</p>
                    </div>
                </div>
            ))}

            <Bookingbtn/>
        </main>
     );
}
 
export default Blogs;