import placeHolderImg from '../imgs/coaching.png'
import Bookingbtn from './Bookingbtn'

const Coaching = () => {
    return ( 
        <div className='content-container coaching-container'>
            <Bookingbtn/>
            <div className='color-tile'>
                <main className='coaching-main'>
                    <h1 className='coaching-category-title'>Executive Coaching</h1>
                     <p className='coaching-category-info'>Mollit sunt ipsum non officia exercitation minim nulla non sit nisi cillum incididunt minim. Exercitation labore nulla id exercitation aliqua ullamco Lorem nulla aliqua occaecat sit reprehenderit consequat. Minim sunt ipsum aliqua voluptate et sint do labore veniam ullamco laboris in culpa. Voluptate labore fugiat est voluptate sunt ex eiusmod aliqua eiusmod voluptate consequat officia velit aliquip. Velit duis non occaecat nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero eius asperiores.</p>
                </main>
            </div>
            <div className='coaching-img-conatiner'>
                <img src={placeHolderImg} alt="" className='coaching-img'/>
            </div>
            <section className='coaching-info-container'>
                <div className='coaching-info'>
                    <h2 className='coaching-info-title'>Heading</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illo eos fuga laborum dolor qui doloremque porro modi numquam explicabo atque alias, consequuntur ratione, deleniti nisi et autem dolores officiis.</p>
                </div>
                <div className='coaching-info' style={{border: 'none'}}>
                    <h2 className='coaching-info-title'>Heading</h2>
                    <p className='coaching-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus quaerat eos optio quam minima molestias delectus perferendis, corporis odio adipisci blanditiis debitis, soluta non quisquam, quibusdam accusantium minus quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque sequi odit quasi, vel architecto. Harum ullam porro nostrum ipsam necessitatibus doloribus iusto ducimus nesciunt aliquid enim rem, ea deserunt?</p>
                </div>
            </section>
        </div>
     );
}
 
export default Coaching;