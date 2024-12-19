import React, { useEffect, useState } from "react";
import Cartflot from "./Cart/cartflot";
import LoginFlot from "../Auth/loginflot";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import useLocalization from "../Hooks/useLocalization.js";
const Navbar = () => {
  const { t, i18n } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  // تغيير اللغة وضبط اتجاه الصفحة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const category = [
    { name: t("categories.electronics"), to: "/electronics" },
    { name: t("categories.jewelry"), to: "/jewelry" },
    { name: t("categories.cars"), to: "/cars" },
    { name: t("categories.antiques"), to: "/antiques" },
    { name: t("categories.realEstate"), to: "/real-estate" },
  ];

  return (
    <>
      <div className="bg-main-color h-[88px] flex justify-center items-center">
        <div className="flex justify-between items-center gap-6 max-sm:gap-3 containerAK">
          <Link to="/">
            <h2 className="text-2xl font-bold text-white">{t("siteName")}</h2>
          </Link>

          <input
            className="h-[48px] w-full lg:w-[440px] px-4 rounded max-md:hidden"
            type="search"
            placeholder={t("searchPlaceholder")}
          />

          <div className="flex justify-center text-white items-center gap-2.5">
            <select
              className="bg-transparent"
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option className="bg-[#1B6392]" value="en">
                {t("languages.english")}
              </option>
              <option className="bg-[#1B6392]" value="ar">
                {t("languages.arabic")}
              </option>
              <option className="bg-[#1B6392]" value="de">
                {t("languages.german")}
              </option>
            </select>
            <select className="bg-transparent max-md:hidden">
              <option className="bg-[#1B6392]" value="USD">
                {t("currency.usd")}
              </option>
              <option className="bg-[#1B6392]" value="EGP">
                {t("currency.egp")}
              </option>
            </select>
            <div className="flex items-center gap-2.5 max-md:hidden">
              <Cartflot />
              <button>
                <AiOutlineHeart className="w-8 h-8" />
              </button>
              <LoginFlot />
            </div>

            <button className="md:hidden mb-1" onClick={toggleDrawer}>
              <FiMenu className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>

      <nav className=" shadow  max-md:hidden">
        <div className="containerAK flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-8">
            {category.map((item, index) => (
              <Link key={index} to={item.to} className="hover:text-secondary">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/aboutUs"
              className="flex items-center text-primary font-medium hover:text-secondary transition-colors"
            >
              <span className="relative hover:underline">{t("aboutUs")}</span>
            </Link>
            <Link
              to="/contactUs"
              className="flex items-center text-primary font-medium hover:text-secondary transition-colors"
            >
              <span className="relative hover:underline">{t("contactUs")}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-5 p-6 md:hidden bg-[#1B6392] shadow-lg border-t border-[#427ea6]">
          {/* Search Input */}
          <input
            className="w-full h-[48px] px-4 text-sm  transition-all duration-300 pace-x-2 border border-gray-300 rounded-lg"
            type="search"
            placeholder="Search..."
          />

          {/*  Icons */}
          <div className="flex items-center justify-center gap-4">
            <Cartflot />
            <button>
              <AiOutlineHeart className="w-8 h-8 text-white" />
            </button>
            <LoginFlot />
            <select className="bg-transparent text-white">
              <option className="bg-[#1B6392]" value="USD">
                {t("currency.usd")}
              </option>
              <option className="bg-[#1B6392]" value="EGP">
                {t("currency.egp")}
              </option>
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2">
            {category.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={toggleDrawer}
                className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md px-4 text-white transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Us */}
          <Link
            to="/aboutUs"
            onClick={toggleDrawer}
            className="flex items-center -mt-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md px-4 text-white transition-all duration-200"
          >
            {t("aboutUs")}
          </Link>
          <Link
            to="/contactUs"
            onClick={toggleDrawer}
            className="flex items-center -mt-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md px-4 text-white transition-all duration-200"
          >
            {t("contactUs")}
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
