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
  Share2, Wrench, BarChart3, GitMerge, Apple, Gauge, Maximize, Fingerprint,
  Gamepad, Building, Briefcase, Microscope
} from "lucide-react";

// Native App Development Hero Section
const NativeHeroWithCTA = () => {
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
            {/* Native Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Native App Development</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Native App Development: Uncompromising Performance & Experience
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building bespoke applications tailored for a single operating system to deliver the highest level of performance, security, and device integration.
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
                  <Gauge className="w-5 h-5 flex-shrink-0" />
                  <span>Discover Native Advantages</span>
                </div>
              </ShimmerButton>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Request a Native App Consultation</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with split-screen native app mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Split-screen Native App Mockups */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] w-full mb-8 flex items-center justify-center"
              >
                {/* Split-screen container */}
                <div className="relative w-full h-full flex">
                  {/* iOS Native App (left half) */}
                  <div className="w-1/2 h-full bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-l-3xl border-l border-t border-b border-blue-500/30 flex flex-col items-center justify-center p-6">
                    <div className="w-32 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl mb-4">
                      <div className="w-full h-6 bg-gray-700 rounded-t-2xl flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-blue-500 rounded"></div>
                        <div className="h-1.5 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-1.5 bg-gray-600 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-1 mt-3">
                          <div className="h-6 bg-gray-700 rounded-lg"></div>
                          <div className="h-6 bg-gray-700 rounded-lg"></div>
                        </div>
                        <div className="h-8 bg-blue-500/20 rounded-lg mt-2 flex items-center justify-center">
                          <Apple className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                        iOS Native
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Android Native App (right half) */}
                  <div className="w-1/2 h-full bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-r-3xl border-r border-t border-b border-green-500/30 flex flex-col items-center justify-center p-6">
                    <div className="w-32 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl mb-4">
                      <div className="w-full h-6 bg-gray-700 rounded-t-2xl flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-green-500 rounded"></div>
                        <div className="h-1.5 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-1.5 bg-gray-600 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-1 mt-3">
                          <div className="h-6 bg-gray-700 rounded-lg"></div>
                          <div className="h-6 bg-gray-700 rounded-lg"></div>
                        </div>
                        <div className="h-8 bg-green-500/20 rounded-lg mt-2 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        Android Native
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Central divider line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent"></div>
                </div>
              </motion.div>
              
              {/* Native Technology Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Platform Optimized
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Maximum Performance
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Native Features
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Native vs Cross-Platform Comparison
const NativeVsCrossPlatform = () => {
  const comparisons = [
    {
      icon: Gauge,
      title: "Unrivaled Performance",
      description: "Direct access to hardware, faster execution, and smoother animations through platform-specific optimization."
    },
    {
      icon: Maximize,
      title: "Optimal User Experience",
      description: "Full adherence to platform-specific UI/UX guidelines ensuring familiar, intuitive user interactions."
    },
    {
      icon: Fingerprint,
      title: "Maximum Security",
      description: "Leveraging built-in OS security features, platform-specific encryption, and reduced attack surface."
    },
    {
      icon: Cpu,
      title: "Full Device Feature Access",
      description: "Seamless integration with cameras, GPS, sensors, AR/VR, and cutting-edge platform features."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Future-Proofing",
      description: "Best choice for complex, resource-intensive apps requiring long-term support and evolution."
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
            Native vs. Cross-Platform: When to Choose Native
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Native development delivers uncompromising performance and platform integration for applications that demand the highest standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {comparisons.slice(0, 3).map((item, index) => {
            const IconComponent = item.icon;
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
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
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
          {comparisons.slice(3).map((item, index) => {
            const IconComponent = item.icon;
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
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
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

// Native App Development Capabilities
const NativeCapabilities = () => {
  const capabilities = [
    {
      title: "iOS Native Development",
      description: "Swift and Objective-C development for the complete Apple ecosystem with seamless integration.",
      icon: Apple,
      technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit"]
    },
    {
      title: "Android Native Development",
      description: "Kotlin and Java development for the Android ecosystem with Google services integration.",
      icon: Smartphone,
      technologies: ["Kotlin", "Java", "Jetpack Compose", "Room", "Firebase", "ARCore"]
    },
    {
      title: "Performance Optimization",
      description: "Ensuring lightning-fast, smooth applications through platform-specific performance tuning.",
      icon: Zap,
      technologies: ["Memory Management", "Threading", "Caching", "Database Optimization", "Network Optimization", "Battery Efficiency"]
    },
    {
      title: "Advanced Feature Integration",
      description: "Leveraging device-specific capabilities including AR/VR, machine learning, and sensors.",
      icon: Cpu,
      technologies: ["AR/VR", "Machine Learning", "Biometrics", "Camera APIs", "Location Services", "Push Notifications"]
    },
    {
      title: "Code Modernization",
      description: "Updating and optimizing existing native codebases for modern performance and features.",
      icon: RefreshCcw,
      technologies: ["Code Refactoring", "Architecture Updates", "Legacy Migration", "Performance Audits", "Security Updates", "API Modernization"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with enterprise systems, APIs, and security protocols.",
      icon: Building,
      technologies: ["Enterprise APIs", "SSO Integration", "MDM Support", "Data Encryption", "Compliance", "Custom Protocols"]
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
            Expertise Across Leading Native Platforms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive native development capabilities covering both iOS and Android ecosystems with deep platform expertise.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
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
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                          {tech}
                        </Badge>
                      ))}
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

// Ideal Use Cases for Native Development
const NativeUseCases = () => {
  const useCases = [
    {
      title: "High-Performance Apps",
      description: "Gaming, AR/VR applications, and complex data processing requiring maximum computational efficiency.",
      icon: Gamepad,
      examples: ["3D Gaming", "AR/VR Experiences", "Real-time Analytics", "Video Processing"]
    },
    {
      title: "Feature-Rich Applications",
      description: "Apps requiring extensive device hardware integration and platform-specific functionality.",
      icon: Layers,
      examples: ["Camera Integration", "Sensor Data", "Biometric Auth", "Device APIs"]
    },
    {
      title: "Custom UI/UX Experiences",
      description: "Highly customized interfaces and interactions not easily replicated in cross-platform solutions.",
      icon: Brush,
      examples: ["Custom Animations", "Unique Gestures", "Platform-specific Design", "Advanced Interactions"]
    },
    {
      title: "Security-Critical Applications",
      description: "Banking, healthcare, and enterprise solutions requiring maximum security and compliance.",
      icon: Shield,
      examples: ["Financial Services", "Healthcare Apps", "Enterprise Security", "Government Apps"]
    },
    {
      title: "Long-Term Scalable Products",
      description: "Core products that will evolve significantly and require extensive platform integration over time.",
      icon: TrendingUp,
      examples: ["Enterprise Platforms", "SaaS Products", "Social Networks", "E-commerce Platforms"]
    },
    {
      title: "Platform-Specific Features",
      description: "Applications leveraging cutting-edge platform features available only through native development.",
      icon: Cpu,
      examples: ["ML Kit Integration", "ARKit/ARCore", "HealthKit/Google Fit", "Platform Widgets"]
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
            When Native Development is Your Best Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Certain application requirements and business goals make native development the optimal choice for long-term success.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
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
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.examples.map((example) => (
                          <Badge key={example} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                            {example}
                          </Badge>
                        ))}
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
  );
};

// Native Development Process
const NativeProcess = () => {
  const steps = [
    {
      title: "Deep Discovery & Platform Strategy",
      description: "Comprehensive analysis of your requirements to determine the optimal native platform approach and architecture decisions.",
      icon: Target
    },
    {
      title: "Tailored UI/UX Design",
      description: "Platform-specific design that leverages native UI components and follows platform design guidelines for optimal user experience.",
      icon: Palette
    },
    {
      title: "Platform-Specific Coding",
      description: "Expert native development using platform-specific languages, frameworks, and best practices for maximum performance.",
      icon: Code
    },
    {
      title: "Intensive Native Testing",
      description: "Comprehensive testing across devices, OS versions, and platform-specific features to ensure flawless native functionality.",
      icon: Bug
    },
    {
      title: "Launch & Post-Launch Native Support",
      description: "App store optimization, deployment, and ongoing native platform updates and feature enhancements.",
      icon: Rocket
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
            Precision & Excellence in Every Native Project
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven native development methodology ensures optimal performance and platform integration at every stage.
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
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent">0{index + 1}</div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-black z-10 hidden lg:block"></div>
                  
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

// Native Case Studies
const NativeCaseStudies = () => {
  const caseStudies = [
    {
      title: "High-Performance FinTech iOS App",
      client: "SecureBank Pro",
      description: "Native iOS banking app with advanced security features and real-time trading capabilities",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "300% faster transactions",
      gradient: "from-accent/20 to-accent/10",
      platform: "iOS Native",
      benefits: "Biometric security, real-time data, smooth animations"
    },
    {
      title: "Complex AR Android Solution",
      client: "ARchitect Pro",
      description: "Advanced AR application for architecture visualization with complex 3D rendering and spatial tracking",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop&auto=format",
      results: "Industry-leading AR performance",
      gradient: "from-purple-500/20 to-blue-500/20",
      platform: "Android Native",
      benefits: "ARCore integration, hardware acceleration, precise tracking"
    },
    {
      title: "Healthcare Compliance Platform",
      client: "MedSecure",
      description: "HIPAA-compliant healthcare platform with end-to-end encryption and native device integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "100% compliance achieved",
      gradient: "from-green-500/20 to-teal-500/20",
      platform: "Cross-Platform Native",
      benefits: "Advanced security, device sensors, offline capability"
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
            Impactful Native Apps We've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how native development delivered superior performance, security, and user experience for our clients.
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
                        <Gauge className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                            {study.results}
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {study.platform}
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-foreground uppercase tracking-wider">Key Benefits:</h4>
                      <p className="text-xs text-muted-foreground">
                        {study.benefits}
                      </p>
                    </div>
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
const NativeInlineCTA = () => {
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
                <Gauge className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Peak Performance</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Achieve{" "}
              <span className="text-accent">Peak App Performance?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let our native experts guide your next high-impact application to deliver uncompromising performance and user experience.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Discuss Your Native App Project</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Native Developers
const HireNativeDevelopers = () => {
  const developerTypes = [
    {
      title: "Senior iOS Native Developer",
      experience: "6+ Years",
      skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "ARKit", "CloudKit"],
      specialties: "iOS Architecture, Performance Optimization, Apple Ecosystem"
    },
    {
      title: "Senior Android Native Developer",
      experience: "6+ Years", 
      skills: ["Kotlin", "Java", "Jetpack Compose", "Room", "ARCore", "Firebase"],
      specialties: "Android Architecture, Google Services, Hardware Integration"
    },
    {
      title: "Native App Architect",
      experience: "8+ Years",
      skills: ["System Design", "Both Platforms", "Performance", "Security", "DevOps", "Leadership"],
      specialties: "Technical Leadership, Architecture Design, Performance Engineering"
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
            Find Your Elite Native App Development Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access our pool of highly specialized iOS and Android native developers for your most demanding projects.
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
                      <Gauge className="w-6 h-6 text-accent" />
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
              <span>Hire Native Developers</span>
            </div>
          </ShimmerButton>
          <Button 
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
          >
            <span>Get a Consultation</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Native FAQs
const NativeFAQs = () => {
  const faqs = [
    {
      question: "Is native development always more expensive?",
      answer: "While native development typically requires a higher initial investment, it often provides better long-term value through superior performance, security, and maintainability. For complex applications or those requiring intensive platform integration, native development can actually be more cost-effective over the app's lifetime due to reduced technical debt and easier maintenance."
    },
    {
      question: "How long does native app development take?",
      answer: "Native development timelines vary based on complexity, but typically: Simple apps (10-16 weeks), Medium complexity (16-24 weeks), Complex apps (24+ weeks). While this may seem longer than cross-platform alternatives, the time investment results in superior performance, better user experience, and reduced post-launch issues."
    },
    {
      question: "What are the maintenance considerations for native apps?",
      answer: "Native apps require platform-specific maintenance, including OS updates, security patches, and feature enhancements. However, this maintenance is often more predictable and efficient than cross-platform alternatives because you're working directly with platform APIs and tools. We provide comprehensive maintenance packages tailored to each platform."
    },
    {
      question: "Can you port an existing native app to another native platform?",
      answer: "Yes, we can port native apps between platforms while maintaining native performance and user experience. Our approach involves analyzing the existing architecture, identifying platform-specific optimizations, and rebuilding the app using the target platform's native technologies. This ensures optimal performance on both platforms while maintaining feature parity."
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
            Common questions about native app development.
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
const NativeFinalCTA = () => {
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
                <Gauge className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Maximum Potential</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Unlock Full Potential with{" "}
            <span className="text-accent">WDI's Native Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Invest in an application that delivers unparalleled performance, security, and a truly immersive user experience.
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
                <span>Start Your Native App Journey</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Expert consultation • Architecture planning • Performance optimization
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

// Main Native App Development Page
export const NativeAppDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <NativeHeroWithCTA />
      </section>
      
      {/* Native vs Cross-Platform */}
      <section className="bg-background">
        <NativeVsCrossPlatform />
      </section>
      
      {/* Capabilities */}
      <section className="bg-card">
        <NativeCapabilities />
      </section>
      
      {/* Use Cases */}
      <section className="bg-background">
        <NativeUseCases />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <NativeProcess />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <NativeCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <NativeInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireNativeDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <NativeFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <NativeFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};