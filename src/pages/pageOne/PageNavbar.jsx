import { useState } from 'react';
import './PageNavbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/logoo.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageNavbar = () => {

  const [t] = useTranslation("global");


  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section id = "nav">
      <div className="navbarr">
        <div className="open" onClick={toggleMenu}>
          {openMenu ? <TfiClose /> : <AiOutlineMenu />}
        </div>
        <div className="navbar-content">
          <div className="image">
            <Link to='/'>
            <a href="#">
              <img src={Logo} className="img" alt=""></img>
            </a>
            </Link>
          </div>
          <div className="linkss">
            <Link to='/'>
            <a href="#">{t("header.main")}</a>
            </Link>
            <Link to='/#Services'>
            <a href="#Services">{t("header.services")}</a>
            </Link>
            <Link to='/#About_us'>
            <a href="#About_us">{t("header.aboutUs")}</a>
            </Link>
            <Link to='/#Contact_us'>
            <a href="#Contact_us">{t("header.contactUs")}</a>
            </Link>
          </div>

          <div className="contact-us">
            <a href="#Contact_us">{t("header.contactUs")}</a>
          </div>
        </div>
      </div>

      <div className="drop-down">
        {openMenu ? (
          <div className="links-drop-down">
            <Link to='/'>
            <a href="#Home">{t("header.main")}</a>
            </Link>
            <a href="#Services">{t("header.services")}</a>
            <a href="#About_us">{t("header.aboutUs")}</a>
            <a href="#Contact_us">{t("header.contactUs")}</a>

          </div>
        ) : null}
      </div>
    </section>
  );
}

export default PageNavbar
