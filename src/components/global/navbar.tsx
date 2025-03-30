import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const darkNavigationMenuStyles = {
  trigger:
    "text-white bg-transparent hover:bg-gray-800 focus:bg-gray-800 focus:text-white hover:text-white",
  content: "text-black border border-gray-800",
  item: "text-black hover:bg-gray-200 focus:bg-gray-800 focus:text-white",
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Use effect to scroll to top when location changes (page navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Function to handle section navigation
  const navigateToSection = (elementId: string, path: string = "/") => {
    setIsMenuOpen(false);
    
    if (location.pathname === path) {
      // If already on the correct page, just scroll to section
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on a different page, navigate to the page first, then scroll
      navigate(path);
      
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Services list to maintain consistency between desktop and mobile
  const services = [
    { name: "Incident Response", path: "/services/incident-response" },
    { name: "Cybersecurity Assesment", path: "/services/cyber-assesment" },
    { name: "Endpoint Monitoring", path: "/services/endpoint-monitoring" },
    { name: "Digital Forensics", path: "/services/digital-forensics" },
    { name: "Data Recovery", path: "/services/data-recovery" },
  ];

  // Handle navigation to a new page
  const navigateToPage = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-neutral-900 border-gray-800">
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
       
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)
          `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        ></div>

        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 relative z-10"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="font-bold text-lg tracking-wider text-white">
            bky-cyberteq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block relative z-10">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <button
                  onClick={() => navigateToSection("home")}
                  className={`${navigationMenuTriggerStyle()} ${
                    darkNavigationMenuStyles.trigger
                  }`}
                >
                  Home
                </button>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <button
                  onClick={() => navigateToSection("about")}
                  className={`${navigationMenuTriggerStyle()} ${
                    darkNavigationMenuStyles.trigger
                  }`}
                >
                  About
                </button>
              </NavigationMenuItem>

              {/* Our Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={darkNavigationMenuStyles.trigger}
                >
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={`grid w-[200px] gap-3 p-4 ${darkNavigationMenuStyles.content} border-none`}
                  >
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${darkNavigationMenuStyles.item}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Specialized Government Services */}
              <NavigationMenuItem>
                <button
                  onClick={() => navigateToPage("/specialized-government-services")}
                  className={`${navigationMenuTriggerStyle()} ${
                    darkNavigationMenuStyles.trigger
                  }`}
                >
                  Specialized Government Services
                </button>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem>
                <button
                  onClick={() => navigateToSection("contact")}
                  className={`${navigationMenuTriggerStyle()} ${
                    darkNavigationMenuStyles.trigger
                  }`}
                >
                  Contact Us
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Peek Image - Hidden on smaller screens */}
        <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-32 h-32"
          >
            <defs>
              <pattern
                id="gridPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0 L20 0 L20 20 L0 20 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#gridPattern)" />
            <path
              d="M100 10 Q150 50, 100 90 Q50 130, 100 170"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:bg-gray-800 focus:bg-gray-800"
          >
            {isMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-gray-900 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {/* Home */}
              <button
                onClick={() => navigateToSection("home")}
                className="block p-2 border-b border-gray-800 hover:bg-gray-800 text-left text-white"
              >
                Home
              </button>
              
              {/* About */}
              <button
                onClick={() => navigateToSection("about")}
                className="block p-2 border-b border-gray-800 hover:bg-gray-800 text-left text-white"
              >
                About
              </button>

              {/* Our Services Dropdown */}
              <details className="border-b border-gray-800 pb-2">
                <summary className="cursor-pointer flex items-center justify-between p-2 hover:bg-gray-800 text-white">
                  Our Services
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block p-2 hover:bg-gray-800 text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>
              
              {/* Specialized Government Services */}
              <button
                onClick={() => navigateToPage("/specialized-government-services")}
                className="block p-2 border-b border-gray-800 hover:bg-gray-800 text-left text-white"
              >
                Specialized Government Services
              </button>
              
              {/* Contact Us */}
              <button
                onClick={() => navigateToSection("contact")}
                className="block p-2 border-b border-gray-800 hover:bg-gray-800 text-left text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;