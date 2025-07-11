import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProcessSection } from "../components/ProcessSection";
import { FAQSection } from "../components/FAQSection";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { GridPattern } from "../components/GridPattern";
import { navigateTo } from "../App";
import { 
  Smartphone, Globe, Code, Palette, Brain, Target, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Layers, 
  Layout, Rocket, Monitor, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, CheckCircle, Lightbulb, Coffee, 
  Download, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle,
  Cog, Settings, Sparkles, Handshake, Eye, Award, UserPlus, Bot, Server, Database
} from "lucide-react";

// Enhanced Hero Section
const HeroWithCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Services Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Our Services</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Comprehensive </span>
                <span className="text-[#E5195E]">Digital Solutions</span>
                <span className="text-white"> for Modern Business</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                From mobile apps to AI solutions, we deliver end-to-end digital services that transform ideas into powerful business solutions.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/contact/schedule-a-discovery-call')}>
                <div className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>Discuss Your Project</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Our Work</span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-8 text-center"
            >
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400 leading-tight">Projects Delivered</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400 leading-tight">Service Offerings</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400 leading-tight">Client Satisfaction</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 leading-tight">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Service Categories
const HorizontalTagScroller = () => {
  const categories = [
    { name: "Mobile Development", icon: Smartphone, color: "text-blue-400" },
    { name: "Web Solutions", icon: Globe, color: "text-green-400" },
    { name: "Software Engineering", icon: Code, color: "text-purple-400" },
    { name: "UI/UX Design", icon: Palette, color: "text-cyan-400" },
    { name: "AI & Machine Learning", icon: Brain, color: "text-orange-400" },
    { name: "Cloud Solutions", icon: Server, color: "text-yellow-400" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-white">Our Core </span>
            <span className="text-[#E5195E]">Service Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Comprehensive digital services covering every aspect of modern technology solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee hover:animate-marquee-paused">
            {/* First set */}
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={`first-${category.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${category.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...categories, ...categories].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={`loop-${category.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + categories.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${category.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose WDI Section
const SideBySideContentWithIcons = () => {
  const advantages = [
    {
      id: "expertise",
      title: "Deep Technical Expertise",
      icon: Brain
    },
    {
      id: "quality", 
      title: "Quality Assurance",
      icon: CheckCircle
    },
    {
      id: "agile",
      title: "Agile Methodology",
      icon: TrendingUp
    },
    {
      id: "support",
      title: "24/7 Support",
      icon: Users
    },
    {
      id: "innovation",
      title: "Innovation Focus",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-[#E5195E]">WDI</span>
            <span className="text-white"> Services</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Delivering excellence in every project with proven expertise and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;

            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center min-h-[180px]">
                    <div className="mb-6">
                      <IconComponent className="w-10 h-10 text-accent mx-auto" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {advantage.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Service Categories Grid
const TabbedServiceDisplay = () => {
  const services = [
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services/mobile-app-development"
    },
    {
      title: "Web & Cloud Solutions", 
      icon: Globe,
      description: "Scalable web applications and cloud infrastructure solutions.",
      link: "/web-cloud"
    },
    {
      title: "Software Engineering",
      icon: Code,
      description: "Enterprise software systems and custom development solutions.",
      link: "/software-engineering"
    },
    {
      title: "Design & User Experience",
      icon: Palette,
      description: "User-centered design and interface development services.",
      link: "/design-experience"
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      description: "AI-powered solutions and machine learning implementations.",
      link: "/artificial-intelligence"
    },
    {
      title: "Machine Learning",
      icon: Bot,
      description: "Custom ML models and data science solutions.",
      link: "/machine-learning"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            End-to-end digital solutions designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(service.link)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="flex flex-col items-start space-y-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Explore Services</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Updated CTA Section with new design
const InlineCTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Ready to Launch Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#E5195E]/20 to-purple-500/20 border border-[#E5195E]/30 rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#E5195E]" />
                  <span className="text-[#E5195E] text-sm font-medium">Ready to Launch?</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              <span className="text-white">Transform Your Business with </span>
              <span className="text-[#E5195E]">Expert Digital Services</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              From concept to deployment, we deliver comprehensive digital solutions that drive growth and innovation.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <Calendar className="w-6 h-6 flex-shrink-0" />
                  <span>Start Your Project</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Free consultation • Project roadmap • Technical guidance
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data for Services
const servicesFAQs = [
  {
    question: "What types of services does WDI offer?",
    answer: "We offer comprehensive digital services including mobile app development, web applications, software engineering, UI/UX design, artificial intelligence, machine learning, cloud solutions, and digital transformation consulting."
  },
  {
    question: "How do you approach new projects?",
    answer: "We start with a discovery phase to understand your business goals, followed by strategic planning, design, development, testing, and deployment. We maintain close collaboration throughout the entire process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, performance optimization, and feature enhancements to ensure your solution continues to meet your business needs."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! We have experience with a wide range of technologies and can integrate with your existing systems, APIs, databases, and infrastructure while recommending improvements where beneficial."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. Simple projects may take 6-12 weeks, while enterprise solutions can take 6-12 months. We provide detailed timelines during the planning phase."
  }
];

export function Services() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedServiceDisplay />
      <ProcessSection />
      <InlineCTA />
      <FAQSection 
        title="Services Questions"
        subtitle="Get answers to common questions about our comprehensive service offerings."
        faqs={servicesFAQs}
      />
      <Footer />
    </div>
  );
}