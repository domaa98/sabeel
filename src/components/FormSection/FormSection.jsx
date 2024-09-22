import './FormSection.css'
import formimage from "../../assets/fourthsection.jpg";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';


const FormSection = () => {
    
  
      const form = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        //rest of logic
        emailjs
      .sendForm('service_cvncjqn', 'template_n0r83ro', form.current, {
        publicKey: 'K4R4vwAFyIy2Fe2CZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
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
        <form ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">الاسم بالكامل</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='ادخل اسمك'
            
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
             
              required
            />
          </div>
          <div>
            <label htmlFor="message">طلبك</label>
            <textarea
              id="message"
              name="message"
              placeholder='طلبك'
              
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
