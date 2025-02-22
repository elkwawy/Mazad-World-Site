import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLocalization = () => {
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState(i18n.language === "ar" ? "rtl" : "ltr");

  useEffect(() => {
    const changeDirection = () => {
      setDir(i18n.language === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute(
        "dir",
        i18n.language === "ar" ? "rtl" : "ltr"
      );
      document.documentElement.lang = i18n.language;
    };

    changeDirection();
  }, [i18n.language]);

  return { t, i18n, dir };
};

export default useLocalization;
