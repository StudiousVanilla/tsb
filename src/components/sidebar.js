const Sidebar = () => {
    return ( 

        <div className='sidebar-container'>
            <div className="sidebar-content">
                <div className="side-brand">
                    <p>Mona Eames</p>
                    <p>The Sounding Board</p>
                </div>
                <div className="side-links">
                    <ul>
                        <li>About</li>
                        <li>Coaching</li>
                        <li>Training & Facilitation</li>
                        <li>HR Consultancy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="side-blog">
                    <p>"Forming Habits - How long does it take to form a habit?"</p>
                    <p>Visuit the Blog</p>
                </div>
                <div className="side-icons">
                    <span><img src="/icons/fb.svg" alt=""/></span>
                    <span><img src="/icons/mail.svg" alt=""/></span>
                    <span><img src="/icons/fb.svg" alt=""/></span>
                </div>
            </div>
        </div>


     );
}
 
export default Sidebar;