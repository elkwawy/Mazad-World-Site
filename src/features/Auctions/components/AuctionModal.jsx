import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auctionNow, showSingleAuction } from "../auctionsSlice";
import { showToast } from "@/utils/showToast";
import InputForm from "@/components/helpers/InputForm";

const AuctionModal = ({ isOpen, onClose, id, auctionData }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  // console.log(auctionData);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid phone number")
      .required("Phone number is required"),
    bidValue: Yup.number()
      .typeError("Bid value must be a number")
      .positive("Bid value must be a positive number")
      .required("Bid value is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      bidValue: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      if (!formRef.current) return;

      try {
        // Step 1: Send auction bid
        await dispatch(
          auctionNow({ id: id, bid_amount: values.bidValue })
        ).unwrap();

        // Step 2: Send email
        await emailjs.sendForm(
          "service_jxq0uik",
          "template_0nt5mtj",
          formRef.current,
          {
            publicKey: "PmARZnCEW1lngVqiK",
          }
        );

        // Reset form after email sent
        
        // Step 3: Refresh auction data
        await dispatch(showSingleAuction(id)).unwrap();
        
        // resetForm();
        // Step 4: Close modal
        onClose();
        
        window.location.href = auctionData.paymentLink;

        // Step 5: Redirect to payment link
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Auction Registration
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          ref={formRef}
          className="flex flex-col gap-3"
        >
          {/* Name */}
          <InputForm
            labelName="Name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            condition={formik.touched.name && formik.errors.name}
            errorMessage={formik.errors.name}
            placeholder="Enter your name"
          />

          {/* Email */}
          <InputForm
            labelName="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            condition={formik.touched.email && formik.errors.email}
            errorMessage={formik.errors.email}
            placeholder="Enter your email"
          />

          {/* Phone */}
          <InputForm
            labelName="Phone"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            condition={formik.touched.phone && formik.errors.phone}
            errorMessage={formik.errors.phone}
            placeholder="Enter your phone number"
          />

          {/* Bid Value */}
          <InputForm
            labelName="Bid Value"
            type="number"
            name="bidValue"
            value={formik.values.bidValue}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            condition={formik.touched.bidValue && formik.errors.bidValue}
            errorMessage={formik.errors.bidValue}
            placeholder="Enter bid amount"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Auction Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuctionModal;
