import Bookingbtn from "./Bookingbtn";
import landingImg from "../imgs/landing.png"
import { useEffect } from "react";
import {buttonToOrange, sideBarGrey, logoSRC} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const Home = () => {

    useEffect(()=>{
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
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
                    <p className='quote-text'>I help individuals and teams to develop themselves through bespoke coaching solutions that provide sustainable personal and professional development, enabling them to take positive action. If you’d like any further information, please don’t hesitate to get in touch.</p>
                    <p className='quote-name'>- Mona</p>
                </div>
            </main>
        </div>
     );
}
 
export default Home;