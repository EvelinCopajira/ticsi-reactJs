//import CSS
import './Footer.css';

//import MUI
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="contact-container">
                <p>
                    CONTACTO
                </p>
                <div className='mail'>
                    <a href='mailto:contacto@ticsi-eco.com.ar?Subject=Consulta%20sobre%20productos'><EmailIcon />                   
                        <p>contacto@ticsi.eco.com.ar</p>
                    </a>
                </div>
                <div className='place'>
                    <a href='https://goo.gl/maps/CRW62AWKVrAoKVwF6' target={'_blank'} rel={'noreferrer'}><PlaceIcon />                   
                        <p>Ciudad de la Paz 344, CABA</p>
                    </a>
                </div>
            </div>
            <div className="social-container">
                <p>
                    REDES SOCIALES
                </p>
                <div className='instagram'>
                    <a href='https://www.instagram.com/ticsi.eco/' target={'_blank'} rel={'noreferrer'}><InstagramIcon />                   
                        <p>@ticsi.eco</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;