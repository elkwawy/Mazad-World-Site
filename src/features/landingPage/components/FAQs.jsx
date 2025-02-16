import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "How do online auctions work?",
    answer:
      "Online auctions allow users to bid on items within a specific time frame. The highest bidder at the end wins the auction.",
  },
  {
    question: "What are the payment options for auctions?",
    answer:
      "Most platforms support credit/debit cards, PayPal, and bank transfers. Some auctions may also accept cryptocurrencies.",
  },
  {
    question: "Can I cancel my bid?",
    answer:
      "Bids are generally binding, but some platforms may allow bid retraction under certain conditions.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 pb-20">
      <div className="containerAK">
        <SectionTitle
          title="Frequently Asked Questions"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FiChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
