import placeholderImg from '../imgs/about-img.png';
import Bookingbtn from './booking-btn'

const About = () => {

    return (
        
        <div className='about-container'>
            <div className='about-images-container'>
                <div className='about-image-container'>
                    <img src={placeholderImg} alt='book' className='about-img'/>
                </div>
            </div>
            <div className='about-info-container'>
                <div className='div-spacer'></div>
                <div className='about-info'>
                    <h2> About Me </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
                <div className='about-info'>
                    <h2> About The Sounding Board </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
                <div className='about-info'>
                    <h2> My Coaching Style </h2>
                    <p className='about-content'> Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. Laborum laborum laborum esse aliqua occaecat non culpa ea Lorem proident cillum. Cillum sunt voluptate magna eiusmod laboris laboris ut nisi non et nisi. Reprehenderit voluptate deserunt ad eu eiusmod eiusmod. </p>
                </div>
            </div>
            <Bookingbtn/>
        </div>

     );
}
 
export default About;
