import "./Footer.css";
import Logo from "../../assets/logoo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="input-group">
        <input type="text" className="form-input" placeholder="اطلب عرض مخصص" />
        <Link to="/#Contact_us">
          <button className="btn" type="button">
            اطلب عرض سعر
          </button>
        </Link>
      </div>

      <div className="footer-section content-section">
        <Link to="/#Home">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        <div className="links">
          <Link to="/#Home">
            <a href="#Home">الرئيسية</a>
          </Link>
          <Link to="/#Services">
            <a href="#Services">الخدمات</a>
          </Link>
          <Link to="/#About_us">
            <a href="#About_us">من نحن</a>
          </Link>
          <Link to="/#Contact_us">
            <a href="#Contact_us">تواصل معنا</a>
          </Link>
        </div>

        <div className="social-media">
          <a href="#facebook" aria-label="Facebook">
            <IoLogoFacebook />
          </a>
          <a href="#linkedin" aria-label="Linkedin">
            <FaLinkedin />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
