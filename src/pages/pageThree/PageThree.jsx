import Footer from "../../components/Footer/Footer";
import PageNavbar from "../pageOne/PageNavbar";
import "./PageThree.css";
import pageImage from "../../assets/service1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PageThree = () => {

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
          <h1>{t("pageThree.pageThreeTitle")}</h1>
          <p>
          {t("pageThree.pageThreeText")}
          </p>
          <Link to='/#Contact_us'>
          <button>{t("pageThree.pageThreeOrder")}</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageThree;
