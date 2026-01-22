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

      {/* TRADING ADVISORY */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Trading Advisory
            </h2>
            <p className="text-[#182729] leading-relaxed mb-6">
              We support clients engaged in trading activities through analytical,
              risk-aware, and process-driven advisory services. Our focus is on
              discipline and risk management rather than speculative outcomes.
            </p>

            <ul className="space-y-3 text-[#182729]">
              <li>• Trading process and risk framework advisory</li>
              <li>• Market analysis and strategy support</li>
              <li>• Review of trading performance and internal controls</li>
            </ul>
          </div>

          <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-3">Client Value</h4>
            <p className="text-[#182729] leading-relaxed">
              Improved trading discipline, enhanced risk awareness, and
              structured decision-making supported by governance and controls.
            </p>
          </div>
        </div>
      </section>

      {/* ALLIED SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Allied Professional Services
          </h2>
          <p className="text-[#182729] leading-relaxed mb-6">
            Our allied services complement our advisory offerings and provide
            integrated regulatory, accounting, and compliance support.
          </p>

          <ul className="space-y-3 text-[#182729]">
            <li>• Direct tax advisory and compliance</li>
            <li>• GST advisory and regulatory compliance</li>
            <li>• Accounting, bookkeeping, and MIS</li>
            <li>• Secretarial and regulatory services</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h4 className="text-xl font-semibold mb-3">Client Value</h4>
          <p className="text-[#182729] leading-relaxed">
            Single-window access to integrated professional services with strong
            compliance discipline and coordinated execution.
          </p>
        </div>
      </section>

      {/* INVESTMENT ADVISORY */}
      <section className="bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-4">
            Investment & Financial Planning Advisory
          </h2>

          <p className="text-[#182729] leading-relaxed mb-8 max-w-4xl">
            We assist individuals and families with structured investment-related
            advisory and comprehensive financial planning focused on long-term
            objectives and disciplined execution.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-[#182729] mb-6">
            <p>• Goal-based financial planning</p>
            <p>• Asset allocation and portfolio review</p>
            <p>• Retirement and succession planning</p>
            <p>• Cash flow and net-worth analysis</p>
          </div>

          <p className="text-[#182729] font-medium">
            Client Value: Clear financial direction and alignment of investments
            with long-term life and business goals.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CorporateFinance;
