import React from "react";
import Footer from "../components/Footer";
import { User2, Briefcase, PieChart, FileText } from "lucide-react";

const servicesData = [
  {
    title: "Direct Tax Advisory",
    desc: "Expert advice on corporate and individual taxation, compliance, and strategic tax planning to optimize your tax position.",
    icon: <User2 size={32} className="text-[#F49426]" />,
    path: "/services/direct-tax",
  },
  {
    title: "Indirect Tax (GST)",
    desc: "Ensure GST compliance, maximize input credits, and streamline indirect tax operations for your business.",
    icon: <FileText size={32} className="text-[#F49426]" />,
    path: "/services/gst",
  },
  {
    title: "Business & Transaction Advisory",
    desc: "Support for mergers, acquisitions, restructuring, and strategic business decisions with clarity and compliance.",
    icon: <Briefcase size={32} className="text-[#F49426]" />,
    path: "/services/business-advisory",
  },
  {
    title: "Other Services",
    desc: "Accounting, bookkeeping, payroll, internal audits, financial advisory, and corporate governance solutions tailored for your business.",
    icon: <PieChart size={32} className="text-[#F49426]" />,
    path: "/services/otherservices",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-24 bg-[#F5F5F5] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-[#182729] max-w-3xl mx-auto leading-relaxed mb-8">
          At ASKCA, we provide end-to-end financial and advisory solutions tailored for individuals, startups, and corporates. Explore our services to see how we can help your business grow and stay compliant.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#101010] mb-12 text-center">
          What We Offer
          <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, idx) => (
            <a
              href={service.path}
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col items-center text-center hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#101010] mb-3">{service.title}</h3>
              <p className="text-[#182729] text-sm md:text-base">{service.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED / APPROACH SECTION */}
      <section className="px-6 md:px-12 py-20 bg-[#FFF9C4]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#101010] mb-10">
            Our Approach
            <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
          </h2>
          <p className="text-[#182729] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            At ASKCA, we combine technical expertise with strategic insight to deliver solutions that are compliant, efficient, and tailored to your business objectives.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Expert Guidance</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Our seasoned professionals provide actionable advice for all financial, tax, and regulatory challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Tailored Solutions</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                Every business is unique, so our solutions are customized to meet your specific needs and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-[#101010]">Integrity & Compliance</h4>
              <p className="text-[#182729] text-sm leading-relaxed">
                We ensure all solutions comply with regulations while maintaining transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#101010] mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-[#182729] mb-8 text-lg">
          Connect with our experts today to get personalized financial and advisory solutions.
        </p>
        <a
          href="/contact"
          className="bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Talk to an Expert
        </a>
      </section>


    </div>
  );
};

export default Services;
