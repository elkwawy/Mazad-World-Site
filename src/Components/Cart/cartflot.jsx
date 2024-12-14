import React, { useState, useRef, useEffect } from "react";
import car from "../../assets/icons/ShoppingCartSimple.png";
import CardCar from "./cardcarflot";
import { BsCart3 } from "react-icons/bs";
import im1 from "../../assets/Imgs/cart1.png";
import Aro from "../../assets/icons/ArrowRight.svg";
import { BiSolidCart } from "react-icons/bi";
const Cartflot = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // إضافة حدث الاستماع فقط بعد فتح القائمة
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // إضافة حالة isMenuOpen كاعتماد لتحديث

  return (
    <div className="relative z-[111111111111111111111] text-black">
      <button onClick={toggleMenu}>
        <BsCart3 className="w-7 h-7 text-white" />
      </button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute flex flex-col p-4 rounded-xl z-40 right-1 max-sm:-right-[117px] top-[50px] bg-white shadow-lg py-3 text-sm min-h-[464px] w-[424px] max-sm:w-[320px]"
        >
          <div className="px-6">
            <h1 className="text-xl items-start pt-3 font-semibold">
              Shopping Cart (X)
            </h1>
          </div>

          <div>
            <CardCar
              img={im1}
              tite="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
              price={1500}
            />
            <CardCar
              img={im1}
              tite="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
              price={1500}
            />
          </div>
          <hr className="border-[#E4E7E9] mt-4" />
          <div className="flex justify-between px-6 py-4">
            <div className="text-[#475156] text-sm font-normal">Sub-Total:</div>
            <div className="text-[#191C1F] font-medium text-sm">$ X USD</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold gap-4 text-sm capitalize">
            <button className="bg-[#FA8232] h-[48px] w-[280px] flex justify-center items-center text-white gap-2 capitalize">
              Checkout now <img src={Aro} alt="Arrow Icon" />
            </button>
            <button className="h-[48px] w-[280px] text-[#FA8232] border border-[#FFE7D6]">
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartflot;
