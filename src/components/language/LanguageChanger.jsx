import i18n from "i18next";

import "./LanguageChanger.css";
import "../../App.css";
import { useEffect, useState } from "react";

const LanguageChanger = () => {

  const [isRtl, setIsRtl] = useState(true);

  const setLanguage = (language) => {
    if (language === 'ar') {
      setIsRtl(true);
    } else {
      setIsRtl(false);
    }
  };

  useEffect(() => {
    document.body.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
  }, [isRtl]);


  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="langContainer ltr">
      <button
        onClick={() => {
          handleChangeLanguage("ar");
          setLanguage('ar');
        }}
      >
        AR
      </button>
      <button
        onClick={() => {
          handleChangeLanguage("en");
          setLanguage('en');
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageChanger;
