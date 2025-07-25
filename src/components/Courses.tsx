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
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
            Our Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courses designed to accelerate your career growth with industry-relevant skills and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/30 hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color}`}></div>
              
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {course.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-cool-dark group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="modern" className="w-full group-hover:scale-105 transition-transform">
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