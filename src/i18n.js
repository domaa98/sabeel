import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_ar from "./translations/ar/global.json";
import global_en from "./translations/en/global.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: global_ar,
      },
      en: {
        translation: global_en,
      },
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;