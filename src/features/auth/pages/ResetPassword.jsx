import Aro from "@/assets/icons/ArrowRight.svg";
import React from "react";
import Navgit from "../components/Navgit";

function ResetPassword() {
  return (
    <>
      <Navgit />
      <div className="flex items-center justify-center pt-5  pb-10 sm:my-[20px]">
        <div className="w-[424px]  max-sm:w-[310px] rounded shadow-2xl pb-10  text-xl font-semibold ">
          <div className=" min-h-[80px] flex justify-center flex-col items-center text-center  mx-auto w-[360px] max-sm:w-[280px] pt-3">
            <h1 className="text-center py-1 text-xl font-semibold">
              Reset Password{" "}
            </h1>
            <p className="text-[#5F6C72] font-normal text-sm pt-1">
              Duis sagittis molestie tellus, at eleifend sapien pellque quis.
              Fusce lorem nunc, fringilla sit amet nunc.{" "}
            </p>
          </div>
          <div className="  flex flex-col  pl-9  max-sm:pl-3 ">
            <div className="flex  items-start justify-start text-start text-sm font-normal max-sm:gap-20 py-4   ">
              <h1>Password</h1>
            </div>
            <input
              type="password"
              placeholder="8+ characters"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3 text-sm font-normal"
            />
          </div>
          <div className="  flex flex-col  pl-9  max-sm:pl-3   ">
            <div className="flex  items-start justify-start text-start max-sm:gap-20 py-4 text-sm font-normal  ">
              <h1>Confirm Password</h1>
            </div>
            <input
              type="password"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3"
            />
          </div>
          <div className="bg-white h-[48px] mt-8  mx-auto w-[360px]  max-sm:w-[280px]  ">
            <button className="bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded">
              {" "}
              Reset Password
              <img src={Aro} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
