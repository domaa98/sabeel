import './Footer.css'
import Logo from "../../assets/logo1.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="footer">
         
            <div className="input-group">
                  <input type="text" className="form-input" placeholder="اطلب عرض مخصص"/>
                  <button className="btn" type="button">اطلب عرض سعر</button>
            </div>
         
            <div className="footer-section content-section">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="links">
                  <a href="#Home">الرئيسية</a>
                  <a href="#Services">الخدمات</a>
                  <a href="#About_us">من نحن</a>
                  <a href="#Contact_us">تواصل معنا</a>
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
  )
}

export default Footer
