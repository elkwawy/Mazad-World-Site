import { FiMail, FiPhone } from "react-icons/fi";
import logo from "@/assets/logo2.png";
import useLocalization from "@/hooks/useLocalization";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Footer() {
  const { t, dir } = useLocalization();

  const links = [
    { name: t("links.home"), to: "/" },
    { name: t("links.categories"), to: "/categories" },
    { name: t("links.auctions"), to: "/auctions" },
    { name: t("links.products"), to: "/products" },
    { name: t("links.aboutUs"), to: "/aboutUs" },
    { name: t("links.contactUs"), to: "/contactUs" },
  ];

  const { categories, status } = useSelector((state) => state.categories);

  return (
    <footer className="bg-[#191c1f]">
      <div className="containerAK mx-auto px-4 py-12 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact Info */}
          <div>
            <div className="inline-flex items-center justify-center gap-1">
              <img src={logo} alt="logo" className="w-[40px]" />
              <h3 className="text-xl font-bold text-white -mb-2">
                {t("footer.title")}
              </h3>
            </div>
            <p className="text-sm mb-4">{t("footer.address")}</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiPhone className={`${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                <span>{t("footer.phone")}: +20 123 456 789</span>
              </div>
              <div className="flex items-center">
                <FiMail className={`${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                <span>{t("footer.email")}: mazadWorld@info.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="hover:text-secondary text-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories with Skeleton */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.topCategory")}
            </h4>
            <ul className="space-y-2">
              {status === "loading"
                ? Array.from({ length: 6 }).map((_, index) => (
                    <li key={index}>
                      <Skeleton width="80%" height={16} />
                    </li>
                  ))
                : categories.slice(0, 6).map((category) => (
                    <li key={category.id}>
                      <a
                        href={`/categories/${category.id}`}
                        className="hover:text-secondary text-gray-300"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.newsletter")}
            </h4>
            <p className="text-sm mb-4">{t("footer.newsletterDescription")}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className={`px-4 py-2 text-gray-800 w-full ${
                  dir === "rtl" ? "rounded-r" : "rounded-l"
                }`}
              />
              <button
                className={`bg-secondary px-4 py-2 ${
                  dir === "rtl" ? "rounded-l" : "rounded-r"
                } text-white`}
              >
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Rights */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
