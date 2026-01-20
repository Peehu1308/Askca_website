import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { User2 } from "lucide-react";

const DirectTax = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Direct Tax Services
        </h1>

        <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-3xl mb-8">
          Our Direct Tax services are designed to help individuals and
          organizations manage compliance, optimize tax positions, and navigate
          complex tax regulations with clarity and confidence.
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
          Our Direct Tax Capabilities
          <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Corporate Tax Advisory",
              desc:
                "Strategic tax planning and advisory to enhance tax efficiency while ensuring full regulatory compliance.",
            },
            {
              title: "Tax Compliance & Filings",
              desc:
                "Computation of income, income tax return filing, advance tax, and TDS compliance with accurate reporting.",
            },
            {
              title: "Litigation & Representation",
              desc:
                "Representation before tax authorities including assessments, CIT (Appeals), and ITAT proceedings.",
            },
            {
              title: "International Taxation",
              desc:
                "Advisory on cross-border transactions, DTAA benefits, foreign remittances, and global tax structuring.",
            },
            {
              title: "Individual & HNI Taxation",
              desc:
                "Personalized tax planning and compliance services for individuals, professionals, and HNIs.",
            },
            {
              title: "Tax Planning & Opinions",
              desc:
                "Strategic tax planning, risk assessment, and professional opinions to support informed decisions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <User2 size={28} className="text-[#F49426]" />
                <h3 className="text-xl font-semibold text-[#101010]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#182729] text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ASKCA */}
      <section className="px-6 md:px-12 py-16 bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#101010] mb-10">
            Why ASKCA for Direct Tax?
            <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">
                Deep Technical Expertise
              </h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Experienced Chartered Accountants with strong domain and
                industry knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">
                Compliance-Driven Approach
              </h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Every solution is aligned with statutory requirements and
                evolving tax laws.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#101010] mb-2">
                Practical & Strategic Advice
              </h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Solutions that balance tax efficiency with long-term business
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#101010] mb-4">
          Need expert guidance on Direct Tax?
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

export default DirectTax;
