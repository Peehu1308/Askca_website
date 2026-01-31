import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

const OtherServices = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      desc: "Maintaining accurate financial records and providing insightful reporting for better business decisions."
    },
    {
      title: "Payroll Services",
      desc: "Efficient management of employee salaries, benefits, and compliance with statutory requirements."
    },
    {
      title: "Internal Audits",
      desc: "Assessing internal controls and operational efficiency to ensure accuracy and mitigate risks."
    },
    {
      title: "Financial Advisory",
      desc: "Guidance on financial planning, investment decisions, and business growth strategies."
    },
    {
      title: "Corporate Governance",
      desc: "Assisting in regulatory compliance, board management, and implementation of governance best practices."
    },
    {
      title: "Risk Management",
      desc: "Identifying, analyzing, and mitigating financial and operational risks for sustainable growth."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center bg-[#FFF9C4]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6">
          Other Services
        </h1>
        <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-3xl mx-auto mb-8">
          Explore our range of specialized services designed to support your business operations, compliance, and strategic growth.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#F49426] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Consult Our Experts
        </Link>
      </section>

      {/* SERVICES CARDS */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#101010] mb-10 text-center">
          Our Offerings
          <span className="block w-28 h-1 bg-[#F49426] mt-3 rounded mx-auto"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <User2 size={28} className="text-[#F49426]" />
                <h3 className="text-xl font-semibold text-[#101010]">{item.title}</h3>
              </div>
              <p className="text-[#182729] text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#101010] mb-4">
          Want to know more about our services?
        </h2>
        <p className="text-[#182729] mb-8 text-lg">
          Get in touch with our experts for personalized assistance.
        </p>
        <Link
          to="/contact-us"
          className="bg-[#F49426] text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>


    </div>
  );
};

export default OtherServices;
