import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import useLocalization from "@/hooks/useLocalization";
import ContactForm from "./components/ContactForm";
export default function ContactUs() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen py-7">
      <div className="containerAK">
        <h1 className="text-4xl font-bold text-center mb-7">
          {t("contact_us.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-11">
          {/* Contact Form */}
          <ContactForm />

          <div className="space-y-7">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6">
                {t("contact_us.info_title")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <FiMapPin className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {t("contact_us.address_title")}
                    </h3>
                    <p className="text-gray-600">{t("contact_us.address")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <FiPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {t("contact_us.phone_title")}
                    </h3>
                    <p className="text-gray-600">{t("contact_us.phone")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3  rounded-full">
                    <FiMail className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {t("contact_us.email_title")}
                    </h3>
                    <p className="text-gray-600">{t("contact_us.email_mw")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6">
                {t("contact_us.hours_title")}
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("contact_us.hours.weekdays")}
                  </span>
                  <span className="font-medium">
                    {t("contact_us.hours.weekdays_hours")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("contact_us.hours.saturday")}
                  </span>
                  <span className="font-medium">
                    {t("contact_us.hours.saturday_hours")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("contact_us.hours.sunday")}
                  </span>
                  <span className="font-medium">
                    {t("contact_us.hours.closed")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
