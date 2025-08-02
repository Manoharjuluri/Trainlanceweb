import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-professional-light to-warm-gray overflow-hidden py-20">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cool-teal/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cool-teal/8 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-cool-teal/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-professional-blue/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-cool-dark leading-tight">
            Transform Your Career with
            <span className="block text-primary">Trainlance</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto px-4">
            Master in-demand skills with our comprehensive training programs. 
            From programming to soft skills, we provide personalized learning experiences with expert mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-10 py-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Learning Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-subtle backdrop-blur-sm rounded-lg p-8 shadow-card border border-border hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in">
              <h3 className="text-3xl font-bold text-primary mb-3">500+</h3>
              <p className="text-professional-gray font-medium">Students Trained</p>
            </div>
            <div className="bg-gradient-subtle backdrop-blur-sm rounded-lg p-8 shadow-card border border-border hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-bold text-cool-teal mb-3">95%</h3>
              <p className="text-professional-gray font-medium">Success Rate</p>
            </div>
            <div className="bg-gradient-subtle backdrop-blur-sm rounded-lg p-8 shadow-card border border-border hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="text-3xl font-bold text-professional-blue mb-3">24/7</h3>
              <p className="text-professional-gray font-medium">Mentor Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;