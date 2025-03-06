import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useCategoriesHook from "./useCategoriesHook";
import defaultCategory from "@/assets/category.jpg";

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { categories, loading, FetchCategories } = useCategoriesHook();

  useEffect(() => {
    FetchCategories();
  }, []);

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.categories")}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {loading
          ? [...Array(15)].map((_, index) => (
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
                to={`/categories/${name.charAt(0).toLowerCase() + name.slice(1)}`}
                className="flex flex-col items-center gap-3 bg-gray-100 p-4 rounded-md text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <img
                  src={defaultCategory}
                  className="w-[100px] rounded-md"
                  alt="img"
                />
                <h3 className="text-gray-800 font-medium">{name}</h3>
              </Link>
            ))}
      </div>
    </div>
  );
}
