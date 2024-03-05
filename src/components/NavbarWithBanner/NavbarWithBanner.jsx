// import { useState, useEffect } from "react";
// import "../NavbarWithBanner/NavbarWithBanner.css";
// import { RxCross1 } from "react-icons/rx";

// const NavbarWithBanner = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [backgroundIndex, setBackgroundIndex] = useState(0);

//     const images = [
//         'url("https://www.aryavrittravels.com/wp-content/uploads/2023/10/Ram-Mandir-Ayodhya-Tour.jpg")',
//         'url("https://cdn.pixabay.com/photo/2024/01/16/00/19/ai-generated-8511072_1280.jpg")',
//         'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")',
//         'url("https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg")',
//         'url("https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg")',
//     ];

//     const toOpenMenu = () => {
//         setIsOpen(!isOpen);
//     }

//     const closeMenu = () => {
//         setIsOpen(false);

//     }

//     useEffect(() => {
//         // Function to change the background image every 10 seconds
//         const intervalId = setInterval(() => {
//             setBackgroundIndex(prevIndex => (prevIndex + 1) % images.length);
//         }, 5000);

//         // Clear the interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     return (

//         // navbar
//         <div style={{
//             minHeight: '100vh',
//             width: '100vw',
//             opacity: '0.8',
//             background: images[backgroundIndex],
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPposition: '50%',
//         }}
//             // className="banner-image"
//             >
//             <div className="navbar">
//                 <div className="customer-support-language">
//                     <div className="customer-support">
//                         <p>Customer Support:</p>
//                         <p>+91 99999 99999</p>
//                     </div>
//                     <div className="language"><span>Language</span><img src="iconoir_language.svg" alt="language" /></div>
//                 </div>
//                 <div className="navbar-bar">
//                     <div className="logo-container">
//                         <img src="logo.png" alt="logo" />
//                         <p className="logo-para">Jai Shree Ram</p>
//                     </div>
//                     <div>
//                         <ul className={`list-container ${isOpen ? 'menu-list-container' : ''}`}>
//                             <li>Home</li>
//                             <li>Blog</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                             <li className="login-btn">Login</li>
//                         </ul>
//                         {!isOpen ? <div className="menu-bar" onClick={toOpenMenu}>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </div>: <RxCross1 onClick={closeMenu} className="cross" />}
//                     </div>
//                 </div>

//                 <div className="banner-content">
//                     <div className="beleive">We Believe in Ram</div>
//                     <h1>Temple Of Ayodhya</h1>
//                     <p>The sacred journey to Ayodhya Ram Mandir</p>
//                     <button>Explore</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NavbarWithBanner;






import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import LanguagePopup from "../LanguagePopUp/LanguagePopUp";
import "./NavbarWithBanner.css";
import { Link } from "react-router-dom";

const NavbarWithBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [languagePopupOpen, setLanguagePopupOpen] = useState(false);

  const images = [
    'url("https://www.aryavrittravels.com/wp-content/uploads/2023/10/Ram-Mandir-Ayodhya-Tour.jpg")',
    'url("https://cdn.pixabay.com/photo/2024/01/16/00/19/ai-generated-8511072_1280.jpg")',
    'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")',
    'url("https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg")',
    'url("https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg")',
  ];

  const toOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLanguageSelect = (code) => {
    // Handle language selection logic here
    console.log(`Selected language: ${code}`);
  };

  useEffect(() => {
    // Function to change the background image every 10 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [backgroundIndex]);

  return (
    <div style={{position: 'relative'}}>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          opacity: "0.8",
          background: images[backgroundIndex],
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPposition: "50%",
        }}
      >
        <div className="navbar">
          <div className="customer-support-language">
            <div className="customer-support">
              <p>Customer Support:</p>
              <p>+91 91217 20101</p>
            </div>
            <div
              className="language"
              onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
            >
              <span>Language</span>
              <img src="iconoir_language.svg" alt="language" style={{cursor: 'pointer'}} />
            </div>
            <LanguagePopup
              isOpen={languagePopupOpen}
              onClose={() => setLanguagePopupOpen(false)}
              onLanguageSelect={handleLanguageSelect}
            />
          </div>
          <div className="navbar-bar">
            <div className="logo-container">
              <img src="logo.png" alt="logo" />
              <p className="logo-para">Jai Shree Ram</p>
            </div>
            <div>
              <ul
                className={`list-container ${isOpen ? "menu-list-container" : ""}`}
              >
                <li className="first-li">Home</li>
                <Link to="/blog" style={{textDecoration: 'none'}}><li>Blog</li></Link>
                <li>About</li>
                <li>Contact</li>
                <li className="login-btn">Login</li>
              </ul>
              {!isOpen ? (
                <div className="menu-bar" onClick={toOpenMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <RxCross1 onClick={closeMenu} className="cross" />
              )}
            </div>
          </div>
          <div className="banner-content">
            <div className="beleive">We Believe in Ram</div>
            <h1>Temple Of Ayodhya</h1>
            <p>The sacred journey to Ayodhya Ram Mandir</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithBanner;
