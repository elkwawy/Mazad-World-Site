import { FiWatch } from "react-icons/fi";
import { TbBrandMantine } from "react-icons/tb";
import { FaTshirt, FaCar } from "react-icons/fa";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  const { t } = useTranslation();

  const categories = [
    { id: 1, nameKey: "electronics", icon: IoLogoElectron, count: "152" },
    { id: 2, nameKey: "jewelryWatches", icon: FiWatch, count: "87" },
    { id: 3, nameKey: "vehicles", icon: FaArrowUpFromWaterPump, count: "124" },
    { id: 4, nameKey: "antiques", icon: TbBrandMantine, count: "65" },
    { id: 5, nameKey: "fashion", icon: FaTshirt, count: "45" },
    { id: 6, nameKey: "cars", icon: FaCar, count: "28" },
  ];

  return (
    <div className="containerAK py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">{t("links.categories")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map(({ id, nameKey, icon: Icon, count }) => (
          <Link
            key={id}
            to={`/categories/${nameKey}`}
            className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
              <Icon className="text-3xl text-center" />
            </div>
            <h3 className="text-gray-800 font-medium mb-1">{t(nameKey)}</h3>
            <span className="text-sm text-gray-500">
              {count} {t("items")}
            </span>
          </Link>
        ))}
        {categories.map(({ id, nameKey, icon: Icon, count }) => (
          <Link
            key={id}
            to={`/categories/${nameKey}`}
            className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
              <Icon className="text-3xl text-center" />
            </div>
            <h3 className="text-gray-800 font-medium mb-1">{t(nameKey)}</h3>
            <span className="text-sm text-gray-500">
              {count} {t("items")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
