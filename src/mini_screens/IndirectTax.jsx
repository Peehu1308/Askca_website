import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

const IndirectTax = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Indirect Tax (GST) Services
        </h1>

        <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-3xl mb-8">
          Our GST services ensure businesses comply with the GST regime, optimize tax credits, and streamline indirect tax operations efficiently.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#F49426] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Consult Our Experts
        </Link>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#101010] mb-10">
          Our GST Capabilities
          <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "GST Compliance & Filing",
              desc: "Timely filing of GST returns, reconciling input credits, and maintaining compliance with all statutory provisions.",
            },
            {
              title: "GST Advisory",
              desc: "Strategic guidance on GST implications for your business transactions, supply chain, and cross-border operations.",
            },
            {
              title: "Audit & Assessment",
              desc: "Support during GST audits, assessments, and notices from tax authorities with precise documentation.",
            },
            {
              title: "Input Tax Credit Optimization",
              desc: "Maximizing eligible credits while ensuring compliance to reduce the tax burden.",
            },
            {
              title: "International GST",
              desc: "Advisory on GST for imports, exports, and cross-border services, including refund claims and compliance.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <User2 size={28} className="text-[#F49426]" />
                <h3 className="text-xl font-semibold text-[#101010]">{item.title}</h3>
              </div>
              <p className="text-[#182729] text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ASK<span className="text-[#F49426]">CA</span> */}
      <section className="px-6 md:px-12 py-16 bg-[#FFF9C4] text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#101010] mb-10">
            Why ASK<span className="text-[#F49426]">CA</span> for GST?
            <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">Expert GST Knowledge</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Experienced professionals ensuring accurate GST advisory and compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">Seamless Compliance</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Ensuring your business meets all GST filing and reporting requirements efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">Strategic Advisory</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Optimizing tax liabilities while supporting your long-term business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#101010] mb-4">
          Need expert guidance on GST?
        </h2>
        <p className="text-[#182729] mb-8 text-lg">
          Speak with our tax professionals for tailored advice.
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

export default IndirectTax;
