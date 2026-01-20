import React from "react";
import { ShieldCheck, Target, Eye, TrendingUp, LifeBuoy } from "lucide-react";
import Footer from "../components/Footer";

const features = [
  {
    title: "Experience You Can Trust",
    desc:
      "With years of expertise in the financial industry, we bring a proven track record of delivering reliable, compliant, and effective investment advice.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Solutions",
    desc:
      "Every client is unique. Our strategies are carefully designed to align with individual goals, risk appetite, and long-term financial objectives.",
    icon: Target,
  },
  {
    title: "Transparent Practices",
    desc:
      "Transparency is the foundation of our advisory model. From fees to material decisions, we ensure complete clarity at every stage.",
    icon: Eye,
  },
  {
    title: "Proven Results",
    desc:
      "Our disciplined, research-driven approach has consistently helped clients achieve their financial milestones across market cycles.",
    icon: TrendingUp,
  },
  {
    title: "Ongoing Support",
    desc:
      "We remain actively engaged with our clients, offering continuous monitoring, periodic reviews, and regular updates.",
    icon: LifeBuoy,
  },
];

const WhyUs = () => {
  return (
    <div className="w-full bg-white text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-20 bg-[#101010]  text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Choose ASKCA
          </h1>
          <p className="text-lg max-w-3xl text-gray-200 leading-relaxed">
            A disciplined, transparent, and research-driven advisory approach
            designed to deliver long-term financial confidence.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#FFF9C4]">
                    <Icon className="text-[#F49426]" size={26} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[#182729] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 md:px-12 py-16 bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F]">SEBI</h4>
            <p className="text-sm text-[#182729] mt-2">
              Registered Investment Advisor
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F]">Client-First</h4>
            <p className="text-sm text-[#182729] mt-2">
              Conflict-free advisory approach
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F]">Long-Term</h4>
            <p className="text-sm text-[#182729] mt-2">
              Wealth creation focus
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Build Your Financial Future with Confidence
        </h2>
        <p className="text-[#182729] max-w-2xl mx-auto mb-8">
          Partner with ASKCA for transparent, disciplined, and research-backed
          investment advisory.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Speak with Our Advisors
        </a>
      </section>


    </div>
  );
};

export default WhyUs;
