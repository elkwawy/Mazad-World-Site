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
import playstation from "../../assets/Imgs/playstation.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const mainSection = () => {
  const categories = [
    { id: 1, name: "Electronics", icon: IoLogoElectron, count: "152" },
    { id: 2, name: "Jewelry & Watches", icon: FiWatch, count: "87" },
    { id: 3, name: "Vehicles", icon: FaArrowUpFromWaterPump, count: "124" },
    {
      id: 4,
      name: "Antiques & Collectibles",
      icon: TbBrandMantine,
      count: "65",
    },
    { id: 5, name: "Fashion", icon: FaTshirt, count: "45" },
    { id: 6, name: "Cars", icon: FaCar, count: "28" },
  ];
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
    <div className="containerAK py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          //   navigation // لإضافة أزرار التنقل
          className="mySwiper w-full"
        >
          {slidesData.map((category) => (
            <SwiperSlide
              key={category.id}
              className="bg-gray-100 p-8 rounded-lg relative overflow-hidden"
            >
              <div className="bg-gray-100 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-1 right-1 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                  {category.price}
                </div>
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  {category.description}
                </p>
                <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
                  SHOP NOW <IoMdArrowRoundForward className="inline-block" />
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
          <div className="bg-gray-100 py-14 px-16 max-lg:px-7 max-sm:px-4 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-center gap-2">
              <div>
                <span className="inline-block bg-gray-200 shadow text-sm px-3 py-1 rounded-full mb-2">
                  New
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Rolex Submariner Watch
                </h3>
                <button className="bg-secondary text-white px-6 py-2 max-lg:px-4 max-sm:px-3  rounded-full hover:bg-secondary/90 transition-colors">
                  Shop now <IoMdArrowRoundForward className="inline-block" />
                </button>
              </div>
              <img
                src="https://th.bing.com/th/id/OIP.Hvs899RreQjIuXS0gqAfcAAAAA?rs=1&pid=ImgDetMain"
                alt="Google Pixel"
                className="w-32  object-contain rounded-lg"
              />
            </div>
          </div>

          <Swiper
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
                className="bg-gray-100 w-24  py-14 px-16 max-lg:px-7 max-sm:px-4 rounded-lg  overflow-hidden"
              >
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-secondary font-bold text-xl mb-4">
                      Items: {category.count}
                    </p>
                    <button className="bg-secondary text-white px-6 py-2 max-lg:px-4 max-sm:px-3 rounded-full hover:bg-secondary/90 transition-colors">
                      Shop now{" "}
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
