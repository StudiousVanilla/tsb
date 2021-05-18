import { useEffect } from 'react'
import {menuSRC} from '../functions/colorChanges'
import Home from './Home'
import menu from '../icons/menu.svg'
import exImg from '../imgs/exImg.jpg'
import lifeImg from '../imgs/lifeImg.jpg'
import carImg from '../imgs/carImg.jpg'
import menImg from '../imgs/menImg.jpg'
import Bookingbtn from './Bookingbtn'

const MobIndCoaching = () => {

    useEffect(()=>{
        menuSRC(menu)
    })

    return ( 
        <div>
            
            {/* In case page is resized, Executive coaching is used as default for url
            coaching/indiviual - which isn't used on desktop */}
            <div className="no-mob">
                <Home/>
            </div>
            {/*  */}

            <div className=" mob-coaching-container mob-only">
                <div className="mobile-coaching-title mob-title1">
                    <h1>Individual Coaching</h1>
                </div>






                <div className='content-container coaching-container'>
                    <main className='coaching-main'>
                        <h2 className='coaching-category-title  ex-title mob-title1'>
                            Executive Coaching
                        </h2>
                        <div className='coaching-info mob-par1'>
                            <p className='coaching-info-text'>An executive coach is a qualified professional who works with individuals or teams to help them increase self-awareness, clarify goals, achieve their development objectives, and identify actions in order to reach their potential.</p>
                        </div>
                        <div className='coaching-img-container mob-pic1'>
                            <img src={exImg} alt="boardroom" className='coaching-img'/>
                        </div>
                        <div className='testimony-container mob-par3'>
                            <p className='coaching-category-testimony'>“The coaching sessions were precious time to me when I could take a step back to reflect on my approaches and my effectiveness and to dial down the negative self-talk and back myself at bit more. Coaching with Mona was a great support to me in embracing work challenges as well as reminding me about the importance of work-life balance”.
                            </p>
                            <div className='attestant-container'>
                                <p className='attestant'>
                                    Testimony (2021) from Anne who works in a management role.
                                </p>
                            </div>
                        </div>
                        <Bookingbtn/>
                    </main> 
                </div>
                <div className='content-container coaching-container'>
                    <main className='coaching-main'>
                        <h2 className='coaching-category-title  ex-title mob-title1'>
                            Lifestyle Coaching
                        </h2>
                        <div className='coaching-info mob-par1'>
                            <p className='coaching-info-text'>A lifestyle coach is a type of wellness professional who helps people make progress in their lives in order to attain greater fulfillment. Lifestyle coaches help their clients to press pause and consider what really matters to them in their relationships, careers, and day-to-day lives.</p>
                        </div>
                        <div className='coaching-img-container mob-pic1'>
                            <img src={lifeImg} alt="boardroom" className='coaching-img'/>
                        </div>
                        <div className='testimony-container mob-par3'>
                            <p className='coaching-category-testimony'>“By raising my awareness of the issues and all the angles and the options, I was able to see more opportunities and different perspectives. Mona’s questions were thought proving and really made me explore my own thinking and approaches”
                            </p>
                            <div className='attestant-container'>
                                <p className='attestant'>
                                    Testimony (2020) from Mella, a farmer and coaching client.
                                </p>
                            </div>
                        </div>
                        <Bookingbtn/>
                    </main> 
                </div>
                <div className='content-container coaching-container'>
                    <main className='coaching-main'>
                        <h2 className='coaching-category-title  ex-title mob-title1'>
                            Career Coaching
                        </h2>
                        <div className='coaching-info mob-par1'>
                            <p className='coaching-info-text'>Career coaching helps you focus on your current situation, think about what you want from your future and then make a plan to get there. Career coaching can help the client to explore what’s not working in order to move forward and get unstuck. <br/> <br/> Career coaching can help if you are feeling stuck in your career, unsure of the professional route you have chosen or if you need support to prepare for competency-based interview or to start your own business.</p>
                        </div>
                        <div className='coaching-img-container mob-pic1'>
                            <img src={carImg} alt="boardroom" className='coaching-img'/>
                        </div>
                        <div className='testimony-container mob-par3'>
                            <p className='coaching-category-testimony'>“Mona Eames is a fantastic life coach, she made me feel so at ease and went above and beyond to help me and guide me through the coaching process. She gave me guidance for the future. Opening my eyes to new possibilities and helping me achieve a new job. I now feel motivated and confident in many aspects of my life.”
                            </p>
                            <div className='attestant-container'>
                                <p className='attestant'>
                                    Testimony (2020) from Loraine, a career coaching client.
                                </p>
                            </div>
                        </div>
                        <Bookingbtn/>
                    </main> 
                </div>
                <div className='content-container coaching-container'>
                    <main className='coaching-main'>
                        <h2 className='coaching-category-title  ex-title mob-title1'>
                            Mentor Coaching
                        </h2>
                        <div className='coaching-info mob-par1'>
                            <p className='coaching-info-text'>Mentor Coaching involves being coached on your coaching skills in preparation for certification as a coach, rather than coaching on work goals, personal elements, life balance or other topics unrelated to the development of your coaching skills.</p>
                        </div>
                        <div className='coaching-img-container mob-pic1'>
                            <img src={menImg} alt="boardroom" className='coaching-img'/>
                        </div>
                        <div className='testimony-container mob-par3'>
                            <p className='coaching-category-testimony'>“I have found Mona to be a very empathic and compassionate mentor who has provided a safe space for me to reflect on my coaching competencies. I have found each session to be an enriching experience which no doubt has helped me be a better coach.”
                            </p>
                            <div className='attestant-container'>
                                <p className='attestant'>
                                    Testimony (2021) from Michelle, a Mentee Coach.
                                </p>
                            </div>
                        </div>
                        <Bookingbtn/>
                    </main> 
                </div>
            </div>
        </div>
     );
}
 
export default MobIndCoaching;