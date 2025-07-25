import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career? Get in touch with us and discover how Trainlance can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-cool-dark mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cool-dark">Email Us</h4>
                    <p className="text-muted-foreground">hello@trainlance.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cool-dark">Call Us</h4>
                    <p className="text-muted-foreground">+91 8074313417</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cool-teal rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cool-dark">Visit Us</h4>
                    <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-3">Quick Start Benefits</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Free consultation call</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Personalized learning path</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cool-teal rounded-full mr-3"></span>Industry expert mentorship</li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-gradient-card backdrop-blur-sm border-border/30 shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-cool-dark">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-cool-dark mb-2 block">First Name</label>
                  <Input placeholder="John" className="bg-background/50 border-border/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-cool-dark mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50 border-border/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-cool-dark mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-cool-dark mb-2 block">Course Interest</label>
                <select className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md text-foreground">
                  <option>Programming Training</option>
                  <option>Aptitude Training</option>
                  <option>Soft Skills Training</option>
                  <option>All Courses</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-cool-dark mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your learning goals..."
                  className="bg-background/50 border-border/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full text-lg py-6">
               Submit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;