import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { AnimatedGradientText } from "../components/AnimatedGradientText";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  CheckCircle, Smartphone, Tablet, Watch, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, Monitor,
  Download, Coffee, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, Eye, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Layers3, Hexagon, Wallet, CreditCard as PaymentIcon, Users2, Merge,
  Share2, Wrench, BarChart3, GitMerge
} from "lucide-react";

// Cross-Platform Hero Section
const CrossPlatformHeroWithCTA = () => {
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
            {/* Cross-Platform Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Cross-Platform App Development</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Efficient Cross-Platform App Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Develop high-quality mobile apps that run seamlessly on iOS and Android from a single codebase, saving time and resources.
              </p>
            </div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4">
                <div className="inline-flex items-center gap-2">
                  <Share2 className="w-5 h-5 flex-shrink-0" />
                  <span>Discover Cross-Platform Benefits</span>
                </div>
              </ShimmerButton>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Request a Quote</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with overlapping device mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Cross-Platform Device Mockups */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] w-full mb-8 flex items-center justify-center"
              >
                {/* Overlapping iOS and Android phones */}
                <div className="relative">
                  {/* iOS-style phone (left) */}
                  <div className="absolute -left-8 top-4 w-44 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl transform -rotate-6">
                    <div className="w-full h-8 bg-gray-700 rounded-t-3xl flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-3 bg-accent rounded"></div>
                      <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/5"></div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                      </div>
                      <div className="h-12 bg-blue-500/20 rounded-lg mt-4 flex items-center justify-center">
                        <span className="text-xs text-blue-400 font-medium">iOS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Android-style phone (right) */}
                  <div className="absolute right-8 top-8 w-44 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl transform rotate-6">
                    <div className="w-full h-8 bg-gray-700 rounded-t-3xl flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-3 bg-accent rounded"></div>
                      <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/5"></div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                      </div>
                      <div className="h-12 bg-green-500/20 rounded-lg mt-4 flex items-center justify-center">
                        <span className="text-xs text-green-400 font-medium">Android</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Central connection indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/20 rounded-full border-2 border-accent/30 flex items-center justify-center backdrop-blur-sm">
                    <GitMerge className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </motion.div>
              
              {/* Cross-Platform Technology Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Flutter
                </Badge>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  React Native
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Single Codebase
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Advantages of Cross-Platform Development
const CrossPlatformBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Simultaneous launch on multiple platforms with a single development cycle, significantly reducing time from concept to deployment."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Single codebase reduces development and maintenance costs by up to 50% compared to separate native applications."
    },
    {
      icon: Users2,
      title: "Wider Audience Reach",
      description: "Instantly accessible to both iOS and Android users, maximizing your market penetration and user acquisition potential."
    },
    {
      icon: Layout,
      title: "Unified User Experience",
      description: "Consistent look and feel across platforms while maintaining platform-specific design guidelines and user expectations."
    },
    {
      icon: Wrench,
      title: "Simplified Maintenance",
      description: "Updates applied to one codebase reflect everywhere, streamlining bug fixes, feature additions, and ongoing support."
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Advantages of Choosing Cross-Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cross-platform development offers unparalleled efficiency and reach for businesses looking to maximize their mobile app impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.slice(0, 3).map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second row with 2 cards centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
        >
          {benefits.slice(3).map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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

// Cross-Platform Technologies
const CrossPlatformTechnologies = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Leading Cross-Platform Frameworks We Utilize
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the most powerful and mature cross-platform frameworks to deliver exceptional mobile experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="flutter" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-900/50 border border-gray-800">
              <TabsTrigger value="flutter" className="text-base py-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">F</span>
                  </div>
                  Flutter Development
                </div>
              </TabsTrigger>
              <TabsTrigger value="react-native" className="text-base py-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">RN</span>
                  </div>
                  React Native Development
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flutter" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold">F</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">Flutter Development</h3>
                        <p className="text-gray-400">Google's UI toolkit for natively compiled applications</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      Known for expressive UIs and hot-reload functionality that accelerates development cycles. 
                      Flutter allows for pixel-perfect designs and smooth animations across platforms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {[
                        "Excellent performance with native compilation",
                        "Beautiful UIs with customizable widgets",
                        "Single codebase for mobile, web, and desktop",
                        "Fast development with hot-reload",
                        "Growing ecosystem and strong Google backing"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-500" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Flutter Tech Stack</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Dart Language",
                        "Material Design",
                        "Cupertino Widgets",
                        "Firebase Integration",
                        "Native Plugins",
                        "State Management"
                      ].map((tech, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <span className="text-gray-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="react-native" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold">RN</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">React Native Development</h3>
                        <p className="text-gray-400">Facebook's framework for building native mobile apps</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      Uses JavaScript and React paradigms to create truly native mobile applications. 
                      Leverages existing web development skills for mobile app creation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {[
                        "Large community and extensive libraries",
                        "Reusable components across platforms",
                        "Efficient development cycles",
                        "Native performance and feel",
                        "Easy integration with existing React web apps"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-cyan-500" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">React Native Tech Stack</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "JavaScript/TypeScript",
                        "React Components",
                        "Native Modules",
                        "Redux/Context API",
                        "Expo Framework",
                        "Native Navigation"
                      ].map((tech, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <span className="text-gray-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

// Cross-Platform Development Process
const CrossPlatformProcess = () => {
  const steps = [
    {
      title: "Feasibility & Strategy",
      description: "Analyze your project requirements and determine the optimal cross-platform approach for maximum efficiency and performance.",
      icon: Target
    },
    {
      title: "UI/UX Design",
      description: "Create adaptable designs that maintain platform consistency while leveraging cross-platform capabilities for unified experiences.",
      icon: Palette
    },
    {
      title: "Development",
      description: "Build your application using Flutter or React Native, ensuring optimal performance and native-like user experience.",
      icon: Code
    },
    {
      title: "Multi-Platform QA",
      description: "Comprehensive testing across all target platforms and devices to ensure consistent functionality and performance.",
      icon: Bug
    },
    {
      title: "Launch & Optimization",
      description: "Deploy to app stores and continuously optimize performance across platforms based on user feedback and analytics.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Streamlined Process for Cross-Platform Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures efficient development and deployment across multiple platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Cross-Platform Services
const CrossPlatformServices = () => {
  const services = [
    {
      title: "New Cross-Platform App Development",
      description: "Building custom applications from scratch using modern cross-platform frameworks for maximum efficiency.",
      icon: Smartphone
    },
    {
      title: "Existing App Migration",
      description: "Migrating native apps to cross-platform solutions for improved maintenance and cost efficiency.",
      icon: RefreshCcw
    },
    {
      title: "Cross-Platform UI/UX Design",
      description: "Designing consistent, adaptable interfaces that work seamlessly across all target platforms.",
      icon: Brush
    },
    {
      title: "Performance Optimization",
      description: "Ensuring smooth performance on all devices through platform-specific optimizations and best practices.",
      icon: Zap
    },
    {
      title: "Integration with Third-Party APIs",
      description: "Seamless connectivity for expanded functionality including payments, analytics, and cloud services.",
      icon: Network
    },
    {
      title: "Cross-Platform Maintenance",
      description: "Ongoing support and updates for cross-platform applications with unified deployment strategies.",
      icon: Wrench
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Our Comprehensive Cross-Platform Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From new development to migration and ongoing support, we provide end-to-end cross-platform services.
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
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
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

// Cross-Platform Case Studies
const CrossPlatformCaseStudies = () => {
  const caseStudies = [
    {
      title: "FinTech Cross-Platform App with Flutter",
      client: "PayUnify",
      description: "Unified payment solution deployed simultaneously on iOS and Android with 40% faster development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "40% faster delivery",
      gradient: "from-accent/20 to-accent/10",
      framework: "Flutter"
    },
    {
      title: "E-Learning Platform with React Native",
      client: "EduCross",
      description: "Educational platform serving millions of students across platforms with consistent UX",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
      results: "2M+ students",
      gradient: "from-blue-500/20 to-cyan-500/20",
      framework: "React Native"
    },
    {
      title: "Healthcare Management with Flutter",
      client: "MediSync",
      description: "Cross-platform healthcare app connecting patients and providers with real-time sync",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "60% cost savings",
      gradient: "from-purple-500/20 to-pink-500/20",
      framework: "Flutter"
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Cross-Platform Apps That Deliver Unified Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how businesses achieve greater reach and efficiency with our cross-platform solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
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
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <GitMerge className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                            {study.results}
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {study.framework}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="px-8 pb-6 flex-1">
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-white/10`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Mid-Page CTA
const CrossPlatformInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Cross-Platform Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Considering a{" "}
              <span className="text-accent">Cross-Platform Approach?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's analyze if cross-platform is the right fit for your project goals and maximize your development efficiency.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Target className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Strategy Session</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Cross-Platform Developers
const HireCrossPlatformDevelopers = () => {
  const developerTypes = [
    {
      title: "Senior Flutter Developer",
      experience: "5+ Years",
      skills: ["Flutter", "Dart", "Firebase", "State Management"],
      specialties: "Cross-Platform UI, Performance Optimization"
    },
    {
      title: "React Native Expert",
      experience: "4+ Years", 
      skills: ["React Native", "JavaScript", "TypeScript", "Redux"],
      specialties: "Native Bridges, Component Architecture"
    },
    {
      title: "Cross-Platform Architect",
      experience: "6+ Years",
      skills: ["System Design", "Both Frameworks", "DevOps", "Testing"],
      specialties: "Platform Strategy, Technical Leadership"
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Hire Expert Flutter & React Native Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find seasoned professionals skilled in both Flutter and React Native to accelerate your cross-platform development.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {developerTypes.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <GitMerge className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                        {dev.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {dev.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {dev.specialties}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-white/10 text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ShimmerButton className="px-8 py-4">
            <div className="inline-flex items-center gap-2">
              <UserPlus className="w-5 h-5 flex-shrink-0" />
              <span>Hire Cross-Platform Developers</span>
            </div>
          </ShimmerButton>
          <Button 
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
          >
            <span>View Talent Profiles</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Cross-Platform FAQs
const CrossPlatformFAQs = () => {
  const faqs = [
    {
      question: "When is cross-platform development the best choice?",
      answer: "Cross-platform development is ideal when you need to reach both iOS and Android users quickly and cost-effectively, have limited resources, require consistent UI/UX across platforms, or want simplified maintenance. It's particularly beneficial for MVPs, content-driven apps, and business applications where time-to-market is crucial."
    },
    {
      question: "What are the limitations of cross-platform apps?",
      answer: "While cross-platform apps are highly capable, they may have slightly lower performance for graphics-intensive applications, limited access to some platform-specific features, and larger app sizes compared to native apps. However, modern frameworks like Flutter and React Native have significantly minimized these limitations."
    },
    {
      question: "Do cross-platform apps feel 'native'?",
      answer: "Yes, modern cross-platform frameworks produce apps that feel and perform like native applications. Flutter compiles to native code, while React Native uses native components. Our development approach ensures platform-specific design guidelines are followed for authentic user experiences."
    },
    {
      question: "How do you handle platform-specific features?",
      answer: "We leverage platform-specific code when needed through native modules, plugins, and bridge implementations. Both Flutter and React Native provide robust mechanisms for accessing platform-specific APIs, camera functions, sensors, and OS-level features while maintaining code sharing for common functionality."
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Common questions about cross-platform app development.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-8">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 px-10 shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-10 text-xl">
                  <span className="font-semibold text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-10 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const CrossPlatformFinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Ready to Launch?</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
          >
            Achieve Broader Reach with{" "}
            <span className="text-accent">WDI's Cross-Platform Expertise</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Leverage our experience to build robust, beautiful apps for both iOS and Android efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ShimmerButton className="px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-accent/25">
              <div className="inline-flex items-center gap-3">
                <Rocket className="w-6 h-6 flex-shrink-0" />
                <span>Start Your Cross-Platform Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Free consultation • Strategy session • Rapid development
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main Cross-Platform App Development Page
export const CrossPlatformAppDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <CrossPlatformHeroWithCTA />
      </section>
      
      {/* Key Benefits */}
      <section className="bg-background">
        <CrossPlatformBenefits />
      </section>
      
      {/* Technologies */}
      <section className="bg-card">
        <CrossPlatformTechnologies />
      </section>
      
      {/* Development Process */}
      <section className="bg-background">
        <CrossPlatformProcess />
      </section>
      
      {/* Services */}
      <section className="bg-card">
        <CrossPlatformServices />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <CrossPlatformCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <CrossPlatformInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireCrossPlatformDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <CrossPlatformFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <CrossPlatformFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};