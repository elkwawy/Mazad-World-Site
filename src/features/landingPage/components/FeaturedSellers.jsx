import { FiStar, FiCheck } from "react-icons/fi";
import useLocalization from "@/hooks/useLocalization";
import SectionTitle from "@/component/ui/SectionTitle";

export default function FeaturedSellers() {
  const { t } = useLocalization();

  const sellers = [
    {
      id: 1,
      name: "TechHub Electronics",
      image: "https://placehold.co/100x100/png?text=TH",
      rating: 4.9,
      reviews: 1250,
      verified: true,
      successRate: "99.5%",
      activeAuctions: 45,
    },
    {
      id: 2,
      name: "Digital Dreams",
      image: "https://placehold.co/100x100/png?text=DD",
      rating: 4.8,
      reviews: 890,
      verified: true,
      successRate: "98.2%",
      activeAuctions: 32,
    },
    {
      id: 3,
      name: "GadgetPro Store",
      image: "https://placehold.co/100x100/png?text=GP",
      rating: 4.7,
      reviews: 756,
      verified: true,
      successRate: "97.8%",
      activeAuctions: 28,
    },
  ];

  return (
    <section className="py-12 pb-20">
      <div className="containerAK">
        <SectionTitle
          title={t("featured_sellers")}
          viewAll={t("view_all_sellers")}
          to={"/sellers"}
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-lg p-6 shadow border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{seller.name}</h3>
                    {seller.verified && (
                      <FiCheck
                        className="text-green-500"
                        title={t("verified_seller")}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FiStar className="text-yellow-400" />
                    <span>{seller.rating}</span>
                    <span className="text-gray-500">
                      ({seller.reviews} {t("reviews")})
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">{t("success_rate")}</span>
                  <span className="font-medium text-green-500">
                    {seller.successRate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t("active_auctions")}</span>
                  <span className="font-medium">{seller.activeAuctions}</span>
                </div>
              </div>
              {/*
                    <button className="w-full mt-4 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors rounded-full py-2">
                    {t("view_profile")}
                    </button>
                    */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
