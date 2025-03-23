import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AuctionCard from "./AuctionCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLocalization from "@/hooks/useLocalization";
import Skeleton from "react-loading-skeleton";
export default function AuctionCarousel({ auctions, status }) {
  const { dir } = useLocalization();
  return (
    <Swiper
      key={dir}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="auction-swiper"
    >
      {status === "loading" ? (
        Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <Skeleton height={200} className="mb-4" />
              <Skeleton height={20} width="80%" className="mb-2" />
              <Skeleton height={20} width="60%" />
            </div>
          </SwiperSlide>
        ))
      ) : auctions.length > 0 ? (
        auctions.slice(0, 4).map((auction) => (
          <SwiperSlide key={auction.id}>
            <AuctionCard auction={auction} />
          </SwiperSlide>
        ))
      ) : (
        <div className="col-span-6">
          <p className="text-md text-gray-500 mt-2">
            Sorry, there are no auctions available at the moment. Please check
            back later.
          </p>
        </div>
      )}
    </Swiper>
  );
}
