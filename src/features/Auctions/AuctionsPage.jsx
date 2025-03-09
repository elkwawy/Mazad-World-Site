import useLocalization from "@/hooks/useLocalization";
import AuctionCard from "@/components/AuctionCard";
import useaAuctionsHook from "./useaAuctionsHook";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // لازم تستدعي الـ CSS 

const AuctionsPage = () => {
  const { auctions, loading, FetchAuctions } = useaAuctionsHook();
  const { t } = useLocalization();

  useEffect(() => {
    FetchAuctions();
  }, []);

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.auctions")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <Skeleton height={200} className="mb-4" />
                <Skeleton height={20} width="80%" className="mb-2" />
                <Skeleton height={20} width="60%" />
              </div>
            ))
          : auctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
      </div>
    </div>
  );
};

export default AuctionsPage;
