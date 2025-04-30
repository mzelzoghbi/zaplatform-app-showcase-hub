
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#244c73]">
              zaplatform
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#apps" className="text-foreground/80 hover:text-za-purple font-medium transition-colors">
            Apps
          </a>
          <a href="#about" className="text-foreground/80 hover:text-za-purple font-medium transition-colors">
            About
          </a>
          <Button className="bg-za-purple hover:bg-za-accent-purple text-white">
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 p-4 border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#apps" 
              className="text-foreground/80 hover:text-za-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apps
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-za-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button 
              className="bg-za-purple hover:bg-za-accent-purple text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
