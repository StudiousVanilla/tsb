import { useEffect } from 'react';
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import Bookingbtn from './Bookingbtn'
import logo from '../icons/logo-navy.svg'
import aboutImg from '../imgs/about-img.png';
import grad from '../imgs/remote-grad.png'

const About = () => {

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
        scrollToTop()
    }, [])

    return (
        
        <div className='about-container content-container'>
            <div className='about-top'>
                <div className="top-img-title-credentials">
                    <div className='about-images-container no-mob'>
                        <div className='about-image'>
                            <img src={aboutImg} alt='book' className='about-img'/>
                        </div>
                    </div>
                    <div className='credentials-container'>
                        <h2 className='about-head mob-title1'> About Me </h2>
                        <div className="no-mob">
                            <p className='credential credential-title'>
                                Mona Eames MSc
                            </p>
                            <p className='credential'>
                                Certified ICF Coach and Mentor Coach
                            </p>
                            <p className='credential'>
                                Myers Briggs (MBTI) Practitioner
                            </p>
                            <p className='credential'>
                                International Coaching Federation Member
                            </p>
                        </div>
                    </div>
                </div> 
                <div className="about-info mob-par1">
                    <p className='about-content'>
                        I have over 30 years of experience working in Human Resources, and since 2010 I have put particular focus on developing myself as an Executive, Career and Lifestyle Coach. My personal journey with coaching empowered me to set up my own Coaching practice in 2016 called <b>The Sounding Board.</b>
                        <br/><br/>
                        In 2011, I qualified with Coaching Development and in 2019, I completed my MSc in Personal & Management Coaching which widened my focus from Executive Coaching to Career and Lifestyle Coaching thus empowering individuals to look at both their professional and personal dimensions. <br/><br/> I provide 1-to-1 coaching—virtually and face to face—and I also offer training through blended learning and the virtual classroom. I also provide advice and training to management teams, and I work to foster a coaching culture in organisations. 
                    </p> 
                </div>
            </div>
            <div className='about-bottom no-mob'>
                <div className="about-info">
                    <h2 className='about-head'> About The Sounding Board </h2>
                    <p className='about-content'> My coaching practice <b>The Sounding Board</b> is designed to give my clients a confidential safe space to sound out their direction in business, career or life in general. <br/><br/> My practice is based on the belief that my clients are autonomous and have their own solutions. I accompany them to initiate what can seem like unsurmountable change and I help them to design goals and actions to which they can be accountable.</p>
                </div>
                {/* Inline style of border is becuase this is the last paragrpah and so has no bottom border */}
                <div className='about-info no-mob'>
                    <h2 className='about-head'> My Coaching Style </h2>
                    <p className='about-content'>While the ‘what’ is important, I coach with the ‘who’ in mind. This means I believe that self-awareness brings true clarity to my clients and helps them move from stuck to unstuck. <br/><br/> I have studied and have a particular interest in Acceptance and Commitment Coaching, an approach that incorporates “in the moment” presence and acceptance. It focuses on committed, values-based actions to help clients make meaningful changes to their lives. <br/><br/> I work in a positive non-judgemental way with my clients. The coaching journey continues to enrich my life daily and I wish this for each and every one of my clients. </p>
                </div>
                <div className="grad-info no-mob">
                    <div className="grad-img-container">
                        <img src={grad} alt="Virtual Graduation from UCC in 2020" className="grad-img"/>
                    </div>
                    <p className="grad-info-text">My virtual Graduation from UCC in October 2020</p>
                </div>
                <div className='about-info qual no-mob' style={{border: "none"}}>
                    <h2 className='about-head'> My Qualifications</h2>
                    <p className='about-content'>I achieved a Master of Science (MSc) in <b>Personal & Management Coaching </b> (2017-2019) from University College Cork. <br/><br/> My dissertation was titled ‘How Values Exploration affects Goal Setting in general population Acceptance and Commitment Coaching practice’ <br/><br/> The modules I studied included: </p>
                    <ul className='qual-list'>
                        <li className='qual-list-item'>Cognitive Behavioural Coaching</li>
                        <li className='qual-list-item'>Research Methodology and Reflective analysis</li>
                        <li className='qual-list-item'>Mindfulness Based Self-Management</li>
                        <li className='qual-list-item'>Business and Management Coaching for Leadership</li>
                        <li className='qual-list-item'>Change and Organisational Development</li>
                        <li className='qual-list-item'>Personality Analysis and Individual Difference</li>
                        <li className='qual-list-item'>Systemic Psychodynamic Coaching with Teams and Individuals</li>
                    </ul>
                    <p className='about-content'>I have also achieved a <b> Certificate in Remote Working</b> (TUD, 2020), <br/> a <b> Certificate in Excellence in Career Coaching Service and Delivery</b> (Dr Terry Connors – Psychometric, 2018) and a <b> Certificate of Achievement – Business Start Up </b> (Galway Enterprise Office, 2018).</p>
                </div>
            </div>
            <Bookingbtn className="no-mob"/>
            {/* Mobile only */}
            <div className='about-image-mob-container mob-only mob-pic1'>
                <img src={aboutImg} alt='book' className='about-img'/>
                <div className="credential-container">
                    <p className='credential credential-title'>
                        Mona Eames MSc
                    </p>
                    <p className='credential'>
                        Myers Briggs (MBTI) Practitioner Certified
                    </p>
                    <p className='credential'>
                        Professional ICF Coach and Mentor Coach
                    </p>
                    <p className='credential'>
                        International Coaching Federation Member
                    </p>
                </div>
            </div>
            <div className="about-info mob-par2">
                <h2 className='about-head mob-about-head'> About TSB </h2>
                <p className='about-content'>
                    My coaching practice <b>The Sounding Board</b> is designed to give my clients a confidential safe space to sound out their direction in business, career or life in general.
                    <br/><br/> 
                    My practice is based on the belief that my clients are autonomous and have their own solutions. I accompany them to initiate what can seem like unsurmountable change and I help them to design goals and actions to which they can be accountable.
                </p>
            </div>
            {/* */}
        </div>

     );
}
 
export default About;
