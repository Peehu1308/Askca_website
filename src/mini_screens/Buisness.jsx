import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessAdvisory = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

      {/* HERO */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center bg-[#FFF9C4]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Business & Transaction Advisory
        </h1>
        <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-3xl mx-auto mb-8">
          We help businesses navigate complex transactions, mergers, and strategic decisions with clarity, compliance, and confidence.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#F49426] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Consult Our Experts
        </Link>
      </section>

      {/* PROCESS FLOW */}
      <section className="px-6 md:px-12 py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#101010] mb-10 text-center">
            How We Help Your Business
            <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Business Analysis",
                desc: "We evaluate your business structure, operations, and opportunities for growth or optimization."
              },
              {
                step: "2",
                title: "Strategic Planning",
                desc: "Tailored strategies for transactions, investments, and risk management aligned with your goals."
              },
              {
                step: "3",
                title: "Execution Support",
                desc: "Assistance during mergers, acquisitions, fund raising, and business restructuring with compliance assurance."
              },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="text-[#F49426] font-bold text-3xl mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-[#101010] mb-2">{item.title}</h3>
                <p className="text-[#182729] text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
  <h2 className="text-4xl font-extrabold text-[#101010] mb-10 text-center">
    Our Advisory Capabilities
    <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "Mergers & Acquisitions Advisory",
        desc: "Advisory support across mergers, acquisitions, and business combinations, including valuation, structuring, due diligence, and regulatory coordination."
      },
      {
        title: "Fundraising & Capital Advisory",
        desc: "Strategic advisory on equity and debt fundraising, capital structuring, and investor alignment to support growth and long-term financial stability."
      },
      {
        title: "Business Restructuring & Turnaround",
        desc: "Advisory on financial and operational restructuring to improve efficiency, liquidity management, and long-term viability."
      },
      {
        title: "Transaction & Deal Support",
        desc: "End-to-end transaction advisory covering due diligence, financial analysis, documentation support, and execution oversight."
      },
    ].map((item, idx) => (
      <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <User2 size={28} className="text-[#F49426]" />
          <h3 className="text-xl font-semibold text-[#101010]">
            {item.title}
          </h3>
        </div>
        <p className="text-[#182729] text-sm md:text-base">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#101010] mb-4">
          Need expert guidance on Business Transactions?
        </h2>
        <p className="text-[#182729] mb-8 text-lg">
          Speak with our advisors for tailored solutions.
        </p>
        <Link
          to="/contact-us"
          className="bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Talk to an Expert
        </Link>
      </section>


    </div>
  );
};

export default BusinessAdvisory;
