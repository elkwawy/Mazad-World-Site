import MainSection from "./components/mainSection/MainSection";
import HomeLatestNews from "../LatestNews/HomeLatestNews";
import HomeLiveAuctions from "../auctions/HomeLiveAuctions";
import HomeSellers from "../sellers/HomeSellers";
import HomeFAQs from "../faqs/HomeFAQs";
const LandingPage = () => {
  return (
    <div className="space-y-24 mb-24 mt-[29px]">
      <MainSection />
      <HomeLiveAuctions />
      <HomeLatestNews />
      <HomeSellers />
      <HomeFAQs />
    </div>
  );
};

export default LandingPage;
