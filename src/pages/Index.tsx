import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Cloud, Award, FileText } from "lucide-react";

const Index = () => {
  const experiences = [
    {
      company: "Trendzlink Technology Pvt Ltd",
      position: "Data Science and Machine Learning Intern",
      duration: "May 2025 – June 2025",
      location: "Pune, Maharashtra, India",
      points: [
        "Contributed to Building a YOLO-based segmentation model with single-frame memory to efficiently track and analyze objects at specific reference points.",
        "Designed a speech summarization system with a Flask-based frontend, leveraging the Whisper model to process the input audio to be converted into text.",
        "Integrated Langchain to extract and summarize medical insights, exporting results as a detailed PDF report from JSON data.",
        "Contributed to the full development lifecycle of a hardware defect detection system, specializing in identifying product anomalies and automating sorting processes for hardware components."
      ],
      link: "https://www.trendzlink.com/"
    },
    {
      company: "Mobikode Software Pvt Ltd",
      position: "Data Science and Machine Learning Intern",
      duration: "June 2024 – July 2024",
      location: "Pune, Maharashtra, India",
      points: [
        "Developed a robust prediction model leveraging Random Forest, a supervised learning algorithm in Scikit-learn, to forecast flight prices, optimizing for accuracy and feature importance.",
        "Engineered a context-aware retrieval-based chatbot using Rasa, integrating external APIs for real-time coin exchange rates and timezone data.",
        "Implemented a sentiment classification model using advanced Natural Language Processing (NLP) techniques with Keras LSTM networks.",
        "Designed and trained a generative chatbot employing deep learning-based encoder-decoder architectures to generate coherent and contextually relevant responses."
      ],
      link: "https://www.mobikode.com/"
    }
  ];

  const projects = [
    {
      title: "Hotel Price Prediction Model",
      description: "Developed a prediction model for hotel bookings using multiple machine learning techniques in Scikit-learn to understand their impact on predictions using the hotel prices dataset.",
      technologies: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      link: "https://github.com/Atharva-A-V/hotel-price-prediction"
    },
    {
      title: "Dataset Visualizer using AWS",
      description: "Developed a pipeline using AWS S3 and Quicksight to visualize complex and large datasets effectively using the Amazon best-selling product data set.",
      technologies: ["AWS S3", "QuickSight", "Data Visualization", "Cloud Computing"],
      link: "https://github.com/Atharva-A-V/Data-visualizer-"
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Built a real-time drowsiness detection system using a custom-trained YOLO model to identify facial cues such as eye closure, yawning, and head posture.",
      technologies: ["YOLO", "Computer Vision", "Deep Learning", "Real-time Processing"],
      link: "https://github.com/Atharva-A-V/drowsiness_detection"
    }
  ];

  const skills = [
    { category: "Machine Learning", icon: Brain, items: ["Python", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"] },
    { category: "Deep Learning", icon: Code, items: ["Neural Networks", "LSTM", "CNN", "YOLO", "Transformer Models"] },
    { category: "Data Science", icon: Database, items: ["Data Analysis", "NLP", "Computer Vision", "Statistical Modeling"] },
    { category: "Cloud & Tools", icon: Cloud, items: ["AWS", "Flask", "Rasa", "Langchain", "Docker"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I craft intelligent systems that make data talk. From building prediction engines and chatbots to deploying real-time vision models, I bring ideas to life using machine learning, deep learning, and cloud-native tools. With a strong grasp of Python, NLP, and end-to-end ML workflows, I thrive on solving complex problems and creating scalable, human-centric solutions. Whether it's structured data, messy text, or video frames — I turn it all into insight and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg mb-4 w-fit">
                    <skillCategory.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <CertificationCard
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              date="June 2025"
              validUntil="June 2028"
              link="https://www.credly.com/badges/dc335113-c634-417d-93a3-76f608f3dd4b/public_url"
            />
          </div>
        </div>
      </section>

      {/* Patent Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Patent</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors leading-tight">
                      Real-Time Detection and Mitigation of Distributed Denial-Of Service (DDOS) Attacks System and Method Thereof
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      Co-inventor of a patented system for the real-time detection and mitigation of DDoS attacks using adaptive traffic profiling and anomaly-based threat classification.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-4">Ready to collaborate on your next AI project?</p>
          <p className="text-background/80">© 2024 Atharva Anand Vaishampayan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
