import useLocalization from "@/hooks/useLocalization";
import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const { t } = useLocalization();
  const location = useLocation();
  const newsData = location.state?.news || null;

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t(newsData.titleKey)}
      </h1>

      <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
        <img
          src={newsData.image}
          alt={t(newsData.title)}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-gray-500 text-sm mt-4">
        📅 {newsData.date.slice(0, 10)}
      </p>

      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        {t(newsData.title)}
      </p>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        {t(newsData.description)}
      </p>

      <div className="mt-8">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition-all"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
