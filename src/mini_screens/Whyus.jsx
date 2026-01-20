import React from "react";
import {
  Layers,
  Briefcase,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Integrated Advisory",
    desc:
      "A single platform for tax, accounting, compliance, and financial advisory services—enabling seamless coordination and informed decision-making.",
    icon: Layers,
  },
  {
    title: "Technical Depth with Practical Execution",
    desc:
      "Chartered Accountant–led expertise combined with hands-on implementation, ensuring advisory translates into measurable and compliant outcomes.",
    icon: Briefcase,
  },
  {
    title: "Governance & Compliance Focus",
    desc:
      "Strong emphasis on regulatory discipline, financial governance, risk awareness, and structured compliance management.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Engagements",
    desc:
      "Tailored solutions aligned with the client’s business model, scale, operational complexity, and long-term objectives.",
    icon: Users,
  },
  {
    title: "Long-Term Partnership Approach",
    desc:
      "We work as an extended finance and advisory team, supporting clients across growth stages and evolving regulatory needs.",
    icon: TrendingUp,
  },
];

const WhyUs = () => {
  return (
    <div className="w-full bg-[#F9FAFB] text-[#0F172A]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#36454F] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Why ASKCA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At ASKCA Financial Consultants, we combine Chartered
            Accountant–led expertise with a consulting-driven mindset
            to deliver practical, compliant, and outcome-oriented solutions.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-[#FCE7D1]">
                    <Icon className="text-[#F49426]" size={26} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 md:px-12 py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          <div className="rounded-xl p-6">
            <h4 className="text-3xl font-semibold text-[#36454F] mb-2">
              CA-Led
            </h4>
            <p className="text-sm text-slate-600">
              Chartered Accountant–driven advisory
            </p>
          </div>
          <div className="rounded-xl p-6">
            <h4 className="text-3xl font-semibold text-[#36454F] mb-2">
              Compliance-First
            </h4>
            <p className="text-sm text-slate-600">
              Strong governance & regulatory discipline
            </p>
          </div>
          <div className="rounded-xl p-6">
            <h4 className="text-3xl font-semibold text-[#36454F] mb-2">
              Long-Term
            </h4>
            <p className="text-sm text-slate-600">
              Partnership-led consulting approach
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with ASKCA
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Work with a disciplined, professional, and compliance-focused
          advisory firm that understands both strategy and execution.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
};

export default WhyUs;
