import Aro from "../assets/icons/ArrowRight.svg";
import React from "react";
import Navgit from "./Navgit";

function EmailVerification() {
  return (
    <>
      <Navgit />
      <div className="flex items-center justify-center pt-5  pb-10 sm:my-[20px]">
      <div className="w-[424px]  max-sm:w-[310px] rounded shadow-2xl pb-10  text-xl font-semibold ">
          <div className=" min-h-[80px] flex justify-center flex-col items-center text-center  mx-auto w-[360px] max-sm:w-[280px] pt-3">
            <h1 className="text-center py-1 text-xl font-semibold">
              Verify Your Email Address
            </h1>
            <p className="text-[#5F6C72] font-normal text-sm pt-1">
              Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
              tristique a eu in diam.{" "}
            </p>
          </div>
          <div className="  flex flex-col justify-center items-center  ">
            <div className="flex justify-between items-center gap-40 max-sm:gap-20 py-4 text-sm ">
              <h1>Verification Code</h1>
              <h1 className="text-[#2DA5F3] font-medium text-sm">
                Resend Code
              </h1>
            </div>
            <input
              type="number"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-2 "
            />
          </div>
          <div className="bg-white h-[48px] mt-8  mx-auto w-[360px]  max-sm:w-[280px]  ">
            <button className="bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded">
              {" "}
              Verify me
              <img src={Aro} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
