import useLocalization from "@/hooks/useLocalization";
import playstation from "@/assets/Imgs/playstation.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchAuctions } from "@/features/auctions/auctionsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImHammer2 } from "react-icons/im";
const AuctionsCarousel = () => {
  const { t, dir } = useLocalization();

  const slidesData = [
    {
      id: 1,
      title: t("slides.xbox.title"),
      subtitle: t("slides.xbox.subtitle"),
      description: t("slides.xbox.description"),
      image: playstation,
      price: "300 $",
    },
    {
      id: 2,
      title: t("slides.playstation.title"),
      subtitle: t("slides.playstation.subtitle"),
      description: t("slides.playstation.description"),
      image: playstation,
      price: "400 $",
    },
    {
      id: 3,
      title: t("slides.nintendo.title"),
      subtitle: t("slides.nintendo.subtitle"),
      description: t("slides.nintendo.description"),
      image: playstation,
      price: "250 $",
    },
  ];

  const dispatch = useDispatch();
  const { auctions, status } = useSelector((state) => state.auctions);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAuctions());
    }
  }, [dispatch, status]);
  console.log(auctions);

  return (
    <Swiper
      key={dir}
      modules={[Navigation, Pagination, Autoplay]} // إضافة المكونات الإضافية المطلوبة
      loop={true} // لجعل السلايدر يعمل بشكل دائري
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} // تشغيل تلقائي للسلايدر
      pagination={{ clickable: true }} // لإضافة النقاط السفلية
      spaceBetween={20} // المسافة بين السلايدز
      slidesPerView={1} // عدد السلايدز التي تظهر على الشاشة في وقت واحد
      //   navigation // لإضافة أزرار التنقل
      className="mySwiper w-full"
    >
      {auctions.slice(0, 3).map((auction) => (
        <SwiperSlide
          key={auction.id}
          className="bg-gray-100 p-6 rounded-lg relative overflow-hidden"
        >
          <div className="bg-gray-100 mt-1 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute  top-0 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
              {auction.current_price} $
            </div>
            <h2 className="text-4xl font-bold mt-1  mb-4">{auction.title}</h2>
            <p className="text-gray-600 mb-6 max-w-md">{auction.description}</p>
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
              Auction now
              <ImHammer2 className="inline-block ml-1.5 rotate-90" />
            </button>
            <div className="mt-8">
              <img
                src={auction.image}
                alt="Auction Image"
                className="max-w-full rounded-2xl -m-4  float-end h-[210px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AuctionsCarousel;
