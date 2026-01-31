import { Landmark, Layers2, LineChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import about from "../assets/about.jpeg";
import { Faq_section } from "../components/Faq_section";
import Services_box from "../components/Services_box";
import Team_box from "../components/Team_box";

import mainimg from "../assets/mainimg.jpg";
import market from "../assets/market.jpg";

const HomeScreen = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">

     <section className="mt-8 px-6 md:px-12 py-5 bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* LEFT CONTENT */}
    <div className="flex-1">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#101010] mb-6 leading-tight">
        ASK<span className="text-[#F49426]">CA</span>
      </h1>

      <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-xl mb-10">
        A comprehensive financial consultancy firm founded by seasoned Chartered
        Accountants, delivering trusted, compliant, and growth-focused financial
        solutions.
      </p>

      {/* HIGHLIGHT CARDS */}
      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-[#F49426] mb-2 text-lg">
            Expert Advisory
          </h3>
          <p className="text-[#334155] text-sm leading-6">
            Deep expertise across taxation, compliance, and strategic financial planning.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-[#F49426] mb-2 text-lg">
            Integrity & Compliance
          </h3>
          <p className="text-[#334155] text-sm leading-6">
            Ethical, transparent, and regulation-driven advisory you can rely on.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-[#F49426] mb-2 text-lg">
            Growth-Focused Strategy
          </h3>
          <p className="text-[#334155] text-sm leading-6">
            Financial decisions aligned with long-term business growth.
          </p>
        </div>
      </div>

      <Link
        to="/about-us"
        className="inline-block bg-[#F49426] text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg"
      >
        Know More
      </Link>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img
        // src={building}
        // src={analyst}
        src={mainimg}
        alt="About ASKCA"
        className="h-[70vh] w-full object-left-top md:object-fit rounded-3xl shadow-xl"
      />
    </div>
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
  title="Corporate Finance"
  content="Advisory on capital structuring, financial modeling, mergers and acquisitions, fund-raising strategies, and long-term financial planning to support business growth."
  icon={<Landmark size={36} className="text-[#F49426]" />}
  link="/coporate"
/>

<Services_box
  title="Investment Services"
  content="Strategic investment advisory including portfolio assessment, risk-return analysis, market opportunities evaluation, and guidance aligned with client financial goals."
  icon={<TrendingUp size={36} className="text-[#F49426]" />}
  link="/investment"
/>

<Services_box
  title="Trading Advisory"
  content="Advisory on trading processes, market analysis, risk management frameworks, and performance review to support disciplined and informed trading decisions."
  icon={<LineChart size={36} className="text-[#F49426]" />}
  link="/trading"
/>

<Services_box
  title="Other Services"
  content="Support for company and LLP formation, MSME and startup registrations, regulatory compliance (SEBI/RBI), and statutory and certification-related services."
  icon={<Layers2 size={36} className="text-[#F49426]" />}
  link="/services/otherservices"
/>
</div>

      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-12 py-16 bg-[#FFFFFF] inset-y-0">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#101010] mb-12 relative inline-block">
    Why Choose Us?
    <span className="block w-20 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src={market}
        alt="About ASKCA"
        className="w-full object-cover rounded-2xl shadow-2xl"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 space-y-6">
      <p className="text-[#182729] text-lg md:text-xl leading-relaxed">
        ASK<span className="text-[#F49426]">CA</span> is a comprehensive financial consultancy firm founded by seasoned Chartered Accountants with deep expertise across Financial Planning, Accounting, Direct and Indirect Taxation, International Taxation, Secretarial Services, and Management Consulting.
      </p>
      <p className="text-[#182729] text-lg md:text-xl leading-relaxed">
        With a strong presence in the Delhi-NCR region, ASK<span className="text-[#F49426]">CA</span> delivers tailored financial solutions to individuals, partnership firms, startups, and corporates.
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
    Our Founders
    <span className="block w-20 h-1 bg-[#F49426] mx-auto mt-2 rounded"></span>
  </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
          Why Choose ASK<span className="text-[#F49426]">CA</span>
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
