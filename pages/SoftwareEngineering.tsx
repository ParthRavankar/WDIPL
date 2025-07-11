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
  Code, Cpu, Database, Server, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Layers, 
  Target, Layout, Rocket, Monitor, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, CheckCircle, Lightbulb, Coffee, 
  Download, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Settings, Sparkles, Handshake, Eye, Award, UserPlus, Building, Package
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
            {/* Software Engineering Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Software Engineering</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                <span className="text-white">Enterprise </span>
                <span className="text-[#E5195E]">Software Engineering</span>
                <span className="text-white"> Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Build robust, scalable enterprise software systems with modern engineering practices and proven methodologies.
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
                <span>View Case Studies</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400 leading-tight">Software Systems</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400 leading-tight">Code Quality Score</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">60%</div>
                <div className="text-sm text-gray-400 leading-tight">Faster Development</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 leading-tight">System Reliability</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Engineering Practices
const HorizontalTagScroller = () => {
  const practices = [
    { name: "Microservices Architecture", icon: Layers, color: "text-blue-400" },
    { name: "DevOps & CI/CD", icon: Zap, color: "text-green-400" },
    { name: "API-First Design", icon: Code, color: "text-purple-400" },
    { name: "Test-Driven Development", icon: Shield, color: "text-cyan-400" },
    { name: "Agile Methodologies", icon: TrendingUp, color: "text-orange-400" },
    { name: "System Integration", icon: Settings, color: "text-yellow-400" }
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
            <span className="text-foreground">Modern </span>
            <span className="text-[#E5195E]">Engineering Practices</span>
            <span className="text-foreground"> We Follow</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Industry-leading methodologies that ensure code quality, scalability, and maintainability.
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
            {practices.map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <motion.div
                  key={`first-${practice.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${practice.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {practice.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second and third sets for seamless loop */}
            {[...practices, ...practices].map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <motion.div
                  key={`loop-${practice.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + practices.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${practice.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {practice.name}
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
      id: "architecture",
      title: "Robust Architecture",
      icon: Building
    },
    {
      id: "quality", 
      title: "Code Quality Excellence",
      icon: CheckCircle
    },
    {
      id: "scalability",
      title: "Future-Proof Scalability",
      icon: TrendingUp
    },
    {
      id: "integration",
      title: "Seamless Integration",
      icon: Layers
    },
    {
      id: "maintenance",
      title: "Long-Term Maintainability",
      icon: Settings
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
            <span className="text-white"> for Software Engineering</span>
          </h2>
          
          <p className="text-2xl text-gray-300 leading-relaxed">
            Engineering excellence that stands the test of time.
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
      title: "Enterprise Software Solutions",
      icon: Building,
      description: "Complex enterprise systems with robust architecture and scalability.",
      link: "/services/enterprise-software-solutions"
    },
    {
      title: "System Architecture & DevOps", 
      icon: Layers,
      description: "Modern system design with automated deployment and monitoring.",
      link: "/services/system-architecture-devops"
    },
    {
      title: "Third-Party Integrations",
      icon: Zap,
      description: "Seamless integration with existing systems and external services.",
      link: "/services/third-party-integrations"
    },
    {
      title: "Product Modernization",
      icon: RefreshCcw,
      description: "Upgrade legacy systems with modern technologies and practices.",
      link: "/services/product-modernization"
    },
    {
      title: "API & Backend Development",
      icon: Server,
      description: "Robust APIs and scalable backend infrastructure solutions.",
      link: "/services/api-backend-development"
    },
    {
      title: "Custom Software Development",
      icon: Code,
      description: "Tailored software solutions built to your specific requirements.",
      link: "/services/custom-web-app-development"
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
            Software Engineering Services
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive software engineering solutions designed for enterprise-grade performance and reliability.
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
              <span className="text-foreground">Build Enterprise Software with </span>
              <span className="text-[#E5195E]">Engineering Excellence</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Robust, scalable systems engineered with modern practices and proven methodologies.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <Code className="w-6 h-6 flex-shrink-0" />
                  <span>Start Your Software Project</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-muted-foreground">
                Architecture review • Code quality audit • Technical consultation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Engineering Specialists Section
const HireDevelopersSection = () => {
  const specialists = [
    {
      title: "Software Architects",
      icon: Building,
      skills: ["System Design", "Microservices", "Scalability"],
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    },
    {
      title: "Backend Engineers", 
      icon: Server,
      skills: ["Node.js", "Python", "Java", "Go"],
      iconBg: "bg-green-500",
      iconColor: "text-white",
      link: "/hire-talent/backend-developers"
    },
    {
      title: "DevOps Engineers",
      icon: Settings,
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS"],
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
    },
    {
      title: "Full Stack Developers",
      icon: Code,
      skills: ["React", "Node.js", "TypeScript", "APIs"],
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      link: "/hire-talent/full-stack-developers"
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
            <span className="text-[#E5195E]">Engineering Experts</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get access to senior software engineers who build robust, scalable enterprise systems.
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
                            Software Engineering
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

// FAQ data for Software Engineering
const softwareEngineeringFAQs = [
  {
    question: "What software engineering methodologies do you follow?",
    answer: "We follow modern engineering practices including Agile/Scrum, DevOps, Test-Driven Development, continuous integration/deployment, and microservices architecture to ensure high-quality, maintainable software."
  },
  {
    question: "How do you ensure code quality and maintainability?",
    answer: "We implement comprehensive code review processes, automated testing, static code analysis, documentation standards, and follow SOLID principles and design patterns to ensure long-term maintainability."
  },
  {
    question: "Can you modernize our existing legacy software?",
    answer: "Yes, we specialize in legacy system modernization including code refactoring, architecture updates, technology migration, and gradual system replacement while maintaining business continuity."
  },
  {
    question: "What is your approach to system architecture?",
    answer: "We design scalable, modular architectures using microservices, API-first approaches, cloud-native patterns, and modern frameworks that can evolve with your business requirements."
  },
  {
    question: "Do you provide ongoing software maintenance?",
    answer: "Yes, we offer comprehensive maintenance services including bug fixes, performance optimization, security updates, feature enhancements, and 24/7 monitoring to keep your software running smoothly."
  }
];

export function SoftwareEngineering() {
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
        title="Software Engineering Questions"
        subtitle="Get answers to common questions about our software engineering services."
        faqs={softwareEngineeringFAQs}
      />
      <Footer />
    </div>
  );
}