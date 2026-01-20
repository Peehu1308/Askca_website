import React from "react";
import about from "../assets/about.jpeg";
import Services_box from "../components/Services_box";
import {User2} from "lucide-react";
import { Faq_section } from "../components/Faq_section";
import Team_box from "../components/Team_box";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

      <section className="px-12 py-16 flex flex-col md:flex-row items-center gap-12">
  <div className="flex-1">
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6 leading-tight">
      ASKCA
    </h1>

    <p className="text-lg md:text-xl text-[#182729] leading-relaxed max-w-xl mb-8">
      A comprehensive financial consultancy firm founded by seasoned Chartered Accountants, delivering trusted, compliant, and growth-focused financial solutions.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-6">
      {/* Cards */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="font-semibold text-[#F49426] mb-3 text-lg">Expert Advisory</h3>
        <p className="text-[#101010] text-sm md:text-base leading-relaxed">
          Decades of experience across taxation, compliance, and strategic financial planning.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="font-semibold text-[#F49426] mb-3 text-lg">Integrity & Compliance</h3>
        <p className="text-[#101010] text-sm md:text-base leading-relaxed">
          Ethical, transparent, and regulation-driven solutions you can trust.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-[#F49426] font-semibold mb-3 text-lg">Growth-Focused Strategy</h3>
        <p className="text-[#101010] text-sm md:text-base leading-relaxed">
          We align financial decisions with your long-term business growth.
        </p>
      </div>
    </div>

    <Link className="bg-[#F49426] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition mt-4 shadow-md hover:shadow-lg"
    to="/about">
      Know More
    </Link>
  </div>

  <div className="flex-1">
    <img
      src={about}
      alt="About ASKCA"
      className="h-[70vh] w-full object-cover rounded-2xl shadow-2xl"
    />
  </div>
</section>

      <section className="px-6 md:px-12 py-16 bg-[#FFFFFF]">
        {/* <p className="flex text-3xl font-bold text-[#101010] mb-10 justify-center">Experience Excellence with Our Services</p> */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#101010] mb-6 relative inline-block">
    Experience Excellence with Our Services
    <span className="block w-36 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6 px-5'>
  <Services_box
    title="Direct Tax"
    content="Direct tax services including income computation, tax return filing, TDS and advance tax compliance, and strategic tax planning."
    icon={<User2 size={36} className="text-[#F49426]" />}
    link="/"
  />
  <Services_box
    title="Indirect Tax"
    content="Services covering GST registration, returns, compliance, refund claims, and advisory on indirect taxation matters."
    icon={<User2 size={36} className="text-[#F49426]" />}
    link="/"
  />
  <Services_box
    title="Business Advisory Services"
    content="Advisory on business structuring, financial modeling, mergers & acquisitions, and fund-raising strategies."
    icon={<User2 size={36} className="text-[#F49426]" />}
    link="/"
  />
  <Services_box
    title="Other Services"
    content="Support for company/LLP formation, MSME/startup registration, SEBI/RBI compliance, and statutory certifications."
    icon={<User2 size={36} className="text-[#F49426]" />}
    link="/"
  />
</div>

      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-12 py-16 bg-[#FFFFFF]">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#101010] mb-12 relative inline-block">
    Why Choose Us?
    <span className="block w-20 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src={about}
        alt="About ASKCA"
        className="h-auto w-full object-cover rounded-2xl shadow-2xl"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 space-y-6">
      <p className="text-[#182729] text-lg md:text-xl leading-relaxed">
        ASKCA is a comprehensive financial consultancy firm founded by seasoned Chartered Accountants with deep expertise across Financial Planning, Accounting, Direct and Indirect Taxation, International Taxation, Secretarial Services, and Management Consulting.
      </p>
      <p className="text-[#182729] text-lg md:text-xl leading-relaxed">
        With a strong presence in the Delhi-NCR region, ASKCA delivers tailored financial solutions to individuals, partnership firms, startups, and corporates.
      </p>
      <p className="text-[#182729] text-lg md:text-xl leading-relaxed">
        Whether it’s virtual CFO services, compliance management, tax advisory, or funding strategies, we provide disciplined, timely, and integrity-driven support aligned with your business goals.
      </p>
    </div>
  </div>
</section>


<section className="px-6 md:px-12 py-16 bg-[#FFFFFF]">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#101010] mb-6 relative inline-block">
    Frequently Asked Questions
    <span className="block w-20 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>

  <Faq_section/>
</section>

{/* Team section */}
<section className="px-6 md:px-12 py-16 bg-[#FFFFFF]">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#101010] mb-6 relative inline-block">
    Our Team
    <span className="block w-20 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>

 <div className="grid grid-cols-2 gap-4">
   <Team_box title="CA Shivam Kumar Aggarwal 
" 
desc="Chartered Accountant with 3+ years of experience at Ernst & Young, specializing in Indian and international taxation, regulatory compliance (SEBI/RBI), and DTAA advisory. Has advised 250+ domestic and global corporates, including PE funds, AIFs, PSUs, and financial institutions."

profile={about}/>
<Team_box title="CA Mayank Kumar Aggarwal 
" 
desc="Chartered Accountant with 8+ years of experience in financial reporting, direct taxation, and investment management within a listed entity. Known for strategic financial insight, regulatory expertise, and a strong client-focused leadership approach."


profile={about}/>
 </div>
</section>


      {/* WHY US SECTION */}
      {/* <section className="px-12 py-16 bg-[#FFF9C4]">
        <h2 className="text-3xl font-bold text-[#101010] mb-10">
          Why Choose ASKCA
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#182729] mb-3">
              Expert Advisory
            </h3>
            <p className="text-[#101010] text-sm leading-relaxed">
              Decades of experience across taxation, compliance, and strategic
              financial planning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#182729] mb-3">
              Integrity & Compliance
            </h3>
            <p className="text-[#101010] text-sm leading-relaxed">
              Ethical, transparent, and regulation-driven solutions you can
              trust.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#182729] mb-3">
              Growth-Focused Strategy
            </h3>
            <p className="text-[#101010] text-sm leading-relaxed">
              We align financial decisions with your long-term business growth.
            </p>
          </div>

        </div>
      </section> */}

      

    </div>
  );
};

export default HomeScreen;
