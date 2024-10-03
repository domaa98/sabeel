import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar'
import './HeadSection.css'
const HeadSection = () => {

  const [t] = useTranslation("global");

  return (
    <div className='headSectionImage' id='Home'>
      <Navbar/>

      <div className="midSection">
       <h1 className='headSectionText'>{t("home.firstText")}<br /> {t("home.secondText")}</h1>
       <h3 className="headSectionText2">{t("home.thirdText")}</h3>
      </div>

      <div className="buttonLinks">

        <div className="buttons">
          <a>{t("home.firsbutton")}</a>
          <a>{t("home.secondbutton")}</a>
          <a>{t("home.thirdbutton")}</a>
        </div>

         <div className="inputText">
           <a href='#Contact_us'>{t("home.order")}</a>
           <input type="text" name="" id="" placeholder={t("home.specialOrder")} />
        </div>
      </div>

    </div>
  )
}

export default HeadSection
