import React, { useState, useRef, useEffect } from "react";
import main from "../../assets/icons/CaretDown.svg";

const CategoryMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`flex bg-[#F2F4F5] items-center rounded justify-center font-medium text-xm h-[48px] w-[154px]  hover:bg-[#fa8232] hover:text-white transition duration-300`}
      >
        All Category
        <img
          className="flex w-[24px] h-[24px] max-sm:w-[24px] max-sm:h-[18px] pl-1"
          src={main}
          alt="Caret Down"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 top-full bg-white shadow-lg p-3 text-sm h-[235px] w-[240px] max-sm:w-[200px] max-sm:border max-sm:rounded border-gray-100  max-sm:pt-2">
          <ul className="cursor-pointer">
            <button className="p-2">Varieties</button>
            <li className="p-2">Real estate</li>
            <li className="p-2">Electronics</li>
            <li className="p-2">Cars</li>
            <li className="p-2">Jewelry</li>
            <li className="p-2">Antiques</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
