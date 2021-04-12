import menuIcon from "../icons/menu.svg";
import brandLogo from "../icons/logo-navy.svg"
import fbIcon from "../icons/fb-orange.svg";
import inIcon from "../icons/in-orange.svg";
import badge from '../imgs/badge.png'
import badge2 from '../imgs/badge2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import {fetchBlogThemes} from '../functions/dataFetch'



const Sidebar = () => {

    useEffect(()=>{
        getBlogThemes()

    },[])

    // used to populatres sidebar themes list
    const [blogThemes, setBlogThemes] = useState('')

    // used to set most recent blog - title and link is pulled for side bar menu
    const [blog, setBlog] = useState('')

    // gets blog themes, and newest blog for the side bar
    const getBlogThemes = async () => {

        // returns an array with the earliest blog at position 0 and a sorted array of blogs by theme in posiotn 1
        const blogData = await fetchBlogThemes()

        setBlog(blogData[0])
        setBlogThemes(blogData[1])
   
    }

    // reveals coaching links within side bar
    const listReveal = () =>{

        // grabs all the links below potential sub-link list
        let moveableList = document.getElementById('moveable-list')

        // grabs sub-links
        let links = document.getElementById('coaching-links')

        // grabs icons
        let sideIcons = document.getElementById('side-icons')

        // grabs blog
        let blog = document.getElementById('side-blog')

        // grabs badges
        let badge = document.getElementById('badge')

        // triggers if style is pulled from style sheet
        if(links.style.opacity === ''){
            
            // moves standard links, icons and blog down 
            moveableList.style.top = '0%'
            sideIcons.style.top = '0%'
            blog.style.top = '0%'
            badge.style.top = '0%'

            // allows content to drop in sidebar before lnks slide in
            setTimeout(function(){
                // slides sub-links in from the left
                links.style.opacity = 1
                links.style.left = '0%'
                links.style.transition = '1s'
            }, 250);

            return
        }
        else{
            // revert links back to stylesheet
            links.style.opacity = null
            links.style.left = null
            links.style.transition = '0.25s'

            // allows coaching links to slide back in before sidebar returns to default
            setTimeout(function(){
                // revert moveableList, icons and blog back to stylesheet
                moveableList.style.top = null
                sideIcons.style.top = null
                blog.style.top = null
                badge.style.top = null
            }, 250);

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
                <Link to='/tsb' onClick={allLinksNavy}>
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
                           <Link to='/coaching' 
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
                                    Mentor Coaching
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
                    <Link to={'/blog'} className='link'>
                        <p className='side-blog-title'>
                            {blog.title}: {blog.subtitle}
                        </p>
                    </Link>
                    <Link to='/blog' className='link' onClick={highlightLink}>
                        <p className='link-text blog-link'> Visit TSB Blog </p>
                    </Link>
                </div>           
                <div className=" side-badges side side-grey" id="badge">
                    <div className="badge-container">
                        <a className="link-text" href="https://coachingfederation.org">
                            <img src={badge} alt="ICF Membership" className="badge-img"/>
                        </a>
                    </div>

                    {/* // this badge to be added later */}
                    <div className="badge-container">
                        <a className="link-text" href="https://connectacoach.org">
                            <img src={badge2} alt="ICF Membership" className="badge-img"/>
                        </a>
                    </div>

                    {/* // this badge to be added later */}
                    <div className="badge-container" style={{visibility: "hidden"}}>
                        <a className="link-text" href="https://connectacoach.org">
                            <img src={badge2} alt="ICF Membership" className="badge-img"/>
                        </a>
                    </div>
                </div>
                {/* only appears on blog pages */}
                <div className="side-blogs-nav-container side side-navy">
                    <div className="side-blog-nav">
                        <Link to='/blog'>
                            <p className='link side-blog-nav-link link-text'
                             onClick={highlightLink}>Blog Feed</p>
                        </Link>
                        {/* 
                        <Link to='/tsb'>
                            <p className='link side-blog-nav-link link-text' 
                            onClick={highlightLink}>Visit The Sounding Board Home</p>
                        </Link> */}
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