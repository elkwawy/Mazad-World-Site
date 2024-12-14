import React from "react";
import fa from "../../assets/icons/Facebook.svg";
import ins from "../../assets/icons/Instagram.svg";
import youtube from "../../assets/icons/Youtube.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import { useTranslation } from "react-i18next";

const HeaderTopBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // تغيير اتجاه الصفحة
  };

  return (
    <div className="bg-main-color border-b border-bMC">
      <div className="containerAK gap-1 py-2.5 flex items-center justify-between text-center text-white text-xs max-sm:gap-y-1 max-sm:flex-col max-sm:justify-center">
        <div className="flex items-center max-sm:justify-center">
          <div className="flex justify-center items-center h-[20px] w-[258px]">
            <span>{t("welcome")}</span>
          </div>
        </div>
        <div className="flex items-center max-sm:justify-center gap-3">
          <div className="flex gap-4 max-sm:gap-2">
            {t("follow_us")}:
            <ol className="flex gap-2 max-sm:gap-1 max-sm:justify-center items-center">
              <li>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={fa} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="YouTube" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={ins} alt="Instagram" />
                </a>
              </li>
            </ol>
          </div>
          <select
            className="bg-transparent"
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
          >
            <option className="bg-[#1B6392]" value="en">
              ENG
            </option>
            <option className="bg-[#1B6392]" value="ar">
              AR
            </option>
            <option className="bg-[#1B6392]" value="de">
              DE
            </option>
          </select>
          <select className="bg-transparent">
            <option className="bg-[#1B6392]" value="USD">
              USD
            </option>
            <option className="bg-[#1B6392]" value="EGP">
              EGP
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
