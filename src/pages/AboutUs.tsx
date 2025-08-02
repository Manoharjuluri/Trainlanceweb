import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-section">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
              About Trainlance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering India's Future Workforce Through Comprehensive Skill Development
            </p>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30 text-center">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">2,500+</h3>
                <p className="text-muted-foreground">Students Placed</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30 text-center">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-accent mb-2">5,000+</h3>
                <p className="text-muted-foreground">Students Trained</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30 text-center">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-cool-teal mb-2">85%</h3>
                <p className="text-muted-foreground">Placement Rate</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30 text-center">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Corporate Partners</p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-cool-dark mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trainlance is a dynamic and forward-thinking EdTech company dedicated to empowering university students across India with the skills and confidence they need to succeed in today's competitive job market. Our mission is to bridge the gap between academic knowledge and industry expectations by delivering comprehensive, practical, and personalized training programs.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Three Pillars Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
              Our Three Pillars of Excellence
            </h2>
            
            <div className="space-y-8">
              {/* Aptitude Training */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">🧠 Aptitude Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We sharpen students' logical reasoning, numerical ability, data interpretation, and problem-solving skills—fundamentals that are crucial for campus placements, competitive exams, and standardized recruitment tests. Our trainers employ intuitive techniques and shortcut strategies to help students improve speed and accuracy under time pressure.
                  </p>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">💬 Soft Skills & Communication Training</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In today's professional world, technical know-how must be complemented with strong communication and interpersonal skills. Our training covers:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Public speaking</li>
                    <li>Resume building & LinkedIn optimization</li>
                    <li>Group discussion strategies</li>
                    <li>Interview etiquette</li>
                    <li>Email writing & professional communication</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    These modules are designed to help students become confident communicators and polished professionals ready for workplace collaboration and leadership.
                  </p>
                </CardContent>
              </Card>

              {/* Programming */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-cool-teal mb-4">💻 Programming & Technical Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trainlance provides hands-on training in industry-relevant programming languages and frameworks including Python, Java, C, C++, SQL, ReactJS, HTML/CSS, and more. Our courses emphasize project-based learning, where students solve real-world coding challenges and build functional applications. This approach ensures not only concept mastery but also a robust project portfolio to showcase to potential employers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cool-dark to-primary bg-clip-text text-transparent">
              Comprehensive Learning Experience
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">📜 Certification & Progress Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To reinforce learning outcomes, Trainlance conducts online certification exams that evaluate students' progress and validate their skills. These certificates serve as credible proof of competency, enhancing resumes and boosting confidence during recruitment drives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">🎯 Specialized Placement Training</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We understand the nuances of the recruitment landscape. That's why our placement readiness module includes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Mock interviews (both HR and technical)</li>
                    <li>Aptitude test simulations</li>
                    <li>GD rounds & HR grooming sessions</li>
                    <li>Personal branding workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-cool-teal mb-4">🎥 Live Classes & Mentor Support</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our Live Interactive Classes are led by expert trainers and domain specialists who bring real-time engagement, doubt resolution, and personalized mentorship into the virtual classroom. Every session is supported with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Assignments</li>
                    <li>Study material</li>
                    <li>Session recordings</li>
                    <li>Weekly assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">🏆 Achievements & Recognition</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Best EdTech Startup Award 2023</li>
                    <li>Top 10 Placement Training Institute</li>
                    <li>Industry Excellence Award for Student Success</li>
                    <li>Recognized by Microsoft as Education Partner</li>
                    <li>Google Developer Community Partner</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-cool-dark mb-6">Vision for the Future</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Trainlance is more than just a training platform—we're a career-enabling ecosystem. With a student-first philosophy, we're committed to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg ml-4 mb-6">
                  <li>Constantly evolving our curriculum based on industry trends</li>
                  <li>Partnering with universities and corporates</li>
                  <li>Providing accessible, affordable, and impactful learning</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether a student aims to land their first job, crack a competitive exam, or build a foundation for a tech-driven career, Trainlance is their trusted partner from college to career.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;