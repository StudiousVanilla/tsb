import { useEffect } from 'react';
import Bookingbtn from './Bookingbtn'
import Card from './Card'
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import logo from '../icons/logo-navy.svg'
import Carousel from 'react-elastic-carousel'


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
                        <Card number="1" text="You are an SME focusing on the product but needing advice re managing the “People” aspect of the business and keeping staff happy and well at work…"/>
                        <Card number="2" text="You are not quite sure what training and development you and your staff need and what might be available virtually…"/>
                        <Card number="3" text="Your Management Team needs more structure to keep up with innovative plans and Change projects, while keeping staff wellbeing and motivation at the centre…"/>
                        <Card number="4" text="You want to encourage staff to bring solutions to problems, through your planned 1:1 Performance Review / Professional Development Process…"/>
                    </Carousel>
                    </div>
                </div>
            </div>
            <div className="consultancy-info-container">
                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">HR Consultancy</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board can help you by providing you with:
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">Attendance at Management Team meeting(s) (with confidentiality contracted) to Listen and Explore and asses needs.</li>
                        <li className="consultancy-list-item">Exploration of Training and Developemtn Needs to devise action plan for virtual / face to face delivery</li>
                        <li className="consultancy-list-item">Provision of Executive Coaching to Management Team / Staff as a supportive resource</li>
                        <li className="consultancy-list-item">Provision of ongoing accountability support as identified</li>
                    </ul>
                </div>
                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">Mentoring</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board can help you by providing you with:
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">An initial consultation to sound out where you are now in your individual or team senario</li>
                        <li className="consultancy-list-item">Attendance at Management Team meeting(s) (with confidentiality contracted) to Listen and Explore and asses needs.</li>
                        <li className="consultancy-list-item">Provision of Executive Coaching to Management Team / Staff as a supportive resource</li>
                        <li className="consultancy-list-item">Provision of ongoing accountability support as identified</li>
                    </ul>
                </div>
                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">Traning & Facilitation</h2>
                    <p className="consultancy-info-text">
                        The Sounding Board offers a Suite of Training / Facilitation Offereings which are made up of Classroom (Face to Face) or Blended learning through Virtual Classroom programmes
                    </p>
                    <ul className="consultancy-list consultancy-info-text">
                        <li className="consultancy-list-item">Customer Service Excellence in Covid-19 context</li>
                        <li className="consultancy-list-item">Effective Meetings</li>
                        <li className="consultancy-list-item">Coaching Skills for Managers</li>
                        <li className="consultancy-list-item">Building Resilience / Stress Management</li>
                        <li className="consultancy-list-item">Management Competencies</li>
                    </ul>
                </div>
                <div className="consultancy-info">
                    <h2 className="consultancy-info-title">One-to-One Coaching</h2>
                    <p className="consultancy-info-text">
                    Coaching is a client-driven process that’s distinct from other service professions, such as counselling, mentoring, consulting and training. A number of sessions can be offered to staff who have attended management programmes as a resource to support new skillsets. One-to one coaching is a resource that may be offered as a support to Management TeamMembers. It is important that staff members can chose to use the coaching resource – not obligatory.
                    </p>
                </div>
                <div className="consultancy-quote-container">
                    <p className="consultancy-quote">
                    “It used to be called ‘bringing people along’. These days it’s known as a ‘coaching culture’, but the aim is exactly the same – supporting employees to build skills, knowledge and leadership strengths. Encouraging people to improve contributes positively to the working atmosphere and it shows that their contribution is valued.”
                    </p>
                    <p className="consultancy-quote-ref">The Irish Times</p>
                </div>
            </div>
            <Bookingbtn/>
        </main>
     );
}
 
export default Consultancy;