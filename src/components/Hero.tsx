import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Atharva Anand
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Vaishampayan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            I craft intelligent systems that make data talk. From building prediction engines and chatbots to deploying real-time vision models, I bring ideas to life using machine learning, deep learning, and cloud-native tools.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              AtharvaAnandV5@gmail.com
            </Button>
            <Button variant="hero" size="lg" className="group">
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              +91 9175146054
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="professional" size="lg" className="group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="professional" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;