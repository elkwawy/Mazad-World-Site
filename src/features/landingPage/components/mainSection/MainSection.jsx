import useLocalization from "@/hooks/useLocalization";
import IntroSection from "./IntroSection";
import HomeCategories from "@/features/categories/HomeCategories";
import AuctionsCarousel from "./AuctionsCarousel";
const mainSection = () => {
  const { dir } = useLocalization();

  return (
    <div className="containerAK" dir={dir}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AuctionsCarousel />

        <div className="grid grid-rows-2 gap-6">
          <IntroSection />
          <HomeCategories />
        </div>
      </div>
    </div>
  );
};

export default mainSection;
