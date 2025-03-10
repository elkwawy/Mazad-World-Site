import useLocalization from "@/hooks/useLocalization";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const IntroSection = () => {
  const { t } = useLocalization();
  return (
    <div className="bg-gray-100 py-7 px-12 max-lg:px-7 max-sm:px-4 rounded-lg relative overflow-hidden text-center">
      <h2 className="text-[29px] font-bold text-primary mb-4">
        Welcome to Mazad World
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
        {t("about_us.heroDescription")}
      </p>

      <p className="text-gray-600 mt-4">
        Follow us and stay updated with the latest auctions!
      </p>

      {/* Social Media Icons */}
      <div className="mt-3 flex justify-center gap-5">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-gray-500 text-3xl hover:text-blue-800"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-gray-500 text-3xl hover:text-blue-600"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-gray-500 text-3xl hover:text-pink-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-gray-500 text-3xl hover:text-blue-900"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default IntroSection;
