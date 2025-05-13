import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuthHook from "../hooks/useAuthHook";
import Navgit from "../components/Navgit";
import InputForm from "@/components/helpers/InputForm";
import PasswordForm from "@/components/helpers/PasswordForm";
import ButtonForm from "@/components/helpers/ButtonForm";

function SignUp() {
  const { handleSignup, loading } = useAuthHook();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is required"),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      await handleSignup(values);
    },
  });

  return (
    <div className="h-[90vh]">
      <Navgit />
      <div className="max-w-3xl mx-auto flex items-center justify-center mt-2 mb-9">
        <div className="w-[90%] sm:w-[70%] rounded-lg border border-gray-200 shadow-2xl">
          <div className="flex items-center text-xl font-semibold">
            <Link
              to="/login"
              className="w-[50%] h-[60px] flex items-center justify-center"
            >
              Sign In
            </Link>
            <button className="w-[50%] h-[60px] border-b-4 border-secondary">
              Sign Up
            </button>
          </div>

          <form
            className="flex flex-col justify-center items-center gap-3 p-4 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <InputForm
              labelName="Name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={formik.errors.name && formik.touched.name}
              placeholder="Enter your name"
              errorMessage={formik.errors.name}
            />
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

            <PasswordForm
              labelName="Confirm Password"
              type="password"
              name="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              condition={
                formik.errors.password_confirmation &&
                formik.touched.password_confirmation
              }
              errorMessage={formik.errors.password_confirmation}
              PasswordLight={formik.values.password_confirmation.length}
            />

            <ButtonForm title="Sign Up" loading={loading} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
