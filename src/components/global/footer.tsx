import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-gray-400 hover:text-gray-300 font-semibold">
              bky-cyberteq
            </Link>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} BKY-CyberTeq. All rights reserved.
            </p>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;