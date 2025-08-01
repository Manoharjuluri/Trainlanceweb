import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onClose?: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onClose?.();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="md:hidden h-9 w-9 text-professional-gray hover:text-primary transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-background/95 backdrop-blur-md border-l border-border shadow-strong z-50 md:hidden">
            <nav className="flex flex-col p-6 space-y-6">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Contact
              </button>
              
              <div className="pt-4 border-t border-border">
                <Button variant="ghost" className="w-full justify-start text-professional-gray hover:text-primary mb-3">
                  Login
                </Button>
                <Button variant="default" className="w-full shadow-card hover:shadow-medium transition-shadow duration-300">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;