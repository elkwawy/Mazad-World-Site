import AuctionCarousel from "./auctions/AuctionCarousel";
import SectionTitle from "@/components/ui/SectionTitle";
import useaAuctionsHook from "@/features/auctions/useaAuctionsHook";
import useLocalization from "@/hooks/useLocalization";
import { useEffect } from "react";

export default function LiveAuctions() {
  const { t } = useLocalization();
  const { auctions, loading, FetchAuctions } = useaAuctionsHook();


  useEffect(() => {
    FetchAuctions();
  }, []);

  return (
    <section className="py-12">
      <div className="containerAK">
        <SectionTitle
          title={t("auctions.live_auctions")}
          viewAll={t("auctions.view_all")}
          to={"/auctions"}
        />
        <div className="mt-8">
          <AuctionCarousel auctions={auctions} />
        </div>
      </div>
    </section>
  );
}
