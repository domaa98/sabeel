import './FormSection.css'
import { useState } from 'react';
import formimage from "../../assets/fourthsection.jpg";

const FormSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        //rest of logic
      };


  return (
    <div className="containerr" id='Contact_us'>
      <div className="section image-section">
        <img
          src={formimage}
          alt="Placeholder"
          className="section-image"
        />
      </div>
      <div className="section form-section">
        <p className='first-title'>نحن لا نقوم فقط بنقل البضائع، بل نبني علاقات طويلة الأمد مع عملائنا</p>
        <p className='second-title'>تواصل معنا لمعرفة كيف يمكننا أن نكون جزءًا من نجاحك</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">الاسم بالكامل</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='ادخل اسمك'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='ادخل رقم الهاتف'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">طلبك</label>
            <textarea
              id="message"
              name="message"
              placeholder='طلبك'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">اطلب عرض</button>
        </form>
      </div>
    </div>
  )
}

export default FormSection
