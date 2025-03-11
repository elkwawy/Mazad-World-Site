import ProductCard from "@/features/Products/components/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import ProductSkeleton from "./components/ProductSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";
export default function HomeProducts() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
      <div className="containerAK">
        <SectionTitle
          title={t("links.products")}
          viewAll={t("viewAllButton")}
          to="/products"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {status === "loading"
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : products
                .slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
      </div>
  );
}
