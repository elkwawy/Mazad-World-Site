import useLocalization from "@/hooks/useLocalization";
import AuctionCard from "@/features/auctions/components/AuctionCard";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctions } from "./auctionsSlice";
import EmptyPage from "@/staticPages/EmptyPage";

const AuctionsPage = () => {
  const { t } = useLocalization();

  const dispatch = useDispatch();
  const { auctions, status } = useSelector((state) => state.auctions);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAuctions());
    }
  }, [dispatch, status]);

  console.log(auctions);

  if (status === "succeeded" && auctions.length === 0) {
    return <EmptyPage name={"Auctions"} />;
  }

  return (
    <div className="containerAK py-7 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7">
        {t("links.auctions")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {status === "idle" || status === "loading"
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
      {status === "failed" && (
        <p className="text-center text-red-500 font-semibold mt-10">{error}</p>
      )}
    </div>
  );
};

export default AuctionsPage;
