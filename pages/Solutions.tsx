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
  Rocket, Target, Building, Zap, Shield, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Layers, 
  Layout, Monitor, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, CheckCircle, Lightbulb, Coffee, 
  Download, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Figma, Chrome, ZapIcon, Video, MessageCircle,
  Cog, Settings, Sparkles, Handshake, Eye, Award, UserPlus, 
  Bot, Server, Database, Briefcase, Factory, Cpu, 
  PieChart, BarChart3, Workflow, Wrench, Gauge
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
            {/* Solutions Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Our Solutions</span>
            </motion.div>

            {/* Main Heading - Left aligned, reduced font size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-left">
                <span className="text-white">Strategic </span>
                <span className="text-[#E5195E]">Business Solutions</span>
                <span className="text-white"> for Digital Success</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                From startup MVPs to enterprise transformations, we deliver end-to-end solutions that drive measurable business outcomes.
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
                  <span>Schedule Strategy Call</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>Success Stories</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400 leading-tight">Solutions Delivered</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400 leading-tight">Industries Served</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400 leading-tight">Success Rate</div>
              </div>
              
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">6M+</div>
                <div className="text-sm text-gray-400 leading-tight">Users Impacted</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Solution Categories
const HorizontalTagScroller = () => {
  const categories = [
    { name: "Digital Product Development", icon: Rocket, color: "text-blue-400" },
    { name: "MVP & Startup Launch", icon: Target, color: "text-green-400" },
    { name: "Legacy System Rebuilds", icon: RefreshCcw, color: "text-purple-400" },
    { name: "Dedicated Development Centers", icon: Building, color: "text-cyan-400" },
    { name: "Business Process Automation", icon: Workflow, color: "text-orange-400" },
    { name: "Compliance-Ready Systems", icon: Shield, color: "text-yellow-400" }
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
            <span className="text-white">Our Strategic </span>
            <span className="text-[#E5195E]">Solution Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Comprehensive business solutions designed to transform your operations and accelerate growth.
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

// Why Choose WDI Solutions Section
const SideBySideContentWithIcons = () => {
  const advantages = [
    {
      id: "strategy",
      title: "Strategic Approach",
      icon: Target
    },
    {
      id: "scalability", 
      title: "Scalable Solutions",
      icon: TrendingUp
    },
    {
      id: "delivery",
      title: "Proven Delivery",
      icon: CheckCircle
    },
    {
      id: "partnership",
      title: "True Partnership",
      icon: Handshake
    },
    {
      id: "innovation",
      title: "Innovation-First",
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
            <span className="text-white"> Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Strategic partnerships that deliver measurable results and drive sustainable growth.
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

// Solution Categories Grid
const TabbedSolutionDisplay = () => {
  const solutions = [
    {
      title: "Digital Product Development",
      icon: Rocket,
      description: "End-to-end product development from ideation to market launch.",
      link: "/digital-product-development",
      features: ["Full Product Lifecycle", "Market Research", "Go-to-Market Strategy"]
    },
    {
      title: "MVP & Startup Launch", 
      icon: Target,
      description: "Rapid prototyping and MVP development for startups and entrepreneurs.",
      link: "/mvp-startup-launch",
      features: ["Rapid Prototyping", "Market Validation", "Investor-Ready Demo"]
    },
    {
      title: "Legacy System Rebuilds",
      icon: RefreshCcw,
      description: "Modernization of legacy systems with cutting-edge technology.",
      link: "/legacy-system-rebuilds",
      features: ["System Modernization", "Data Migration", "Zero Downtime"]
    },
    {
      title: "Dedicated Development Centers",
      icon: Building,
      description: "Offshore development centers tailored to your business needs.",
      link: "/dedicated-development-centers",
      features: ["Dedicated Teams", "Cost Optimization", "24/7 Operations"]
    },
    {
      title: "Business Process Automation",
      icon: Workflow,
      description: "Streamline operations with intelligent automation solutions.",
      link: "/business-process-automation",
      features: ["Process Optimization", "AI Integration", "Workflow Automation"]
    },
    {
      title: "Compliance-Ready Systems",
      icon: Shield,
      description: "Secure, compliant systems for regulated industries.",
      link: "/compliance-ready-systems",
      features: ["Regulatory Compliance", "Security First", "Audit Ready"]
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
            Complete Solution Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Strategic business solutions designed to transform your operations and accelerate digital transformation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigateTo(solution.link)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="flex flex-col items-start space-y-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Learn More</span>
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
            {/* Ready to Transform Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#E5195E]/20 to-purple-500/20 border border-[#E5195E]/30 rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#E5195E]" />
                  <span className="text-[#E5195E] text-sm font-medium">Ready to Transform?</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              <span className="text-white">Let's Build Your Next </span>
              <span className="text-[#E5195E]">Strategic Solution</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Partner with us to transform your business challenges into competitive advantages with proven digital solutions.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-start gap-4">
              <ShimmerButton 
                className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl bg-[#E5195E] hover:bg-[#E5195E]/90"
                onClick={() => navigateTo('/contact/schedule-a-discovery-call')}
              >
                <div className="inline-flex items-center gap-3">
                  <Calendar className="w-6 h-6 flex-shrink-0" />
                  <span>Schedule Strategy Session</span>
                </div>
              </ShimmerButton>
              
              {/* Small benefit text */}
              <p className="text-sm text-gray-400">
                Free consultation • Solution roadmap • Strategic guidance
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data for Solutions
const solutionsFAQs = [
  {
    question: "What types of solutions does WDI offer?",
    answer: "We offer comprehensive business solutions including digital product development, MVP launches, legacy system modernization, dedicated development centers, business process automation, and compliance-ready systems for regulated industries."
  },
  {
    question: "How do you approach solution development?",
    answer: "We begin with a strategic assessment of your business needs, followed by solution design, architecture planning, development, testing, and deployment. Our approach ensures solutions align with your business objectives and deliver measurable results."
  },
  {
    question: "Can you help with legacy system modernization?",
    answer: "Yes, we specialize in legacy system rebuilds and modernization. We assess your existing systems, plan migration strategies, ensure data integrity, and implement modern solutions with minimal business disruption."
  },
  {
    question: "Do you provide dedicated development teams?",
    answer: "Absolutely! We offer dedicated offshore development centers with skilled teams that become an extension of your organization. This model provides cost optimization, scalability, and 24/7 development capabilities."
  },
  {
    question: "How do you ensure compliance in regulated industries?",
    answer: "We have extensive experience in regulated industries and follow strict compliance frameworks. Our solutions include security audits, regulatory compliance checks, documentation, and ongoing monitoring to ensure adherence to industry standards."
  }
];

export function Solutions() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <HeroWithCTA />
      <HorizontalTagScroller />
      <SideBySideContentWithIcons />
      <TabbedSolutionDisplay />
      <ProcessSection />
      <InlineCTA />
      <FAQSection 
        title="Solutions Questions"
        subtitle="Get answers to common questions about our strategic business solutions."
        faqs={solutionsFAQs}
      />
      <Footer />
    </div>
  );
}