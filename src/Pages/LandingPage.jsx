import BestDeals from "../Components/LandingPage/BestDeals";
import CategoryGrid from "../Components/LandingPage/CategoryGrid";
import LatestNews from "../Components/LandingPage/LatestNews";
import MainSection from "../Components/LandingPage/MainSection";

const LandingPage = () => {
  return (
    <div>
      <MainSection />
      <BestDeals />
      <CategoryGrid />
      <LatestNews />
    </div>
  );
};

export default LandingPage;
