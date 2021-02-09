import placeholderImg from '../imgs/about-img.png';
import Bookingbtn from './booking-btn'

const About = () => {

    return (
        
        <div className='about-container content-container'>
            <div className='about-images-container'>
                <div className='about-image-container'>
                    <img src={placeholderImg} alt='book' className='about-img'/>
                </div>
            </div>
            <div className='about-info-container'>
                <div className='about-info'>
                    <h2 className='about-head'> About Me </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
                <div className='about-info'>
                    <h2 className='about-head'> About The Sounding Board </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
                {/* Inline style of border is becuase this is the last paragrpah and so has no bottom border */}
                <div className='about-info' style={{border: "none"}}>
                    <h2 className='about-head'> My Coaching Style </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default About;
