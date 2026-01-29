import React from "react";
import {
  BarChart3,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Trading Process and Risk Framework Advisory",
    desc: "Advisory on designing, reviewing, and strengthening trading processes, risk management frameworks, and internal controls to ensure disciplined execution and regulatory alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Market Analysis and Strategy Support",
    desc: "In-depth market analysis, performance insights, and strategic guidance to support informed trading decisions and long-term positioning in dynamic market conditions.",
    icon: TrendingUp,
  },
  {
    title: "Review of Trading Performance and Controls",
    desc: "Independent review of trading performance, control effectiveness, and governance mechanisms to identify gaps, manage exposure, and improve overall trading outcomes.",
    icon: BarChart3,
  },
];

const Trading = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Trading <span className="text-[#F49426]">Advisory</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed mx-auto">
            We support clients engaged in trading activities through analytical,
            risk-aware and process-driven advisory services. Our focus is on
            discipline, risk management and consistency rather than speculative outcomes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3 place-items-center">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition max-w-sm text-center"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="p-3 rounded-xl bg-[#FCE7D1] mb-3">
                    <Icon size={28} className="text-[#F49426]" />
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

      {/* CLIENT VALUE */}
      <section className="bg-[#FFF9C4]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Client Value
          </h2>

          <p className="text-[#182729] leading-relaxed mx-auto">
            Improved trading discipline, stronger risk awareness, and structured,
            high-quality decision-making across trading activities.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Trading;
