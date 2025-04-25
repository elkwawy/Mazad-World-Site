import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useLocalization from "@/hooks/useLocalization";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import CategoriesSkeleton from "./components/CategoriesSkeleton";
import { CgMenuGridO } from "react-icons/cg";
const HomeCategories = () => {
  const { t, dir } = useLocalization();

  const { categories, status } = useSelector((state) => state.categories);
  console.log(categories);

  if (status === "succeeded" && categories.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No categories available at the moment
        <div className="mt-4 text-3xl text-gray-400 flex justify-center">
          <CgMenuGridO />
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
        ? [...Array(5)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="bg-gray-100 w-24 py-10 px-14 max-lg:px-7 max-sm:px-4 rounded-lg overflow-hidden"
            >
              <CategoriesSkeleton />
            </SwiperSlide>
          ))
        : categories.slice(0, 5).map((category) => (
            <SwiperSlide
              key={category.id}
              className="bg-gray-100 w-24 py-10 px-14 max-lg:px-7 max-sm:px-4 rounded-lg "
            >
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-5">
                  <Link
                    to="/categories"
                    className="font-bold -mb-2 text-gray-600 hover:underline"
                  >
                    {t("all_categories")}
                  </Link>
                  <h3 className="lg:text-3xl text-2xl font-bold max-w-[90px]">
                    {category.name}
                  </h3>
                  <Link
                    to={`/categories/${category.id}`}
                    state={{ name: category.name }}
                    className="bg-secondary text-white px-6 py-2 max-lg:px-4 max-sm:px-3 rounded-full hover:bg-secondary/90 transition-colors"
                  >
                    {t("buttons.shop_now")}{" "}
                    <FiArrowUpRight className="inline-block" />
                  </Link>
                </div>
                <img
                  src={
                    category.photo ||
                    "https://images.unsplash.com/photo-1555353540-64580b51c258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8fDA%3D"
                  }
                  className="w-[150px] h-[150px] flex items-center justify-center object-cover bg-gray-200 rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default HomeCategories;
