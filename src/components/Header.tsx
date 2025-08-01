import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg shadow-card"></div>
          <span className="text-2xl font-bold text-cool-dark">
            Campus Career Club
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium relative group"
          >
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:inline-flex text-professional-gray hover:text-primary">
            Login
          </Button>
          <Button variant="default" className="hidden md:inline-flex shadow-card hover:shadow-medium transition-shadow duration-300">
            Get Started
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;