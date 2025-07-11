import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Mail, 
  Code,
  Palette,
  Settings,
  TrendingUp,
  Briefcase,
  Building,
  Database
} from "lucide-react";

export const Careers = () => {
  // Job positions data
  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build responsive web applications using React, TypeScript, and modern CSS frameworks.",
      icon: Code
    },
    {
      title: "Backend Developer",
      department: "Engineering", 
      location: "Mumbai",
      type: "Full-time",
      description: "Develop scalable APIs and server-side applications using Node.js, Python, or Java.",
      icon: Database
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time", 
      description: "Create native iOS and Android apps or cross-platform solutions using React Native.",
      icon: Code
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive user interfaces and create engaging user experiences for digital products.",
      icon: Palette
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      description: "Drive product strategy, roadmap planning, and cross-functional team collaboration.",
      icon: Settings
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote", 
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines, cloud infrastructure, and deployment automation.",
      icon: Building
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
      description: "Generate leads, build client relationships, and drive revenue growth for our services.",
      icon: TrendingUp
    },
    {
      title: "QA Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Ensure software quality through manual and automated testing across web and mobile platforms.",
      icon: Briefcase
    }
  ];

  // Smooth scroll to Send CV section
  const scrollToSendCV = () => {
    const element = document.getElementById('send-cv-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle Send Your CV button click
  const handleSendCV = () => {
    const subject = 'Job Application';
    const body = `Dear HR Team,

I am interested in exploring career opportunities at WDI. Please find my resume attached.

Best regards,
[Your Name]`;
    
    const mailtoLink = `mailto:hr@wdipl.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5195E]/5 via-background to-background" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-[#E5195E]/20 text-[#E5195E]">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              <span className="text-white">Build the Future of </span>
              <span className="text-[#E5195E]">Technology</span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* We're Hiring Section */}
      <section className="py-32 bg-wdi-grey">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight mb-6">
              <span className="text-white">We're </span>
              <span className="text-[#E5195E]">Hiring</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with our talented team.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid gap-6"
          >
            {openPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/30 backdrop-blur-md border-gray-700/30 hover:border-[#E5195E]/30 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-5 gap-6 items-center">
                        {/* Job Info */}
                        <div className="lg:col-span-4">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-[#E5195E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-[#E5195E]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-semibold text-white group-hover:text-[#E5195E] transition-colors duration-300 mb-3">
                                {position.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                                <Badge className="bg-[#E5195E]/20 text-[#E5195E] border-[#E5195E]/30">
                                  {position.department}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {position.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {position.type}
                                </div>
                              </div>
                              <p className="text-gray-300 leading-relaxed">
                                {position.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Apply Button */}
                        <div className="flex justify-center lg:justify-end">
                          <Button 
                            className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white px-8 py-3"
                            onClick={scrollToSendCV}
                          >
                            Apply Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Send Your CV Section */}
      <section id="send-cv-section" className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight mb-8">
              <span className="text-white">Want to Work With Us </span>
              <span className="text-[#E5195E]">Anyway?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Share your CV with us. We'll reach out if something matches.
            </p>
            
            {/* HR Email Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-12 max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#E5195E]" />
                <h3 className="text-xl font-semibold text-white">HR Email</h3>
              </div>
              <a 
                href="mailto:hr@wdipl.com"
                className="text-2xl text-[#E5195E] hover:text-[#E5195E]/80 transition-colors duration-300 font-medium"
              >
                hr@wdipl.com
              </a>
            </motion.div>
            
            {/* Send CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white text-xl px-12 py-4"
                onClick={handleSendCV}
              >
                <Mail className="w-5 h-5 mr-3" />
                Send Your CV
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-wdi-grey border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Team Members", color: "from-blue-400 to-blue-600" },
              { number: "15+", label: "Countries", color: "from-green-400 to-green-600" },
              { number: "98%", label: "Employee Satisfaction", color: "from-purple-400 to-purple-600" },
              { number: "4.9/5", label: "Company Rating", color: "from-[#E5195E] to-[#FF6B9D]" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};