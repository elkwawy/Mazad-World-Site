import React from "react";

const IdentityVerification = () => {
  return (
    <div className="flex justify-center items-center border-2 border-gray-300 p-3">
      <div className=" p-8 rounded-lg  w-[600px]">
        <h2 className="text-xl font-bold text-center mb-6 text-gray-700">Identity Verification</h2>
        
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Main Photo */}
          <div className="col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 bg-gray-200 text-gray-600 h-40 rounded-lg text-center text-sm">
            Upload ID Photo
          </div>
          
          {/* Profile Photo */}
          <div className="col-span-1 flex flex-col items-center justify-center border-2 border-gray-300 bg-gray-200 text-gray-600 h-20 rounded-lg text-center text-sm">
            Upload Profile Photo
          </div>
        </div>
        
        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-sec-color focus:outline-none"
          />
          <input
            type="text"
            placeholder="Full Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-sec-color focus:outline-none"
          />
          <input
            type="text"
            placeholder="National ID Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-sec-color focus:outline-none"
          />
        </div>
        
        {/* Confirm Button */}
        <div className="mt-6 text-center">
          <button className="w-full px-6 py-3 bg-sec-color text-white font-bold rounded-lg shadow-md hover:opacity-85 transition-all">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;