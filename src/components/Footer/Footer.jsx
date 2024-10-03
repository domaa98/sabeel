import "./Footer.css";
import Logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      
      <div className="input-group">
        <input type="text" className="form-input" placeholder={t("home.specialOrder")} />
        <Link to="/#Contact_us">
          <button className="btn" type="button">
          {t("home.order")}
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
            <a href="#Home">{t("header.main")}</a>
          </Link>
          <Link to="/#Services">
            <a href="#Services">{t("header.services")}</a>
          </Link>
          <Link to="/#About_us">
            <a href="#About_us">{t("header.aboutUs")}</a>
          </Link>
          <Link to="/#Contact_us">
            <a href="#Contact_us">{t("header.contactUs")}</a>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
