import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCategory } from "./categoriesSlice";
import { useLocation } from "react-router-dom";
import AuctionCard from "../auctions/components/AuctionCard";

const AuctionsCategory = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const name = location.state?.name || "";

  const dispatch = useDispatch();
  const { productsCategory, statusPC, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchProductsCategory(id));
  }, [dispatch, id]);

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.auctions")} - {name}
      </h1>

      {/* حالة الخطأ */}
      {statusPC === "failed" && (
        <p className="text-center text-red-500 font-semibold mt-10">{error}</p>
      )}

      {/* عرض المنتجات أو السكليتون */}
      {!error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {statusPC === "loading"
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md">
                  <Skeleton height={200} className="mb-4" />
                  <Skeleton height={20} width="80%" className="mb-2" />
                  <Skeleton height={20} width="60%" />
                </div>
              ))
            : productsCategory.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
        </div>
      )}

      {/* لا توجد مزادات */}
      {!error && statusPC === "succeeded" && productsCategory.length === 0 && (
        <p className="flex justify-center mt-[150px] text-gray-500 font-medium">
          No auctions available at the moment
        </p>
      )}
    </div>
  );
};

export default AuctionsCategory;
