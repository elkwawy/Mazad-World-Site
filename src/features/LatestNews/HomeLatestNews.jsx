import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLatestNews } from "./latestNewsSlice";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeLatestNews() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { latestNews, status } = useSelector((state) => state.latestNews);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLatestNews());
    }
  }, [dispatch, status]);

  const handleReadMore = (newsItem) => {
    navigate(`/newsDetails/${newsItem.id}`, { state: { news: newsItem } });
  };

  return (
    <div className="containerAK">
      <SectionTitle title={t("latestNewsTitle")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {status === "loading" ? (
          Array.from({ length: 3 }).map((_, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow"
            >
              <Skeleton height={185} width="100%" />
              <div className="p-4">
                <Skeleton height={24} width="60%" className="mb-2" />
                <Skeleton height={16} width="80%" />
                <div className="mt-4 flex justify-between items-center">
                  <Skeleton height={16} width="40%" />
                  <Skeleton height={20} width={80} />
                </div>
              </div>
            </article>
          ))
        ) : latestNews.length > 0 ? (
          latestNews
            .slice(0, 3)
            .map(({ id, title, description, image, date }) => (
              <article
                key={id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow"
              >
                <img
                  src={image}
                  alt={t("imageAltText")}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {date.slice(0, 10)}
                    </span>
                    <button
                      onClick={() =>
                        handleReadMore({
                          id,
                          title,
                          description,
                          image,
                          date,
                        })
                      }
                      className="text-secondary hover:underline"
                    >
                      {t("readMore")}
                    </button>
                  </div>
                </div>
              </article>
            ))
        ) : (
          <div className="col-span-6">
            <p className="text-md text-gray-500 mt-2">
              Sorry, there are no news available at the moment. Please check
              back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
