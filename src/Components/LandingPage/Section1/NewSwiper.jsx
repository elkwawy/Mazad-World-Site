import React from "react";
import playstation from "../../../assets/Imgs/playstation.png";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function NewSwiper() {
  // بيانات السلايدز
  const slidesData = [
    {
      id: 1,
      title: "Xbox Consoles",
      subtitle: "THE BEST PLACE TO PLAY",
      description:
        "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
      image: playstation,
      price: "300 $",
    },
    {
      id: 2,
      title: "Playstation Consoles",
      subtitle: "EXPERIENCE THE BEST GAMING",
      description:
        "Enjoy exclusive games on Playstation. Save up to 30% on select titles.",
      image: playstation,
      price: "400 $",
    },
    {
      id: 3,
      title: "Nintendo Consoles",
      subtitle: "FUN FOR THE WHOLE FAMILY",
      description:
        "Discover the magic of Nintendo. Get special bundles and offers.",
      image: playstation,
      price: "250 $",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // إضافة المكونات الإضافية المطلوبة
      loop={true} // لجعل السلايدر يعمل بشكل دائري
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} // تشغيل تلقائي للسلايدر
      pagination={{ clickable: true }} // لإضافة النقاط السفلية
      spaceBetween={20} // المسافة بين السلايدز
      slidesPerView={1} // عدد السلايدز التي تظهر على الشاشة في وقت واحد
      navigation // لإضافة أزرار التنقل
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="grid grid-cols-2 gap-5 p-5 max-sm:gap-0 max-sm:p-3 max-sm:grid-cols-1 max-sm:flex flex-col items-end font-sans">
            {/* Text Section */}
            <div className="flex flex-col justify-center mb-10 px-3 max-sm:order-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 max-md:w-2 border-t-2 border-sec-color" />
                <p className="text-sm font-semibold text-sec-color">
                  {slide.subtitle}
                </p>
              </div>
              <h2 className="text-5xl max-md:text-3xl font-semibold leading-[56px] text-[#191c1f] mt-1">
                {slide.title}
              </h2>
              <p className="text-lg max-md:text-[15px] leading-6 text-[#475156] mt-4">
                {slide.description}
              </p>
              <button className="bg-sec-color text-base font-bold uppercase text-white w-[191px] h-14 mt-6 rounded-md flex items-center justify-center gap-3.5">
                At Auction
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image Section */}
            <div className="flex items-start justify-center 10 relative max-sm:order-1">
              <img
                src={slide.image}
                alt={`${slide.title} Image`}
                className="h-[408px] w-[368px] object-contain"
              />
              <div className="absolute top-[0Px] right-[0px]">
                <div className="bg-sec-color text-[22px] font-semibold text-white h-[108px] w-[108px] flex items-center justify-center rounded-full border-4 border-white">
                  {slide.price}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
