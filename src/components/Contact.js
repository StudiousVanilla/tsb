import { useEffect } from "react"
// import {useState}  from "react"
import {buttonToOrange, sideBarGrey, logoSRC, greySide, menuSRC} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import Bookingbtn from './Bookingbtn'
import logo from '../icons/logo-navy.svg'
import menu from '../icons/menu.svg'
import fbIcon from '../icons/fb-navy.svg'
import inIcon from '../icons/in-navy.svg'
import mailIcon from '../icons/mail.svg'

const Contact = () => {

    // const [formMessage, setFormMessage] = useState({message: ''});

    // fires to copy email address to clipboard
    const copyEmail = () =>{

        if (document.selection) {
            let range = document.body.createTextRange();
            range.moveToElementText(document.getElementById('emailAdress'));
            range.select().createTextRange();
            document.execCommand("copy");
        } 
        else if (window.getSelection) {
            let range = document.createRange();
            range.selectNode(document.getElementById('emailAdress'));
            // removes all ranges so that clipboard is reset
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(range);
            document.execCommand("copy");
        }

        let copyConfirm = document.getElementById('copyConfirm')
        copyConfirm.style.visibility = 'visible'
        copyConfirm.style.color = 'var(--tsb-orange)'

    }

    // sends a POST request to mail server using form data
    // const postMessage = async (formData) =>{

    //     // To change message color to red on fail (See catch block of this function)
    //     const formMessageFail = document.getElementById('contactMessage')
    //     formMessageFail.style.color = null
    //     setFormMessage({message: 'Sending...'})

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         // parse formData into a JSON object
    //         body: JSON.stringify(formData)
    //     };
    //     try {
    //         const response = await fetch('https://tsb-mailer.herokuapp.com', requestOptions)

    //         // response will be a success or error message
    //         const data = await response.json()

    //         // sets formMessage state to response (positive or negative)
    //         setFormMessage(data)
            
    //     } catch (error) {
    //         console.log(error);
    //         // sets formMessage state due to error

    //         setTimeout(()=>{
    //             formMessageFail.style.color = 'red'
    //             setFormMessage({message: "There was a probelm sending your message. Please refresh the page and try again"})}, 5000 )
    //     }
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()

    //     // grabs data from form and puts into formData object
    //     const form = document.getElementById('contactForm')
    //     let formData = {
    //         name: form.name.value, 
    //         email: form.email.value, 
    //         message: form.message.value
    //     }

    //     console.log(formData)

    //     // sends a POST request to mail server using form data
    //     postMessage(formData)    
    // }


    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
        menuSRC(menu)
        scrollToTop()
    })



    return ( 
        <main className='contact-container content-container'>
            <div className='contact-title no-mob'>
                <p>Contact</p>
            </div>
            <div className='contact-intro-container no-mob'>
                <p className='contact-intro'>Wherever you are in your life, career, or the world, I’d love to hear from you.</p>
                <br/>
                <p className='quote-name no-mob'>- Mona</p>
            </div>
            

            <div className='contact-form-container mob-form' style={{display:'block'}}>


                <div className="elfsight-app-4b787122-799f-4270-8f62-ec9a7809d859"/>
                
            </div>


            







            
            
            <div className="map-container mob-map">
                <iframe title="tsb-map" width="500" height="250" style={{border: "0"}} loading="lazy" allowFullScreen 
                src={"https://www.google.com/maps/embed/v1/view?zoom=16&center=53.10275,-8.31475&key=AIzaSyCRA1D6IKIuYtKF016SYEiTThh6nljicWo"}/>            
            </div>


            <div className="contact-info-container mob-contact-info">
                <div className="contact-text-container">
                    <p className='contact-text'>The Sounding Board <br/> Ballyshrule<br/> Portumna<br/> Co. Galway <br/> <br/> +353 85 160 2956 </p>
                </div>
                <div className="contact-links-container">
                    <div className='contact-link'>
                        <span>
                            <img src={mailIcon} alt="email" className="contact-icon" onClick={copyEmail}/>
                        </span>
                        <span className="contact-link-text" id="emailAdress" onClick={copyEmail}>
                            tsbcoaching@gmail.com
                        </span>
                        <span className="copy-confirm" id="copyConfirm">
                            copied &#10003;
                        </span>
                    </div>
                    <div className='contact-link'>
                        <span>
                            <a href="https://www.linkedin.com/in/monaeamestsb/" target="_blank" rel="noreferrer">
                                <img src={inIcon} alt="LinkedIn" className="contact-icon"/>
                            </a>
                        </span>
                        <span className="contact-link-text">
                            The Sounding Board
                        </span>
                    </div>
                    <div className='contact-link'>
                        <span>
                            <a href="https://www.facebook.com/thesoundingboardtsb/" target="_blank" rel="noreferrer">
                                <img src={fbIcon} alt="facebook" className="contact-icon"/>
                            </a>
                        </span>
                        <span className="contact-link-text">
                            The Sounding Board
                        </span>
                    </div>
                </div>
            </div>
            <div className="no-mob">
                <Bookingbtn/>
            </div>
        </main>
     );
}

 
export default Contact;