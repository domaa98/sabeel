import './FormSection.css'
import formimage from "../../assets/fourthsection.jpg";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


const FormSection = () => {
    
  const [t] = useTranslation("global");

  
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
        <p className='first-title'>{t("form.formTitle")}</p>
        <p className='second-title'>{t("form.formParagraph")}</p>
        <form ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">{t("form.formName")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("form.formName")}
            
              required
            />
          </div>
          <div>
            <label htmlFor="phone">{t("form.formNumber")}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder={t("form.formNumber")}
             
              required
            />
          </div>
          <div>
            <label htmlFor="message">{t("form.formOrder")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("form.formOrder")}
              
              required
            />
          </div>
          <button type="submit">{t("form.formSpecialOrder")}</button>
        </form>
      </div>
    </div>
  )
}

export default FormSection
