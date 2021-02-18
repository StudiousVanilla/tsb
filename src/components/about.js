import { useEffect } from 'react';
import placeholderImg from '../imgs/about-img.png';
import Bookingbtn from './Bookingbtn'

const About = () => {

    useEffect(()=>{
        let button = document.getElementById('Bookingbtn')
        button.style.transition = '0s'
        button.style.color = 'var(--bg-grey)'
        button.style.backgroundColor = 'var(--tsb-orange)'
        button.style.border = 'none'
    })

    return (
        
        <div className='about-container content-container'>
            <div className='about-images-container'>
                <div className='about-image-container'>
                    <img src={placeholderImg} alt='book' className='about-img'/>
                    <div className='credentials-container'>
                        <p className='credential'>Mona Eames MSc MBTI</p>
                        <p className='credential'>Certified Professional Coach</p>
                        <p className='credential'>ICF Member</p>
                    </div>
                </div>
            </div>
            <div className='about-info-container'>
                <div className='about-info'>
                    <h2 className='about-head'> About Me </h2>
                    <p className='about-content'>I have been coaching for 10 years as part of my Management Development role in the public service, moving into my own practice in 2016. I qualified with Coaching Development in 2011, and in 2019 I completed my MSc in Personal & Management Coaching which widened my focus out to Career and Lifestyle Coaching, enabling individuals to look at both their professional and personal dimensions. With over 30 years of experience in Human Resources, I provide advice and training to management teams, and foster a coaching culture in organisations. I provide 1:1 coaching virtually and face to face and offer training through Blended Learning and the Virtual Classroom. </p>
                </div>
                <div className='about-info'>
                    <h2 className='about-head'> About The Sounding Board </h2>
                    <p className='about-content'> My practice ‘The Sounding Board’ is designed to give you the space you need to help you to find your own ways of tackling the problems that help to invigorate your life, your work or your organization as a whole. I work with each individual client to identify the obstacles that can block progress by being those outside ears that help you initiate what can seem like unsurmountable change. I coach the WHO as I witness how self awareness brings true clarity to my clients and helps the move from “Stuck” to “Unstuck”. </p>
                </div>
                {/* Inline style of border is becuase this is the last paragrpah and so has no bottom border */}
                <div className='about-info'>
                    <h2 className='about-head'> My Coaching Style </h2>
                    <p className='about-content'>I help people to get clarity about their life direction, career or busines. The coaching process allows you to “sound out” your ideas in a confidential space. I help you to see new perspectives which enable you as you design positive actions to make changes, to keep moving forward to improve your life. </p>
                </div>
                <div className='about-info' style={{border: "none"}}>
                    <h2 className='about-head'> My Qualifications</h2>
                    <p className='about-content'>I achieved a Master of Science (MSc) in Personal & Management Coaching (2017 – 2019) from University College Cork. My dissertation was titled ‘How Values Exploration affects Goal Setting in general population Acceptance and Commitment Coaching practice’ and my modules included: </p>
                    <ul className='qual-list'>
                        <li className='qual-list-item'>Cognitive Behavioural Coaching</li>
                        <li className='qual-list-item'>Research Methodology and Reflective analysis</li>
                        <li className='qual-list-item'>Mindfulness Based Self-Management</li>
                        <li className='qual-list-item'>Personaility Analysis and Individual Difference</li>
                        <li className='qual-list-item'>Business and Management Coaching for Leadership, Change and Organisational Development</li>
                        <li className='qual-list-item'>Systemic Psychodynamic Coaching with Teams and Individuals</li>
                    </ul>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default About;
