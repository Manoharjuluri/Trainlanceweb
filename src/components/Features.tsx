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
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-background via-warm-gray to-cool-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-electric-purple/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cool-cyan/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-neon-blue/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cool-dark via-primary to-electric-purple bg-clip-text text-transparent animate-fade-in">
            Why Choose Trainlance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience personalized learning with cutting-edge technology and dedicated mentorship to ensure your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-glass backdrop-blur-lg border-border/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center relative z-10 pt-8">
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 filter group-hover:drop-shadow-glow">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-electric-purple transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pb-8">
                <CardDescription className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-glow`}></div>
              
              {/* Floating corner decoration */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;