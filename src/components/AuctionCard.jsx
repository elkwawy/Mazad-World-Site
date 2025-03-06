import { FaRegEye } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { formatPrice } from "@/utils/formatters";
import useLocalization from "@/hooks/useLocalization";
import { useNavigate } from "react-router-dom";

export default function AuctionCard({ auction }) {
  const navigate = useNavigate();
  const { t } = useLocalization();

  const { title, image, current_price, start_time, end_time } = auction;

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return new Intl.DateTimeFormat("en-EG", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // hour12: false,
    }).format(date);
  };

  const handleShowDeal = (deal) => {
    navigate(`/deal/${deal.id}`, { state: { deal } });
  };

  return (
    <div className="bg-[#f3f4f6] rounded-lg overflow-hidden shadow group">
      <div className="relative">
        <img
          src={
            "https://th.bing.com/th/id/OIP.Uz8Ei04MjAOenca3DFHLFgHaE8?rs=1&pid=ImgDetMain" ||
            image
          }
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleShowDeal(auction)}
        >
          <FaRegEye className="text-gray-600 hover:text-secondary" />
        </button>
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
          <FiClock className="mr-1 text-gray-600" />
          {formatDateTime(end_time)}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium truncate">{title}</h3>

        <div className="flex justify-between items-center mt-1.5">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{t("auctions.currentBid")}</p>
            <p className="text-secondary font-bold">
              {formatPrice(current_price)}
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-500">{formatDateTime(start_time)}</p>
            <button className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm hover:bg-secondary hover:text-white transition-colors">
              {t("auctions.bidNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
