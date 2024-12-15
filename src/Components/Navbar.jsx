import React, { useState } from "react";
import Cartflot from "./Cart/cartflot";
import LoginFlot from "../Auth/loginflot";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
  
  const category = [
    { name: "Electronics", to: "/electronics" },
    { name: "Jewelry", to: "/jewelry" },
    { name: "Cars", to: "/cars" },
    { name: "Antiques", to: "/antiques" },
    { name: "Real estate", to: "/real-estate" },
  ];
  return (
    <>
      <div className="bg-main-color h-[88px] flex justify-center items-center">
        {/* Header Content */}
        <div className="flex justify-between items-center gap-6 max-sm:gap-3 containerAK">
          <Link to="/">
            <h2 className="text-2xl font-bold text-white">MAZAD_WORLD</h2>
          </Link>

          {/* Search Input */}
          <input
            className="h-[48px] w-full lg:w-[440px] px-4 rounded max-md:hidden"
            type="search"
            placeholder="Search..."
          />

          {/* Language and Currency Selectors */}
          <div className="flex justify-center text-white items-center gap-2.5">
            <select
              className="bg-transparent"
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option className="bg-[#1B6392]" value="en">
                EG
              </option>
              <option className="bg-[#1B6392]" value="ar">
                AR
              </option>
              <option className="bg-[#1B6392]" value="de">
                GE
              </option>
            </select>
            <select className="bg-transparent max-md:hidden">
              <option className="bg-[#1B6392]" value="USD">
                USD
              </option>
              <option className="bg-[#1B6392]" value="EGP">
                EGP
              </option>
            </select>
            {/* Cart, Wishlist, and Login Buttons */}
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
      {/* Categories List */}
      <nav className="shadow max-md:hidden">
        <div className=" containerAK flex items-center justify-between py-2">
          <div className="flex items-center justify-between space-x-8">
            {category.map((item, index) => (
              <Link key={index} to={item.to} className="hover:text-secondary">
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/contactUs" className="flex items-center text-primary">
            <span className="text-secondary text-xl">☎</span>
            <span className="ml-2 font-medium">Contact Us</span>
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
            <Cartflot />
            <button>
              <AiOutlineHeart className="w-8 h-8 text-white" />
            </button>
            <LoginFlot />
            <select className="bg-transparent text-white">
              <option className="bg-[#1B6392]" value="USD">
                USD
              </option>
              <option className="bg-[#1B6392]" value="EGP">
                EGP
              </option>
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2">
            {category.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md px-4 text-white transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Us */}
          <Link
            to="/contactUs"
            className="flex items-center -mt-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md px-4 text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
