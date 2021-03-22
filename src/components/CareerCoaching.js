import { useEffect } from 'react'
import carImg from '../imgs/carImg.png'
import Bookingbtn from './Bookingbtn'
import {buttonToNavy, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const CareerCoaching = () => {

    useEffect(()=>{
        greySide()
        buttonToNavy()
        sideBarGrey()
        logoSRC(logo)
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile career-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title career-title'>
                        Career Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“Mona Eames is a fantastic life coach, she made me feel so at ease and went above and beyond to help me and guide me through the coaching process. She gave me guidance for the future. Opening my eyes to new possibilities and helping me achieve a new job. I now feel motivated and confident in many aspects of my life.”
                        </p>
                        <div className='attestant-container'>
                            <p className='attestant'>
                            Testimony (2020) from Loraine, a career coaching client.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <div className='coaching-img-conatiner'>
                <img src={carImg} alt="" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>What is Career Coaching?</h2>
                    <p className='coaching-info-text'>Career coaching helps you focus on your current situation, think about what you want from your future and then make a plan to get there. Career coaching can help the client to explore what’s not working in order to move forward and get unstuck. <br/><br/> Career coaching can help if you are feeling stuck in your career, unsure of the professional route you have chosen or if you need support to prepare for competency-based interview or to start your own business.</p>
                </div>
                <div className="coaching-info statement-container">
                    <h2 className="text-statement">Start exploring your career path.</h2>
                    <br/><br/>
                    <h2 className="text-statement">Book your complimentary coaching conversation now.</h2>
                </div>
                <div className='coaching-info' style={{border: 'none'}}>
                    <h2 className='coaching-info-title'>Career Coaching Workshops</h2>
                    <p className='coaching-info-text'>The Sounding Board coaching workshops are currently based in the virtual classroom. They are interactive, with a blended learning approach and can be created to suit the needs of your particular group in order to get maximum beneﬁt. Previous workshops include:</p>
                    <ul className="text-list">
                        <li className="text-list-item">Create your best elevator pitch</li>
                        <li className="text-list-item">Funnelling questions at interview (Mock Interview)</li>
                        <li className="text-list-item">Designing your CV for best impact</li>
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default CareerCoaching;