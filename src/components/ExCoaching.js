import { useEffect } from 'react';
import placeHolderImg from '../imgs/coaching.png'
import Bookingbtn from './Bookingbtn'

const ExCoaching = () => {

    useEffect(()=>{
        let button = document.getElementById('Bookingbtn')
        button.style.transition = '0s'
        button.style.color = 'var(--bg-grey)'
        button.style.backgroundColor = 'var(--tsb-orange)'
        button.style.border = 'none'
    })

    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile ex-color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title  ex-title'>
                        Executive Coaching
                    </h1>
                    <div className='testimony-container'>
                        <p className='coaching-category-testimony'>“I decided to commit to a regular coaching programme with Mona when I took on a new and challenging senior management role at work. The coaching sessions were precious time to me when I could take a step back to reflect on my approaches and my effectiveness and to dial down the negative self-talk and back myself at bit more. Coaching with Mona was a great support to me in embracing work challenges as well as reminding me about the importance of work-life balance”.
                        </p>
                        <div className='attestant-container'>
                            <p className='attestant'>
                            Testimony (2021) from Anne who works in a management role.
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
                    <h2 className='coaching-info-title'>What is Executive Coaching?</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illo eos fuga laborum dolor qui doloremque porro modi numquam explicabo atque alias, consequuntur ratione, deleniti nisi et autem dolores officiis.</p>
                </div>
                <div className='coaching-info' style={{border: 'none'}}>
                    <h2 className='coaching-info-title'>Invest in yourself</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque sequi odit quasi, vel architecto. Harum ullam porro nostrum ipsam necessitatibus doloribus iusto ducimus nesciunt aliquid enim rem, ea deserunt?</p>
                </div>
            </section>
            
        </div>
     );
}
 
export default ExCoaching;