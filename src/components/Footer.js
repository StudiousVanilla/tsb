import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className='footer'>
                <p>&#169; 
                    Mona Eames, The Sounding Board 2021
                    | Company No. 660778
                    | <Link to="/privacy" className='link'> Privacy Policy </Link> 
                </p>
                <p>
                    Website developed by <a href="https://studiousvanilla.github.io/portfolio/" className='dev-credit link'> Oisín Byrne </a> 
                    | Photography: Paudie Bourke
                </p>
        </footer>
     );
}
 
export default Footer;