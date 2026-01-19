import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.avif"

const ServiceMegaMenu=()=>{
  const services = [
  { name: "Direct Tax Advisory", path: "/services/direct-tax" },
  { name: "Indirect Tax (GST)", path: "/services/indirect-tax" },
  { name: "Business & Transaction Advisory", path: "/services/business-advisory" },
  { name: "Other Services", path: "/services/otherservices" },
  
];

  return (
    <div className='absolute right-0 left-0 top-full w-screen bg-[#36454F] text-white z-50'>
      <div className='max-w-full mx-auto px-12 py-14 grid grid-cols-3 gap-12'>
        <div>
          <h3 className='text-2xl font-semibold mb-4'>
            Our Services
          </h3>
          <p className='text-sm text-gray-300 leading-relaxed mb-6'>
            We help businesses navigate taxation, compliance, and financial
            strategy with precision, integrity, and long-term vision.
          </p>
          <Link className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition" to="/services">
            Explore Services
          </Link>
        </div>

        <div className='space-y-4'>
          {services.map((service,index)=>(
            <Link key={index}
            to={service.path}
            className="flex justify-between items-center border-b border-white/10 pb-3 
                 hover:text-[#F49426] transition cursor-pointer">
            <span className="text-sm">{service.name}</span>
      <span>→</span>
            </Link>
          ))}
        </div>

        <div>
          <h4 className="text-[#F49426] font-semibold mb-4">Spotlight</h4>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Startup Advisory</li>
            <li className='hover:text-white cursor-pointer'>International Taxation</li>
            <li className='hover:text-white cursor-pointer'>Funding & Valuation</li>
            <li className='hover:text-white cursor-pointer'>Risk & Compilance</li>

          </ul>
        </div>
      </div>

    </div>
  )
}

const Aboutmegamenu = () => {
  return (
    <div className='absolute left-0 top-full w-screen bg-[#36454F] text-white z-50 '>
      <div className='max-w-7xl mx-auto px-12 py-14 grid grid-cols-3 gap-12'>
        
        <div>
          <h3 className='text-2xl font-semibold mb-4'>
            About Us
          </h3>

          <p className='text-sm text-gray-300 leading-relaxed mb-6'>
            We are a multidisciplinary professional firm delivering trusted
            advisory, compliance, and financial solutions to businesses,
            startups, and individuals with integrity and precision.
          </p>

          <Link className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition" to='/about'>
            Learn More
          </Link>
        </div>

        <div className='space-y-4'>
          {[
            "Alliances & Partnerships",
            "Alumni Network",
            "Connect With Us",
            "Our Locations",
            "Our Purpose",
            "Our People",
            "Our Values"
          ].map(item => (
            <div className='flex justify-between items-center border-b border-white/10 pb-3'>
              <span>{item}</span>
              <span>→</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className='text-[#F49426] font-semibold mb-4'>Spotlight</h4>
          <ul className='space-y-3 text-sm'>
            <li>Vision & Leadership</li>
            <li>Mission & Culture</li>
          </ul>
        </div>

      </div>
    </div>
  )
}


const Navbar = () => {

  const [openservice,setopenservice]=useState(false);
  const [openabout,setopenabout]=useState(false);
  return (
    <div className="relative z-[1000] flex items-center justify-between bg-[#36454F] px-8 py-4 text-white">
      
      {/* Left: Logo + Nav Links */}
      <div className="flex items-center gap-10">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="bg-[#36454F] h-16 w-16 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">

          <div className='relative'
          onMouseEnter={()=>setopenservice(true)}
          onMouseLeave={()=>setopenservice(false)}>
            <span className="text-lg font-bold hover:text-[#F49426] transition">
              Service
            </span>

            {openservice&& <ServiceMegaMenu/>}
          </div>
          {/* <Link to="/" className="text-lg font-bold hover:opacity-80 transition">
            Service
          </Link> */}
          {/* <Link to="/about" className="text-lg font-bold hover:opacity-80 transition">
            About Us
          </Link> */}
          <div className='relative' onMouseEnter={()=>setopenabout(true)} onMouseLeave={()=>setopenabout(false)}>
            <span className="text-lg font-bold hover:text-[#F49426] transition">
              About Us
            </span>

            {openabout && <Aboutmegamenu/>}

          </div>
          <Link to="/" className="text-lg font-bold hover:text-[#F49426] transition">
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

      {/* Right: CTA Button */}
      <Link
        to="/contact"
        className="bg-[#F49426] px-5 py-2.5 rounded-md font-semibold hover:opacity-90 transition z-100"
      >
        Book an Appointment
      </Link>

    </div>
  )
}

export default Navbar
