import menuIcon from "../icons/menu.svg";
import brandLogo from "../icons/brand.svg"
import fbIcon from "../icons/brand.svg";
import inIcon from "../icons/brand.svg";
import mailIcon from "../icons/brand.svg";



const Sidebar = () => {

    // reveals coachig links within side bar
    const listReveal = () =>{

        // grabs all the links below potential sub-link list
        let moveableList = document.getElementById('moveable-list')

        // grabs sub-links
        let links = document.getElementById('coaching-links')

        // triggers if style is pulled from style sheet
        if(links.style.opacity === ''){
            // slides sub-links in from the left
            links.style.opacity = 1
            links.style.left = '0%'
            links.style.transition = '1s'
            // moves standard links down 
            moveableList.style.top = '0%'
            return
        }
        else{
            // revert links back to stylesheet
            links.style.opacity = null
            links.style.left = null
            links.style.transition = '0.25s'
            // revert moveableList back to stylesheet
            moveableList.style.top = null
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
                <div className="side-brand side">
                    <div className="logo-container">
                        <img src={brandLogo} alt="The Sounding Board" className="logo"/>
                    </div>
                    <div className="brand-text">
                        <p className='logo-text'>Mona Eames</p>
                        <p className='logo-text brand-name'>The Sounding Board</p>
                    </div>
                </div>
                <div className="side-links side">
                    <ul className="side-links-list">
                        <li className='about-link link'>About</li>
                        {/* triggers sub-links drop down menu */}
                        <li className='coaching-link link' onClick={listReveal}>Coaching...</li>
                        <ul className="coaching-links" id ='coaching-links'>
                            <li className='link'>Executive</li>
                            <li className='link'>Lifestyle</li>
                            <li className='link'>Career</li>
                            <li className='link'>Mentor</li>
                        </ul>
                        <div className="moveable-list" id='moveable-list'>
                            <li className='link'>Training & Facilitation</li>
                            <li className='link'>HR Consultancy</li>
                            <li className='link'>Contact</li>
                        </div>
                    </ul>
                </div>
                <div className="side-icons side">
                    <span className='side-icon-container'>
                        <img src={fbIcon} alt="facebook"/>
                     </span>
                     <span className='side-icon-container'>
                        <img src={inIcon} alt="LinkedIn"/>
                    </span>
                    <span className='side-icon-container'>
                        <img src={mailIcon} alt="Email"/>
                    </span>

                </div>
                <div className='border-div'></div>
                <div className="side-blog side">
                    <p className='blog-title'>"Forming Habits: How long does it take to form a habit?"</p>
                    <p className='blog-link'>Visit TSB Blog</p>
                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;