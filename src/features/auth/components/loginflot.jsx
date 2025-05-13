import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import useLocalization from "@/hooks/useLocalization";
import useAuthHook from "../hooks/useAuthHook";
import InputForm from "@/components/helpers/InputForm";
import PasswordForm from "@/components/helpers/PasswordForm";
import ButtonForm from "@/components/helpers/ButtonForm";

const LoginFlot = () => {
  const { dir } = useLocalization();
  const { handleLogin, loading } = useAuthHook();
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is Required"),
    }),
    onSubmit: async (values) => {
      await handleLogin(values);
    },
  });

  return (
    <div className="relative z-50 text-black" ref={menuRef}>
      <button onClick={toggleMenu}>
        <AiOutlineUser className="w-8 h-8 text-white" />
      </button>
      {isMenuOpen && (
        <div
          className={`absolute flex flex-col items-center rounded-xl ${
            dir === "ltr"
              ? "right-1 max-sm:-right-[53px]"
              : "left-1 max-sm:-left-[53px]"
          } top-[50px] mx-auto z-40 bg-white shadow-lg p-5 text-sm w-[424px] max-sm:w-[320px]`}
        >
          <h1 className="text-xl pt-5 font-semibold">
            Sign in to your account
          </h1>
          <form
            className="w-full flex flex-col items-center gap-4 mt-5"
            onSubmit={formik.handleSubmit}
          >
            <InputForm
              labelName="Email Address"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={formik.errors.email && formik.touched.email}
              errorMessage={formik.errors.email}
            />
            <PasswordForm
              labelName="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={formik.errors.password && formik.touched.password}
              errorMessage={formik.errors.password}
            />
            {/*
              <Link
                to="/login/forgetPassword"
                className="text-[#2DA5F3] ml-auto font-medium text-sm"
              >
                Forget Password
              </Link>
              */}
            <ButtonForm title="LOGIN" loading={loading} type="submit" />
          </form>
          <div className="flex justify-center mt-3 mr-8">
            Don’t have account
          </div>
          <Link to="/SignUp">
            <button
              onClick={toggleMenu}
              className="bg-white trans border-secondary hover:border-primary rounded-md mt-3 h-[48px] max-md:w-[277px] w-[360px] flex justify-center items-center gap-2 text-sm font-semibold text-secondary border shadow-[#FFE7D6] "
            >
              CREATE ACCOUNT
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginFlot;
