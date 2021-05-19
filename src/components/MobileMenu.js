import { Link } from "react-router-dom";
import fbIcon from "../icons/fb-navy.svg";
import inIcon from "../icons/in-navy.svg";


const MobileMenu = ({toggleMenu}) => {

    // toggleMenu toggles mobile menu on/off (prop function) 

    return ( 
        <div className="mobileMenu mob-only" id='mobile-menu'>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/about" className="mob-menu-text" 
                        onClick={toggleMenu}>
                            About Me
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/coaching" className="mob-menu-text" onClick={toggleMenu}>
                            What is coaching?
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/coaching/individual" className="mob-menu-text" onClick={toggleMenu}>
                            Individual Coaching
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/consultancy" className="mob-menu-text" onClick={toggleMenu}>
                            HR Consultancy
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/blog" className="mob-menu-text" onClick={toggleMenu}>
                            Blog
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn">
                        <Link to="/contact" className="mob-menu-text" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn mob-icon-btn">
                        <a href="https://www.facebook.com/thesoundingboardtsb/" target="_blank" rel="noreferrer" className="mob-menu-text" onClick={toggleMenu}>
                            <img src={fbIcon} alt="Facebook"/>
                        </a>
                    </button>
                    <button className="mob-menu-btn mob-icon-btn">
                        <a href="https://www.linkedin.com/in/monaeamestsb/" target="_blank" rel="noreferrer" className="mob-menu-text" onClick={toggleMenu}>
                            <img src={inIcon} alt="LinkedIn"/>
                        </a>
                    </button>
                </div>
                <div className="mob-menu-option">
                    <button className="mob-menu-btn" style ={{border: 'none'}}>
                        <Link className="mob-menu-text" onClick={toggleMenu}>
                           <b>X</b>
                        </Link>
                    </button>
                </div>
        </div>
     );
}
 
export default MobileMenu;