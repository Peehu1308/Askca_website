import React from "react";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="w-full bg-[#F4F6F8] text-[#0F172A]">

      {/* PAGE HEADER */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            About ASKCA
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            ASKCA is a comprehensive financial consultancy firm founded by
            seasoned Chartered Accountants, delivering high-quality advisory
            and compliance solutions across financial, tax, regulatory, and
            management domains.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              ASKCA delivers advisory and compliance solutions across Financial
              Planning, Accounting, Direct and Indirect Taxation, International
              Taxation, Secretarial Services, and Management Consulting.
            </p>

            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              With a strong presence in the Delhi-NCR region, we advise
              individuals, partnership firms, startups, and corporates by
              combining deep technical expertise with a structured,
              outcome-oriented consulting approach.
            </p>

            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              Our engagements are designed to address both strategic priorities
              and regulatory obligations in a disciplined and efficient
              manner—aligned with each client’s business model, risk framework,
              and long-term objectives.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={aboutImg}
              alt="ASKCA Financial Consultancy"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* PURPOSE & VALUES */}
      <section className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-14">

          {/* Purpose */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Our Purpose
            </h3>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              To enable individuals and businesses to make informed financial
              decisions by delivering disciplined, transparent, and
              high-quality advisory and compliance solutions.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Our Values
            </h3>
            <ul className="space-y-3 text-slate-700 text-base">
              <li><strong>Integrity</strong> — Upholding the highest professional and ethical standards</li>
              <li><strong>Independence</strong> — Objective, conflict-free advice</li>
              <li><strong>Excellence</strong> — Technical depth and analytical rigour</li>
              <li><strong>Confidentiality</strong> — Safeguarding client information</li>
              <li><strong>Accountability</strong> — Ownership of outcomes and timelines</li>
            </ul>
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Our Approach
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our approach is structured, consultative, and client-centric.
            We partner closely with clients to deliver tailored solutions
            that are practical, compliant, and outcome-oriented.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={aboutImg}
              alt="ASKCA Consulting Approach"
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
              We support clients across a wide spectrum of requirements,
              including virtual CFO services, compliance management, tax and
              regulatory advisory, financial structuring, and funding-related
              support.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <ul className="space-y-4 text-slate-700 text-sm md:text-base">
                <li>• Understanding the client’s business and regulatory environment</li>
                <li>• Identifying risks, gaps, and opportunities</li>
                <li>• Designing practical and compliant solutions</li>
                <li>• Supporting implementation and execution</li>
                <li>• Providing ongoing advisory and compliance support</li>
                <li>• Delivering clear and actionable advice</li>
              </ul>
            </div>

            <p className="text-slate-700 leading-relaxed mt-6 text-base md:text-lg">
              We do not believe in one-size-fits-all solutions. Every
              engagement is tailored to the client’s specific needs.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
