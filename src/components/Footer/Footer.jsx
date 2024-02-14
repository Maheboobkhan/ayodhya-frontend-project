import "./Footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer-main-container">
            <div className="footer-container">
                <div className="footer-logo-container footer-logo-container-2">
                    <img src="logo.png" alt="logo" />
                    <p className="footer-logo-para">Jai Shree Ram</p>
                </div>
                <ul className='footer-list-container'>
                    <li>Latest Updates</li>
                    <li>FAQS</li>
                    <li>SERVICES</li>
                    <li>PARTNERS</li>
                    <li>SUPPORT</li>
                    <li>BLOG</li>
                </ul>
            </div>
            <div className="copyright-icons">
                <div><span>COPYRIGHT © Spring S Technologies - </span><Link to="https://slidesigma.com/themes/html/monstary/#">2024</Link></div>
                <div className="icons">
                    <FaInstagram className="icon" />
                    <FaFacebookSquare className="icon" />
                    <IoLogoLinkedin className="icon" />
                    <FaTwitter className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer;