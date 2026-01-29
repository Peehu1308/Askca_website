import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoimg.svg";
import Logo from "../assets/tagline.png";
import logoimg from "../assets/Logo_img.png"
import { ArrowBigDown, ArrowBigDownDashIcon, ArrowDownIcon, MoveDown } from "lucide-react";




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
      { label: "Retirement Planning", path: "/retirement" },
      { label: "Tax-efficient Investment Planning", path: "/tax" },
      { label: "Mutual Funds & Stock Analysis", path: "/mutual" },
      { label: "Insurance Planning", path: "/insurance" },
      { label: "Diversified Portfolio Construction", path: "/portfolio" },
    ],
  },
  {
    name: "Trading Advisory",
    path: "/trading",
    other: [
      { label: "Trading Advisory", path: "/trading" },
      // { label: "Derivatives Advisory", path: "/services/derivatives" },
    ],
  },
  {
    name: "Other Services",
    path: "/services/otherservices",
    other: [
      { label: "Other Services", path: "/services/otherservices" },
      // { label: "Business Advisory", path: "/services/business-advisory" },
    ],
  },
];

/* =======================
   SERVICE MEGA MENU
======================= */
const ServiceMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div
      className={`fixed inset-x-0 top-[80px] bg-[#1F2933] text-white z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full mx-auto px-4 md:px-12 py-8 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Services</h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            We help businesses navigate taxation, compliance, and financial
            strategy with precision, integrity, and long-term vision.
          </p>
          <Link
            to="/services"
            className="border border-white px-4 md:px-6 py-2 text-sm hover:bg-white hover:text-black transition"
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

const AboutMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`fixed inset-x-0 top-[80px] bg-[#1F2933] text-white z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full mx-auto px-4 md:px-12 py-8 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            We are a multidisciplinary professional firm delivering trusted
            advisory, compliance, and financial solutions with integrity and precision.
          </p>
          <Link
            to="/about"
            className="border border-white px-4 md:px-6 py-2 text-sm hover:bg-white hover:text-black transition"
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

const MobileMenu = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [openaboutt,setopenabout]=useState(null);

  const toggleAbout=(index)=>{
    setopenabout(openaboutt===index?null:index);
  };
  return (
    <div
      className={`fixed inset-x-0 top-[80px] bg-[#1F2933] text-white z-50 transition-all duration-500 ease-in-out md:hidden min-h-screen ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="px-8 py-4 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div key={index}>
                {/* Service Row */}
                <div className="flex items-center justify-between">
                  <Link
                    to={service.path}
                    className="text-sm hover:text-[#F49426] transition"
                  >
                    {service.name}
                  </Link>

                  <button
                    onClick={() => toggleDropdown(index)}
                    className="p-1"
                  >
                    <ArrowBigDownDashIcon
                      className={`transition-transform h-3 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown */}
                {openDropdown === index && (
                  <ul className="ml-4 mt-2 space-y-1 text-xs text-gray-300">
                    {service.other.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="hover:text-white transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <div className="space-y-2">
            {aboutData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div className="text-sm">{item.name}</div>
                <button onClick={()=>toggleAbout(index)} className="p-1">
                  <ArrowBigDownDashIcon className={`transition-transform h-3 ${
                    openaboutt===index ?"rotate-180":""
                  }`}/>

                </button>
                </div>
                {openaboutt===index && (
                  <ul className="ml-4 mt-2 space-y-1 text-xs text-gray-300">
                  {item.spotlight.map((point, idx) => (
                    <li key={idx} className="hover:text-white transition">
                      {point}
                    </li>
                  ))}
                </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <Link to="/why" className="block text-sm hover:text-[#F49426] transition">
            Why Us
          </Link>
          <Link to="/team" className="block text-sm hover:text-[#F49426] transition">
            Team
          </Link>
          <Link to="/contact" className="block text-sm hover:text-[#F49426] transition">
            Contact Us
          </Link>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const serviceTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const location = useLocation();

  const toggleService = () => {
    setOpenService(prev => !prev);
    setOpenAbout(false);
    setIsMobileMenuOpen(false);
  };

  const toggleAbout = () => {
    setOpenAbout(prev => !prev);
    setOpenService(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setOpenService(false);
    setOpenAbout(false);
  };

  const handleServiceMouseEnter = () => {
    if (serviceTimeoutRef.current) clearTimeout(serviceTimeoutRef.current);
    setOpenService(true);
  };

  const handleServiceMouseLeave = () => {
    serviceTimeoutRef.current = setTimeout(() => setOpenService(false), 200);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setOpenAbout(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setOpenAbout(false), 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenService(false);
        setOpenAbout(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenService(false);
    setOpenAbout(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-[1000]">
      <div className="flex items-center justify-between bg-[#1F2933] px-4 md:px-8 py-4 text-white">
        <div className="flex items-center gap-4 md:gap-10">
          <Link to="/">
            <img src={logoimg} alt="logo" className="text-white h-24 md:h-16 w-12 md:w-16 object-contain" />
          </Link>
          {/* <Link to="/">
  <Logo className="h-12 w-12 text-white hover:text-[#F49426]" />
</Link> */}


          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <span
                onMouseEnter={handleServiceMouseEnter}
                onMouseLeave={handleServiceMouseLeave}
                onClick={toggleService}
                className="text-lg font-bold hover:text-[#F49426] transition cursor-pointer"
              >
                <Link to="/services">Services</Link>
              </span>
              <ServiceMegaMenu
                isOpen={openService}
                onMouseEnter={handleServiceMouseEnter}
                onMouseLeave={handleServiceMouseLeave}
              />
            </div>

            <div className="relative">
              <span
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
                onClick={toggleAbout}
                className="text-lg font-bold hover:text-[#F49426] transition cursor-pointer"
              >
                <Link to="/about">About Us</Link>
              </span>
              <AboutMegaMenu
                isOpen={openAbout}
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              />
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

          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>

        <Link
          to="/contact"
          className="hidden md:flex lg:flex bg-[#F49426] px-3 md:px-5 py-2 md:py-2.5 rounded-md font-semibold text-sm md:text-base hover:opacity-90 transition"
        >
          Book an Appointment
        </Link>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </div>
  );
};

export default Navbar;