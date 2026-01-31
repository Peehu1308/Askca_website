import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./screen/About";
import Contact from "./screen/Contact";
import HomeScreen from "./screen/HomeScreen";
import Services from "./screen/Services";
import Team from "./screen/Team";

import Coporate from "./mini_screens/Coporate";
import InsurancePlanning from "./mini_screens/insurance";
import InvestmentServices from "./mini_screens/Investment";
import MutualFundAdvisory from "./mini_screens/mutual";
import PortfolioConsultancy from "./mini_screens/Portfolio";
import RetirementPlanning from "./mini_screens/retirement";
import TaxEfficientInvestments from "./mini_screens/tax";
import WealthAdvisory from "./mini_screens/Wealth";
import Whyus from "./mini_screens/Whyus";

import BusinessAdvisory from "./mini_screens/Buisness";
import DirectTax from "./mini_screens/DirectTax";
import IndirectTax from "./mini_screens/IndirectTax";
import OtherServices from "./mini_screens/OtherServices";
import Trading from "./mini_screens/trading";
import Scrolltotop from "./Scrolltotop";
// import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="bg-[#F5F6F7]">
      <BrowserRouter>

        <Navbar />

        <Scrolltotop/>
        {/* GLOBAL OFFSET FOR FIXED NAVBAR */}
        <main className="md:pt-[96px] lg:pt-[96px]">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/our-founders" element={<Team />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coporate-finance" element={<Coporate />} />
            <Route path="/why-us" element={<Whyus />} />

            <Route path="/investment-services" element={<InvestmentServices />} />
            <Route path="/portfolio-consultancy" element={<PortfolioConsultancy />} />
            <Route path="/wealth-advisory" element={<WealthAdvisory />} />
            <Route path="/tax-efficient-investment" element={<TaxEfficientInvestments />} />
            <Route path="/retirement-planning" element={<RetirementPlanning />} />
            <Route path="/mutual-fund-advisory" element={<MutualFundAdvisory />} />
            <Route path="/insurance" element={<InsurancePlanning />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/trading" element={<Trading/>} />

            <Route path="/services/direct-tax" element={<DirectTax />} />
            <Route path="/services/indirect-tax" element={<IndirectTax />} />
            <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
            <Route path="/services/otherservices" element={<OtherServices />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
