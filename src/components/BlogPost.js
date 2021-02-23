import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy} from '../functions/colorChanges'
import firebase from '../configs/fbConfig'
import placeHolder from '../imgs/landing.png'
import { useLocation, useParams } from "react-router-dom"

const Blogs = () => {

    // gets original title of blog from blog index component and sets it to blogRef
    // blogRef is used to pull post from data base
    let location = useLocation()
    let blogRef = location.state.blogRef

    // sets sate for blogs that will populate page
    const [blog, setBlog] = useState({title: ''});
    
    // grabs dynamic Route parameter to use to pull blog data
    let  { blogURL} = useParams()

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
   
        // pulls blog information based on blogTitle
        const getBlogPost = () =>{

            // // connects to firestore db
            const db = firebase.firestore()
            
            // pulls blog information for blog that matches title (the blogRef)
            db.collection("blogs").where('title', '==', blogRef)
            .get()
            .then((querySnapshot) => {
                // addes blog data to blogsArray
                let blog = null
                querySnapshot.docs.forEach(doc =>{
                    blog = doc.data()
                })

                // update Sate
                setBlog(blog)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }
        getBlogPost()
        
    }, [blogURL, blogRef])


    return (

        <div>
            { blog.title !== '' && 
            <main className='post-container'>
                <div className="date-theme-container">
                    <p className="post-date">{ convertDate(blog.date) }</p>
                    <p className="post-theme">{blog.theme}</p>
                </div>
                <div className="blog-post-title-container">
                    <h2 className="post-title">{blog.title}</h2>
                </div>
                <div className="blog-post-subtitle-container">
                    <h3 className="post-title">{blog.subtitle}</h3>
                </div>
                <div className="blog-post-img-container">
                    <img src={placeHolder} alt=""/>
                </div>
                <div className="blog-post-upper-container">
                    <p className="post-upper">{blog.upper}</p>
                </div>
                <div className="blog-post-quote-container">
                    <p className="post-upper">{blog.quote}</p>
                </div>
                <div className="blog-post-lower-container">
                    <p className="post-upper">{blog.lower}</p>
                </div>
                <div className="blog-post-footer-container">
                    <p className="post-upper">{blog.footer}</p>
                </div>
                <div className="blog-post-tags-container">
                    <p className="post-upper">{blog.tags}</p>
                </div>
                <div className="blog-post-info-share-container">
                    <p className="post-upper">info</p>
                </div>
                <div className="blog-post-nav-container">
                    <p className="post-upper">nav</p>
                </div >
            </main>
            }
            <Bookingbtn/>
        </div>
     );
}
 
export default Blogs;