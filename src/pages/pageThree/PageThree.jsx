import Footer from "../../components/Footer/Footer";
import PageNavbar from "../pageOne/PageNavbar";
import "./PageThree.css";
import pageImage from "../../assets/service1.jpg";
import { Link } from "react-router-dom";

const PageThree = () => {
  return (
    <div>
      <PageNavbar />
      <section className="about-section">
        <div className="image-container">
          <img src={pageImage} alt="Description" />
        </div>
        <div className="content-container">
          <h1>خدمات التخليص الجمركي</h1>
          <p>
            يعد النقل أهم الخدمات اللوجستية لذا نقوم في سبيل العبورالسعودية
            بكافة خدمات التخليص الجمركي ونقل جميع بضائعكم بمختلف وسائل النقل
            البحري والبري والجوي، كما نقدم لكم عروض خاصة من حيث الخدمات والأسعار
            التي تلبي متطلبات الأداء الجيد وتنال رضاكم نتعامل مع شركات الشحن
            المختلفة ونقدم لك خدمة تخليص الشحنات المرسلة مع أي من هذه الشركات،
            كما نقدم كافة الاستشارات الجمركية وﺗﺤﺪﻳﺪ ﺑﻨﺪ اﻟﺘﻌﺮﻓﺔ اﻟﺠﻤﺮﻛﻴﺔ
            ﻟﻠﻤﻨﺘﺠﺎت اﻟﺨﺎﺿﻌﺔ ﻟﻠﺠﻤﺎرك. الآن يمكنك مع SABEEL WAY الحصول على كافة
            خدمات التخليص الجمركي وإنهاء كافة الإجراءات واستصدار الترخيصات
            اللازمة، كل ذلك نوفره لك في وقت قياسي وبأسعار تنافسية.
          </p>
          <Link to='/'>
          <button>اطلب عرض مخصص</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageThree;
