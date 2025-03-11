import MainSection from "./components/mainSection/MainSection";
import HomeProducts from "../Products/HomeProducts";
import HomeLatestNews from "../LatestNews/HomeLatestNews";
import HomeLiveAuctions from "../auctions/HomeLiveAuctions";
import HomeSellers from "../sellers/HomeSellers";
import HomeFAQs from "../faqs/HomeFAQs";
import CategoryGrid from "./components/CategoryGrid";
const LandingPage = () => {
  return (
    <div className="space-y-20 mb-20 mt-[29px]">
      <MainSection />
      <HomeProducts />
      <HomeLiveAuctions />
      <HomeLatestNews />
      <HomeSellers />
      <HomeFAQs />
    </div>
  );
};

export default LandingPage;
