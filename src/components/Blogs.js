import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy, logoSRC, menuSRC, navySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import {fetchBlogs} from '../functions/dataFetch'
import { Link } from "react-router-dom"
import logo from '../icons/logo-grey.svg'
import menuGrey from '../icons/menuGrey.svg'

const Blogs = () => {

    // sets sate for blogs that will populate page
    const [blogs, setBlogs] = useState('');

    // pulls blog information based on number of blogs to fetch
    const getData = async () =>{

        const blogData = await fetchBlogs()

        setBlogs(blogData)

    }

    const convertDate = (timeStamp) => {
        let date = new Date(timeStamp)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear()
        let dateString = `${day} ${month} ${year}`
        return dateString
    }
    

    useEffect(()=>{
        navySide()
        buttonToOrange()
        sideBarNavy()
        logoSRC(logo)
        menuSRC(menuGrey)
        scrollToTop()
        getData()
    }, [])


    return ( 
        <main className='blogs-container'>
            <div className="blogs-title-container">
                <h2 className="blogs-title">TSB Blog</h2>
            </div>
            
            
            {blogs.length>=1 && blogs.map((blog)=>(
                <div className="blog-post-container" key={blog.title}>
                    {/* sends blog title to post component as a BlogRef */}
                    <Link to={'/blog/'+blog.blogID}>
                        <div className="blog-img-container">
                            <img className='blog-img' src={blog.imgSRC} alt=""/>
                        </div>
                    </Link>
                    <div className='blog-info-container'>
                        <div className="blog-date-theme">
                            <span>{convertDate(blog.date)}</span>
                            <span>|</span>
                            <span>{blog.theme}</span>
                        </div>
                        <Link to={'/blog/'+blog.blogID}>
                            <p className="blog-title">
                                {blog.title}
                            </p>
                        </Link>
                        <p className="blog-upper">
                            {blog.upper.substring(0, 300)}...
                        </p>
                        <Link to={'/blog/'+blog.blogID}>
                            <p className="read-more-link">Read more</p>
                        </Link>
                    </div>
                </div>
            ))}
                <Bookingbtn/>
        </main>
     );
}
 
export default Blogs;