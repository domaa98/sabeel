import { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/logoo.png";
import './Navbar.css'
import { useTranslation } from 'react-i18next';
import "../../App.css";


const Navbar = () => {

  const [t] = useTranslation("global");

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
            <a href="#Home">{t("header.main")}</a>
            <a href="#Services">{t("header.services")}</a>
            <a href="#About_us">{t("header.aboutUs")}</a>
            <a href="#Contact_us">{t("header.contactUs")}</a>
          </div>

          <div className="contact-us ">
            <a href="#Contact_us">{t("header.contactUs")}</a>
          </div>
        </div>
      </div>

      <div className="drop-down">
        {openMenu ? (
          <div className="links-drop-down">
            <a href="#Home">{t("header.main")}</a>
            <a href="#Services">{t("header.services")}</a>
            <a href="#About_us">{t("header.aboutUs")}</a>
            <a href="#Contact_us">{t("header.contactUs")}</a>

          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Navbar
