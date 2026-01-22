import React from "react";
import { CheckCircle } from "lucide-react";

const PortfolioConsultancy = () => {
  const points = [
    "Diversification across asset classes such as equity, debt, and alternative investments to manage risk effectively.",
    "Selection of high-quality investments backed by research, valuation discipline, and market analysis.",
    "Ongoing monitoring and periodic rebalancing to remain aligned with goals and market conditions.",
    "Long-term growth strategy supported by macroeconomic and market trend assessment.",
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-semibold mb-6">
            Portfolio <span className="text-[#F49426]">Consultancy</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed">
            Disciplined portfolio construction designed to balance risk,
            optimize returns, and align investments with long-term financial goals.
          
          </p>
        </div>
      </section>
      

      {/* CONTENT */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6">
            Our Portfolio Philosophy
            <span className="block w-20 h-1 bg-[#F49426] mt-3 rounded"></span>
          </h2>

          <p className="text-[#182729] leading-relaxed mb-8">
            A well-constructed portfolio is the foundation of sustainable wealth
            creation. At ASKCA, portfolio consultancy is built on structured
            asset allocation, disciplined execution, and continuous review.
          </p>

          <div className="space-y-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CheckCircle
                  className="text-[#F49426] mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-sm text-[#182729] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-md hover:shadow-lg transition">
  <h3 className="text-2xl font-semibold mb-4 text-[#101010]">
    How We Support You
  </h3>

  <p className="text-[#182729] leading-relaxed mb-6">
    Our role goes far beyond recommending financial products. At ASKCA, we act
    as long-term strategic partners, helping clients navigate complex financial
    decisions with clarity, discipline, and confidence.
  </p>

  <p className="text-[#182729] leading-relaxed mb-8">
    We focus on building resilient investment strategies that evolve with
    market dynamics, regulatory changes, and your personal or business goals —
    ensuring consistency, transparency, and risk-aware growth.
  </p>

  <ul className="space-y-5 text-sm text-[#182729]">
    <li className="flex gap-3 items-start">
      <span className="text-[#F49426] text-lg">•</span>
      <span>
        <strong>Strategic Asset Allocation:</strong> Portfolios designed around
        your risk appetite, liquidity needs, time horizon, and financial
        objectives.
      </span>
    </li>

    <li className="flex gap-3 items-start">
      <span className="text-[#F49426] text-lg">•</span>
      <span>
        <strong>Continuous Portfolio Monitoring:</strong> Regular performance
        evaluation with rebalancing strategies to manage volatility and optimize
        returns.
      </span>
    </li>

    <li className="flex gap-3 items-start">
      <span className="text-[#F49426] text-lg">•</span>
      <span>
        <strong>Research-Driven Advisory:</strong> Independent, data-backed
        investment insights free from product bias or commission-driven advice.
      </span>
    </li>

    {/* <li className="flex gap-3 items-start">
      <span className="text-[#F49426] text-lg">•</span>
      <span>
        <strong>Risk & Compliance Focus:</strong> Investment strategies aligned
        with regulatory requirements, tax efficiency, and governance standards.
      </span>
    </li> */}

    {/* <li className="flex gap-3 items-start">
      <span className="text-[#F49426] text-lg">•</span>
      <span>
        <strong>Client-Centric Reviews:</strong> Periodic strategy discussions to
        adapt portfolios based on life events, business changes, and evolving
        financial priorities.
      </span>
    </li> */}
  </ul>
</div>


      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center bg-[#FFF9C4]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Build a Portfolio Designed for the Long Term
          </h2>
          <p className="text-[#182729] text-lg mb-8 leading-relaxed">
            Partner with ASKCA to create a disciplined, diversified, and
            goal-oriented investment portfolio.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Consult Our Advisors
          </a>
        </div>
      </section>

    </div>
  );
};

export default PortfolioConsultancy;
