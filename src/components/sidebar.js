import menuIcon from "../icons/menu.svg";
import brandLogo from "../icons/brand.svg"
import fbIcon from "../icons/fb.svg";
import inIcon from "../icons/in.svg";
import { Link } from 'react-router-dom'



const Sidebar = () => {

    // reveals coachig links within side bar
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

    return ( 

        <div className='sidebar-container' id='side-bar'>
            {/* only visible on tablet sized devices */}
            <div className='top-bar'>
                {/* triggers side bar reveal on tablet sized devices */}
                <button className='top-bar-btn' onClick={sideBarReveal}>
                    <img src={menuIcon} alt=""/>
                </button>
            </div>
            <div className="sidebar-content">
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
                           <Link to='/about'>About Me</Link>
                        </li>
                        <li className='about-link link'>
                           <Link to='/coaching/explained'>What is Coaching?</Link>
                        </li>
                        {/* triggers sub-links drop down menu */}
                        <li className='coaching-link link' onClick={listReveal}>Individual Coaching...</li>
                        <ul className="coaching-links" id ='coaching-links'>
                            <Link to='/coaching/executive'>
                                <li className='link'>Executive</li>
                            </Link>
                            <Link to='/coaching/lifestyle'>
                                <li className='link'>Lifestyle</li>
                            </Link>
                            <Link to='/coaching/career'>
                                <li className='link'>Career</li>
                            </Link>
                            <Link to='/coaching/mentor'>
                                <li className='link'>Mentor</li>
                            </Link>
                        </ul>
                        <div className="moveable-list" id='moveable-list'>
                            <Link to='/consultancy'>
                                <li className='link'>HR Consultancy</li>
                            </Link>
                            <Link to='/contact'>
                                <li className='link'>Contact</li>
                            </Link>
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
                    <p className='blog-title'>"Forming Habits: How long does it take to form a habit?"</p>
                    <Link to='/blog'>
                        <p className='blog-link'> Visit TSB Blog </p>
                    </Link>
                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;