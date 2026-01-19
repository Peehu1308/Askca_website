import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomeScreen from './screen/HomeScreen'
import Team from './screen/Team'
import About from './screen/About'
import DirectTax from './mini_screens/Directtax'
import Contact from './screen/Contact'
import IndirectTax from './mini_screens/IndirectTax'
import BusinessAdvisory from './mini_screens/Buisness'
import OtherServices from './mini_screens/OtherServices'
import Services from './screen/Services'

function App() {


  return (
    <div className=''>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services/direct-tax" element={<DirectTax />} />
        <Route path="/services/indirect-tax" element={<IndirectTax/>} />
        <Route path="/services/business-advisory" element={<BusinessAdvisory/>} />
        <Route path="/services/otherservices" element={<OtherServices/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
