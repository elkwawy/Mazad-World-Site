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

const AuctionsCarousel = () => {
  const { t, dir } = useLocalization();
  const dispatch = useDispatch();
  const { auctions, status } = useSelector((state) => state.auctions);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAuctions());
    }
  }, [dispatch, status]);

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
              <div className="bg-gray-100 mt-1 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                  {auction.current_price} $
                </div>
                <h2 className="text-4xl font-bold mt-1 mb-4">
                  {auction.title}
                </h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  {auction.description}
                </p>
                <Link to={`/auction/${auction.id}`} className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
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
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default AuctionsCarousel;
