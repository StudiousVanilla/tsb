import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <footer className='footer no-mob'>
                    <p>&#169; 
                        Mona Eames, The Sounding Board 2021
                        | Company No. 660778
                        | <Link to="/privacy" className='link'> Privacy Policy </Link> 
                    </p>
                    <p className="no-mob">
                        Website developed by <a href="https://studiousvanilla.github.io/portfolio/" className='dev-credit link'> Oisín Byrne </a> 
                        | Photography: Paudie Bourke
                    </p>
            </footer>
            <footer className='footer mob-footer mob-only'>
                <p>&#169; Mona Eames, The Sounding Board 2021</p>
                <p>
                    Company No. 660778 | <Link to="/privacy" className='link'> Privacy Policy </Link>
                </p>
                <p>
                    Website: <a href="https://oisinbyrne.me" className='dev-credit link'> Oisín Byrne </a> | Photography: <a href="https://www.paudiebourkephotography.com/" className='dev-credit link'> Paudie Bourke </a>
                </p>
            </footer>
        </div>
     );
}
 
export default Footer;