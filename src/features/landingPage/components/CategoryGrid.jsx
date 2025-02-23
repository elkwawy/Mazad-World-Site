import { FiWatch } from "react-icons/fi";
import { TbBrandMantine } from "react-icons/tb";
import { FaTshirt, FaCar } from "react-icons/fa";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CategoryGrid() {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      nameKey: "electronics",
      icon: IoLogoElectron,
      count: "152",
    },
    {
      id: 2,
      nameKey: "jewelryWatches",
      icon: FiWatch,
      count: "87",
    },
    {
      id: 3,
      nameKey: "vehicles",
      icon: FaArrowUpFromWaterPump,
      count: "124",
    },
    {
      id: 4,
      nameKey: "antiques",
      icon: TbBrandMantine,
      count: "65",
    },
    {
      id: 5,
      nameKey: "fashion",
      icon: FaTshirt,
      count: "45",
    },
    {
      id: 6,
      nameKey: "cars",
      icon: FaCar,
      count: "28",
    },
  ];

  return (
    <section className="py-12">
      <div className="containerAK">
        <SectionTitle
          title={t("shopCategoriesTitle")}
          viewAll={t("viewAllButton")}
          to={"/categories"}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {categories.map(({ id, nameKey, icon: Icon, count }) => (
            <div
              key={id}
              className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-gray-800 font-medium mb-1">{t(nameKey)}</h3>
              <span className="text-sm text-gray-500">
                {count} {t("items")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
