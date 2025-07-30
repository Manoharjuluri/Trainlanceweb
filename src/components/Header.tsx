import { Button } from "@/components/ui/button";

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
          <a href="#courses" className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium">
            Courses
          </a>
          <a href="#features" className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium">
            Features
          </a>
          <a href="#about" className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium">
            About
          </a>
          <a href="#contact" className="text-professional-gray hover:text-primary transition-colors duration-300 font-medium">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex text-professional-gray hover:text-primary">
            Login
          </Button>
          <Button variant="default" className="shadow-card hover:shadow-medium transition-shadow duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;