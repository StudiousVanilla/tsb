const Sidebar = () => {

    const listReveal = () =>{

        let moveableList = document.getElementById('moveable-list')

        let links = document.getElementById('coaching-links')
        if(links.style.opacity === '0'){
            links.style.opacity = 1
            links.style.left = '0%'
            links.style.transition = '1.5s'
            moveableList.style.top = '0%'
            return
        }
        else{
            links.style.opacity = 0
            links.style.left = '-100%'
            links.style.transition = '0.5s'
            moveableList.style.top = '-42%'
        }

    }

    return ( 

        <div className='sidebar-container'>
            <div className="sidebar-content">
                <div className="side-brand side">
                    <p>Mona Eames</p>
                    <p>The Sounding Board</p>
                </div>
                <div className="side-links side">
                    <ul className="side-links-list">
                        <li>About</li>
                        <li onClick={listReveal}>Coaching</li>
                        <ul className="coaching-links" id ='coaching-links'>
                            <li> - Executive</li>
                            <li> - Lifestyle</li>
                            <li> - Career</li>
                            <li> - Mentor</li>
                        </ul>
                        <div className="moveable-list" id='moveable-list'>
                            <li>Training & Facilitation</li>
                            <li>HR Consultancy</li>
                            <li>Contact</li>
                        </div>
                    </ul>
                </div>
                <div className='border-div'></div>
                <div className="side-blog side">
                    <p className='blog-title'>"Forming Habits - How long does it take to form a habit?"</p>
                    <p className='blog-link'>Visit the Blog</p>
                </div>
                <div className="side-icons side">
                    <span className='side-icon-container'>
                        <img src="/icons/fb.svg" alt=""/>
                    </span>
                    <span className='side-icon-container'>
                        <img src="/icons/mail.svg" alt=""/>
                    </span>
                    <span className='side-icon-container'>
                        <img src="/icons/fb.svg" alt=""/>
                    </span>
                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;