const Sidebar = () => {


    const listReveal = () =>{

        // grabs all the links below potential sub-link list
        let moveableList = document.getElementById('moveable-list')

        // slides sub-links in from the left
        let links = document.getElementById('coaching-links')
        console.log(links.style.opacity);
        // '' logical condition for the first time the function is fired
        if(links.style.opacity === '' || links.style.opacity === '0'){
            links.style.opacity = 1
            links.style.left = '0%'
            links.style.transition = '1.2s'
            // moves standard links down 
            moveableList.style.top = '0%'
            return
        }
        else{
            // moves sub-links back left, off-screen
            links.style.opacity = 0
            links.style.left = '-100%'
            links.style.transition = '0.5s'
            // moves standard links back up
            moveableList.style.top = '-47%'
        }

    }

    return ( 

        <div className='sidebar-container'>
            <div className="sidebar-content">
                <div className="side-brand side">
                    <p>Mona Eames</p>
                    <img src="/imgs/brand.png" alt=""/>
                </div>
                <div className="side-links side">
                    <ul className="side-links-list">
                        <li className='about-link'>About</li>
                        <li className='coaching-link' onClick={listReveal}>Coaching</li>
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
                        <img src="/icons/fb2.png" alt=""/>
                     </span>
                     <span className='side-icon-container'>
                        <img src="/icons/in2.png" alt=""/>
                    </span>
                    <span className='side-icon-container'>
                        <img src="/icons/mail2.png" alt=""/>
                    </span>

                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;