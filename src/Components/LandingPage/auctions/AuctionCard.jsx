import { FiClock, FiHeart } from "react-icons/fi";
import { formatPrice } from "../../../utils/formatters";
import useLocalization from "../../../Hooks/useLocalization";
export default function AuctionCard({ auction }) {
  const { name, currentBid, timeLeft, image, bids } = auction;
  const { t } = useLocalization();
  return (
    <div className="bg-[#f3f4f6] rounded-lg overflow-hidden shadow group">
      {/* الصورة */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <FiHeart className="text-gray-600 hover:text-secondary" />
        </button>
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
          <FiClock className="mr-1" />
          {timeLeft}
        </div>
      </div>

      {/* تفاصيل المزاد */}
      <div className="p-4">
        <h3 className="font-medium mb-2 truncate">{name}</h3>{" "}
        {/* اسم المنتج بحجم ثابت */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{t("auctions.currentBid")}</p>
            <p className="text-secondary font-bold">
              {formatPrice(currentBid)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">
              {bids} {t("auctions.bids")}
            </p>
            <button className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm hover:bg-secondary hover:text-white transition-colors">
              {t("auctions.bidNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
