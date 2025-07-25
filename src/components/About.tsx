import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
              About Trainlance
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in the thriving tech hub of Hyderabad, Trainlance is dedicated to bridging the gap between 
              academic learning and industry requirements. We focus on practical, hands-on training that prepares 
              students for real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to provide world-class education through innovative teaching methods, personalized 
              attention, and continuous support to help every student achieve their career goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Live Classes</h3>
                  <p className="text-muted-foreground">Interactive sessions with real-time engagement</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-2">Recordings</h3>
                  <p className="text-muted-foreground">Learn at your own pace with quality content</p>
                </CardContent>
              </Card>
            </div>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-6 opacity-20"></div>
            <Card className="relative bg-gradient-card backdrop-blur-sm border-border/30 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cool-dark mb-6">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <span className="text-foreground font-medium">Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <span className="text-foreground font-medium">Online Learning Platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cool-teal rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⏰</span>
                    </div>
                    <span className="text-foreground font-medium">Flexible Scheduling</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h4 className="text-lg font-semibold text-primary mb-2">Why Hyderabad?</h4>
                  <p className="text-muted-foreground">
                    As one of India's leading IT hubs, Hyderabad provides us with direct access to industry 
                    trends and expert professionals who contribute to our curriculum and mentorship programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;