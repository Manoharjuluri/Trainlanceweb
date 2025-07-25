import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized insights to optimize your study path.",
      icon: "📊",
      color: "primary"
    },
    {
      title: "One-on-One Mentoring",
      description: "Get personalized guidance from industry experts who provide focused attention to accelerate your growth.",
      icon: "👨‍🏫",
      color: "accent"
    },
    {
      title: "Live Online Classes",
      description: "Join interactive live sessions with real-time Q&A, group discussions, and hands-on coding practice.",
      icon: "🎥",
      color: "cool-teal"
    },
    {
      title: "Recorded Sessions",
      description: "Access high-quality recorded content anytime, anywhere to learn at your own pace and convenience.",
      icon: "📹",
      color: "cool-purple"
    },
    {
      title: "Learning Analytics",
      description: "Advanced AI-powered insights track your strengths, identify improvement areas, and suggest learning paths.",
      icon: "🧮",
      color: "primary"
    },
    {
      title: "Expert Mentorship",
      description: "Connect with industry professionals who provide career guidance, code reviews, and skill development tips.",
      icon: "🌟",
      color: "accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
            Why Choose Trainlance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience personalized learning with cutting-edge technology and dedicated mentorship to ensure your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/30 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-cool-dark group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;