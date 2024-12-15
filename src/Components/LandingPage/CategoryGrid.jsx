// import { FiMonitor, FiHeadphones, FiCamera, FiSmartphone, FiWatch, FiPrinter } from 'react-icons/fi';
import { FiWatch } from "react-icons/fi";
import { TbBrandMantine } from "react-icons/tb";
import { FaTshirt, FaCar } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: IoLogoElectron,
      count: "152",
    },
    {
      id: 2,
      name: "Jewelry & Watches",
      icon: FiWatch,
      count: "87",
    },
    {
      id: 3,
      name: "Vehicles",
      icon: FaArrowUpFromWaterPump,
      count: "124",
    },
    {
      id: 4,
      name: "Antiques ",
      icon: TbBrandMantine,
      count: "65",
    },
    {
      id: 5,
      name: "Fashion",
      icon: FaTshirt,
      count: "45",
    },
    {
      id: 6,
      name: "Cars",
      icon: FaCar,
      count: "28",
    },
  ];
  return (
    <section className="py-12">
      <div className="containerAK">
        <SectionTitle title="Shop with Categories" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {categories.map(({ id, name, icon: Icon, count }) => (
            <div
              key={id}
              className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-gray-800 font-medium mb-1">{name}</h3>
              <span className="text-sm text-gray-500">{count} items</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
