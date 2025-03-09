import React, { useState } from "react";
import LoginFlot from "@/features/auth/components/loginflot";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import useLocalization from "@/hooks/useLocalization";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import CartFlot from "@/features/cart/components/CartFlot";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  console.log(location.pathname);

  // تغيير اللغة وضبط اتجاه الصفحة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const category = [
    { name: t("links.home"), to: "/" },
    { name: t("links.categories"), to: "/categories" },
    { name: t("links.auctions"), to: "/auctions" },
    { name: t("links.products"), to: "/products" },
    { name: t("links.aboutUs"), to: "/aboutUs" },
  ];

  return (
    <>
      <div className="bg-main-color h-[70px] flex justify-center items-center">
        <div className="flex justify-between items-center gap-6 max-sm:gap-3 containerAK">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-[38px] mb-1" />
            <h2 className="text-2xl font-bold text-white">{t("siteName")}</h2>
          </Link>

          <div className="flex justify-center text-white items-center gap-3">
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
            <div className="flex items-center gap-3 max-md:hidden">
              <CartFlot />

              <LoginFlot />
            </div>
            <button className="md:hidden mb-1" onClick={toggleDrawer}>
              <FiMenu className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>

      <nav className=" shadow max-md:hidden">
        <div className="containerAK flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-8">
            {category.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`hover:text-secondary ${
                  location.pathname === item.to ? "text-secondary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contactUs"
            className="flex items-center text-primary font-medium hover:text-secondary transition-colors"
          >
            <BsFillTelephoneForwardFill className="mr-2" />
            <span
              className={`relative hover:underline ${
                location.pathname === "/contactUs" && "underline"
              } `}
            >
              {t("contactUs")}
            </span>
          </Link>
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
            <CartFlot />
            <LoginFlot />
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2">
            {category.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={toggleDrawer}
                className={`flex items-center gap-3 text-sm w-full md:w-[200px] bg-[#2A88B9] hover:bg-[#3b95bf] h-[40px] rounded-md px-4 text-white transition-all duration-200${
                  location.pathname === item.to ? "bg-red-500" : "bg-red-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Us */}
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
