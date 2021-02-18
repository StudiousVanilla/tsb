import { useEffect } from 'react'
import placeHolderImg from '../imgs/coaching.png'
import Bookingbtn from './Bookingbtn'

const MentorCoaching = () => {

    useEffect(()=>{
        let button = document.getElementById('Bookingbtn')
        button.style.transition = '0s'
        button.style.color = 'var(--bg-grey)'
        button.style.backgroundColor = 'var(--tsb-navy)'
        button.style.border = 'none'
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile mentor-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title mentor-title'>
                        Coach Mentoring
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“Mona Eames is a fantastic life coach, she made me feel so at ease and went above and beyond to help me and guide me through the coaching process. She gave me guidance for the future. Opening my eyes to new possibilities and helping me achieve a new job. I now feel motivated and confident in many aspects of my life.”
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
                    <h2 className='coaching-info-title'>What is Coaching Mentoring?</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illo eos fuga laborum dolor qui doloremque porro modi numquam explicabo atque alias, consequuntur ratione, deleniti nisi et autem dolores officiis.</p>
                </div>
                <div className='coaching-info' style={{border: 'none'}}>
                    <h2 className='coaching-info-title'>Get your ICF Credential</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque sequi odit quasi, vel architecto. Harum ullam porro nostrum ipsam necessitatibus doloribus iusto ducimus nesciunt aliquid enim rem, ea deserunt?</p>
                </div>
            </section>
        </div>
     );
}
 
export default MentorCoaching;