import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCategory } from "./categoriesSlice";
import { useLocation } from "react-router-dom";
import AuctionCard from "../auctions/components/AuctionCard";
const ProductsCategory = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const id =location.pathname.split("/")[2];
  const name = location.state?.name || null;

  

  

  const dispatch = useDispatch();
  const { productsCategory, statusPC } = useSelector(
    (state) => state.categories
  );

  console.log(productsCategory);

  useEffect(() => {
    dispatch(fetchProductsCategory(id));
  }, []);

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.auctions")} - {name}
      </h1>
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
    </div>
  );
};

export default ProductsCategory;
