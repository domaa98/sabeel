import '../App.css'
import Footer from '../components/Footer/Footer'
import FormSection from '../components/FormSection/FormSection'
import HeadSection from "../components/HeadSection/HeadSection"
import LanguageChanger from '../components/language/LanguageChanger'
import SecondSection from "../components/secondSection/SecondSection"
import Thirdsection from "../components/ThirdSection/Thirdsection"


const Home = () => {

  

  return (
    <div className="container">
      <LanguageChanger/>
      <HeadSection/>
      <SecondSection/>
      <Thirdsection/>
      <FormSection/>
      <Footer/>

    </div>
  )
}

export default Home
