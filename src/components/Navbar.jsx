import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";

/* =======================
   SERVICE MEGA MENU DATA
======================= */
const services = [
  {
    name: "Corporate Finance",
    path: "/coporate",
    other: [
      { label: "Direct Tax", path: "/services/direct-tax" },
      { label: "Indirect Tax (GST)", path: "/services/indirect-tax" },
      { label: "Business & Transaction Advisory", path: "/services/business-advisory" },
      { label: "Other Services", path: "/services/otherservices" },
    ],
  },
  {
    name: "Investment Services",
    path: "/investment",
    other: [
      { label: "Portfolio Consultancy", path: "/portfolio" },
      { label: "Wealth Advisory", path: "/wealth" },
      { label: "Retirement Planning", path: "/services/retirement-planning" },
      { label: "Tax-efficient Investment Planning", path: "/services/tax-planning" },
      { label: "Mutual Funds & Stock Analysis", path: "/services/market-analysis" },
      { label: "Insurance Planning", path: "/services/insurance-planning" },
      { label: "Diversified Portfolio Construction", path: "/services/portfolio-construction" },
    ],
  },
  {
    name: "Trading Advisory",
    path: "/services/trading-advisory",
    other: [
      { label: "Equity Trading", path: "/services/equity-trading" },
      { label: "Derivatives Advisory", path: "/services/derivatives" },
    ],
  },
  {
    name: "Other Services",
    path: "/services/otherservices",
    other: [
      { label: "Indirect Tax (GST)", path: "/services/indirect-tax" },
      { label: "Business Advisory", path: "/services/business-advisory" },
    ],
  },
];

/* =======================
   SERVICE MEGA MENU
======================= */
const ServiceMegaMenu = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="fixed inset-x-0 top-[80px] bg-[#1F2933] text-white z-50">
      <div className="w-full mx-auto px-12 py-14 grid grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            We help businesses navigate taxation, compliance, and financial
            strategy with precision, integrity, and long-term vision.
          </p>
          <Link
            to="/services"
            className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Explore Services
          </Link>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              onMouseEnter={() => setActiveService(index)}
              className={`flex justify-between items-center border-b border-white/10 pb-3 transition ${
                activeService === index
                  ? "text-[#F49426]"
                  : "hover:text-[#F49426]"
              }`}
            >
              <span className="text-sm">{service.name}</span>
              <span>→</span>
            </Link>
          ))}
        </div>

        <div>
          <h4 className="text-[#F49426] font-semibold mb-4">Spotlight</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {services[activeService].other.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* =======================
   ABOUT MEGA MENU
======================= */
const aboutData = [
  {
    name: "Our Purpose",
    spotlight: [
      "Enable informed financial decision-making",
      "Disciplined & transparent advisory",
      "High-quality compliance solutions",
    ],
  },
  {
    name: "Our Values",
    spotlight: [
      "Integrity – Highest ethical standards",
      "Independence – Conflict-free advice",
      "Excellence – Technical depth & rigour",
      "Confidentiality – Client data protection",
      "Accountability – Ownership of outcomes",
    ],
  },
  {
    name: "Our Approach",
    spotlight: [
      "Understanding business & regulations",
      "Identifying risks & opportunities",
      "Designing compliant solutions",
      "Supporting execution & implementation",
      "Ongoing advisory & compliance support",
    ],
  },
];

const AboutMegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed inset-x-0 top-[80px] bg-[#1F2933] text-white z-50">
      <div className="w-full mx-auto px-12 py-14 grid grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            We are a multidisciplinary professional firm delivering trusted
            advisory, compliance, and financial solutions with integrity and precision.
          </p>
          <Link
            to="/about"
            className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>

        <div className="space-y-4">
          {aboutData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex justify-between items-center border-b border-white/10 pb-3 cursor-pointer transition ${
                activeIndex === index
                  ? "text-[#F49426]"
                  : "hover:text-[#F49426]"
              }`}
            >
              <span>{item.name}</span>
              <span>→</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-[#F49426] font-semibold mb-4">Spotlight</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {aboutData[activeIndex].spotlight.map((point, idx) => (
              <li key={idx} className="hover:text-white transition">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* =======================
   NAVBAR (CLICK LOGIC ADDED)
======================= */
const Navbar = () => {
  const [openService, setOpenService] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const navbarRef = useRef(null);

  const toggleService = () => {
    setOpenService(prev => !prev);
    setOpenAbout(false);
  };

  const toggleAbout = () => {
    setOpenAbout(prev => !prev);
    setOpenService(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenService(false);
        setOpenAbout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className="relative">
      <div className="relative z-[1000] flex items-center justify-between bg-[#1F2933] px-8 py-4 text-white">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={logo} alt="logo" className="h-16 w-16 object-contain" />
          </Link>

          <div className="flex items-center gap-6">
            <div className="relative">
              <span
                onClick={toggleService}
                className="text-lg font-bold hover:text-[#F49426] transition cursor-pointer"
              >
                Service
              </span>
              {openService && <ServiceMegaMenu />}
            </div>

            <div className="relative">
              <span
                onClick={toggleAbout}
                className="text-lg font-bold hover:text-[#F49426] transition cursor-pointer"
              >
                About Us
              </span>
              {openAbout && <AboutMegaMenu />}
            </div>

            <Link to="/why" className="text-lg font-bold hover:text-[#F49426] transition">
              Why Us
            </Link>

            <Link to="/team" className="text-lg font-bold hover:text-[#F49426] transition">
              Team
            </Link>

            <Link to="/contact" className="text-lg font-bold hover:text-[#F49426] transition">
              Contact Us
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          className="bg-[#F49426] px-5 py-2.5 rounded-md font-semibold hover:opacity-90 transition"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;