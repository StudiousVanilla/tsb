import { useEffect } from 'react'
import placeHolderImg from '../imgs/coaching.png'
import Bookingbtn from './Bookingbtn'
import {buttonToNavy, sideBarGrey, logoSRC} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'

const LifeCoaching = () => {

    useEffect(()=>{
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
                        Lifetsyle Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“By raising my awareness of the issues and all the angles and the options, I was able to see more opportunities and different perspectives. Mona’s questions were thought proving and really made me explore my own thinking and approaches and I definitely got clarity. I found her approach very helpful and it challenged me to look at issues from my own perspective which I found has really been positive. Coaching is a wonderful way to assist people to find a way forward.”
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
                <img src={placeHolderImg} alt="" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>What is Lifestyle Coaching?</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illo eos fuga laborum dolor qui doloremque porro modi numquam explicabo atque alias, consequuntur ratione, deleniti nisi et autem dolores officiis.</p>
                </div>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>Call to Action</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque sequi odit quasi, vel architecto. Harum ullam porro nostrum ipsam necessitatibus doloribus iusto ducimus nesciunt aliquid enim rem, ea deserunt?</p>
                </div>
                <div className='coaching-info' style={{border: 'none'}}>
                    <h2 className='coaching-info-title'>Coaching Workshops</h2>
                    <p className='coaching-info-text'>TSB Coaching workshops are virtual classroom based currently , are interactive with a blended learning approach and are relevant to... Workshops can be created to suit the needs of your particular group to get maximum benefit. Replacing therapy with coaching / consultancy / training. Previous workshops include:</p>
                    <ul className='workshop-list'>
                        <li className='workshop-list-item'>Press Pause (Lifestyle)</li>
                        <li className='workshop-list-item'>OT / Coaching (Lifestyle</li>
                        <li className='workshop-list-item'>MBTI practitioner - teams Exec</li>
                        <li className='workshop-list-item'>Coaching Skills for Managers Exec</li>
                        <li className='workshop-list-item'>Designing your CV-....Career</li>
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default LifeCoaching;