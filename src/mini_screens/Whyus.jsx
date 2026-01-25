import {
    Briefcase,
    Layers,
    ShieldCheck,
    TrendingUp,
    Users,
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
    <div className="w-full bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#F5F5F5] text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Why ASK<span className="text-[#F49426]">CA</span>
          </h1>
          <p className="text-lg md:text-xl text-[#182729] leading-relaxed">
            ASK<span className="text-[#F49426]">CA</span> is a Chartered Accountant–led financial consulting firm
            delivering structured, compliant, and outcome-driven advisory
            services to individuals, startups, and corporates.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
  {/* SECTION HEADING */}
  <h2 className="text-4xl font-extrabold text-center mb-14">
    Our Differentiators
    <span className="block w-24 h-1 bg-[#F49426] mt-4 mx-auto rounded"></span>
  </h2>

  {/* GRID CONTAINER */}
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center gap-10">
  {features.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition
                   w-full sm:w-[45%] lg:w-[30%] max-w-sm"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-[#FFF3E0]">
            <Icon size={26} className="text-[#F49426]" />
          </div>
          <h3 className="text-lg font-semibold leading-snug">
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

  </div>
</section>


      {/* TRUST STRIP */}
      <section className="px-6 md:px-12 py-16 bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F] mb-2">
              CA-Led
            </h4>
            <p className="text-sm text-[#182729]">
              Chartered Accountant–driven advisory
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F] mb-2">
              Compliance-First
            </h4>
            <p className="text-sm text-[#182729]">
              Governance & regulatory discipline
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-[#36454F] mb-2">
              Long-Term
            </h4>
            <p className="text-sm text-[#182729]">
              Partnership-led engagement model
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Engage with a Trusted Advisory Partner
        </h2>
        <p className="text-[#182729] max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Speak with ASK<span className="text-[#F49426]">CA</span> to understand how structured advisory and
          disciplined compliance can support your business and financial goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          Contact Our Team
        </a>
      </section>

    </div>
  );
};

export default WhyUs;
