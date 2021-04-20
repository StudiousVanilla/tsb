import { Link } from "react-router-dom";


const MobileMenu = () => {

    // need to send toggle mesage to 'App' component to render mobile menu on and off

    // each button should send a toggle pulse

    // also needs to be sent from top bar button

    return ( 
        <div className="mobileMenu mob-only" id='mobile-menu'>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            About Me
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            What is coaching?
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            Individual Coaching
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            HR Consultancy
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            Blog
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            Contact
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link className="mob-menu-text">
                            Icons
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn" style ={{border: 'none'}}>
                        <Link className="mob-menu-text">
                            X
                        </Link>
                    </button>
                </div>
        </div>
     );
}
 
export default MobileMenu;