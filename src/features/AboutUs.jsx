import { FiAward, FiUsers, FiShoppingBag, FiTruck } from "react-icons/fi";
import useLocalization from "../Hooks/useLocalization";

export default function AboutUs() {
  const { t } = useLocalization();
  return (
    <div className="bg-gray-50 shadow-md">
      {/* Hero Section */}
      <div className="bg-white text-black mt-20 pb-20">
        <div className="containerAK text-center">
          <h1 className="text-4xl font-bold mb-4">{t("about_us.heroTitle")}</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            {t("about_us.heroDescription")}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="containerAK py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
            <div className="text-gray-600">{t("about_us.activeUsers")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-gray-600">{t("about_us.auctionsCompleted")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-gray-600">{t("about_us.customerSatisfaction")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-gray-600">{t("about_us.supportAvailable")}</div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16">
        <div className="containerAK">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("about_us.ourStoryTitle")}</h2>
            <p className="text-gray-600 mb-6">{t("about_us.ourStoryDescription1")}</p>
            <p className="text-gray-600">{t("about_us.ourStoryDescription2")}</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="containerAK px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("about_us.whyChooseUsTitle")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAward className="text-2xl text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">{t("about_us.qualityGuarantee")}</h3>
            <p className="text-gray-600">{t("about_us.qualityGuaranteeDescription")}</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-2xl text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">{t("about_us.trustedCommunity")}</h3>
            <p className="text-gray-600">{t("about_us.trustedCommunityDescription")}</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiShoppingBag className="text-2xl text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">{t("about_us.secureTransactions")}</h3>
            <p className="text-gray-600">{t("about_us.secureTransactionsDescription")}</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTruck className="text-2xl text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">{t("about_us.fastShipping")}</h3>
            <p className="text-gray-600">{t("about_us.fastShippingDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
