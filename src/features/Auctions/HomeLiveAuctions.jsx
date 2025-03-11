import AuctionCarousel from "./components/AuctionCarousel";
import SectionTitle from "@/components/ui/SectionTitle";
import useLocalization from "@/hooks/useLocalization";
import { useSelector } from "react-redux";

export default function HomeLiveAuctions() {
  const { t } = useLocalization();

  const { auctions, status } = useSelector((state) => state.auctions);

  return (
    <div className="containerAK">
      <SectionTitle
        title={t("auctions.live_auctions")}
        viewAll={t("auctions.view_all")}
        to={"/auctions"}
      />
      <div className="mt-6">
        <AuctionCarousel auctions={auctions} status={status} />
      </div>
    </div>
  );
}
