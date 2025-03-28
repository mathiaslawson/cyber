import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

// Custom styles for dark theme navigation menu
const darkNavigationMenuStyles = {
  trigger: "text-white bg-transparent hover:bg-gray-800 focus:bg-gray-800 focus:text-white hover:text-white",
  content: "text-black border border-gray-800",
  item: "text-black hover:bg-gray-200 focus:bg-gray-800 focus:text-white",
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after selection
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-neutral-900 border-gray-800">
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 relative z-10" >
          <span className="font-bold text-lg tracking-wider text-white">bky-cyberteq</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block relative z-10">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Section Navigation Links */}
              <NavigationMenuItem>
                <button
                  onClick={() => {
                    scrollToSection("home")
                    navigate('/')
                  }}
                  className={`${navigationMenuTriggerStyle()} ${darkNavigationMenuStyles.trigger}`}
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={darkNavigationMenuStyles.trigger}>
                  Projects
                
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={`grid w-[200px] gap-3 p-4 ${darkNavigationMenuStyles.content} border-none`}>
                    <li>
                      <Link
                        to="/projects/web-design"
                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${darkNavigationMenuStyles.item}`}
                      >
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects/development"
                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${darkNavigationMenuStyles.item}`}
                      >
                        Development
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {["About", "Services", "Contact"].map((section) => (
                <NavigationMenuItem key={section}>
                  <button
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className={`${navigationMenuTriggerStyle()} ${darkNavigationMenuStyles.trigger}`}
                  >
                    {section}
                  </button>
                </NavigationMenuItem>
              ))}
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
              <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-gray-800 focus:bg-gray-800">
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-gray-900 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {/* Mobile Section Links */}
              {["Home", "About", "Services", "Contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section.toLowerCase());
                    navigate('/');
                  }}
                  className="block p-2 border-b border-gray-800 hover:bg-gray-800 text-left text-white"
                >
                  {section}
                </button>
              ))}

              {/* Mobile Dropdown Sections */}
              <details className="border-b border-gray-800 pb-2">
                <summary className="cursor-pointer flex items-center justify-between p-2 hover:bg-gray-800 text-white">
                  Projects
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="mt-2 space-y-2">
                  <Link
                    to="/projects/web-design"
                    className="block p-2 hover:bg-gray-800 text-white"
                    onClick={toggleMenu}
                  >
                    Web Design
                  </Link>
                  <Link
                    to="/projects/development"
                    className="block p-2 hover:bg-gray-800 text-white"
                    onClick={toggleMenu}
                  >
                    Development
                  </Link>
                </div>
              </details>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;