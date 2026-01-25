import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  BarChart3,
  HeartPulse,
} from "lucide-react";

const investmentServices = [
  {
    title: "Portfolio Consultancy",
    desc: "Tailored investment strategies that diversify risk and maximize returns, aligned with your financial goals.",
    icon: <Layers size={28} className="text-[#F49426]" />,
  },
  {
    title: "Wealth Advisory",
    desc: "Comprehensive financial planning to grow, manage, and preserve wealth across generations.",
    icon: <TrendingUp size={28} className="text-[#F49426]" />,
  },
  {
    title: "Retirement Planning",
    desc: "Strategizing a secure retirement with tax efficiency, predictable income, and long-term stability.",
    icon: <PiggyBank size={28} className="text-[#F49426]" />,
  },
  {
    title: "Tax-efficient Investment Planning",
    desc: "Investment solutions structured to minimize tax liabilities while maximizing post-tax returns.",
    icon: <ShieldCheck size={28} className="text-[#F49426]" />,
  },
  {
    title: "Mutual Funds & Stock Market Analysis",
    desc: "Expert research-backed guidance for long-term capital appreciation through equities and mutual funds.",
    icon: <BarChart3 size={28} className="text-[#F49426]" />,
  },
  {
    title: "Insurance Planning",
    desc: "Life and health insurance solutions to safeguard your family against unforeseen risks.",
    icon: <HeartPulse size={28} className="text-[#F49426]" />,
  },
  {
    title: "Diversified Portfolio Construction",
    desc: "Balanced asset allocation across equity, debt, and insurance to ensure steady growth and risk mitigation.",
    icon: <Layers size={28} className="text-[#F49426]" />,
  },
];

const InvestmentServices = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Investment Services
        </h1>
        <p className="text-lg md:text-xl text-[#182729] max-w-3xl mx-auto leading-relaxed mb-8">
          Personalized, research-driven investment advisory designed to help you grow wealth responsibly while managing risk and ensuring long-term financial security.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#101010] mb-12 text-center">
          Our Investment Expertise
          <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {investmentServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                         p-8 flex flex-col items-center text-center hover:-translate-y-2
                         w-full sm:w-[45%] lg:w-[30%] max-w-sm"
            >
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#101010] mb-3">{service.title}</h3>
              <p className="text-[#182729] text-sm md:text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH / FEATURES */}
      <section className="px-6 md:px-12 py-20 bg-[#FFF9C4] text-center">
        <div className="max-w-7xl mx-auto text-center bg-[#FFF9C4]">
          <h2 className="text-4xl font-extrabold text-[#101010] mb-10">
            Our Approach
            <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
          </h2>
          <p className="text-[#182729] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            We focus on disciplined strategies, diversified portfolios, and long-term planning to ensure your financial goals are met efficiently and responsibly.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Tailored Portfolios</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Each client receives a portfolio designed to match their risk profile, goals, and investment horizon.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Research-Driven Advice</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Our recommendations are backed by thorough research and market analysis, ensuring informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Ongoing Support</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Continuous monitoring, portfolio reviews, and regular guidance to keep your investments on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto bg-gradient-to-r from-[#36454F] to-[#2F3E46] text-white">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Grow Your Wealth?
        </h2>
        <p className="text-gray-200 mb-8 text-lg">
          Connect with our experts today to get personalized investment solutions.
        </p>
        <Link
          to="/contact"
          className="bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Talk to an Expert
        </Link>
      </section>

    </div>
  );
};

export default InvestmentServices;
