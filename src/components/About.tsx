import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-section relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
              About Trainlance
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Trainlance is a dynamic and forward-thinking EdTech company dedicated to empowering university students across India with the skills and confidence they need to succeed in today’s competitive job market. Our mission is to bridge the gap between academic knowledge and industry expectations by delivering comprehensive, practical, and personalized training programs.
 
At Trainlance, we offer a holistic learning experience that covers three essential pillars of career readiness:
 
Aptitude Training – Sharpening logical reasoning, numerical ability, and problem-solving skills to prepare students for campus placements and competitive exams.
 
Soft Skills & Communication Training – Enhancing interpersonal skills, public speaking, group discussion strategies, resume building, and interview etiquette to build confident professionals.
 
Programming & Technical Training – Delivering hands-on training in popular programming languages such as Python, Java, C, and C++, ReactJS,SQL and many more along with real-world coding challenges to strengthen technical proficiency.
 
To evaluate and certify the progress of our learners, Trainlance conducts online certification exams, giving students credible proof of their skills. In addition, we provide specialized placement training to prepare students for corporate recruitment processes, including mock interviews, aptitude test simulations, and HR grooming sessions.
 
With a student-centric approach and a commitment to excellence, Trainlance strives to become a trusted partner in every student’s journey from college to career.
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
            
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/about-us')}
            >
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
                
                {/* <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              

                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;