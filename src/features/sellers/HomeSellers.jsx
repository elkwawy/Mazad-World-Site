import { FiStar, FiCheck, FiXCircle } from "react-icons/fi";
import useLocalization from "@/hooks/useLocalization";
import SectionTitle from "@/components/ui/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSellers } from "./sellersSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeSellers() {
  const { t } = useLocalization();
  const dispatch = useDispatch();
  const { sellers, status } = useSelector((state) => state.sellers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSellers());
    }
  }, [dispatch, status]);

  console.log(sellers);

  return (
    <div className="containerAK">
      <SectionTitle
        title={t("featured_sellers")}
        viewAll={t("view_all_sellers")}
        to={"/sellers"}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {status == "loading"
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow border border-gray-200"
              >
                <Skeleton height={25} width="80%" className="mb-2" />
                <Skeleton height={16} width="60%" />
                <Skeleton height={14} width="50%" />
              </div>
            ))
          : sellers.slice(0, 3).map((seller) => (
              <div
                key={seller.id}
                className="bg-white rounded-lg p-6 shadow border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{seller.name}</h3>
                      {seller.verified ? (
                        <FiCheck
                          className="text-green-500"
                          title={t("verified_seller")}
                        />
                      ) : (
                        <FiXCircle
                          className="text-red-500"
                          title={t("unverified_seller")}
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <FiStar className="text-yellow-400" />
                      <span>{seller.startcount}</span>
                      <span className="text-gray-500">
                        ({seller.countReviews} {t("reviews")})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{t("status")}</span>
                    <span
                      className={`font-medium ${
                        seller.status === 1 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {seller.status === 1 ? t("active") : t("inactive")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
