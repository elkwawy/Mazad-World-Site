import useLocalization from "@/hooks/useLocalization";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchAuctions } from "@/features/auctions/auctionsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImHammer2 } from "react-icons/im";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { getAuctionStatus } from "@/utils/getAuctionStatus";
import AuctionCardHome from "./AuctionCardHome";

const AuctionsCarousel = () => {
  const { t, dir } = useLocalization();
  const dispatch = useDispatch();
  const { auctions, status, error } = useSelector((state) => state.auctions);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAuctions());
    }
  }, [dispatch, status]);

  // Error state
  if (status === "failed") {
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        {t("An error occurred while loading auctions")} 😓
        <br />
        <span className="text-sm text-gray-500">{error}</span>
      </div>
    );
  }

  // No data state
  if (status === "succeeded" && auctions.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        {t("No auctions available at the moment")}
        <div className="mt-4 text-3xl text-gray-400 flex justify-center">
          <ImHammer2 />
        </div>
      </div>
    );
  }

  return (
    <Swiper
      key={dir}
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      className="mySwiper w-full"
    >
      {status === "loading"
        ? Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-100 mt-1 p-8 rounded-lg">
                <div className="absolute top-5 right-3 text-white px-3 py-1 rounded-full text-sm">
                  <Skeleton width={60} height={30} />
                </div>
                <h2 className="text-4xl font-bold mt-1 mb-4">
                  <Skeleton width={200} height={30} />
                </h2>
                <p className="text-gray-600 mb-6 w-[65%]">
                  <Skeleton count={2} />
                </p>
                <Skeleton width={120} height={40} />
                <div className="mt-8 flex justify-end">
                  <Skeleton width={250} height={160} className="rounded-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))
        : auctions.slice(0, 3).map((auction) => (
            <SwiperSlide
              key={auction.id}
              className="bg-gray-100 p-6 rounded-lg relative overflow-hidden"
            >
              <AuctionCardHome auction={auction} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};


export default AuctionsCarousel;
