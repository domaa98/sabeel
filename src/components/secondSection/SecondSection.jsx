import './SecondSection.css'
import Card from './Card'
import cardphoto from "../../assets/service1.jpg";
import cardphoto1 from "../../assets/service2.jpg";
import cardphoto2 from "../../assets/service3.jpg";



const SecondSection = () => {
  return (
    <div className='SecondSection' id='Services'>

       <div className="mainTitle">خدماتنا</div>

       <div className="cards">
        <Card image1={cardphoto} title1='التخليص الجمركي' buttonName = 'اعرف المزيد' to='/Pagethree' />
        <Card image1={cardphoto1} title1='التعبئة و التخزين و التغلف' buttonName = 'اعرف المزيد' to='/Pagetwo'/>
        <Card image1={cardphoto2} title1='خدمات الشحن اللوجيستية المتكاملة' buttonName = 'اعرف المزيد' to='/Pageone'/>
       </div>
      
    </div>
  )
}

export default SecondSection
