import Footer from "../../components/Footer/Footer";
import PageNavbar from "../pageOne/PageNavbar";
import "./PageTwo.css";
import pageImage from "../../assets/service2.jpg";
import { Link } from "react-router-dom";

const PageTwo = () => {
  return (
    <div>
      <PageNavbar />
      <section className="about-section">
        <div className="image-container">
          <img src={pageImage} alt="Description" />
        </div>
        <div className="content-container">
          <h1>خدمات التعبئة والتخزين والتغليف</h1>
          <p>
            تبحث عن شركة موثوقة لتعبئة وتخزين أغراضك؟ تقدم شركة سبيل العبور
            للخدمات اللوجستية حلولاً شاملة تلبي جميع احتياجاتك. نقدم خدمات
            التعبئة والتغليف الاحترافية باستخدام أفضل المواد والأدوات، ونوفر
            وحدات تخزين آمنة ومرنة تناسب جميع الأحجام والميزانيات. فريقنا المدرب
            جيداً يضمن لك نقل أغراضك بجميع أنواعها تشمل الخدمة : تخزين الأثاث
            التخزين المؤقت وحدات تخزين نقل العفش تغليف الأغراض التخزين الآمن
            <br/>
            <span className="links-title">تشمل الخدمة:</span>
            <ul className="page-two-links">
              <li>تخزين الاثاث</li>
              <li>التخزين الؤقت</li>
              <li>وحدات تخزين</li>
              <li>نقل العفش</li>
              <li>تغليف الاغراض</li>
              <li>التخزين الامن</li>
            </ul>
          </p>
          <Link to='/#contact_us'>
          <button>اطلب عرض مخصص</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageTwo;
