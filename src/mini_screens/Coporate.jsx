import React from "react";
import { Briefcase, LineChart, Landmark, FileCheck } from "lucide-react";

const services = [
  {
    title: "Financial Structuring & Strategic Advisory",
    desc: "Advisory on capital structuring, financial strategy, and decision-making frameworks to support sustainable growth and governance.",
    icon: Landmark,
  },
  {
    title: "Virtual CFO & Finance Function Support",
    desc: "Ongoing financial leadership support covering reporting, controls, budgeting, and management decision support.",
    icon: Briefcase,
  },
  {
    title: "Financial Modelling & Projections",
    desc: "Scenario-based financial models and projections to support investments, funding, and strategic planning.",
    icon: LineChart,
  },
  {
    title: "Funding, Transactions & Compliance",
    desc: "Support across fundraising, transaction execution, regulatory alignment, and financial governance.",
    icon: FileCheck,
  },
];

const CorporateFinance = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold mb-6">
            Corporate <span className="text-[#F49426]">Finance</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed max-w-4xl">
            We provide corporate finance advisory to businesses, startups, and promoters
            across key strategic and financial decisions, with a focus on clarity,
            governance, and long-term value creation.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#FCE7D1]">
                    <Icon size={26} className="text-[#F49426]" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#182729] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      


      <section className="bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-4">
            Client value
          </h2>

          <p className="text-[#182729] leading-relaxed mb-8 max-w-4xl">
            Improved trading discipline, risk awareness and structured decision-making.
          </p>

          
        </div>
      </section>

    </div>
  );
};

export default CorporateFinance;
