import { CheckCircle } from "lucide-react";

const WealthAdvisory = () => {
  const points = [
    "Comprehensive financial planning covering investments, taxation, and retirement goals.",
    "Estate and succession planning to ensure smooth and tax-efficient wealth transfer.",
    "Goal-aligned investment strategies based on risk tolerance and time horizon.",
    "Risk management through insurance and contingency planning.",
    "Cash flow structuring to balance income, expenses, and long-term savings.",
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 bg-[#FFF9C4] border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Wealth Advisory
          </h1>
          <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-3xl mx-auto">
            A structured and holistic approach to growing, managing, and
            preserving wealth across life stages and generations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6">
            Our Wealth Advisory Framework
            <span className="block w-20 h-1 bg-[#F49426] mt-3 rounded"></span>
          </h2>

          <p className="text-[#182729] leading-relaxed mb-8">
            At ASK<span className="text-[#F49426]">CA</span>, wealth advisory goes beyond product selection.
            We integrate investments, taxation, risk management, and
            long-term planning into a single, coordinated financial strategy.
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
        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Our Advisory Approach
          </h3>

          <p className="text-[#182729] leading-relaxed mb-6">
            We follow a disciplined, research-driven advisory model that
            aligns your financial decisions with clearly defined objectives
            while maintaining transparency and regulatory discipline.
          </p>

          <p className="text-[#182729] leading-relaxed">
            Our role is to act as a long-term financial partner—reviewing,
            refining, and realigning your wealth strategy as your personal
            and professional life evolves.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center bg-[#FFF9C4]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Plan, Protect, and Grow Your Wealth with Confidence
          </h2>
          <p className="text-[#182729] text-lg mb-8 leading-relaxed">
            Speak with ASK<span className="text-[#F49426]">CA</span>’s advisory team to build a structured,
            compliant, and long-term wealth strategy.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </div>
  );
};

export default WealthAdvisory;
