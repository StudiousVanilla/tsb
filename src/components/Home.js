import Bookingbtn from "./Bookingbtn";
import homeImg from "../imgs/home.png"

const Home = () => {
    return ( 
        <div>
            <Bookingbtn />
            <main className='home-container content-container'>
                <div className='welcome'>
                    <h2 className="welcome-sub">Welcome to</h2>
                    <h1 className="welcome-main">The Sounding Board</h1>
                </div>
                <div className='home-img-container'>
                    <img src={homeImg} alt="" className='home-img'/>
                </div>
                <div className='quote'>
                    <p className='quote-text'>Are you feeling stuck, and in need of a non-judegmental, confidential space to sound out the 'how' of getting yourself unstuck? I firmly believe that by commiting to coaching time for yourself, you are taking thr best possible first-step to getting yourself unstuck.</p>
                    <p className='quote-name'>- Mona</p>
                </div>
            </main>
        </div>
     );
}
 
export default Home;