import React from "react";
import {
  Briefcase,
  LineChart,
  Landmark,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "Direct Tax Advisory",
    icon: Landmark,
    points: [
      "Strategic tax planning and structuring",
      "Corporate and individual tax advisory",
      "Tax-efficient decision-making frameworks",
      "Regulatory alignment and compliance support",
    ],
    link:"/services/direct-tax"
  },
  {
    title: "Indirect Tax (GST)",
    icon: FileCheck,
    points: [
      "GST advisory and compliance management",
      "Transaction-level GST impact analysis",
      "Input tax credit optimization",
      "Support during assessments and audits",
    ],
    link:"/services/indirect-tax"
  },
  {
    title: "Business Advisory",
    icon: Briefcase,
    points: [
      "Virtual CFO and finance function support",
      "Financial structuring and strategic advisory",
      "Cash flow, budgeting, and MIS support",
      "Governance and internal control frameworks",
    ],
    link:"/services/business-advisory"
  },
  {
    title: "Other Professional Services",
    icon: LineChart,
    points: [
      "Financial modelling and business projections",
      "Funding and transaction advisory support",
      "Scenario-based financial planning",
      "Regulatory, reporting, and compliance assistance",
    ],
    link:"/services/otherservices"
  },
];

const CorporateFinance = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#101010]">

      {/* HERO */}
      <section className="relative px-6 md:px-12 py-28 bg-[#FFF9C4]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Corporate <span className="text-[#F49426]">Services</span>
          </h1>
          <p className="text-lg text-[#182729] leading-relaxed mx-auto max-w-3xl">
            Structured advisory and compliance services supporting businesses,
            startups, and promoters in making informed decisions, strengthening
            governance, and achieving sustainable long-term growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {serviceCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
              to={item.link}
                key={idx}
                className="group bg-white border border-gray-100 rounded-2xl p-8
                           shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6 ">
                  <div className="p-3 rounded-xl bg-[#FCE7D1] group-hover:scale-105 transition">
                    <Icon size={24} className="text-[#F49426]" />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mt-1">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-1 text-sm text-[#182729] leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#F49426] text-lg leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CLIENT VALUE */}
      <section className="bg-[#FFF9C4]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold mb-5 tracking-tight">
            Client Value
          </h2>
          <p className="text-[#182729] leading-relaxed text-lg">
            Integrated advisory and compliance delivered through a single
            engagement model — enabling clearer financial insight, disciplined
            governance, and confident strategic decision-making.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CorporateFinance;
