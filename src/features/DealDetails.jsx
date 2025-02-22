import { useState } from "react";
import { ImHammer2 } from "react-icons/im";

const DealDetails = () => {
  const deal = {
    name: "Luxury Villa",
    description:
      "This is a beautiful luxury villa located in Beverly Hills. A perfect place to live in peace and comfort.",
    images: [
      "https://th.bing.com/th/id/R.d220dc959681d6b3de363982fa1a60ef?rik=WQtZnj1A286eQA&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.O9nIGE4tMlRXgNs7GmFFLgHaE8?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/R.1c20dc239e57799dad131c4f2690939c?rik=QIFnLk26Qjf7wQ&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.TN5XXLzdjScXWizVct5JxwHaEk?rs=1&pid=ImgDetMain",
    ],
    startPrice: 150,
    currentPrice: 195,
    auctionTime: "01:50:22",
  };

  const [mainImage, setMainImage] = useState(deal.images[0]);

  return (
    <div className="containerAK py-9 ">
      <div className="bg-white  max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="flex gap-4">
          <div className="w-3/4">
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-[280px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            {deal.images.map(
              (img, index) =>
                img !== mainImage && (
                  <img
                    key={index}
                    src={img}
                    alt={`Sub ${index + 1}`}
                    className="w-full h-[88px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                    onClick={() => setMainImage(img)}
                  />
                )
            )}
          </div>
        </div>

        {/* Details Section */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">{deal.name}</h1>
        <p className="text-gray-600 mt-2">{deal.description}</p>

        {/* Pricing Section */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">More Details</h2>
          <p className="text-gray-700">
            - Start Price:{" "}
            <span className="font-bold text-green-600">${deal.startPrice}</span>
          </p>
          <p className="text-gray-700">
            - Current Price:{" "}
            <span className="font-bold text-red-500">${deal.currentPrice}</span>
          </p>
        </div>

        {/* Auction Timer & Button */}
        <div className="flex items-center justify-between mt-6">
          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
            Auction Now
            <ImHammer2 />
          </button>
          <span className="text-lg font-bold text-gray-900">
            {deal.auctionTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DealDetails;
