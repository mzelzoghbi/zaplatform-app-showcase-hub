
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1c3c5c] text-white">
      <div className="container px-4 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-white">
              zaplatform
            </span>
            <p className="text-white/60 mt-2">Beautiful apps for everyday life</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#apps" className="text-white/80 hover:text-white transition-colors">
              Apps
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a 
              href="mailto:contact@zaplatform.com" 
              className="flex items-center bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full"
            >
              <Mail size={16} className="mr-2" />
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ZaPlatform. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
