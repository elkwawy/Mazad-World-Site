import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./categoriesSlice";
import EmptyPage from "@/staticPages/EmptyPage";

export default function CategoriesPage() {
  const { t } = useTranslation();

  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  if (status === "succeeded" && categories.length === 0) {
    return <EmptyPage name={"Categories"} />;
  }

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.categories")}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {status === "loading" || status === "idle"
          ? Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 bg-gray-100 p-3 rounded-md text-center"
              >
                <Skeleton width={100} height={100} className="rounded-md" />
                <Skeleton width={80} height={20} />
              </div>
            ))
          : categories.map(({ id, name, photo }) => (
              <Link
                key={id}
                state={{ name }}
                to={`/categories/${id}`}
                className="flex flex-col items-center gap-3 bg-gray-100 p-4 rounded-md text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <img
                  src={photo}
                  alt="category"
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <h3 className="text-gray-800 font-medium">{name}</h3>
              </Link>
            ))}
      </div>
      {status === "failed" && (
        <p className="text-center text-red-500 font-semibold mt-10">{error}</p>
      )}
    </div>
  );
}
