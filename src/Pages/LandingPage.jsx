import BestDeals from "../Components/LandingPage/BestDeals";
import CategoryGrid from "../Components/LandingPage/CategoryGrid";
import LatestNews from "../Components/LandingPage/LatestNews";
import MainSection from "../Components/LandingPage/mainSection";
import Section1 from "../Components/LandingPage/Section1/Section1";

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
