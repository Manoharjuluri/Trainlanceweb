import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
          <span className="text-xl font-bold text-cool-dark">Trainlance</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;