import { useState } from "react";
import "../NavbarWithBanner/NavbarWithBanner.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toOpenMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <div className="navbar-container">
            <div className="logo-container logo-container-2">
                <img src="logo.png" alt="logo" />
                <p className="logo-para">Jai Shree Ram</p>
            </div>
            <div>
                <ul className={`list-container ${isOpen ? 'menu-list-container' : ''}`}>
                    <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                    <Link to="/blog" style={{textDecoration: 'none'}}><li>Blog</li></Link>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="login-btn">Login</li>
                </ul>
                {!isOpen ? <div className="menu-bar" onClick={toOpenMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : <RxCross1 onClick={closeMenu} className="cross" />}
            </div>
        </div>
    )
}

export default Navbar;