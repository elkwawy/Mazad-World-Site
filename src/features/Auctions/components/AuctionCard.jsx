import { FaRegEye } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";  // أيقونة لو المزاد لم يبدأ
import { AiOutlineCloseCircle } from "react-icons/ai";  // أيقونة لو المزاد انتهى
import { formatPrice } from "@/utils/formatters";
import useLocalization from "@/hooks/useLocalization";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuctionStatus } from "@/utils/getAuctionStatus";

export default function AuctionCard({ auction }) {
  const navigate = useNavigate();
  const { t } = useLocalization();
  const { title, images, current_price, start_time, end_time } = auction;

  const { timeRemaining, timeToStart, isAuctionActive, hasAuctionStarted, isAuctionEnded, formatTime } = getAuctionStatus(
    start_time,
    end_time
  );

  const handleShowDeal = () => {
    navigate(`/auction/${auction.id}`, { state: { auction } });
  };

  return (
    <div
      className={`bg-[#f3f4f6] rounded-lg overflow-hidden shadow group ${
        isAuctionActive || hasAuctionStarted ? "" : "cursor-not-allowed opacity-65"
      }`}
    >
      <div
        onClick={ handleShowDeal }
        className={`relative cursor-pointer`}
      >
        <img src={images[0]} alt={title} className="w-full h-48 object-fill" />
        
        {/* عرض التوقيت المتبقي إذا كان المزاد شغال */}
        {isAuctionActive && (
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <FiClock className="mr-1 text-gray-600" />
            {formatTime(timeRemaining)}
          </div>
        )}

        {/* عرض التوقيت المتبقي قبل بدء المزاد */}
        {!isAuctionActive && !hasAuctionStarted && (
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <IoLockClosedOutline className="mr-1 text-gray-600" />
            {`Starts in ${formatTime(timeToStart)}`}
          </div>
        )}

        {/* عرض حالة انتهاء المزاد */}
        {isAuctionEnded && (
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium flex items-center bg-red-600 text-white">
            <AiOutlineCloseCircle className="mr-1" />
            Auction Ended
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-medium truncate">{title}</h3>

        <div className="flex justify-between items-center mt-1.5">
          <p className="text-sm text-gray-500">
            {new Date(end_time).toLocaleDateString()}
          </p>
          {!isAuctionEnded && (
            <button
              onClick={handleShowDeal}
              className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm hover:bg-secondary hover:text-white transition-colors"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
