import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className='footer'>
            <p>&#169; 
                Mona Eames, The Sounding Board 2021 
                | <Link to="/privacy" className='link'> Privacy Policy </Link> 
                | Website developed by <a href="https://studiousvanilla.github.io/portfolio/" className='dev-credit link'> Oisín Byrne </a> 
            </p>
        </footer>
     );
}
 
export default Footer;