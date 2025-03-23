import ProductCard from "./components/ProductCard";
import { useTranslation } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "./components/ProductSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";
import EmptyPage from "@/staticPages/EmptyPage";
export default function ProductsPage() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.products")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {status === "loading" ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyPage name="Products" />
        )}
      </div>
    </div>
  );
}
