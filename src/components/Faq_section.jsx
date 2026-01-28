import React, { useState } from "react";

export const Faq_section = () => {
  const faqs = [
    {
      question: "What services does ASKCA provide?",
      answer:
        "ASKCA provides direct and indirect tax advisory, GST compliance, business and transaction advisory, regulatory compliance, and strategic financial planning services."
    },
    {
      question: "Do you provide GST and income tax services?",
      answer:
        "Yes. We handle GST registration, return filing, compliance support, and income tax advisory and filing for individuals, startups, and corporates."
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our website or get in touch with our team via phone or email for a consultation."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 py-1 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          {/* <h2 className="text-3xl font-extrabold text-[#101010]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#182729] mt-2">
            Answers to common queries about our services and engagement process.
          </p> */}
        </div>

        {/* FAQ List */}
        <div className="border border-gray-200 rounded-xl divide-y">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#101010]">
                  {faq.question}
                </h3>

                <span className="text-2xl font-light text-[#F49426]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-4 text-[#182729] text-sm leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
