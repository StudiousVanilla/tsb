import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy, logoSRC, navySide} from '../functions/colorChanges'
import {fetchBlogPost} from '../functions/dataFetch'
import { Link, useParams } from "react-router-dom"
import logo from '../icons/logo-grey.svg'
import fbIcon from '../icons/fb-navy.svg'
import inIcon from '../icons/in-navy.svg'

const Blogs = () => {

    
    // sets sate for blogs that will populate page
    const [blog, setBlog] = useState({title: ''});

    let  { blogRef} = useParams()
    let blogNumber = Number(blogRef)



    const convertDate = (timeStamp) => {
        let date = new Date(timeStamp)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear()
        let dateString = `${day} ${month} ${year}`
        return dateString
    }

    const listTags = (tags) => {
        let tagString = ''
        tags.forEach(tag => tagString =  tagString + tag + ', ')
        let SlicedTagString = tagString.slice(0, -2)
        return SlicedTagString
    }
   

    useEffect(()=>{
        navySide()
        buttonToOrange()
        sideBarNavy()
        logoSRC(logo)

        // pulls blog information based on blogTitle
        const getBlogPost = async () =>{

            const blogData = await fetchBlogPost(blogNumber)

            setBlog(blogData)

        }
        
        getBlogPost()
        
    }, [blogNumber])


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
                    <h3 className="post-subtitle">{blog.subtitle}</h3>
                </div>
                <div className="blog-post-img-container">
                    <img className="blog-post-img" src={blog.imgSRC} alt=""/>
                </div>
                <div className="blog-post-upper-container">
                    <p className="post-upper">{blog.upper}</p>
                </div>
                <div className="blog-post-quote-container">
                    <p className="post-quote">"{blog.quote}"</p>
                </div>
                <div className="blog-post-lower-container">
                    <p className="post-lower">{blog.lower}</p>
                </div>
                <div className="blog-post-footer-container">
                    <p className="post-footer">{blog.footer}</p>
                </div>
                <div className="blog-post-tags-container">
                    <p className="post-tags tags">
                        Tags: {listTags(blog.tags)}
                    </p>
                    <p className="post-tags img-credit">
                        Image credit: {blog.imgCred}
                    </p>
                    <p className="post-tags img-link">
                        Image link: {blog.imgLink}
                    </p>
                </div>
                <div className="blog-post-info-share-container">
                    <div className="post-info">
                        <p className="post-author">By Mona Eames</p>
                        <p className="post-date">{convertDate(blog.date)}</p>
                    </div>
                    <div className="post-share-container">
                        <p className="post-share">
                            Visit
                            <a href={blog.fblink} target="_blank" rel="noreferrer">
                                <img className="share-icon" src={fbIcon} alt="Facebook"/>
                            </a>
                            or
                            <a href={blog.inlink} target="_blank" rel="noreferrer">
                                <img className="share-icon" src={inIcon} alt="LinkedIn"/>
                            </a>
                            to share or comment
                        </p>
                    </div>
                </div>
                <div className="blog-post-nav-container">
                    <Link to='/blog'>
                        <p className="post-nav link">Return to Blog Feed</p>
                    </Link>
                    {/* <Link to='/tsb'>
                        <p className="post-nav">Visit The Sounding Board Home</p>
                    </Link> */}
                </div >
            </main>
            }
            <Bookingbtn/>
        </div>
     );
}
 
export default Blogs;