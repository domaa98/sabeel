import './SecondSection.css'
import Card from './Card'
import cardphoto from "../../assets/service1.jpg";
import cardphoto1 from "../../assets/service2.jpg";
import cardphoto2 from "../../assets/service3.jpg";
import { useTranslation } from 'react-i18next';



const SecondSection = () => {

  const [t] = useTranslation("global");


  return (
    <div className='SecondSection' id='Services'>

       <div className="mainTitle">{t("services.mainTitle")}</div>

       <div className="cards">
        <Card image1={cardphoto} title1={t("services.firstText")} buttonName = {t("services.firsbutton")} to='/Pagethree' />
        <Card image1={cardphoto1} title1={t("services.secondText")} buttonName = {t("services.firsbutton")} to='/Pagetwo'/>
        <Card image1={cardphoto2} title1={t("services.thirdText")} buttonName = {t("services.firsbutton")} to='/Pageone'/>
       </div>
      
    </div>
  )
}

export default SecondSection
