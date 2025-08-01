import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "./LoadingSpinner";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    course: "programming training",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email_id.trim()) {
      newErrors.email_id = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      newErrors.email_id = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);
      
      const response = await fetch("https://yu95n8iwna.execute-api.ca-central-1.amazonaws.com/default/m1", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          course: [formData.course]
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (response.ok) {
        const result = await response.json();
        console.log("Success response:", result);
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email_id: "",
          course: "programming training",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error("API Error:", response.status, errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      toast({
        title: "Error",
        description: `Failed to send your message: ${errorMessage}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Ready to transform your career? Get in touch with us and discover how Campus Career Club can help you achieve your goals.
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
                    <p className="text-muted-foreground">hello@campuscareerclub.com</p>
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-cool-dark mb-2 block">First Name</label>
                    <Input 
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="John" 
                      className={`bg-background/50 border-border/50 ${errors.first_name ? 'border-destructive' : ''}`}
                      required
                    />
                    {errors.first_name && <p className="text-sm text-destructive mt-1">{errors.first_name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-cool-dark mb-2 block">Last Name</label>
                    <Input 
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      className={`bg-background/50 border-border/50 ${errors.last_name ? 'border-destructive' : ''}`}
                      required
                    />
                    {errors.last_name && <p className="text-sm text-destructive mt-1">{errors.last_name}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-cool-dark mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    name="email_id"
                    value={formData.email_id}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className={`bg-background/50 border-border/50 ${errors.email_id ? 'border-destructive' : ''}`}
                    required
                  />
                  {errors.email_id && <p className="text-sm text-destructive mt-1">{errors.email_id}</p>}
                </div>
                
                <div>
                  <label className="text-sm font-medium text-cool-dark mb-2 block">Course Interest</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md text-foreground"
                    required
                  >
                    <option value="select">Select</option>
                    <option value="programming training">Programming Training</option>
                    <option value="aptitude training">Aptitude Training</option>
                    <option value="softskill training">Soft Skills Training</option>
                    <option value="all course">All Courses</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-cool-dark mb-2 block">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your learning goals..."
                    className={`bg-background/50 border-border/50 min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                    required
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  variant="default" 
                  className="w-full text-lg py-6 shadow-card hover:shadow-medium transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <LoadingSpinner size="sm" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;