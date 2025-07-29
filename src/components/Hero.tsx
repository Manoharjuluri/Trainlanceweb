import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-gray via-cool-light to-warm-gray overflow-hidden py-20">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-cool-cyan/5 to-electric-purple/8"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-60">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hover rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-gradient-primary rounded-full animate-float shadow-glow"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-hover rounded-full animate-float shadow-neon" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-electric-purple/60 rounded-full animate-float shadow-purple" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-cool-cyan/70 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-neon-blue/80 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-cool-dark via-primary via-cool-cyan to-electric-purple bg-clip-text text-transparent leading-tight animate-fade-in">
            Transform Your Career with
            <span className="block bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent animate-pulse">Trainlance</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto px-4">
            Master in-demand skills with our comprehensive training programs. 
            From programming to soft skills, we provide personalized learning experiences with expert mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 shadow-glow hover:shadow-neon hover:scale-110 transition-all duration-300 bg-gradient-primary hover:bg-gradient-hover">
              Start Learning Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 bg-background/90 backdrop-blur-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-gradient-glass backdrop-blur-lg rounded-2xl p-8 shadow-medium border border-border/40 hover:shadow-glow hover:scale-105 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</h3>
              <p className="text-muted-foreground font-medium">Students Trained</p>
            </div>
            <div className="group bg-gradient-glass backdrop-blur-lg rounded-2xl p-8 shadow-medium border border-border/40 hover:shadow-neon hover:scale-105 transition-all duration-300 hover:border-cool-cyan/50">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cool-cyan to-electric-purple bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">95%</h3>
              <p className="text-muted-foreground font-medium">Success Rate</p>
            </div>
            <div className="group bg-gradient-glass backdrop-blur-lg rounded-2xl p-8 shadow-medium border border-border/40 hover:shadow-purple hover:scale-105 transition-all duration-300 hover:border-electric-purple/50">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-cool-teal bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</h3>
              <p className="text-muted-foreground font-medium">Mentor Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;