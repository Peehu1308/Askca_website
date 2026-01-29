import React from "react";
import { CheckCircle } from "lucide-react";

const RetirementPlanning = () => {
  const points = [
    {
      title: "Retirement Goal Setting",
      desc: "We work with you to define clear retirement goals covering lifestyle expectations, healthcare planning, travel aspirations, and legacy objectives, translating them into measurable financial targets.",
    },
    {
      title: "Tax-efficient Retirement Accounts",
      desc: "Strategic use of pension plans, provident funds, NPS, and other retirement instruments to maximize long-term tax efficiency and compounding benefits.",
    },
    {
      title: "Cash Flow Forecasting",
      desc: "Detailed projections of post-retirement expenses to ensure your income sources remain sufficient and sustainable throughout retirement.",
    },
    {
      title: "Retirement-focused Investment Strategy",
      desc: "A phased investment approach that balances growth in early years and gradually shifts towards capital preservation and income generation.",
    },
    {
      title: "Structured Withdrawal Strategy",
      desc: "Planned withdrawals designed to provide regular income while protecting your capital from inflation and longevity risk.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#101010]">
      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Retirement <span className="text-[#F49426]">Planning</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed">
            A disciplined and structured approach to help you build financial
            independence and maintain stability throughout your retirement
            years.
          </p>
        </div>
      </section>

      

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
        {/* LEFT */}
        <div className="space-y-6">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-[#F49426] mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-[#182729] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Our Objective
            </h3>
            <p className="text-[#182729] leading-relaxed mb-4">
              Our objective is to ensure that your retirement plan is resilient,
              adaptable, and aligned with your long-term financial priorities.
            </p>
            <p className="text-[#182729] leading-relaxed">
              By integrating investments, taxation, and cash flow planning, we
              aim to provide clarity and confidence so that financial concerns do
              not limit your post-retirement lifestyle.
            </p>
          </div>


          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-md">
            
            <p className="text-[#182729] leading-relaxed mb-4">
              Effective retirement planning goes beyond accumulating savings. It
          requires a clear understanding of future income needs, tax efficiency,
          risk management, and long-term sustainability. Our advisory process is
          designed to help you transition smoothly from earning income to
          preserving and utilizing wealth with confidence.
            </p>
          </div>

          <div className="bg-[#101010] text-white rounded-2xl p-10 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Why Structured Planning Matters
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>• Protection against rising healthcare and living costs</li>
              <li>• Reduced dependency on active income post retirement</li>
              <li>• Better management of longevity and inflation risk</li>
              <li>• Predictable income with long-term capital protection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetirementPlanning;
