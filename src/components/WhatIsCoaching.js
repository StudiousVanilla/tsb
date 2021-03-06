import { useEffect } from "react"
import {buttonToOrange, sideBarGrey, logoSRC, greySide, menuSRC} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import Bookingbtn from './Bookingbtn'
import logo from '../icons/logo-navy.svg'
import menu from '../icons/menu.svg'
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
        menuSRC(menu)
        scrollToTop()
    })

    return ( 

        <div className='what-container content-container'>
            <div className='what-info-container mob-title1'>
                <h2 className='what-info-title'>What is Coaching?</h2>
                <p className='what-info'>Coaching can be viewed as a resource to support the individual to take the space to “Press Pause” and consider what really matters to them both personally and professionally. The International Coaching Federation defines coaching as:</p>
            </div>
            <div className='what-quote-container mob-par1'>
                <p className='what-quote'>
                “Partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential”
                </p>
            </div>
            <div className='competency-container mob-pic1'>
                <p className='competency-title no-mob'>
                    Competencies of a Professional Coach
                </p>
                {/* Only for mobile */}
                <p className='competency-title mob-only'>
                    Coaching Competencies
                </p>
                {/*  */}
                <div className='what-info-container'>
                    <p className='what-info competency-info no-mob'>
                        Hover over the images below to explore in more detail
                    </p>
                </div>
                <div className='competency-tiles-container'>
                    <div className='competency-tile'>
                        <img src={what1} alt="Embodies a Coaching Mindest"
                        className="competency-img"/>
                        <p className="competency-reverse no-mob">
                            "A coach develops a mindset <br/>
                            that is open, curious, flexible <br/>
                            and client-centred."
                        </p>                      
                    </div>
                    <div className='competency-tile'>
                        <img src={what2} alt="Cultivates Trust and Safety"
                        className="competency-img"/>
                       <p className="competency-reverse no-mob reverse-unique">
                            "A coach partners with the client to <br/>
                            create a safe supportive environment<br/>
                            that allows the client to share freely.<br/>
                            They maintain a relationship<br/>
                            of mutual respect and trust."
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what3} alt="Maintinas Presence"
                        className="competency-img"/>
                       <p className="competency-reverse no-mob">
                           "A coach is fully present<br/>
                           with the client."
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what4} alt="Listens Actively"
                        className="competency-img"/>
                       <p className="competency-reverse no-mob">
                            "A coach focuses on what the<br/> client is and is not saying."
                        </p>                     
                    </div>
                    <div className='competency-tile'>
                        <img src={what5} alt="Evokes Awerness"
                        className="competency-img"/>
                       <p className="competency-reverse no-mob">
                            "A coach facilitates client<br/>
                            insight and learning by using<br/>
                            tools and techniques."
                        </p>                       
                    </div>
                    <div className='competency-tile'>
                        <img src={what6} alt="Facilitates Client Growth"
                        className="competency-img"/> 
                       <p className="competency-reverse no-mob">
                            "A coach partners with the client<br/>
                            to transform learning into action."
                        </p>                      
                    </div>
                </div>
            </div>
            <div className='faq mob-par2'>

                {/* Mobile only */}
                <div className='what-info-container faq-container mob-only'>
                    <h2 className='what-info-title'>
                        How long does the coaching process take?
                    </h2>
                    <p className='what-info'>Coaching helps the client to transform learning and insights into actions. This generally happens over a number of months. Five or six sessions are advisable and the frequency will be agreed between coach and client in the first session which sets the foundation and identifies the goals for the coaching.</p>
                </div>
                
                <div className='what-info-container faq-container mob-only'>
                    <h2 className='what-info-title'>
                        Are TSB sessions face-to-face or online?
                    </h2>
                    <p className='what-info'>
                        You, the client can decide if you would like to work in person with your coach, over the phone, or virtually by video call.
                        <br /><br />
                    </p>
                    <p className='what-info'>
                        You can <a href="https://calendly.com/tsbcoaching/zoom-30-min-consultation-the-sounding-board?month=2021-03" target="_blank" rel="noreferrer" className="link" style={{textDecoration:'underline'}}>book your introductory appointment time here</a> and an invitation will be sent to your email address, along with a Zoom video-call link for your booking.  Alternatively you can book your introductory call on 085 1602956.
                        <br /><br />
                    </p>
                </div>
                {/*  */}

                <div className='what-info-container faq-container no-mob'>
                    <h2 className='what-info-title'>FAQ: How long does the coaching process take?</h2>
                    <p className='what-info'>Coaching helps the client to transform learning and insights into actions. This generally happens over a number of months. Five or six sessions are advisable and the frequency will be agreed between coach and client in the first session which sets the foundation and identifies the goals for the coaching.</p>
                </div>
                <div className='what-info-container faq-container no-mob'>
                    <h2 className='what-info-title'>FAQ: How does coaching differ from counselling and mentoring?</h2>
                    <p className='what-info'> <b>Counselling</b> is the provision of professional assistance and guidance in resolving personal or psychological problems. <br/><br/> <b>Mentoring</b> is a system of semi-structured guidance whereby one person shares their knowledge, skills and experience to assist others to progress in their own lives and careers</p>
                </div>
                <div className='what-info-container faq-container no-mob'>
                    <h2 className='what-info-title'>FAQ: Are TSB sessions face-to-face or online?</h2>
                    <p className='what-info'>
                        You, the client can decide if you would like to work in person with your coach, over the phone, or virtually by video call.
                        <br /><br />
                    </p>
                    <p className='what-info'>
                        You can  <a href="https://calendly.com/tsbcoaching/zoom-30-min-consultation-the-sounding-board?month=2021-03" target="_blank" rel="noreferrer" className="link" style={{textDecoration:"underline"}}>book your introductory appointment time here </a> and an invitation will be sent to your email address, along with a Zoom video-call link for your booking.  Alternatively you can book your introductory call on 085 1602956.
                        <br /><br />
                    </p>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default WhatIsCoaching;