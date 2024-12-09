import React from "react";
import map from "../../assets/icons/MapPinLine.svg";
import com from "../../assets/icons/ArrowsCounterClockwise.svg";
import inf from "../../assets/icons/Info.svg";
import hedset from "../../assets/icons/Vector.svg";
import CategoryMenu from "./CategoryMenu";

const HeaderBottomBar = () => {
  return (
    <div className="max-sm:hidden h-[80px] flex justify-between max-lg:justify-center items-center containerAK">
      <div className="w-[620px] h-[48px]">
        <div className="flex items-center gap-3">
          <CategoryMenu />
          <div className="flex gap-3">
            <button className="flex h-[24px] text-sm w-[107px] items-center justify-center gap-1">
              <img className="flex w-[24px] h-[24px]" src={map} alt="Map" /> 
              Track Order
            </button>
            <button className="flex h-[24px] text-sm w-[89px] items-center justify-center gap-1">
              <img className="flex w-[24px] h-[24px]" src={com} alt="Compare" /> 
              Compare
            </button>
            <button className="flex h-[24px] text-sm w-[150px] items-center justify-center gap-1">
              <img className="flex w-[18px] h-[15px]" src={hedset} alt="Customer Support" /> 
              Customer Support
            </button>
            <button className="flex gap-1 items-center">
            <img src={inf} className="w-5 h-5" />Help
          </button>
          </div>
        </div>
      </div>
      <div className="flex items-center max-lg:hidden">
        <a href="tel:+20-123456789">
          <img src={hedset} alt="Phone" className=" mr-2" />
        </a>
        +20-123456789
      </div>
    </div>
  );
};

export default HeaderBottomBar;
