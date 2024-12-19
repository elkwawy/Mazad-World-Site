import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";

export default function LatestNews() {
  const news = [
    {
      id: 1,
      titleKey: "newsTitle1",
      excerptKey: "newsExcerpt1",
      image:
        "https://th.bing.com/th/id/R.208308bee89e6525b12f52de6cb54240?rik=qOFalCKCrEteGw&pid=ImgRaw&r=0",
      date: "2024-12-01",
    },
    {
      id: 2,
      titleKey: "newsTitle2",
      excerptKey: "newsExcerpt2",
      image:
        "https://i.pinimg.com/originals/fc/02/7c/fc027cf0b6423788d72f9af8d8a91884.jpg",
      date: "2024-12-05",
    },
    {
      id: 3,
      titleKey: "newsTitle3",
      excerptKey: "newsExcerpt3",
      image:
        "https://th.bing.com/th/id/R.cf14cadf1e381fa81108e91cd4eb244e?rik=mkgUim35B%2bi1Tg&pid=ImgRaw&r=0",
      date: "2024-12-10",
    },
  ];
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="containerAK">
        <SectionTitle title={t("latestNewsTitle")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {news.map(({ id, titleKey, excerptKey, image, date }) => (
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
                <h3 className="text-lg font-semibold mb-2">{t(titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(excerptKey)}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{date}</span>
                  <button className="text-secondary hover:underline">
                    {t("readMore")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
