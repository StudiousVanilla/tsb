import Bookingbtn from "./Bookingbtn";
import landingImg from "../imgs/landing.png"
import { useEffect } from "react";
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import logo from '../icons/logo-navy.svg'
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
        scrollToTop()
    })

    return ( 
        <div>
            <Bookingbtn />
            <main className='home-container content-container'>
                <div className='welcome'>
                    <h2 className="welcome-sub">Welcome to</h2>
                    <h1 className="welcome-main">The Sounding Board</h1>
                </div>
                <div className='home-img-container'>
                    <img src={landingImg} alt="" className='home-img'/>
                </div>
                <div className='quote'>
                    <p className='quote-text'>
                        I help individuals and teams to develop themselves personally and professionally through the coaching process, enabling them to get clarity and take positive actions to move forward in their lives/careers/roles.
                        <br/><br/>
                        If you'd like any further information, please don't hesitate to <b><Link className="link" to='/contact'>get in touch.</Link> </b>
                    </p>
                    <p className='quote-name'>- Mona</p>
                </div>
            </main>
        </div>
     );
}
 
export default Home;