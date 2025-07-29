import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Programming Training",
      description: "Master popular programming languages and frameworks with hands-on projects and real-world applications.",
      features: ["JavaScript, Python, Java", "React, Node.js, Django", "Data Structures & Algorithms", "Project-based Learning"],
      icon: "💻",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Aptitude Training",
      description: "Strengthen your logical reasoning, quantitative abilities, and problem-solving skills for competitive exams.",
      features: ["Logical Reasoning", "Quantitative Aptitude", "Verbal Ability", "Mock Tests & Analysis"],
      icon: "🧠",
      color: "from-accent to-cool-teal"
    },
    {
      title: "Soft Skills Training",
      description: "Develop essential communication, leadership, and interpersonal skills for professional success.",
      features: ["Communication Skills", "Leadership Development", "Team Collaboration", "Interview Preparation"],
      icon: "🎯",
      color: "from-cool-purple to-accent"
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-br from-gradient-section via-cool-light to-warm-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-cool-cyan/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cool-dark via-primary to-electric-purple bg-clip-text text-transparent animate-fade-in">
            Our Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive courses designed to accelerate your career growth with industry-relevant skills and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-glass backdrop-blur-lg border-border/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color} group-hover:h-3 transition-all duration-300`}></div>
              <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center relative z-10 pt-8">
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-glow">
                  {course.icon}
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-electric-purple transition-all duration-300">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed mt-4">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground group-hover:text-primary transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-primary rounded-full mr-4 shadow-sm group-hover:shadow-glow transition-all duration-300"></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="modern" 
                  className="w-full group-hover:scale-110 group-hover:shadow-neon transition-all duration-300 bg-gradient-primary hover:bg-gradient-hover text-white font-semibold py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;