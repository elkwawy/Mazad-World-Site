import { FiWatch } from "react-icons/fi";
import { TbBrandMantine } from "react-icons/tb";
import { FaTshirt, FaCar } from "react-icons/fa";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoMdArrowRoundForward } from "react-icons/io";
import playstation from "@/assets/Imgs/playstation.png";
import useLocalization from "@/hooks/useLocalization";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const IntroSection = () => {
  return (
    <div className="bg-gray-100 py-6 px-10 max-lg:px-7 max-sm:px-4 rounded-lg relative overflow-hidden text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Mazad World</h2>
      <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Mazad World is the leading online auction platform where you can find the best deals on electronics, watches, cars, antiques, fashion, and more.
        Join the auctions, bid on your favorite items, and enjoy a unique shopping experience at unbeatable prices.
      </p>

      <p className="text-gray-600 mt-2">
        Follow us and stay updated with the latest auctions!
      </p>

      {/* Social Media Icons */}
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://facebook.com" target="_blank" className="text-blue-600 text-3xl hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" className="text-blue-400 text-3xl hover:text-blue-600">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" className="text-pink-500 text-3xl hover:text-pink-700">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-blue-700 text-3xl hover:text-blue-900">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

const mainSection = () => {
  const { t, dir } = useLocalization();

  const categories = [
    {
      id: 1,
      name: t("M_categories.electronics"),
      icon: IoLogoElectron,
      count: "152",
    },
    {
      id: 2,
      name: t("M_categories.jewelry_watches"),
      icon: FiWatch,
      count: "87",
    },
    {
      id: 3,
      name: t("M_categories.vehicles"),
      icon: FaArrowUpFromWaterPump,
      count: "124",
    },
    {
      id: 4,
      name: t("M_categories.antiques_collectibles"),
      icon: TbBrandMantine,
      count: "65",
    },
    { id: 5, name: t("M_categories.fashion"), icon: FaTshirt, count: "45" },
    { id: 6, name: t("M_categories.cars"), icon: FaCar, count: "28" },
  ];

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
  return (
    <div className="containerAK py-8" dir={dir}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          {slidesData.map((category) => (
            <SwiperSlide
              key={category.id}
              className="bg-gray-100 p-6 rounded-lg relative overflow-hidden"
            >
              <div className="bg-gray-100 mt-1 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute  top-0 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                  {category.price}
                </div>
                <h2 className="text-4xl font-bold mt-1  mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  {category.description}
                </p>
                <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
                  {t("buttons.shop_now")}{" "}
                  <IoMdArrowRoundForward className="inline-block" />
                </button>
                <div className="mt-8">
                  <img
                    src={category.image}
                    alt="playstation"
                    className="max-w-full -m-4  float-end h-[210px] object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-rows-2 gap-6">
          <IntroSection />

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
            {categories.map((category) => (
              <SwiperSlide
                key={category.id}
                className="bg-gray-100 w-24  py-12 px-16 max-lg:px-7 max-sm:px-4 rounded-lg  overflow-hidden"
              >
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h4 className="font-bold -mt-2 mb-2 text-gray-600">
                      {t("all_categories")}
                    </h4>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-secondary font-bold text-xl mb-4">
                      {t("items")}: {category.count}
                    </p>
                    <button className="bg-secondary text-white px-6 py-2 max-lg:px-4 max-sm:px-3 rounded-full hover:bg-secondary/90 transition-colors">
                      {t("buttons.shop_now")}{" "}
                      <IoMdArrowRoundForward className="inline-block" />
                    </button>
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full">
                    <category.icon className="w-12 h-12 text-gray-600" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default mainSection;
