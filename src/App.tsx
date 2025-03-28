import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './pages/hero';
import Navbar from './components/global/navbar';
import DataRecovery from './pages/data-recovery';
import DigitalResponse from './pages/digital-forensics';
import EndpointMontioring from './pages/endpoint-monitoring';
import CyberSecurityAssesment from './pages/cybersecurity-assesment';
import IncidentResponse from './pages/incident-response';
import SpecializedGovernmentServices from './pages/specialized-government-services';



const WebDesignResponsive = () => <div>Responsive Design Page</div>;
const WebDesignUX = () => <div>UX Principles Page</div>;
const FrontendDev = () => <div>Frontend Development Page</div>;
const BackendDev = () => <div>Backend Development Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/web-design/responsive" element={<WebDesignResponsive />} />
            <Route path="/web-design/ux" element={<WebDesignUX />} />
            <Route path="/projects/web-design" element={<FrontendDev />} />
            <Route path="/development/backend" element={<BackendDev />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/incident-response" element={<IncidentResponse />} />
            <Route path="/services/cyber-assesment" element={<CyberSecurityAssesment />} />
            <Route path="/services/endpoint-monitoring" element={<EndpointMontioring />} />
            <Route path="/services/digital-forensics" element={<DigitalResponse />} />
            <Route path="/services/data-recovery" element={<DataRecovery />} />
            <Route path="/specialized-government-services" element={<SpecializedGovernmentServices />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;