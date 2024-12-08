import Aro from "../assets/icons/ArrowRight.svg";
import React from "react";
import { Link } from "react-router-dom";
import Navgit from "./Navgit";

function Login() {
  return (
    <>
      <Navgit />
      <div className="flex items-center justify-center pt-5  pb-10 sm:my-[20px]">
        <div className="w-[424px]  max-sm:w-[310px] rounded shadow-2xl pb-10  text-xl font-semibold ">
          <div>
            <button className="w-[212px] max-sm:w-[150px] h-[60px] border-b-4 border-[#FA8232]">
              Sign In
            </button>
            <button className="w-[212px] max-sm:w-[150px] h-[60px] text-[#77878F]">
              <Link to="/signup"> Sign Up</Link>
            </button>
          </div>
          <div className="  flex flex-col justify-center items-center  ">
            <div>
              <div className="flex justify-start  gap-44 py-4 ">
                <h1>Email Address</h1>
              </div>
              <input
                type="email"
                className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-2   "
              />
            </div>
          </div>
          <div className="  flex flex-col justify-center items-center  ">
            <div className="flex justify-between items-center gap-44 max-sm:gap-20 py-4 ">
              <h1>Password</h1>
              <h1 className="text-[#2DA5F3] font-medium text-sm">
                <Link to="forgetPassword" className="text-[#2DA5F3]">Forget Password</Link>
              </h1>
            </div>
            <input
              type="password"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-2 "
            />
          </div>
          <div className="bg-white h-[48px] mt-8  mx-auto w-[360px]  max-sm:w-[280px]  ">
            <button className="bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded">
              {" "}
              Sign in <img src={Aro} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
