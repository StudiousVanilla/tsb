import menuIcon from "../icons/menu.svg";
import brandLogo from "../icons/logo-navy.svg"
import fbIcon from "../icons/fb-grey.svg";
import inIcon from "../icons/in-grey.svg";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import firebase from '../configs/fbConfig'



const Sidebar = () => {

    useEffect(()=>{
        getBlogThemes()

    },[])

    // used to populatres sidebar themes list
    const [blogThemes, setBlogThemes] = useState('')

    // used to set most recent blog - title and link is pulled for side bar menu
    const [blog, setBlog] = useState('')

    // gets blog themes, and newest blog for the side bar
    const getBlogThemes = () => {

        // connects to firestore db
        const db = firebase.firestore()
        
        // pulls blog information based on number of blogs and if they are published
        db.collection("blogs").where('published', '==', true)
        .get()
        .then((querySnapshot) => {
            // addes blog data to blogsArray
            let blogArray = []
            querySnapshot.docs.forEach(doc =>{
                let blog = doc.data()
                blogArray.push(blog)
            })

            // sort blogArray by date
            const sortedByDate = blogArray.sort((a, b) => a.date > b.date ? -1 : 1)
            // grab mosr recent blog
            let recentBlog = sortedByDate[0]
            // sets blog state to recent blog object
            setBlog(recentBlog)


            // holds all the themes from the blog database
            let blogThemeArray = []
            
            // sort blogArray by date
            const sortedByTheme = blogArray.sort((a, b) => a.theme > b.theme ? 1 : -1)

            // filters blogs based on theme
            const filteredArray = sortedByTheme.filter((blog)=>{
                if(blogThemeArray.includes(blog.theme)){
                    
                }
                else{
                    blogThemeArray.push(blog.theme)
                    return blog
                }
                return null
            })

            // update Sate
            setBlogThemes(filteredArray)
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    // reveals coaching links within side bar
    const listReveal = () =>{

        // grabs all the links below potential sub-link list
        let moveableList = document.getElementById('moveable-list')

        // grabs sub-links
        let links = document.getElementById('coaching-links')

        // grabs icons
        let sideIcons = document.getElementById('side-icons')

        //grabs blog
        let blog = document.getElementById('side-blog')

        // triggers if style is pulled from style sheet
        if(links.style.opacity === ''){
            // slides sub-links in from the left
            links.style.opacity = 1
            links.style.left = '0%'
            links.style.transition = '1s'
            // moves standard links, icons and blog down 
            moveableList.style.top = '0%'
            sideIcons.style.top = '0%'
            blog.style.top = '0%'
            return
        }
        else{
            // revert links back to stylesheet
            links.style.opacity = null
            links.style.left = null
            links.style.transition = '0.25s'
            // revert moveableList, icons and blog back to stylesheet
            moveableList.style.top = null
            sideIcons.style.top = null
            blog.style.top = null
        }

    }

    // reveals side bar on tablets (Maybe phones too?)
    const sideBarReveal = () =>{
        let sidebar = document.getElementById('side-bar')
        // triggers if style is pulled from style sheet
        /// slides side-bar in from the left
        if(sidebar.style.left === ''){
            sidebar.style.left = '0%'
            return
        }
        // reverts style back to stylesheet
        sidebar.style.left = null
    }

    // reverts all links back to navy
    const allLinksNavy = () =>{
        
        const links = document.getElementsByClassName('link-text')

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = null;
            links[i].style.fontWeight = null
        };;

    }

    // highlights selected link in orange
    const highlightLink = (e) =>{

        allLinksNavy()

        e.target.style.color = 'var(--tsb-orange)'
        e.target.style.fontWeight = '700'

    }

    return ( 

        <div className='sidebar-container' id='side-bar'>
            {/* only visible on tablet sized devices */}
            <div className='top-bar'>
                {/* triggers side bar reveal on tablet sized devices */}
                <button className='top-bar-btn' onClick={sideBarReveal}>
                    <img src={menuIcon} alt=""/>
                </button>
            </div>
            <div className="sidebar-content" id="side-content">
                <Link to='/tsb'>
                    <div className="side-brand side">
                        <div className="logo-container">
                            <img src={brandLogo} id="logo" alt="The Sounding Board" className="logo"/>
                        </div>
                        <div className="brand-text">
                            <p className='logo-text'>Mona Eames</p>
                            <p className='logo-text brand-name'>The Sounding Board</p>
                        </div>
                    </div>
                </Link>
                <div className="side-links side side-grey">
                    <ul className="side-links-list">
                        <li className='about-link link'>
                           <Link to='/about' 
                           className='link-text' 
                           onClick={highlightLink}>
                               About Me
                           </Link>
                        </li>
                        <li className='about-link link'>
                           <Link to='/coaching/explained' 
                           className='link-text'
                           onClick={highlightLink}>
                               What is Coaching?
                            </Link>
                        </li>
                        {/* triggers sub-links drop down menu */}
                        <li className='coaching-link link' onClick={listReveal}>Individual Coaching...</li>
                        <ul className="coaching-links" id ='coaching-links'>
                            <li className='link'>
                                <Link to='/coaching/executive'
                                className='link-text'
                                onClick={highlightLink}>
                                    Executive
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to='/coaching/lifestyle'
                                className='link-text'
                                onClick={highlightLink}>
                                    Lifestyle
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to='/coaching/career'
                                className='link-text'
                                onClick={highlightLink}>
                                    Career
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to='/coaching/mentor'
                                className='link-text'
                                onClick={highlightLink}>
                                    Coach Mentoring
                                </Link>
                            </li>
                        </ul>
                        <div className="moveable-list" id='moveable-list'>
                                <li className='link'>
                                    <Link to='/consultancy'
                                    className='link-text'
                                    onClick={highlightLink}>
                                        HR Consultancy
                                    </Link>
                                </li>
                                <li className='link'>
                                    <Link to='/contact'
                                    className='link-text'
                                    onClick={highlightLink}>
                                        Contact
                                    </Link>
                                </li>
                        </div>
                    </ul>
                </div>
                <div className="side-icons side side-grey" id="side-icons">
                    <span className='side-icon-container'>
                        <a href="https://www.facebook.com/thesoundingboardtsb/" target="_blank" rel="noreferrer">
                            <img src={fbIcon} alt="facebook"/>
                        </a>
                     </span>
                     <span className='side-icon-container'>
                         <a href="https://www.linkedin.com/in/monaeamestsb/" target="_blank" rel="noreferrer">
                            <img src={inIcon} alt="LinkedIn"/>
                         </a>
                    </span>
                </div>
                <div className="side-blog side side-grey" id="side-blog">
                    {/* Pulls title, subtitle and link id from most recent 'blog' set by the component state */}
                    <Link to={'/blog/'+blog.blogID} className='link'>
                        <p className='side-blog-title'>
                            {blog.title}: <br/> {blog.subtitle}
                        </p>
                    </Link>
                    <Link to='/blog' className='link' onClick={highlightLink}>
                        <p className='link-text blog-link'> Visit TSB Blog </p>
                    </Link>
                </div>
                
                {/* only appears on blog pages */}
                <div className="side-blogs-nav-container side side-navy">
                    <div className="side-blog-nav">
                        <Link to='/blog'>
                            <p className='link side-blog-nav-link link-text'
                             onClick={highlightLink}>Blog Feed</p>
                        </Link>
                        <Link to='/tsb'>
                            <p className='link side-blog-nav-link link-text' 
                            onClick={highlightLink}>Visit The Sounding Board Home</p>
                        </Link>
                    </div>
                    <div className="side-blog-themes">
                        <p className="theme-list-title">Blog Themes</p>
                        {blogThemes.length >= 1 &&
                        <ul className="theme-list">
                            {blogThemes.map((blog)=>
                                <li className="theme-list-item link link-text" key={blog.title}>
                                    <Link to={'/blog/theme/'+blog.theme}>
                                        <p>{blog.theme}</p>
                                    </Link>
                                </li>
                            )
                            }
                        </ul>
                        }
                    </div>
                </div>           
            </div>
        </div>


     );
}
 
export default Sidebar;