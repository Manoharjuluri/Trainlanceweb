import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cool-light via-background to-secondary/30 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Trainlance EdTech Platform" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cool-teal rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cool-dark via-primary to-accent bg-clip-text text-transparent">
            Transform Your Career with
            <span className="block text-primary">Trainlance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Master in-demand skills with our comprehensive training programs. 
            From programming to soft skills, we provide personalized learning experiences with expert mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm">
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/30">
              <h3 className="text-2xl font-semibold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/30">
              <h3 className="text-2xl font-semibold text-accent mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/30">
              <h3 className="text-2xl font-semibold text-cool-teal mb-2">24/7</h3>
              <p className="text-muted-foreground">Mentor Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;