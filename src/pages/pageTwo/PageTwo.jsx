import Footer from "../../components/Footer/Footer";
import PageNavbar from "../pageOne/PageNavbar";
import "./PageTwo.css";
import pageImage from "../../assets/service2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PageTwo = () => {

  const [t] = useTranslation("global");


  useEffect(()=>{
  
    window.scrollTo({top:0 , left: 0 ,behavior:'smooth'});
  
});

  return (
    <div>
      <PageNavbar />
      <section className="about-section">
        <div className="image-container">
          <img src={pageImage} alt="Description" />
        </div>
        <div className="content-container">
          <h1>{t("pageTwo.pageTwoTitle")}</h1>
          <p>
            {t("pageTwo.pageTwoText")}
            <br/>
            <span className="links-title">{t("pageTwo.services")}</span>
            <ul className="page-two-links">
              <li>{t("pageTwo.service1")}</li>
              <li>{t("pageTwo.service2")}</li>
              <li>{t("pageTwo.service3")}</li>
              <li>{t("pageTwo.service4")}</li>
              <li>{t("pageTwo.service5")}</li>
              <li>{t("pageTwo.service6")}</li>
            </ul>
          </p>
          <Link to='/#Contact_us'>
          <button>{t("pageTwo.pageTwoOrder")}</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageTwo;
