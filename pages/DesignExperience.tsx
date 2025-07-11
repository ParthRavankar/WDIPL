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
  Palette, PenTool, Users, Star, Figma, Eye, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Heart, Layers, 
  Target, Layout, Rocket, Monitor, Lightbulb, RefreshCcw, ShieldCheck,
  MessageSquare, CheckCircle, Coffee, 
  Download, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Settings, Sparkles, Handshake, Award, UserPlus, MousePointer, Smile
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
            {/* Design & Experience Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Design & Experience</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                <span className="text-white">Exceptional </span>
                <span className="text-[#E5195E]">Design & User Experience</span>
                <span className="text-white"> Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Create engaging, intuitive user experiences that drive conversion and delight users through research-driven design.
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
                  <span>Design Consultation</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View Design Portfolio</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">300+</div>
                <div className="text-sm text-gray-400 leading-tight">Design Projects</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-400 leading-tight">Conversion Increase</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-400 leading-tight">User Satisfaction</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">70%</div>
                <div className="text-sm text-gray-400 leading-tight">Faster User Tasks</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Design Specialties
const HorizontalTagScroller = () => {
  const specialties = [
    { name: "UI/UX Design", icon: PenTool, color: "text-pink-400" },
    { name: "User Research", icon: Users, color: "text-blue-400" },
    { name: "Prototyping", icon: MousePointer, color: "text-green-400" },
    { name: "Design Systems", icon: Layers, color: "text-purple-400" },
    { name: "Usability Testing", icon: Eye, color: "text-cyan-400" },
    { name: "Brand Design", icon: Palette, color: "text-orange-400" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
            <span className="text-foreground">Our </span>
            <span className="text-[#E5195E]">Design Specialties</span>
            <span className="text-foreground"> & Expertise</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive design services that create meaningful user experiences and drive business results.
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
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <motion.div
                  key={`first-${specialty.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${specialty.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {specialty.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...specialties, ...specialties].map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <motion.div
                  key={`loop-${specialty.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + specialties.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${specialty.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {specialty.name}
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
      id: "research",
      title: "Research-Driven Design",
      icon: Users
    },
    {
      id: "conversion", 
      title: "Conversion Optimization",
      icon: TrendingUp
    },
    {
      id: "accessibility",
      title: "Accessibility Focus",
      icon: Heart
    },
    {
      id: "testing",
      title: "Usability Testing",
      icon: Eye
    },
    {
      id: "systems",
      title: "Design Systems",
      icon: Layers
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-[#E5195E]">WDI</span>
            <span className="text-white"> for Design</span>
          </h2>
          
          <p className="text-2xl text-gray-300 leading-relaxed">
            User-centered design that drives measurable business results.
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
      title: "UI/UX Design",
      icon: PenTool,
      description: "Beautiful, intuitive interfaces that enhance user experience.",
      link: "/services/ui-ux-design"
    },
    {
      title: "Clickable Prototypes", 
      icon: MousePointer,
      description: "Interactive prototypes to validate concepts before development.",
      link: "/services/clickable-prototypes"
    },
    {
      title: "Design Thinking Workshops",
      icon: Lightbulb,
      description: "Collaborative workshops to solve complex design challenges.",
      link: "/services/design-thinking-workshops"
    },
    {
      title: "User Research & Testing",
      icon: Users,
      description: "Data-driven insights to inform design decisions.",
      link: "/services/user-research-testing"
    },
    {
      title: "Design Systems",
      icon: Layers,
      description: "Scalable design systems for consistent user experiences.",
      link: "/services/ui-ux-design"
    },
    {
      title: "Brand & Visual Identity",
      icon: Palette,
      description: "Compelling brand identities that resonate with your audience.",
      link: "/services/ui-ux-design"
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Design & Experience Services
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive design services that create meaningful connections between users and digital products.
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
          className="text-center max-w-4xl mx-auto"
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
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-foreground">Create Exceptional User Experiences with </span>
              <span className="text-[#E5195E]">Research-Driven Design</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Design solutions that not only look great but also drive conversion and user engagement.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <PenTool className="w-6 h-6 flex-shrink-0" />
                  <span>Start Your Design Project</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-muted-foreground">
                Design audit • User research • Prototype development
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Design Specialists Section
const HireDevelopersSection = () => {
  const specialists = [
    {
      title: "UI/UX Designers",
      icon: PenTool,
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      iconBg: "bg-pink-500",
      iconColor: "text-white",
      link: "/hire-talent/ui-ux-designers"
    },
    {
      title: "Product Designers", 
      icon: Layout,
      skills: ["Product Strategy", "Design Systems", "User Journey"],
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/hire-talent/ui-ux-designers"
    },
    {
      title: "Visual Designers",
      icon: Palette,
      skills: ["Brand Identity", "Graphics", "Illustrations"],
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/hire-talent/ui-ux-designers"
    },
    {
      title: "UX Researchers",
      icon: Users,
      skills: ["User Testing", "Analytics", "Behavioral Research"],
      iconBg: "bg-green-500",
      iconColor: "text-white",
      link: "/hire-talent/ui-ux-designers"
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
            <span className="text-foreground">Hire Our </span>
            <span className="text-[#E5195E]">Design Experts</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get access to talented designers who create beautiful, functional user experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {specialists.map((specialist, index) => {
            const IconComponent = specialist.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Header */}
                    <div className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 ${specialist.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                          <IconComponent className={`w-6 h-6 ${specialist.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            Design & Experience
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {specialist.title}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="px-8 pb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {specialist.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-white/10 text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="p-8 pt-0 mt-auto space-y-3">
                      <ShimmerButton 
                        className="w-full py-3 text-sm rounded-xl shadow-lg hover:shadow-xl"
                        onClick={() => navigateTo(specialist.link)}
                      >
                        <div className="inline-flex items-center justify-center gap-2">
                          <UserPlus className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">Hire Now</span>
                        </div>
                      </ShimmerButton>
                    </div>
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

// FAQ data for Design & Experience
const designExperienceFAQs = [
  {
    question: "What is your design process?",
    answer: "Our design process includes discovery, user research, wireframing, prototyping, visual design, usability testing, and iterative refinement. We involve clients at every stage to ensure alignment with business goals."
  },
  {
    question: "How do you ensure designs convert users?",
    answer: "We use data-driven design principles, conduct user research, A/B test design elements, analyze user behavior, and optimize based on conversion metrics to ensure designs drive business results."
  },
  {
    question: "Do you create design systems?",
    answer: "Yes, we create comprehensive design systems including component libraries, style guides, pattern libraries, and documentation to ensure consistency across all touchpoints and enable scalable design."
  },
  {
    question: "Can you redesign our existing product?",
    answer: "Absolutely! We conduct design audits, user research, and competitive analysis to identify improvement opportunities, then redesign your product to enhance user experience and business performance."
  },
  {
    question: "How do you handle accessibility in design?",
    answer: "We follow WCAG guidelines and design for accessibility from the start, ensuring our designs are inclusive and usable by people with various abilities. This includes color contrast, typography, navigation, and interaction design."
  }
];

export function DesignExperience() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedServiceDisplay />
      <ProcessSection />
      <InlineCTA />
      <HireDevelopersSection />
      <FAQSection 
        title="Design & Experience Questions"
        subtitle="Get answers to common questions about our design and user experience services."
        faqs={designExperienceFAQs}
      />
      <Footer />
    </div>
  );
}