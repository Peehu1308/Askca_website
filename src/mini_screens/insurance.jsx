import React from "react";
import { CheckCircle } from "lucide-react";

const InsurancePlanning = () => {
  const points = [
    {
      title: "Life Insurance Planning",
      desc: "Guidance on term plans, whole life policies, and investment-linked insurance solutions.",
    },
    {
      title: "Health Insurance Planning",
      desc: "Coverage for hospitalization, critical illness, and long-term medical needs.",
    },
    {
      title: "Tax Benefits Optimization",
      desc: "Maximizing deductions and tax benefits through structured insurance planning.",
    },
    {
      title: "Wealth Protection",
      desc: "Safeguarding assets and income against life’s uncertainties.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#101010]">
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4] text-center text-[#101010] text-center">
        <h1 className="text-5xl font-semibold mb-4">
          Insurance <span className="text-[#F49426]">Planning</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-900">
          Protecting your wealth, income, and family through structured life and
          health insurance solutions.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
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

export default InsurancePlanning;
