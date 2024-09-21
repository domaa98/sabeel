import Navbar from '../Navbar/Navbar'
import './HeadSection.css'
const HeadSection = () => {
  return (
    <div className='headSectionImage' id='Home'>
      <Navbar/>

      <div className="midSection">
       <h1 className='headSectionText'>SABEEL WAY طريقك السريع<br /> الي العالم</h1>
       <h3 className="headSectionText2">اهلا بك في المكان الامثل للحصول علي خدمات لوجستية متكاملة</h3>
      </div>

      <div className="buttonLinks">

        <div className="buttons">
          <a>جوا</a>
          <a>بحرا</a>
          <a>برا</a>
        </div>

         <div className="inputText">
           <a>اطلب عرض سعر</a>
           <input type="text" name="" id="" placeholder='اطلب عرض مخصص' />
        </div>
      </div>

    </div>
  )
}

export default HeadSection
