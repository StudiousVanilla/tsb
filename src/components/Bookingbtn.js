import { Link } from "react-router-dom"

const Bookingbtn = () => {
    return ( 

    <div className='booking-btn-container'>
        <button className='booking-btn' id="Bookingbtn">
            <Link to='/storage'>
                Book a Free Consultation
            </Link>
        </button>
    </div>

     );
}
 
export default Bookingbtn;