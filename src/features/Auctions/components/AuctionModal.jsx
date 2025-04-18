// components/AuctionModal.jsx
import React from "react";

const AuctionModal = ({ isOpen, onClose }) => {
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

        <form className="flex flex-col gap-2.5">
          {/* Auction Number */}
          <div className="flex flex-col">
            <label htmlFor="auctionNumber" className="mb-1 text-gray-700 font-medium">
              Auction Number
            </label>
            <input
              type="text"
              id="auctionNumber"
              placeholder="Enter auction number"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Payment Method */}
          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-1 text-gray-700 font-medium">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="visa">Visa</option>
              <option value="instapay">InstaPay</option>
              <option value="vodafone_cash">Vodafone Cash</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuctionModal;
