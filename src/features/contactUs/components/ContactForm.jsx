import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showToast } from "@/utils/showToast";
import axiosInstance from "@/hooks/axiosInstance";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post("v1/contact", values);
        showToast(
          "success",
          response.data.message || "Message sent successfully!"
        );
        resetForm();
      } catch (error) {
        showToast(
          "error",
          error.response?.data?.message ||
            "Something went wrong in sending the message"
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
      <form ref={formRef} onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-600">{formik.errors.name}</p>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your name"
            className={`w-full px-4 py-2 border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent`}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent`}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            {formik.touched.message && formik.errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>
          <textarea
            name="message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your message"
            className={`w-full px-4 py-2 border ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
