import { useEffect } from 'react';
import Bookingbtn from './Bookingbtn'
import Card from './Card'
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'
import Carousel from 'react-elastic-carousel'
import landing from '../imgs/landing.png'


const Consultancy = () => {

    useEffect(()=>{
        greySide()
        buttonToOrange()
        sideBarGrey()
        logoSRC(logo)
    })
    return ( 
        <main className="consultancy-container">
            <div className="color-tile ex-color-tile consultancy-color-tile">
                <div className="consultancy-title-container">
                    <h1 className="consultancy-title">HR Consultancy</h1>
                </div>
                <div className="consultancy-Carousel-container">
                    <div className="card-container">
                        <Carousel>
                            <Card number="1" text="You are an SME focusing on the product but needing advice on managing people; keeping staff happy and well at work."/>
                            <Card number="2" text="You are not sure what training & development you and your staff need, or the options available to you."/>
                            <Card number="3" text="Your management team needs structure to be able to keep up with change and innovation, while keeping staff wellbeing and motivation at the centre."/>
                            <Card number="4" text="You want to encourage staff to create solutions to problems through 1:1 performance review and a professional development process."/>
                            <Card number="5" text="You have heard of the ‘Coaching skills for managers’ programme and you want to know more."/>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="consultancy-info-container">
                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">HR Consultancy</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board can help you by providing:
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">An Inital consultation to sound out where you are now in your individual or team senario</li>
                        <li className="consultancy-list-item">Attendance at Management Team meeting(s) (with confidentiality contracted) to Listen and Explore and asses needs.</li>
                        <li className="consultancy-list-item">Exploration of Training and Development Needs to devise action plan for virtual / face to face delivery</li>
                        <li className="consultancy-list-item">Provision of Executive Coaching to Management Team / Staff as a supportive resource</li>
                        <li className="consultancy-list-item">Provision of ongoing accountability support as identified</li>
                    </ul>
                </div>
                
                <div className="consultancy-info consultancy-img-container">
                    <div className="consultancy-img">
                        <img src={landing} alt="Virtual Graduation from UCC in 2020" className="HR & Consultancy"/>
                    </div>
                    <p className="consultancy-img-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>

                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">Women in Leadership —Mentoring</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board can help you by providing you with:
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">A confindetianl space to talk about where you are in your leadership journey</li>
                        <li className="consultancy-list-item">A source of advice</li>
                        <li className="consultancy-list-item">A place to explore your self awareness and self-confindence in your leadership</li>
                    </ul>
                </div>
                <div className="consultancy-info" style={{border: 'none'}}>
                    <h2 className="consultancy-info-title">Traning & Facilitation</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board offers a Suite of Training / Facilitation Offereings which are made up of Classroom (Face to Face) or blended learning programmes through virtual classroom programmes such as:
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">Coaching Skills for Managers</li>
                        <li className="consultancy-list-item">Building Resilience / Stress Management</li>
                        <li className="consultancy-list-item">Management Competencies</li>
                        <li className="consultancy-list-item">Effective Meetings</li>
                        <li className="consultancy-list-item">Customer Service Excellence in Covid-19 context</li>
                    </ul>
                </div>
            </div>
            <Bookingbtn/>
        </main>
     );
}
 
export default Consultancy;