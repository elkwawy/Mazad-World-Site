import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqs } from "./faqsSlice";
import FAQsImg from "@/assets/FAQs.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeFAQs() {
  const dispatch = useDispatch();
  const { faqs, status } = useSelector((state) => state.faqs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFaqs());
    }
  }, [dispatch, status]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[65%_30%] items-center justify-between gap-8 containerAK">
      <div className="space-y-6">
        <SectionTitle title="Frequently Asked Questions" />
        {status === "loading" ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-300"
            >
              <Skeleton height={40} width="100%" />
            </div>
          ))
        ) : faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-300 transition-all hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-left py-2 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 overflow-hidden text-ellipsis">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`transition-transform text-xl ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-6">
            <p className="text-md text-gray-500 mt-2">
              Sorry, there are no FAQs available at the moment. Please check
              back later.
            </p>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <img
          src={FAQsImg}
          className="w-full max-w-sm mx-auto"
          alt="FAQs Illustration"
        />
      </div>
    </div>
  );
}
