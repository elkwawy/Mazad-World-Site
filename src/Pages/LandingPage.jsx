import BestDeals from "../Components/LandingPage/BestDeals";
import CategoryGrid from "../Components/LandingPage/CategoryGrid";
import LatestNews from "../Components/LandingPage/LatestNews";
import MainSection from "../Components/LandingPage/MainSection";
import LiveAuctions from "../Components/LandingPage/LiveAuctions";
import FeaturedSellers from "../Components/LandingPage/FeaturedSellers";
const LandingPage = () => {
  return (
    <div>
      <MainSection />
      <BestDeals />
      <CategoryGrid />
      <LiveAuctions />
      <LatestNews />
      <FeaturedSellers />
    </div>
  );
};

export default LandingPage;
