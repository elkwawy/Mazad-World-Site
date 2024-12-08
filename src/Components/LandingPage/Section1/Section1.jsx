import Newswiper from "./Newswiper.jsx";
import airbus from "../../../assets/Imgs/airbus.png";
import pixel6Pro from "../../../assets/Imgs/pixel6Pro.png";

import { FaArrowRight } from "react-icons/fa6";
function Section1() {
  return (
    <div className="flex justify-center items-center containerAK pt-4 pb-8">
      <div className="grid-cols-[872px_424px] max-sm:space-y-6 grid lg:px-14  gap-6  max-xl:grid-cols-[800px] max-xl:gap-4  max-lg:grid-cols-[750px] max-md:px-4 max-md:grid-cols-1 ">
        <div className="flex h-[calc(100%)]  max-sm:mt-6 w-full bg-[#f2f4f5] rounded-md">
          {/*<CardSlider/>*/}
          <Newswiper />
        </div>
        <div className="flex  max-md:flex-col xl:flex-col  justify-center items-center gap-4 shrink-0  box-border   ">
          <div className="bg-[#191c1f] box-border overflow-hidden h-[232px] max-lg:p-2   flex justify-start items-stretch flex-col w-[100.00%] pt-6 rounded-md max-lg:pt-2">
            <div className="flex justify-between  items-start flex-row gap-2 grow-0 shrink-0 basis-auto pl-[30px] max-lg:pl-1 max-xl:pl-1 pr-5  ">
              <div className="max-w-[162px] mx-3 mt-6  z-50 max-sm:text-lg grow-0 shrink-0 basis-auto box-border pt-[22px]">
                <p className="[font-family:'Public_Sans',sans-serif] text-sm font-medium uppercase text-[#ebc80c] m-0 p-0">
                  Summer Sales
                </p>
                <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-left leading-8 text-[white] w-[100.00%] max-lg:text-lg box-border mt-[5px] max-sm:text-sm max-sm:w-[100px]">
                  New Google Pixel 6 Pro
                </p>
              </div>
              <div className=" flex relative  justify-center items-center max-lg:mt-2 bg-[#efd33d] [font-family:'Public_Sans',sans-serif] text-base font-semibold text-[#141414] -mt-4 min-w-[102px] h-10 w-[102px] cursor-pointer  box-border ">
                29% OFF
              </div>
            </div>
            <div className="mt-[-88px] self-end grow-0 shrink-0 basis-auto max-lg:pt-4  ">
              <img
                src={pixel6Pro}
                className="h-[185px] -z-50 max-lg:w-[160px] max-lg:-mb-2 max-w-[initial]  w-[236px]  max-sm:w-[150px]"
              />
            </div>
            <div className="mt-[-95px] grow-0 shrink-0 max-xl:-ml-6 max-lg:-ml-0 mx-2 basis-auto lg:pl-10  ">
              {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold uppercase text-[white] h-12 min-w-[120px]  cursor-pointer inline-flex items-center justify-center gap-[9px] box-border rounded-sm border-[none]">
                Shop Now
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#f2f4f5] box-border overflow-hidden h-[232px] max-md:gap-10  max-sm:gap-0  flex justify-start items-center flex-row w-[100.00%]  px-8 py-10 max-sm:p-0 rounded-md">
            <img src={airbus} className=" max-sm:w-[150px]  w-40 box-border " />
            <div className="max-w-[174px] max-sm:w-[100px] grow-0 shrink basis-auto box-border  max-sm:m-0 ml-[19px]">
              <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-left leading-8 text-[#191c1f] w-[100.00%] box-border m-0 p-0">
                Xiaomi FlipBuds Pro
              </p>
              <p className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#2da5f3] mt-3 m-0 p-0">
                $299 USD
              </p>
              {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white]  h-12 min-w-[130px]    inline-flex items-center justify-center   box-border mt-5 rounded-sm border-[none]">
                Shop Now
                <FaArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<Slider1/>*/}
    </div>
  );
}

export default Section1;
