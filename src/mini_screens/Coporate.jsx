import React from "react";
import { Briefcase, Landmark, LineChart, FileCheck } from "lucide-react";

const Coporate = [
  {
    title: "Capital Structuring & Advisory",
    desc: "Optimizing capital mix to improve financial stability, reduce costs, and support long-term growth.",
    icon: <Landmark size={28} />,
  },
  {
    title: "Mergers & Acquisitions",
    desc: "End-to-end support for acquisitions, mergers, valuations, and deal structuring.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Financial Modeling & Valuation",
    desc: "Robust valuation models to support strategic decisions, investments, and fundraising.",
    icon: <LineChart size={28} />,
  },
  {
    title: "Compliance & Regulatory Advisory",
    desc: "Ensuring financial operations meet regulatory, statutory, and governance requirements.",
    icon: <FileCheck size={28} />,
  },
];

const CorporateFinance = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#101010] mb-4">
            Corporate Finance
          </h1>
          <p className="text-[#4B5563] leading-relaxed">
            Strategic financial advisory services designed to strengthen business
            performance, support critical decisions, and enable sustainable growth.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Coporate.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50 text-[#F49426] mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#101010]">
                {item.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorporateFinance;
