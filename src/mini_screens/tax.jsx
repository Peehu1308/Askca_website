import React from "react";
import { CheckCircle } from "lucide-react";

const TaxEfficientInvestments = () => {
  const points = [
    {
      title: "Tax-saving Investment Products",
      desc: "Guidance on ELSS, PPF, NPS, and other instruments to reduce tax liability under applicable sections.",
    },
    {
      title: "Capital Gains Tax Strategies",
      desc: "Managing equity and debt investments using techniques like tax-loss harvesting.",
    },
    {
      title: "Tax-efficient Portfolio Construction",
      desc: "Designing portfolios that prioritize after-tax returns using asset location strategies.",
    },
    {
      title: "Retirement Tax Planning",
      desc: "Ensuring retirement income streams are structured for optimal tax efficiency.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#101010]">
      <section className="px-6 md:px-12 py-24 bg-[#101010] text-white text-center">
        <h1 className="text-5xl font-semibold mb-4">
          Tax-efficient <span className="text-[#F49426]">Investments</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
          Investment strategies designed to maximize returns by minimizing the
          impact of taxes.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex gap-4">
              <CheckCircle className="text-[#F49426]" size={22} />
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#182729]">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TaxEfficientInvestments;
