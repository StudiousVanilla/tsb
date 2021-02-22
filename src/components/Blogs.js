import { useEffect } from "react"
import Bookingbtn from './Bookingbtn'
import {buttonToOrange, sideBarNavy} from '../functions/colorChanges'

const Blogs = () => {

    useEffect(()=>{
        buttonToOrange()
        sideBarNavy()
    })


    return ( 
        <main className='blogs-container'>
            <div className="blogs-title-container">
                <h2 className="blogs-title">TSB Blog</h2>
            </div>
            <Bookingbtn/>
        </main>
     );
}
 
export default Blogs;