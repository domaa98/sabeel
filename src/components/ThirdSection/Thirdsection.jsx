import './Thirdsection.css'
import image from '../../assets/roundedsection.jpg';
import { useTranslation } from 'react-i18next';

const Thirdsection = () => {

  const [t] = useTranslation("global");


  return (
    <div className='thirdSection' id='About_us'>

      <div className="mainImage">
        <img src={image} alt="" />
      </div>

      <div className="ourVision">

        <div className='start'>
            
            <p>{t("ourVision.textTwo")}</p>
            <h4>{t("ourVision.textOne")}</h4>
        </div>

        <div className='vision'>
             
             <p>{t("ourVision.textFour")}</p>
             <h4>{t("ourVision.textThree")}</h4>
        </div>

        <div className='message'>
            
            <p>{t("ourVision.textSix")}</p>
            <h4>{t("ourVision.textFive")}</h4>
        </div>
      </div>

      <div className="ourGoal">
        <h3>{t("ourVision.textSeven")}</h3>
      </div>
    </div>
  )
}

export default Thirdsection
