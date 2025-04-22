// components/AuctionModal.jsx
import React, { useState } from "react";

const AuctionModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bidValue: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleStep1Submit = async (e) => {
    e.preventDefault();
    try {
      // API request for step 1
      await fetch("/api/step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });
      setStep(2);
    } catch (err) {
      console.error("Step 1 Error:", err);
    }
  };

  const handleStep2Submit = async (e) => {
    e.preventDefault();
    try {
      // API request for step 2
      await fetch("/api/step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bidValue: formData.bidValue }),
      });
      onClose(); // Close modal after final submission
    } catch (err) {
      console.error("Step 2 Error:", err);
    }
  };

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
          Auction Registration ({step} of 2)
        </h2>

        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="flex flex-col gap-3">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="flex flex-col gap-3">
            {/* Bid Value */}
            <div className="flex flex-col">
              <label htmlFor="bidValue" className="mb-1 font-medium text-gray-700">Bid Value</label>
              <input
                type="number"
                id="bidValue"
                value={formData.bidValue}
                onChange={handleChange}
                placeholder="Enter bid amount"
                className="border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex justify-between gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border border-gray-400 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuctionModal;
