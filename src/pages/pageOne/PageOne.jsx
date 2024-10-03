import Footer from "../../components/Footer/Footer";
import PageNavbar from "./PageNavbar";
import "./PageOne.css";
import pageImage from '../../assets/service3.jpg'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const PageOne = () => {

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
          <h1>{t("pageOne.pageOneTitle")}</h1>
          <p>
          {t("pageOne.pageOneText")}
          </p>
          <Link to='/#Contact_us'>
          <button >{t("pageOne.pageOneOrder")}</button>
          </Link>
        </div>
      </section> 
      <Footer />
    </div>
  );
};

export default PageOne;
