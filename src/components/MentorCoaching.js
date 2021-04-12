import { useEffect } from 'react'
import menImg from '../imgs/menImg.png'
import Bookingbtn from './Bookingbtn'
import {buttonToNavy, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const MentorCoaching = () => {

    useEffect(()=>{
        greySide()
        buttonToNavy()
        sideBarGrey()
        logoSRC(logo)
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile mentor-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title mentor-title'>
                        Mentor Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“I have found Mona to be a very empathic and compassionate mentor who has provided a safe space for me to reflect on my coaching competencies. I have found each session to be an enriching experience which no doubt has helped me be a better coach.”
                        </p>
                        <div className='attestant-container'>
                            <p className='attestant'>
                            Testimony (2021) from Michelle, a Mentor Coaching Client
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <div className='coaching-img-conatiner'>
                <img src={menImg} alt="" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>What is Coaching Mentoring?</h2>
                    <p className='coaching-info-text'>Mentor Coaching involves a coach being coached on your coaching skills, to support your coaching practice, and to help you to prepare for certification as a coach, rather than being coached on work goals, personal elements, life balance or other topics unrelated to the development of your coaching skills</p>
                </div>
                <div className="statement-container">
                    <h2 className="text-statement">Considering how to move towards your next Coaching credential?</h2>
                    <br/><br/>
                    <h2 className="text-statement link">
                        <a href="https://calendly.com/tsbcoaching/zoom-30-min-consultation-the-sounding-board?month=2021-03" target="_blank" rel="noreferrer">
                            Book your complimentary coaching conversation now.
                        </a>
                    </h2>
                </div>
                <div className='coaching-info coaching-info-final'>
                    <h2 className='coaching-info-title'>Get your ICF Credential</h2>
                    <p className='coaching-info-text'>Coaching involves lifelong learning – keep at the cutting edge of your profession and explore your next credential with the support of your Mentor Coach. <br/><br/>Mona at The Sounding Board is a certiﬁed coach with the International Coaching Federation and a registered Mentor Coach on the <a href="https://coachingfederation.org/find-a-mentor-coach" className="link" style={{textDecoration: 'underline'}}>ICF database</a>. With over 700 hours of coaching practice, she is currently studying for her next credential (PCC - Professional Certiﬁed Coach). She is passionate about the power of Coaching and thus interested in helping other coaches to move along their credentialing journey by helping them to explore their coaching competencies as they progress in their profession.</p>
                </div>
            </section>
        </div>
     );
}
 
export default MentorCoaching;