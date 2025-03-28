import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './pages/hero';
import Navbar from './components/global/navbar';



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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;