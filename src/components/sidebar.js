import menuIcon from "../icons/menu.svg";
import brandLogo from "../icons/brand.svg"
import fbIcon from "../icons/fb.svg";
import inIcon from "../icons/in.svg";
import { Link } from 'react-router-dom'



const Sidebar = () => {

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
        };;

    }

    // highlights selected link in orange
    const highlightLink = (e) =>{

        allLinksNavy()

        e.target.style.color = 'var(--tsb-orange)'

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
                            <img src={brandLogo} alt="The Sounding Board" className="logo"/>
                        </div>
                        <div className="brand-text">
                            <p className='logo-text'>Mona Eames</p>
                            <p className='logo-text brand-name'>The Sounding Board</p>
                        </div>
                    </div>
                </Link>
                <div className="side-links side">
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
                <div className="side-icons side" id="side-icons">
                    <span className='side-icon-container'>
                        <img src={fbIcon} alt="facebook"/>
                     </span>
                     <span className='side-icon-container'>
                        <img src={inIcon} alt="LinkedIn"/>
                    </span>
                </div>
                <div className="side-blog side" id="side-blog">
                    <p className='side-blog-title'>"Forming Habits: How long does it take to form a habit?"</p>
                    <Link to='/blog' className='link' onClick={highlightLink}>
                        <p className='link-text blog-link'> Visit TSB Blog </p>
                    </Link>
                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;