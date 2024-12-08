import Aro from "../assets/icons/ArrowRight.svg";
import React from "react";
import { Link } from "react-router-dom";
import Navgit from "./Navgit";

function SignUp() {
  return (
    <>
      <Navgit />
      <div className="flex items-center justify-center pt-5  pb-10 sm:my-[20px]">
        <div className="w-[424px]  max-sm:w-[310px] rounded shadow-2xl pb-10  text-xl font-semibold ">
          <div className="text-xl font-semibold">
            <button className="w-[212px] max-sm:w-[150px] h-[60px] text-[#77878F]">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="w-[212px] max-sm:w-[150px] h-[60px] border-b-4 border-[#FA8232]">
              Sign Up
            </button>
          </div>

          <div className="flex flex-col    justify-center items-center  ">
            <div>
              <div className="flex justify-start  gap-44 py-4 ">
                <h1>Name</h1>
              </div>
              <input
                type="text"
                className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3   "
              />
            </div>
          </div>
          <div className="  flex flex-col justify-center items-center  ">
            <div>
              <div className="flex justify-start  gap-44 py-4 ">
                <h1>Email Address</h1>
              </div>
              <input
                type="email"
                className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded  px-3   "
              />
            </div>
          </div>
          <div className="  flex flex-col  pl-9  max-sm:pl-3 ">
            <div className="flex  items-start justify-start text-start max-sm:gap-20 py-4   ">
              <h1>Password</h1>
            </div>
            <input
              type="password"
              placeholder="8+ characters"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3"
            />
          </div>
          <div className="  flex flex-col  pl-9  max-sm:pl-3   ">
            <div className="flex  items-start justify-start text-start max-sm:gap-20 py-4   ">
              <h1>Confirm Password</h1>
            </div>
            <input
              type="password"
              className="border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3"
            />
          </div>
          <div className="pl-9  max-sm:pl-3   pt-3 flex gap-3 items-center">
            <div>
              <input type="checkbox" />
            </div>
            <div className="text-sm">
              {" "}
              Are you agree to Clicon{" "}
              <span className="text-blue-700">Terms of Condition</span>
            </div>
          </div>
          <div className="bg-white h-[48px] mt-3  mx-auto w-[360px]  max-sm:w-[280px]  ">
            <button className="bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded">
              {" "}
              Sign up <img src={Aro} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
