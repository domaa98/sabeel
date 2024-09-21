import Footer from "../../components/Footer/Footer";
import PageNavbar from "./PageNavbar";
import "./PageOne.css";
import pageImage from '../../assets/service3.jpg'

const PageOne = () => {
  return (
    <div>
      <PageNavbar />
      <section className="about-section">
        <div className="image-container">
          <img src={pageImage} alt="Description" />
        </div>
        <div className="content-container">
          <h1>خدمات الشحن اللوجستية المتكاملة</h1>
          <p>
            خدمات الشحن المتكاملة البري-بحري-جوي نقدم لكم في SABEEL WAY خدمة شحن
            شاملة ومرنة تلبي جميع احتياجاتكم من خلال أسطولنا المتكامل، سواء كنت
            فرد أو شركة، فإننا نضمن لك توصيل شحنتك بأمان وسرعة إلى أي مكان في
            المملكة. خبرتنا الواسعة في التعامل مع مختلف أنواع الشحنات، بما في
            ذلك المواد شديدة الخطورة والمواد الغذائية المجمدة، تضمن لك راحة
            البال التامة. نحن نقدم لك حلاً مخصصاً لاحتياجاتك، مع ضمان أعلى
            معايير الجودة، كما نوفر لكم إمكانية تأجير الشاحنات بكل المواصفات
            التي تناسب احتياجاتكم المختلفة.
          </p>
          <button>اطلب عرض مخصص</button>
        </div>
      </section> 
      <Footer />
    </div>
  );
};

export default PageOne;
