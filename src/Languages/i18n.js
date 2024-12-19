import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { English } from "./English";
import { German } from "./German";
import { Arabic } from "./Arabic";
i18n
  .use(LanguageDetector) // للكشف عن اللغة
  .use(initReactI18next) // React دمج مع 
  .init({
    resources: {
      en: {
        translation: English,
      },
      ar: {
        translation: Arabic,
      },
      de: {
        translation: German,
      },
    },
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en", // اللغة الاحتياطية
    debug: false,
    interpolation: {
      escapeValue: false, // لتجنب مشاكل XSS
    },
  });

export default i18n;
