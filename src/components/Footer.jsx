import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white">
      
      {/* Main Footer */}
      <div className="px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ASK<span className="text-[#F49426]">CA</span></h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            A trusted financial consultancy firm delivering expert taxation,
            compliance, and business advisory services with integrity and
            precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#F49426]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#F49426]">Services</Link></li>
            <li><Link to="/about-us" className="hover:text-[#F49426]">About Us</Link></li>
            <li><Link to="/why" className="hover:text-[#F49426]">Why us</Link></li>
            <li><Link to="/our-founders" className="hover:text-[#F49426]">Team</Link></li>
            <li><Link to="/contact" className="hover:text-[#F49426]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            
            <li>
                <Link to="/coporate-finance" className="hover:text-[#F49426]">Corporate Finance</Link>
            </li>
            <li>
                <Link to="/investment" className="hover:text-[#F49426]">Investment Services</Link>
            </li>
            <li>
                <Link to="/trading" className="hover:text-[#F49426]">Trading Advisory</Link>
            </li>
            <li>
                <Link to="/services/otherservices" className="hover:text-[#F49426]">Other Services</Link>
            </li>
            {/* <a
  href="https://wa.me/8130414919?text=Hello%20I%20would%20like%20to%20consult%20ASK<span className="text-[#F49426]">CA</span>"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
>
  Chat on WhatsApp
</a> */}

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Noida, Uttar Pradesh-201304 <br />
            Email: Office@askcafinance.com <br />
            Phone: +91 81304 14919
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ASK<span className="text-[#F49426]">CA</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
