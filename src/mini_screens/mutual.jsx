import React from "react";
import { CheckCircle } from "lucide-react";

const MutualFundAdvisory = () => {
  const points = [
    "Personalized fund selection across equity, debt, and hybrid categories.",
    "Regular portfolio monitoring aligned with market conditions and goals.",
    "Systematic Investment Plans (SIPs) for disciplined long-term investing.",
    "Tax-efficient fund selection under Section 80C and capital gains planning.",
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#101010]">
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4] text-center">
        <h1 className="text-5xl font-semibold mb-4">
          Mutual Fund <span className="text-[#F49426]">Advisory</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-[#182729]">
          Research-backed mutual fund strategies focused on diversification and
          long-term capital appreciation.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-[#F49426]" size={22} />
              <p className="text-sm text-[#182729]">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MutualFundAdvisory;
