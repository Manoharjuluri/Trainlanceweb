import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl shadow-glow group-hover:shadow-neon transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"></div>
            <div className="absolute inset-0 w-10 h-10 bg-gradient-hover rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cool-dark via-primary to-cool-cyan bg-clip-text text-transparent group-hover:from-electric-purple group-hover:to-neon-blue transition-all duration-300">
            Trainlance
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="relative text-foreground hover:text-primary transition-all duration-300 group">
            <span className="relative z-10">Courses</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#features" className="relative text-foreground hover:text-primary transition-all duration-300 group">
            <span className="relative z-10">Features</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#about" className="relative text-foreground hover:text-primary transition-all duration-300 group">
            <span className="relative z-10">About</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#contact" className="relative text-foreground hover:text-primary transition-all duration-300 group">
            <span className="relative z-10">Contact</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary transition-all duration-300">
            Login
          </Button>
          <Button variant="hero" className="shadow-glow hover:shadow-neon hover:scale-105 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;