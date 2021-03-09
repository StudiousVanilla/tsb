import { useEffect } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'
import what1 from '../imgs/what/what1.png'
import what2 from '../imgs/what/what2.png'
import what3 from '../imgs/what/what3.png'
import what4 from '../imgs/what/what4.png'
import what5 from '../imgs/what/what5.png'
import what6 from '../imgs/what/what6.png'


const WhatIsCoaching = () =>{ 

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
    })

    return ( 

        <div className='what-container content-container'>
            <div className='what-info-container'>
                <h2 className='what-info-title'>What is Coaching?</h2>
                <p className='what-info'>Coaching can be viewed as a resource to support the individual to take the space to “Press Pause” and consider what really matters to them both personally and professionally. The International Coaching Federation defines coaching as:</p>
            </div>
            <div className='what-quote-container'>
                <p className='what-quote'>
                “Partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential”
                </p>
            </div>
            <div className='competency-container'>
                <p className='competency-title'>
                    Competencies of a Professional Coach
                </p>
                <div className='competency-tiles-container'>
                    <div className='competency-tile'>
                        <img src={what1} alt="Embodies a Coaching Mindest"
                        className="competency-img"/>
                        <p className="competnecy-reverse">
                            A coach develops a mindset that is open, curious, flexible and client-centred.
                        </p>                      
                    </div>
                    <div className='competency-tile'>
                        <img src={what2} alt="Cultivates Trust and Safety"
                        className="competency-img"/>
                       <p className="competnecy-reverse reverse-unique">
                            A coach partners with the client to create a safe supportive environment that allows the client to share freely. <br/><br/> They maintain a relationship of mutual respect and trust.
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what3} alt="Maintinas Presence"
                        className="competency-img"/>
                       <p className="competnecy-reverse">
                            A coach is fully present with the client.
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what4} alt="Listens Actively"
                        className="competency-img"/>
                       <p className="competnecy-reverse">
                            A coach focuses on what the client is and is not sayingd.
                        </p>                     
                    </div>
                    <div className='competency-tile'>
                        <img src={what5} alt="Evokes Awerness"
                        className="competency-img"/>
                       <p className="competnecy-reverse">
                            A coach facilitates client insight and learning by using tools and techniques.
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what6} alt="Facilitates Client Growth"
                        className="competency-img"/> 
                       <p className="competnecy-reverse">
                            A coach partners with the client to transform learning into action.
                        </p>                      
                    </div>
                </div>
            </div>
            <div className='faq'>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ: How long does the coaching process take?</h2>
                    <p className='what-info'>Coaching helps the client to transform learning and insights into actions. This generally happens over a number of months. Five or six sessions are advisable and the frequency will be agreed between coach and client in the first session which sets the foundation and identifies the goals for the coaching.</p>
                </div>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ: How do Counselling and Mentoring differ from Coaching?</h2>
                    <p className='what-info'> <b>Counselling</b> is the provision of professional assistance and guidance in resolving personal or psychological problems. <br/><br/> <b>Mentoring</b> is a system of semi-structured guidance whereby one person shares their knowledge, skills and experience to assist others to progress in their own lives and careers</p>
                </div>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ: Are TSB sessions face-to-face or online?</h2>
                    <p className='what-info'>Currently, coaching sessions are being held virtually, online. Coaching by phone is also available and face-to-face coaching will resume when Covid-19 restrictions allow. <br/><br/> You can book your appointment using the button at the top of this page and an invitation will be sent to your email address, along with a Zoom video-call link for your booking. You and your coach will join this Zoom call at the agreed time and proceed from there.</p>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default WhatIsCoaching;