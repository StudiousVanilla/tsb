import { useEffect } from "react"
import {buttonToOrange, sideBarGrey, logoSRC, greySide} from '../functions/colorChanges'
import scrollToTop from '../functions/scrollToTop'
import Bookingbtn from './Bookingbtn'
import logo from '../icons/logo-navy.svg'


const Privacy = () =>{ 

    useEffect(()=>{
        greySide()
        sideBarGrey()
        logoSRC(logo)
        buttonToOrange()
        scrollToTop()
    })

    return ( 

        <div className='privacy-container content-container'>

            <div className='privacy-title-container'>
                <p className='privacy-title'>
                tsbcoaching.ie
                </p>
                <p className='privacy-title privacy-title-lg'>
                    Privacy Policy
                </p>
            </div>

            <div className="what-info-container">
                <p className='what-info'>
                    Updated 11/04/2021
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>What data do we collect?</h2>
                <p className='privacy-info'>
                    tsbcoaching.ie collects the following data:
                </p>
                <ul className="privacy-list privacy-info-text">
                        <li className="privacy-list-item">
                            - Personal identification information (name, email address, etc.)</li>
                        <li className="privacy-list-item">
                            - Data related to the reason you are on this site.
                        </li>
                    </ul>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How do we collect your data?</h2>
                <p className='privacy-info'>
                You directly provide tsbcoaching with most of the data we collect.
                </p>
                <p className='privacy-info'>
                We collect data and process data when you:  
                </p>
                <ul className="privacy-list privacy-info-text">
                        <li className="privacy-list-item">
                            - Contact us through our ‘Get in touch’ form.
                        </li>
                        <li className="privacy-list-item">
                        - Use or view our website via your browser’s cookies.
                        </li>
                    </ul>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How will we use your data?</h2>
                <p className='privacy-info'>
                    tsbcoaching.ie collects your data so that we can:
                </p>
                <ul className="privacy-list privacy-info-text">
                    <li className="privacy-list-item">
                        - Contact you with special offers on other products and services we think you might like.
                    </li>
                    <li className="privacy-list-item">
                        - Offer you the best quality service possible.
                    </li>
                </ul>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How will we store your data?</h2>
                <p className='privacy-info'>
                    tsbcoaching.ie securely stores your data at firebase.google.com and our gmail account. The information is secured with passwords and where possible double verification with limited access.
                    <br/><br/>
                </p>
                <p className='privacy-info'>
                    tsbcoaching.ie will keep your your data for up to 7 years . Once this time period has expired, we will delete your data.
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>Marketing</h2>
                <p className='privacy-info'>
                    tsbcoaching.ie would like to send you information about products and services of ours that we think you might like. <br/><br/> If you have agreed to receive marketing, you may always opt out at a later date. <br/><br/> You have the right at any time to stop tsbcoaching.com from contacting you for marketing purposes. <br/><br/> If you no longer wish to be contacted for marketing purposes, please unsubscribe from emails.
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>Your Data Protection Rights</h2>
                <p className='privacy-info'>
                    Every user is entitled to the following:
                </p>
                <ul className="privacy-list privacy-info-text">
                    <li className="privacy-list-item">
                        - The right to access
                    </li>
                    <li className="privacy-list-item">
                        You have the right to request tsbcoaching.ie for copies of your personal data. We may charge you a small fee for this service.
                    </li>
                    <li className="privacy-list-item">
                        - The right to rectification
                    </li>
                    <li className="privacy-list-item">
                        You have the right to request that tsbcoaching.ie correct any information you believe is inaccurate. You also have the right to request silewalsh.com to complete the information you believe is incomplete.e.
                    </li>
                    <li className="privacy-list-item">
                        - The right to erasure
                    </li>
                    <li className="privacy-list-item">
                        You have the right to request that tsbcoaching.ie erase your personal data, under certain conditions.
                    </li>
                    <li className="privacy-list-item">
                        - The right to restrict processing
                    </li>
                    <li className="privacy-list-item">
                        You have the right to request that tsbcoaching.ie restrict the processing of your personal data, under certain conditions.e.
                    </li>
                    <li className="privacy-list-item">
                        - The right to object to processing
                    </li>
                    <li className="privacy-list-item">
                        You have the right to object to tsbcoaching.ie processing of your personal data, under certain conditions.
                    </li>
                    <li className="privacy-list-item">
                        - The right to data portability
                    </li>
                    <li className="privacy-list-item">
                        You have the right to request that tsbcoaching.ie transfer the data that we have collected to another organisation, or directly to you, under certain conditions.
                    </li>
                </ul>
                <p className='privacy-info'>
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: tsbcoaching@gmail.com
                </p>
            </div>


            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>Cookies</h2>
                <p className='privacy-info'>
                    Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology
                    <br/><br/>
                    For further information, visit allaboutcookies.org.
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How do we use cookies?</h2>
                <p className='privacy-info'>
                    tsbcoaching.ie uses cookies in a range of ways to improve your experience on our website, including:
                </p>
                <ul className="privacy-list privacy-info-text">
                    <li className="privacy-list-item">
                        - Understanding how you use our website
                    </li>
                    <li className="privacy-list-item">
                        - Target you with specific notifications.
                    </li>
                </ul>
            </div>


            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>What types of cookies do we use?</h2>
                <p className='privacy-info'>
                    There are a number of different types of cookies, however, our website uses:
                </p>
                <ul className="privacy-list privacy-info-text">
                    <li className="privacy-list-item">
                        - Functionality
                    </li>
                    <li className="privacy-list-item">
                        Our Company uses these cookies so that we recognise you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.
                    </li>
                    <li className="privacy-list-item">
                        - Advertising
                    </li>
                    <li className="privacy-list-item">
                        Our Company uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. Our Company sometimes shares some limited aspects of this data with third parties for advertising purposes. We may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may be shown advertising based on your browsing patterns on our website.
                    </li>
                </ul>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How to manage cookies.</h2>
                <p className='privacy-info'>
                    You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.
                </p>
            </div>  


            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>Privacy Policies of other sites</h2>
                <p className='privacy-info'>
                    The tsbcoaching.ie website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>Changes to our Privacy Policy.</h2>
                <p className='privacy-info'>
                    Our Company keeps its privacy policy under regular review and places any updates on this web page. The date of the most recent privacy policy update is posted at the top of this web page..
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How to contact us</h2>
                <p className='privacy-info'>
                If you have any questions about the tsbcoaching.ie privacy policy, the data we hold on you, or if you would like to exercise one of your data protection rights, please do not hesitate to contact us.
                <br/><br/>
                Email us at: tsbcoaching@gmail.com
                </p>
            </div>

            <div className='privacy-info-container'>
                <h2 className='privacy-info-title'>How to contact the appropriate authority</h2>
                <p className='privacy-info'>
                    Should you wish to report a complaint or if you feel that tsbcoaching.ie has not addressed your concern in a satisfactory manner, you may contact the Office of the Data Protection Commission.
                </p>
            </div>      

            <div className="no-mob">
                <Bookingbtn/>
            </div>
        </div>

     );
}
 
export default Privacy;

