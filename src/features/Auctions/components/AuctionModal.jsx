import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showToast } from "@/utils/showToast";
import InputForm from "@/components/helpers/InputForm";
import axiosInstance from "@/hooks/axiosInstance";

const AuctionModal = ({ isOpen, onClose, id, auctionData }) => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const formRef = useRef(null);

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
      .positive(" must be a positive number")
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
      if (values.bidValue <= auctionData.current_price) {
        showToast("error", "Bid value must be greater than current price");
        return;
      }

      setLoading(true);

      if (!formRef.current) return;

      // bank_transfer ده الفيزا
      // credit ده المحافظ زي فوادفون كاش

      const formData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        bid_value: values.bidValue,
        payment_method: paymentMethod,
        product_title: auctionData.title,
        product_image_url: auctionData.images[0],
        product_price: auctionData.starting_price,
      };
      console.log(formData);

      try {
        const response = await axiosInstance.post("v1/bids", formData);

        // Step 4: Handle payment based on selected method
        if (paymentMethod === "bank_transfer") {
          // Redirect to bank_transfer payment link
          window.open(auctionData.paymentLink, "_blank");
          onClose();
        } else {
          // For credit payment, just close the modal (user will pay manually)
          onClose();
          resetForm();
          showToast(
            "success",
            "Please complete your payment via mobile wallet and send the receipt to 01285142430"
          );
        }

        // Step 1: Send auction bid
        // await dispatch(
        //   auctionNow({ id: id, bid_amount: values.bidValue })
        // ).unwrap();
        // Step 2: Send email
        // await emailjs.sendForm(
        //   "service_jxq0uik",
        //   "template_0nt5mtj",
        //   formRef.current,
        //   {
        //     publicKey: "PmARZnCEW1lngVqiK",
        //   }
        // );
      } catch (error) {
        console.error("Something went wrong:", error);
        showToast("error", "An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-md shadow-lg relative">
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

          <div className="grid grid-cols-2 gap-4">
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
          </div>

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="bank_transfer_Payment"
                name="paymentMethod"
                value="bank_transfer"
                checked={paymentMethod === "bank_transfer"}
                onChange={() => setPaymentMethod("bank_transfer")}
                className="h-4 w-4 text-primary focus:ring-secondary"
              />
              <label
                htmlFor="bank_transfer_Payment"
                className="ml-2 block text-sm text-gray-700"
              >
                Online Payment (Visa/Amazon Pay/Cash App Pay)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="creditPayment"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={() => setPaymentMethod("credit")}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              />
              <label
                htmlFor="creditPayment"
                className="ml-2 block text-sm text-gray-700"
              >
                Mobile Payment (InstaPay/We Pay/Vodafone Cash)
              </label>
            </div>

            {paymentMethod === "credit" && (
              <div className="mt-2 p-3 bg-gray-100 rounded text-sm">
                <p>Please transfer to:</p>
                <a
                  href={`https://wa.me/201007481557?text=Payment+for+auction+${auctionData.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  01007481557
                </a>
                <p>
                  Then send payment receipt to this number via WhatsApp to same
                  phone number.
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-md hover:bg-secondary transition"
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
