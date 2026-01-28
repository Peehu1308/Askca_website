import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeScreen from "./screen/HomeScreen";
import Team from "./screen/Team";
import About from "./screen/About";
import Services from "./screen/Services";
import Contact from "./screen/Contact";

import Coporate from "./mini_screens/Coporate";
import Whyus from "./mini_screens/Whyus";
import InvestmentServices from "./mini_screens/Investment";
import PortfolioConsultancy from "./mini_screens/Portfolio";
import WealthAdvisory from "./mini_screens/Wealth";
import TaxEfficientInvestments from "./mini_screens/tax";
import RetirementPlanning from "./mini_screens/retirement";
import MutualFundAdvisory from "./mini_screens/mutual";
import InsurancePlanning from "./mini_screens/insurance";

import DirectTax from "./mini_screens/DirectTax";
import IndirectTax from "./mini_screens/IndirectTax";
import BusinessAdvisory from "./mini_screens/Buisness";
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
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coporate" element={<Coporate />} />
            <Route path="/why" element={<Whyus />} />

            <Route path="/investment" element={<InvestmentServices />} />
            <Route path="/portfolio" element={<PortfolioConsultancy />} />
            <Route path="/wealth" element={<WealthAdvisory />} />
            <Route path="/tax" element={<TaxEfficientInvestments />} />
            <Route path="/retirement" element={<RetirementPlanning />} />
            <Route path="/mutual" element={<MutualFundAdvisory />} />
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
