import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuthHook from "../hooks/useAuthHook";
import Navgit from "../components/Navgit";
import InputForm from "@/components/helpers/InputForm";
import PasswordForm from "@/components/helpers/PasswordForm";
import ButtonForm from "@/components/helpers/ButtonForm";

function Login() {
  const { handleLogin, loading } = useAuthHook();

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
    <div className="h-[90vh]">
      <Navgit />
      <div className="max-w-3xl mx-auto flex items-center justify-center mt-2 mb-9">
        <div className="w-[90%] sm:w-[70%] rounded-lg border border-gray-200 shadow-2xl">
          <div className="flex items-center text-xl font-semibold">
            <button className="w-[50%] h-[60px] border-b-4 border-[#FA8232]">
              Sign In
            </button>
            <Link
              to="/signup"
              className="w-[50%] h-[60px] flex items-center justify-center"
            >
              Sign Up
            </Link>
          </div>

          <form
            className="flex flex-col justify-center items-end gap-3 p-4 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <InputForm
              labelName="Email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={formik.errors.email && formik.touched.email}
              placeholder="Enter your email"
              errorMessage={formik.errors.email}
            />

            <PasswordForm
              labelName="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={formik.errors.password && formik.touched.password}
              errorMessage={formik.errors.password}
              PasswordLight={formik.values.password.length}
            />

            {/*
              <Link
              to="/login/forgetPassword"
              className="text-[#2DA5F3] font-medium -ml-3 text-sm max-md:ml-10"
              >
              Forget Password
              </Link>
              */}

            <ButtonForm title="Sign In" loading={loading} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
