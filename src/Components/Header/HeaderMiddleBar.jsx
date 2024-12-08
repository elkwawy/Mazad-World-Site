import React from "react";
import logo from "../../assets/Logo2.png";
import Cartflot from "../Cart/cartflot";
import LoginFlot from "../../Auth/loginflot";
import fav from "../../assets/icons/Heart.png";
import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import map from "../../assets/icons/MapPinLine.svg";
import com from "../../assets/icons/ArrowsCounterClockwise.svg";
import inf from "../../assets/icons/Info.svg";
import hedset from "../../assets/icons/Vector.svg";

const HeaderMiddleBar = ({ toggleDrawer, isOpen }) => {
  return (
    <>
      <div className="bg-[#1B6392] h-[88px] flex justify-center items-center">
        <div className="flex justify-between items-center gap-6 containerAK">
          <Link to="/">
            <img src={logo} className="w-[177px] h-[48px]" alt="Logo" />
          </Link>
          <div className="w-[546px] h-[48px] flex space-x-2 items-center justify-center max-sm:hidden">
            <input
              className="w-[546px] h-[48px] px-4 rounded absolute max-lg:w-[250px]"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Cartflot />
            <button>
              <img src={fav} className="w-[32px] h-[32px]" alt="Favorites" />
            </button>
            <LoginFlot />
            <button className="sm:hidden mb-1" onClick={toggleDrawer}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
              >
                <path
                  fill="#ffffff"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-6 p-6 bg-[#1B6392] shadow-lg border-t border-[#427ea6]">
          {/* Search Input */}
          <div className="h-[48px] flex space-x-2 border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
            <input
              className="w-full h-full px-4 rounded-md text-sm  transition-all duration-300"
              type="search"
              placeholder="Search..."
            />
          </div>
        
          {/* Category Menu */}
          <CategoryMenu />
        
          {/* Customer Support Button */}
          <button className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md py-2 px-4 text-white transition-all duration-200">
            <img className="w-5 h-6 filter invert" src={hedset} alt="Customer Support" />
            Customer Support
          </button>
        
          {/* Track Order Button */}
          <button className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md py-2 px-4 text-white transition-all duration-200">
            <img className="w-6 h-6 filter invert" src={map} alt="Track Order" />
            Track Order
          </button>
        
          {/* Compare Button */}
          <button className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md py-2 px-4 text-white transition-all duration-200">
            <img className="w-6 h-6 filter invert" src={com} alt="Compare" />
            Compare
          </button>
        
          {/* Need Help Button */}
          <button className="flex items-center gap-3 text-sm w-full md:w-[200px] h-[40px] bg-[#2A88B9] hover:bg-[#3b95bf] rounded-md py-2 px-4 text-white transition-all duration-200">
            <img className="w-6 h-6 filter invert" src={inf} alt="Need Help" />
            Need Help
          </button>
        
          {/* Contact Phone Number */}
          <div className="flex items-center justify-center gap-2 text-sm text-white">
            <a href="tel:+1-202-555-0104" className="flex items-center gap-2">
              <img src={hedset} className="w-7 h-7 filter invert" alt="Phone" />
              <span className="text-lg text-white">+1-202-555-0104</span>
            </a>
          </div>
        </div>
      )}
      
      
    </>
  );
};

export default HeaderMiddleBar;
