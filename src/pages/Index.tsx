import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
