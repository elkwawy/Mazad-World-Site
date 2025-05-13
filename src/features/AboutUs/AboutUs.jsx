import StatusAboutUs from "./components/StatusAboutUs";
import StoryAboutUs from "./components/StoryAboutUs";
import FeaturesAboutUs from "./components/FeaturesAboutUs";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 shadow-md">
      {/* About Mazad World */}
      <div className="bg-white text-black mt-10 pb-10">
        <div className="containerAK text-center">
          <h1 className="text-4xl font-bold mb-4">About Mazad World</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Your trusted destination for electronic auctions, bringing together
            buyers and sellers in a secure and dynamic marketplace.
          </p>
        </div>
      </div>

      <StatusAboutUs />

      <StoryAboutUs />

      <FeaturesAboutUs />
    </div>
  );
}
