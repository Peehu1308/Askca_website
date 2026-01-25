import React from "react";
import { Briefcase, LineChart, Landmark, FileCheck, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
  title: "Trading Process and Risk Framework Advisory",
  desc: "Advisory on designing, reviewing, and strengthening trading processes, risk management frameworks, and internal controls to ensure disciplined execution and regulatory alignment.",
  icon: ShieldCheck, // Risk, governance, controls
},
{
  title: "Market Analysis and Strategy Support",
  desc: "In-depth market analysis, performance insights, and strategic guidance to support informed trading decisions and long-term positioning in dynamic market conditions.",
  icon: TrendingUp, // Markets, trends, strategy
},
{
  title: "Review of Trading Performance and Controls",
  desc: "Independent review of trading performance, control effectiveness, and governance mechanisms to identify gaps, manage exposure, and improve overall trading outcomes.",
  icon: BarChart3, // Performance tracking & review
},

  
];

const Trading = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold mb-6">
            Trading <span className="text-[#F49426]">Advisory</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed max-w-4xl">
            We support clients engaged in trading activities through analytical, risk-aware and process-driven advisory services. Our focus is on discipline, risk management and consistency rather than speculative outcomes.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
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

export default Trading;
