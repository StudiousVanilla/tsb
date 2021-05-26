import Bookingbtn from "./Bookingbtn";
import landingImg from "../imgs/landing.png"
import mobLandingImg from "../imgs/mobLanding.png"
import badge from '../imgs/badge.png'
import badge2 from '../imgs/badge2.png'
import { useEffect } from "react";
import {buttonToOrange, sideBarGrey, logoSRC, greySide, menuSRC} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import logo from '../icons/logo-navy.svg'
import menu from '../icons/menu.svg'
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
        menuSRC(menu)
        scrollToTop()
    })

    return ( 
        <div>
            <main className='home-container content-container'>
            <Bookingbtn />
                <div className='welcome'>
                    <h2 className="welcome-sub">Welcome to</h2>
                    <h1 className="welcome-main">The Sounding Board</h1>
                </div>
                <div className='home-img-container no-mob'>
                    <img src={landingImg} alt="" className='home-img'/>
                </div>
                <div className='home-img-container mob-pic1 mob-only'>
                    <img src={mobLandingImg} alt="" className='home-img'/>
                </div>
                <div className='quote'>
                    <p className='quote-text no-mob'>
                        I help individuals and teams to develop themselves personally and professionally through the coaching process, enabling them to get clarity and take positive actions to move forward in their lives/careers/roles.
                    </p>
                    <p className='quote-text no-mob'>
                        <br/>
                        If you'd like any further information, please don't hesitate to <b><Link className="link" to='/contact'>get in touch.</Link> </b>
                    </p>
                    <p className='quote-name no-mob'>- Mona</p>
                </div>

                {/* Only for mobile view */}
                <div className='mob-only mob-par1 mob-home-text-container'>
                    <p className='mob-home-text' style={{fontFamily: 'PT sans'}}>
                        I help individuals and teams to develop themselves personally and professionally through the coaching process, enabling them to get clarity and take positive actions to move forward in their lives/careers/roles.
                    </p>
                </div>
                <div className='mob-only mob-par2 mob-home-text-container'>
                    <p className='mob-home-text' style={{fontFamily: 'PT sans'}}>
                        If you'd like any further information, please don't hesitate to <b><Link className="link" to='/contact'>get in touch.</Link> </b>
                    </p>
                </div>
                <div className='mob-only mob-badge'>
                    <a className="mob-badge-link" href="https://coachingfederation.org" target="_blank" rel="noreferrer">
                        <img src={badge} alt="ICF Member" className="mob-badge-img"/>
                    </a>
                    <a className="mob-badge-link" href="https://connectacoach.org" target="_blank" rel="noreferrer">
                        <img src={badge2} alt="Connect a coach" className="mob-badge-img"/>
                    </a>
                </div>
            </main>
        </div>
     );
}
 
export default Home;