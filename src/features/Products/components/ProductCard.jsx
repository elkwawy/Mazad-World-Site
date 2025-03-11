import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const { name, price, image, discount } = product;

  const navigate = useNavigate();
  const handleShowDeal = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm group relative">
      {discount && (
        <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full absolute top-5 left-5 z-10">
          -{discount}%
        </span>
      )}
      <div className="relative mb-4">
        <img
          src={
            "https://www.thepinnaclelist.com/wp-content/uploads/2016/01/01-Roca-Llisa-Luxury-Villa-Ibiza-Balearic-Islands-Spain.jpg" ||
            image
          }
          alt={name}
          className="w-full h-[250px] object-fill"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleShowDeal(product)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-secondary hover:text-white transition-colors"
          >
            <FaRegEye className="text-xl" />
          </button>
        </div>
      </div>
      <h3 className="text-gray-800 font-medium mb-2 line-clamp-2">{name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-secondary font-bold text-lg">${price}</span>
        <button className="bg-gray-100 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors">
          <FaCartPlus className="text-lg" />
        </button>
      </div>
    </div>
  );
}
