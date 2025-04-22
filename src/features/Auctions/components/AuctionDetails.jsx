import { getAuctionStatus } from "@/utils/getAuctionStatus";
import { useEffect, useState } from "react";
import { ImHammer2 } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auctionNow, showSingleAuction } from "../auctionsSlice";
import LoaderW from "@/utils/LoaderW";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AuctionModal from "./AuctionModal";
import { IoLockClosedOutline } from "react-icons/io5";

const AuctionDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auctionId = location.pathname.split("/")[2];
  const [showModal, setShowModal] = useState(false);

  const {
    singleAuction: auctionData,
    singleStatus,
    singleError,
    bidStatus,
    bidError,
  } = useSelector((state) => state.auctions);

  useEffect(() => {
      dispatch(showSingleAuction(auctionId));
    // console.log(auctionData);
  }, [dispatch, auctionId]);

  const {
    timeRemaining,
    formatTime,
    timeToStart,
    isAuctionEnded,
    isAuctionActive,
    hasAuctionStarted,
  } = getAuctionStatus(auctionData?.start_time, auctionData?.end_time);

  const [mainImage, setMainImage] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (auctionData?.images) {
      setMainImage(auctionData?.images[0]);
    }
  }, [auctionData]);

  if (singleStatus === "loading") {
    return (
      <div className="containerAK py-9">
        <div className="bg-white min-h-[75vh] max-w-4xl mx-auto">
          <Skeleton height={280} className="w-full rounded-lg" />
          <Skeleton height={30} width={200} className="mt-5" />
          <Skeleton height={25} className="mt-2 mb-3" width={250} />
          <Skeleton height={20} className="mt-2" count={3} />
          <Skeleton height={40} width={150} className="mt-6" />
        </div>
      </div>
    );
  }

  if (singleStatus === "failed") {
    return <p className="text-center text-red-600">{singleError}</p>;
  }

  return (
    <>
      <div className="containerAK py-9">
        <div className="bg-white max-w-4xl mx-auto">
          {/* Images  */}
          <div className="flex gap-4">
            <div className="w-3/4">
              <img
                src={mainImage}
                alt="Main"
                className="w-full h-[280px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-1/4 flex flex-col gap-2">
              {auctionData?.images
                ?.slice(0, 2)
                .map(
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
          {/* Details */}
          <h1 className="text-2xl font-bold text-gray-900 mt-4">
            {auctionData?.title}
          </h1>
          <p className="text-gray-600 mt-2">{auctionData?.description}</p>
          {/* More Details */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">More Details</h2>
            <div className="mt-2 flex justify-between sm:items-center max-sm:flex-col">
              <p className="text-gray-700">
                - Start Price:{" "}
                <span className="font-bold text-gray-900">
                  ${auctionData?.starting_price}
                </span>
              </p>
              <p className="text-gray-700">
                - Start Time:{" "}
                <span className="font-bold text-gray-900">
                  {auctionData?.start_time}
                </span>
              </p>
            </div>
            <div className="mt-2 flex justify-between sm:items-center max-sm:flex-col">
              <p className="text-gray-700">
                - Current Price:{" "}
                <span className="font-bold text-green-600">
                  ${auctionData?.current_price}
                </span>
              </p>
              <p className="text-gray-700">
                - End Time:{" "}
                <span className="font-bold text-gray-900">
                  {auctionData?.end_time}
                </span>
              </p>
            </div>
          </div>

          <div className="flex sm:items-center justify-between max-sm:flex-col-reverse gap-3 mt-6">
            {isAuctionActive ? (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
              >
                Auction Now <ImHammer2 />
              </button>
            ) : isAuctionEnded ? (
              <p className="text-xl font-bold text-red-600">
                Auction has ended
              </p>
            ) : (
              <p className="text-xl font-bold text-gray-600">
                Auction has not started yet
              </p>
            )}
            {isAuctionActive ? (
              <span className="text-lg font-bold text-gray-900">
                {formatTime(timeRemaining)}
              </span>
            ) : !isAuctionActive && !hasAuctionStarted ? (
              <div className="text-lg font-bold text-gray-900 flex items-center">
                <IoLockClosedOutline className="mr-1 text-gray-600" />
                {`Starts in ${formatTime(timeToStart)}`}
              </div>
            ) : null}
          </div>
          {error || <p className="text-red-600">{error}</p>}
        </div>
      </div>
      <AuctionModal
        id={auctionId}
        auctionData={auctionData}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AuctionDetails;
