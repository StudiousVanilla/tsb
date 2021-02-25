import placeHolder from '../imgs/landing.png'

const Contact = () => {
    return ( 
        <main className='contact-container content-container'>
            <div className='contact-title'>
                Contact
            </div>
            <div className='contact-intro-container'>
                <p className='contact-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore dolorum vel, minima consectetur at fugiat laudantium vero qui blanditiis eum possimus dicta tempora libero consequatur. Aspernatur iure sed itaque.</p>
            </div>
            <div className="map-container">
                <img className='map' src={placeHolder} alt=""/>
            </div>
            <div className="contact-info-container">
                <div className="contact-text-container">
                    <p>address</p>
                </div>
                <div className="contact links-container">
                    <p>links</p>
                </div>
            </div>
            <div className='contact-form-container'>
                <div className="contact-form-title">
                    Get in Touch
                </div>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email'/>
                    <label htmlFor="name">Message</label>
                    <input type="text" name='message'/>
                    <button>Send</button>
                </form>
                
            </div>
        </main>
     );
}
 
export default Contact;