import { FaEye } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";  // أيقونة لو المزاد لم يبدأ
import { AiOutlineCloseCircle } from "react-icons/ai";  // أيقونة لو المزاد انتهى
import { getAuctionStatus } from "@/utils/getAuctionStatus";

const AuctionCardHome = ({ auction }) => {
  const { timeRemaining, timeToStart, isAuctionActive, hasAuctionStarted, isAuctionEnded, formatTime } = getAuctionStatus(
    auction?.start_time,
    auction?.end_time
  );

  return (
    <div className="bg-gray-100 mt-1 p-8 rounded-lg relative overflow-hidden">
      {/* عرض التوقيت المتبقي قبل بدء المزاد */}
      {!isAuctionActive && !hasAuctionStarted && (
        <div className="absolute top-0 left-1 px-3 py-1 rounded-full text-sm text-white font-medium shadow-md bg-gray-600">
          <IoLockClosedOutline className="mr-1 inline" />
          {`Starts in ${formatTime(timeToStart)}`}
        </div>
      )}

      {/* عرض التوقيت المتبقي إذا كان المزاد شغال */}
      {isAuctionActive && (
        <div className="absolute top-0 left-1 px-3 py-1 rounded-full text-sm text-white font-medium shadow-md bg-main-color">
          {formatTime(timeRemaining)} {/* تنسيق الوقت المتبقي */}
        </div>
      )}

      {/* عرض حالة انتهاء المزاد */}
      {isAuctionEnded && (
        <div className="absolute top-0 left-1 px-3 py-1 rounded-full text-sm text-white font-medium shadow-md bg-red-700">
          <AiOutlineCloseCircle className="mr-1 inline" />
          Auction Ended
        </div>
      )}

      <div className="absolute top-0 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
        {auction.current_price} $
      </div>
      <h2 className="text-4xl font-bold mt-3 mb-4">{auction.title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{auction.description}</p>
      <Link
        to={`/auction/${auction.id}`}
        className={`${isAuctionActive ? "bg-secondary hover:bg-secondary/90" : "bg-gray-600 hover:bg-gray-600/90"} text-white px-8 py-3 rounded-full transition-colors`}
      >
        {isAuctionActive ? "Auction Now" : "Show Auction"}
        {isAuctionActive ? (
          <ImHammer2 className="inline-block ml-1.5 rotate-90" />
        ) : (
          <FaEye className="inline-block ml-1.5 " />
        )}
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
