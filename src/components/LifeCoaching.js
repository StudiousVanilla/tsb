import { useEffect } from 'react'
import lifeImg from '../imgs/lifeImg.png'
import Bookingbtn from './Bookingbtn'
import {buttonToNavy, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const LifeCoaching = () => {

    useEffect(()=>{
        greySide()
        buttonToNavy()
        sideBarGrey()
        logoSRC(logo)
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile life-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title  life-title'>
                        Lifestyle Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>"By raising my awareness of the issues and all the angles and the options, I was able to see more opportunities and different perspectives. Mona’s questions were thought proving and really made me explore my own thinking and approaches"
                        </p>
                        <div className='attestant-container'>
                            <p className='attestant'>
                                Testimony (2020) from Mella, a farmer and coaching client.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <div className='coaching-img-conatiner'>
                <img src={lifeImg} alt="Life steps" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>What is Lifestyle Coaching?</h2>
                    <p className='coaching-info-text'>A lifestyle coach is a type of wellness professional who helps people make progress in their lives in order to attain greater fulfillment. Lifestyle coaches help their clients to press pause and consider what really matters to them in their relationships, careers, and day-to-day lives.</p>
                </div>
                <div className="statement-container">
                    <h2 className="text-statement">Press pause and consider what really matters to you in your life.</h2>
                    <br/>
                    <h2 className="text-statement link">
                        <a href="https://calendly.com/tsbcoaching/zoom-30-min-consultation-the-sounding-board?month=2021-03" target="_blank" rel="noreferrer">
                            Book your complimentary coaching conversation now.
                        </a>
                    </h2>
                </div>
                <div className='coaching-info coaching-info-final'>
                    <h2 className='coaching-info-title'>Lifestyle Coaching Workshops</h2>
                    <p className='coaching-info-text'>The Sounding Board coaching workshops are currently based in the virtual classroom. They are interactive, with a blended learning approach and can be created to suit the needs of your particular group in order to get maximum beneﬁt. Previous workshops include:</p>
                    <ul className='workshop-list'>
                        <li className='workshop-list-item'>‘Press pause and consider what really matters to you’</li>
                        <li className='workshop-list-item'>‘Where Occupational Therapy and Lifestyle Coaching meet’</li>
                        <li className='workshop-list-item'>‘Settling into change – re-Invention, renewal and post-retirement’</li>
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default LifeCoaching;