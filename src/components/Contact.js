import { useEffect, useState } from "react"
import Bookingbtn from './Bookingbtn'
import logo from '../icons/logo-navy.svg'
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import TSBmap from './Map'
import fbIcon from '../icons/fb-navy.svg'
import inIcon from '../icons/in-navy.svg'
import mailIcon from '../icons/mail.svg'

const Contact = () => {

    const [formMessage, setFormMessage] = useState({messasge: ''});

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
    const postMessage = async (formData) =>{

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // parse formData into a JSON object
            body: JSON.stringify(formData)
        };
        try {
            const response = await fetch('https://tsb-mailer.herokuapp.com/', requestOptions)
            // response will be a success or error message
            const data = await response.json()
            // sets formMessage state to response (positive or negative)
            setFormMessage(data)
            
        } catch (error) {
            console.log(error);
            // sets formMessage state due to error
            setFormMessage({message: "There was a probelm sending your message. Please Refresh the page and try again"})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // grabs data from form and puts into formData object
        const form = document.getElementById('contactForm')
        let formData = {
            name: form.name.value, 
            email: form.email.value, 
            message: form.message.value
        }

        // sends a POST request to mail server using form data
        postMessage(formData)    
    }


    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
    })



    return ( 
        <main className='contact-container content-container'>
            <div className='contact-title'>
                <p>Contact</p>
            </div>
            <div className='contact-intro-container'>
                <p className='contact-intro'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            </div>
            <div className="map-container">
                <TSBmap/>                
            </div>
            <div className="contact-info-container">
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
            <div className='contact-form-container'>
                <div className="contact-form-title">
                    <p>Get in Touch</p>
                </div>
                <form className="contact-form" id="contactForm" 
                onSubmit={handleSubmit}>
                    <label htmlFor="name" className="contact-form-labels">
                        Name</label>
                    <input type="text" name='name' className="contact-form-input" required/>
                    <label htmlFor="email" className="contact-form-labels">
                        Email</label>
                    <input type="email" name='email' className="contact-form-input" required/>
                    <label htmlFor="name" className="contact-form-labels">
                        Message</label>
                    <textarea type="text" name='message' className="contact-form-textarea"
                    rows="10" cols="50" required/>
                    <button className="contact-form-btn">Send</button>
                </form>
                <p>{formMessage.message}</p>
            </div>
            <Bookingbtn/>
        </main>
     );
}

 
export default Contact;