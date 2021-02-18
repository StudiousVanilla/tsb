import { useEffect } from "react"
import Bookingbtn from './Bookingbtn'


const WhatIsCoaching = () => {

    
    useEffect(()=>{
        let button = document.getElementById('Bookingbtn')
        button.style.transition = '0s'
        button.style.color = 'var(--bg-grey)'
        button.style.backgroundColor = 'var(--tsb-orange)'
        button.style.border = 'none'
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
                    <p className='tile-text'>Confidentiality & Trust</p>                       
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Coaching Presence</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Building Rapport</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Direct Communication</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Active Listening</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Creating Awareness</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Asking Good Questions</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Desiging Actions</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Planning & Goal Setting</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Managing Progress</p>
                    </div>
                    <div className='competency-tile'>
                        <p className='tile-text'>Accountability</p>
                    </div>
                </div>
            </div>
            <div className='faq'>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ 1</h2>
                    <p className='what-info'>I help people to get clarity about their life direction, career or busines. The coaching process allows you to “sound out” your ideas in a confidential space. I help you to see new perspectives which enable you as you design positive actions to make changes, to keep moving forward to improve your life.</p>
                </div>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ 2</h2>
                    <p className='what-info'>I help people to get clarity about their life direction, career or busines. The coaching process allows you to “sound out” your ideas in a confidential space. I help you to see new perspectives which enable you as you design positive actions to make changes, to keep moving forward to improve your life.</p>
                </div>
                <div className='what-info-container faq-container'>
                    <h2 className='what-info-title'>FAQ 3</h2>
                    <p className='what-info'>I help people to get clarity about their life direction, career or busines. The coaching process allows you to “sound out” your ideas in a confidential space. I help you to see new perspectives which enable you as you design positive actions to make changes, to keep moving forward to improve your life.</p>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default WhatIsCoaching;