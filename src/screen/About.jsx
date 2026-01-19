import React from "react";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="w-full bg-white text-[#101010]">

      {/* PAGE HEADER */}
      <section className="bg-[#F9FAFB] px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Us
        </h1>
        <p className="text-lg text-[#182729] max-w-3xl leading-relaxed">
          ASKCA Investment Advisors is a SEBI-registered investment advisory
          firm providing independent, research-driven, and client-focused
          financial advice.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-12 py-14 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Text */}
        <div className="space-y-5">
          <p className="text-[#182729] text-base md:text-lg leading-relaxed">
            ASKCA Investment Advisors was established with the objective of
            delivering disciplined, transparent, and ethical investment
            advisory services to individuals and families.
          </p>

          <p className="text-[#182729] text-base md:text-lg leading-relaxed">
            Our advisory philosophy is built on a deep understanding of
            financial markets, economic fundamentals, and behavioral finance.
            We focus on aligning investment strategies with each client’s
            financial objectives, risk profile, and long-term aspirations.
          </p>

          <p className="text-[#182729] text-base md:text-lg leading-relaxed">
            We believe that effective wealth creation is a structured process
            driven by informed decision-making, disciplined execution, and
            long-term perspective rather than short-term market movements.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={aboutImg}
            alt="ASKCA Investment Advisors"
            className="w-full h-[380px] object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-6 md:px-12 py-14 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Our Vision
            </h3>
            <p className="text-[#182729] leading-relaxed">
              To be a trusted and impactful financial partner, enabling clients
              to achieve financial independence and long-term security through
              disciplined and purpose-driven investment advisory.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-[#182729] leading-relaxed">
              To provide personalized, unbiased, and research-backed investment
              advice while maintaining transparency, regulatory compliance, and
              a strong commitment to our clients’ best interests.
            </p>
          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">

        <h2 className="text-3xl font-extrabold mb-8">
          Founder
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          
          <img
            src={aboutImg}
            alt="ASKCA Investment Advisors"
            className="w-full h-[380px] object-cover rounded-xl shadow-md"
          />

          <div>
            <h3 className="text-xl font-semibold mb-2">
              CA Shivam Kumar Aggarwal
            </h3>
            <p className="text-[#182729] text-sm mb-4">
              Founder – ASKCA Investment Advisors
            </p>

            <p className="text-[#182729] leading-relaxed mb-4">
              A dedicated market participant with strong insight into
              microeconomic and macroeconomic dynamics, supported by deep
              expertise in capital markets, investment structuring, and
              behavioral finance.
            </p>

            <p className="text-[#182729] leading-relaxed">
              His advisory approach emphasizes research-led decision-making,
              disciplined portfolio construction, and long-term wealth
              creation aligned with client goals.
            </p>


            <div className="border border-gray-200 rounded-xl p-6 mt-5">
            <ul className="space-y-3 text-[#182729] text-sm">
              <li>• SEBI-Registered Investment Advisor</li>
              <li>• Expertise in Capital Markets & Economics</li>
              <li>• Disciplined & Goal-Oriented Advisory Approach</li>
              <li>• Ethical, Transparent Client Engagement</li>
            </ul>
          </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
