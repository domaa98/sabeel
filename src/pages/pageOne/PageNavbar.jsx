import { useState } from 'react';
import './PageNavbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/logoo.png";
import { Link } from 'react-router-dom';

const PageNavbar = () => {
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
            <a href="#">الرئيسية</a>
            </Link>
            <a href="#Services">الخدمات</a>
            <a href="#About_us">من نحن</a>
            <a href="#Contact_us">تواصل معنا</a>
          </div>

          <div className="contact-us">
            <a href="#Contact_us">تواصل معنا</a>
          </div>
        </div>
      </div>

      <div className="drop-down">
        {openMenu ? (
          <div className="links-drop-down">
            <Link to='/'>
            <a href="#Home">الرئيسية</a>
            </Link>
            <a href="#Services">الخدمات</a>
            <a href="#About_us">من نحن</a>
            <a href="#Contact_us">تواصل معنا</a>

          </div>
        ) : null}
      </div>
    </section>
  );
}

export default PageNavbar
