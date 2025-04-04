import { getAuctionStatus } from "@/utils/getAuctionStatus";
import React from "react";
import { ImHammer2 } from "react-icons/im";
import { Link } from "react-router-dom";

const AuctionCardHome = ({ auction }) => {
  const { timeRemaining, formatTime, isAuctionActive } = getAuctionStatus(
    auction?.start_time,
    auction?.end_time
  );
  return (
    <div className="bg-gray-100 mt-1 p-8 rounded-lg relative overflow-hidden">
      <div
        className={`absolute top-0 left-1 px-3 py-1 rounded-full text-sm text-white font-medium shadow-md
      ${isAuctionActive ? "bg-main-color" : "bg-gray-600"}`}
      >
        {isAuctionActive ? formatTime(timeRemaining) : "Auction Ended"}
      </div>

      <div className="absolute top-0 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
        {auction.current_price} $
      </div>
      <h2 className="text-4xl font-bold mt-3 mb-4">{auction.title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{auction.description}</p>
      <Link
        to={`/auction/${auction.id}`}
        className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
      >
        Auction now
        <ImHammer2 className="inline-block ml-1.5 rotate-90" />
      </Link>
      <div className="mt-8">
        <img
          src={auction.images[0]}
          alt="Auction Image"
          className="max-w-full rounded-2xl -m-4 float-end w-[250px] h-[260px] object-cover"
        />
      </div>
    </div>
  );
};

export default AuctionCardHome;
