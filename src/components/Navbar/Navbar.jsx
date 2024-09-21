import { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/logo1.jpg";

import './Navbar.css'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section id = "nav">
      <div className="navbarrr">
        <div className="open" onClick={toggleMenu}>
          {openMenu ? <TfiClose /> : <AiOutlineMenu />}
        </div>
        <div className="navbar-content">
          <div className="image">
            <a href="#Home">
              <img src={Logo} className="img" alt=""></img>
            </a>
          </div>
          <div className="links">
            <a href="#Home">الرئيسية</a>
            <a href="#Services">الخدمات</a>
            <a href="#About_us">من نحن</a>
            <a href="#Contact_us">تواصل معنا</a>
          </div>

          <div className="contact-us ">
            <a href="#Contact_us">تواصل معنا</a>
          </div>
        </div>
      </div>

      <div className="drop-down">
        {openMenu ? (
          <div className="links-drop-down">
            <a href="#Home">الرئيسية</a>
            <a href="#Services">الخدمات</a>
            <a href="#About_us">من نحن</a>
            <a href="#Contact_us">تواصل معنا</a>

          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Navbar
