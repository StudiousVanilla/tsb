import { useEffect } from 'react';
import exImg from '../imgs/exImg.png'
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const ExCoaching = () => {

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile ex-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title  ex-title'>
                        Executive Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“The coaching sessions were precious time to me when I could take a step back to reflect on my approaches and my effectiveness and to dial down the negative self-talk and back myself at bit more. Coaching with Mona was a great support to me in embracing work challenges as well as reminding me about the importance of work-life balance”.
                        </p>
                        <div className='attestant-container'>
                            <p className='attestant'>
                            Testimony (2021) from Anne who works in a management role.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <div className='coaching-img-conatiner'>
                <img src={exImg} alt="boardroom" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>What is Executive Coaching?</h2>
                    <p className='coaching-info-text'>An executive coach is a qualified professional who works with individuals or teams to help them increase self-awareness, clarify goals, achieve their development objectives, and identify actions in order to reach their potential.</p>
                </div>
                <div className="statement-container" >
                    <h2 className="text-statement">Invest in yourself.</h2>
                    <h2 className="text-statement link">
                        <a href="https://calendly.com/tsbcoaching/zoom-30-min-consultation-the-sounding-board?month=2021-03" target="_blank" rel="noreferrer">
                            Book your complimentary coaching conversation now.
                        </a>
                    </h2>
                </div>
                {/* Some in-line CSS is  */}
                <div className='coaching-info coaching-info-final'>
                    <h2 className='coaching-info-title'>
                        Executive Coaching Workshops
                    </h2>
                    <p className='coaching-info-text'>The Sounding Board coaching workshops are currently based in the virtual classroom. They are interactive, with a blended learning approach and can be created to suit the needs of your particular group in order to get maximum beneﬁt. <br/> Previous workshops include:</p>
                    <ul className="text-list">
                            <li className="text-list-item">Coaching skills for  managers</li>
                            <li className="text-list-item">Myers Briggs personality types for teams</li>
                            <li className="text-list-item">Building resilience in the workplace</li>
                            <li className="text-list-item">Building rapport and communication skills</li>
                            <li className="text-list-item">Building emotional intelligence</li>
                        </ul>
                </div>
            </section>
            
        </div>
     );
}
 
export default ExCoaching;