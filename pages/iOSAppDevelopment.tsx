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
import swiftImage from 'figma:asset/54e9c316eafe301500d068202a1da4dd84147581.png';
import swiftuiImage from 'figma:asset/78aec8bf1156a13d33ecd166c51ee21bdb5d4313.png';
import { 
  CheckCircle, Smartphone, Tablet, Watch, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Apple, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, Monitor,
  Download, Coffee, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, Eye, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Layers3, Hexagon, Wallet, CreditCard as PaymentIcon
} from "lucide-react";

// iOS Hero Section with iPhone/iPad mockups
const IOSHeroWithCTA = () => {
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
            {/* iOS Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">iOS App Development</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Expert iOS App Development Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Crafting intuitive, high-performance iPhone and iPad applications that define user experience and drive engagement.
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
                  <svg className="w-6 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Get a Free Consultation</span>
                </div>
              </ShimmerButton>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>See Our iOS Work</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with iOS device mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* iOS Device Mockups */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] w-full mb-8 flex items-center justify-center"
              >
                {/* iPhone and iPad mockup representation */}
                <div className="relative">
                  <div className="absolute -right-16 top-8 w-24 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl transform rotate-12">
                    <div className="w-full h-6 bg-gray-700 rounded-t-2xl flex items-center justify-center">
                      <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="h-2 bg-accent/60 rounded"></div>
                      <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="w-48 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
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
                      <div className="h-12 bg-accent/20 rounded-lg mt-4 flex items-center justify-center">
                        <Apple className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* iOS Technology Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Swift
                </Badge>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  SwiftUI
                </Badge>
                <Badge variant="secondary" className="bg-gray-500/20 text-gray-300 border-gray-500/30">
                  Xcode
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of iOS Development
const IOSKeyBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Unmatched Performance",
      description: "Optimized for Apple hardware, ensuring fluid user experiences and lightning-fast responsiveness."
    },
    {
      icon: Shield,
      title: "Superior Security",
      description: "Leveraging Apple's robust security features for comprehensive data protection and user privacy."
    },
    {
      icon: Heart,
      title: "Premium User Experience",
      description: "Adhering to Human Interface Guidelines for intuitive, delightful, and accessible design."
    },
    {
      icon: Network,
      title: "Apple Ecosystem Integration",
      description: "Seamless integration with Apple Watch, Apple Pay, Siri, and other ecosystem features."
    },
    {
      icon: DollarSign,
      title: "Strong Monetization Potential",
      description: "High-value user base with effective in-app purchase mechanisms and premium positioning."
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
            Why Choose Native iOS for Your App?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            iOS development offers unparalleled advantages for businesses looking to create premium mobile experiences.
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

// iOS Development Process Timeline
const IOSProcessTimeline = () => {
  const steps = [
    {
      title: "Strategy & Concept",
      description: "Define your iOS app vision, target audience, and core functionality with our expert consultation.",
      icon: Lightbulb
    },
    {
      title: "UI/UX Design",
      description: "Create pixel-perfect designs following Apple's Human Interface Guidelines for optimal user experience.",
      icon: Palette
    },
    {
      title: "Native iOS Development",
      description: "Build your app using Swift and modern iOS frameworks for maximum performance and platform integration.",
      icon: Code
    },
    {
      title: "Rigorous QA & Testing",
      description: "Comprehensive testing across all iOS devices and versions to ensure flawless functionality.",
      icon: Bug
    },
    {
      title: "App Store Launch & Support",
      description: "Handle App Store submission, optimization, and provide ongoing maintenance and updates.",
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
            Our Proven Approach to Building Your iOS App
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to App Store success, we guide you through every step of the iOS development journey.
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

// iOS Specific Services
const IOSServicesGrid = () => {
  const services = [
    {
      title: "Custom iPhone App Development",
      description: "Tailored solutions for specific business needs with native iOS performance.",
      icon: Smartphone
    },
    {
      title: "iPad App Development",
      description: "Optimized layouts and features specifically designed for tablet experiences.",
      icon: Tablet
    },
    {
      title: "iOS UI/UX Design",
      description: "Human Interface Guidelines-compliant, delightful user interfaces that users love.",
      icon: Brush
    },
    {
      title: "WatchOS & tvOS Apps",
      description: "Extending your presence across Apple devices with companion apps.",
      icon: Watch
    },
    {
      title: "iOS App Modernization",
      description: "Updating legacy iOS apps for modern performance, features, and design standards.",
      icon: RefreshCcw
    },
    {
      title: "App Store Optimization",
      description: "Maximizing discoverability and downloads through strategic ASO practices.",
      icon: TrendingUp
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
            Comprehensive iOS App Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From iPhone apps to Apple ecosystem integration, we provide end-to-end iOS development services.
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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

// iOS Tech Stack
const IOSTechStack = () => {
  const technologies = [
    { name: "Swift", logo: swiftImage },
    { name: "SwiftUI", logo: swiftuiImage },
    { name: "Xcode", logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=80&h=80&fit=crop&auto=format" },
    { name: "UIKit", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&auto=format" },
    { name: "Core Data", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&auto=format" },
    { name: "Firebase", logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=80&h=80&fit=crop&auto=format" },
    { name: "AWS", logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=80&h=80&fit=crop&auto=format" },
    { name: "Apple Pay", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&auto=format" }
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
            Building with the Most Powerful iOS Technologies
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We leverage cutting-edge iOS frameworks and tools to create exceptional mobile experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-gray-900/50 rounded-2xl flex items-center justify-center border border-gray-800 group-hover:border-accent/30 transition-all duration-300 shadow-lg group-hover:shadow-xl mb-4">
                <ImageWithFallback
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// iOS Case Studies
const IOSCaseStudies = () => {
  const caseStudies = [
    {
      title: "FinTech iOS App with Apple Pay Integration",
      client: "PayFlow",
      description: "Secure financial transactions with native Apple Pay integration",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "2M+ downloads",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Health & Fitness iOS App with HealthKit",
      client: "FitTracker Pro",
      description: "Comprehensive health tracking with Apple ecosystem integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "500K+ users",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Social Media iOS App with Augmented Reality",
      client: "ConnectAR",
      description: "Next-gen social platform with ARKit integration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      results: "1M+ downloads",
      gradient: "from-purple-500/20 to-pink-500/20"
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
            iOS Apps That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses succeed with exceptional iOS applications.
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
                        <Apple className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                          {study.results}
                        </Badge>
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
const IOSInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Apple className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">iOS Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Launch Your Next{" "}
              <span className="text-accent">iOS Innovation?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Partner with WDI for a seamless iOS development journey from concept to App Store success.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z" />
                </svg>
                <span>Get a Free iOS Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire iOS Developers Section
const HireIOSDevelopers = () => {
  const developerTypes = [
    {
      title: "Senior iOS Developer",
      experience: "5+ Years",
      skills: ["Swift", "SwiftUI", "Core Data", "UIKit"],
      specialties: "Native iOS, Apple Ecosystem Integration"
    },
    {
      title: "iOS UI/UX Designer",
      experience: "4+ Years", 
      skills: ["Human Interface Guidelines", "Sketch", "Figma", "Prototyping"],
      specialties: "iOS Design Patterns, User Experience"
    },
    {
      title: "iOS QA Specialist",
      experience: "3+ Years",
      skills: ["XCTest", "Appium", "TestFlight", "Device Testing"],
      specialties: "iOS Testing, Quality Assurance"
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
            Need Dedicated iOS Talent?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access our pool of senior iOS developers, skilled in Swift and modern iOS frameworks, available for team augmentation or dedicated project roles.
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
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Apple className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
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
              <span>Hire iOS Developers</span>
            </div>
          </ShimmerButton>
          <Button 
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
          >
            <span>Request Resumes</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// iOS-Specific FAQs
const IOSFAQs = () => {
  const faqs = [
    {
      question: "Why choose native iOS over cross-platform development?",
      answer: "Native iOS development offers superior performance, full access to Apple's latest features, better security, and optimal user experience that follows Apple's design guidelines. While cross-platform solutions can work for simpler apps, native iOS ensures your app feels truly at home on Apple devices."
    },
    {
      question: "What's the typical timeline for developing an iOS app?",
      answer: "The timeline varies based on complexity, but typically: Simple apps (8-12 weeks), Medium complexity apps (12-20 weeks), Complex apps (20+ weeks). We provide detailed project timelines during our initial consultation based on your specific requirements."
    },
    {
      question: "Do you handle App Store submission and approval?",
      answer: "Yes, we manage the entire App Store submission process, including preparing all required assets, writing compelling app descriptions, ensuring compliance with Apple's guidelines, and handling any feedback from the review team until your app is successfully published."
    },
    {
      question: "What post-launch support do you provide for iOS apps?",
      answer: "We offer comprehensive post-launch support including bug fixes, iOS updates compatibility, performance monitoring, analytics implementation, feature enhancements, and ongoing maintenance. We also provide App Store Optimization (ASO) services to improve your app's visibility and downloads."
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
            Common questions about our iOS app development services.
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
const IOSFinalCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Apple className="w-5 h-5 text-foreground" />
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
            Transform Your Vision into a{" "}
            <span className="text-accent">Breathtaking iOS App</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            WDI combines design excellence with robust engineering to deliver iOS applications that stand out in the App Store and drive real business results.
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
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                <span>Start Your iOS Project Today</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Free consultation • Expert guidance • Swift delivery
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

// Main iOS App Development Page
export const IOSAppDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <IOSHeroWithCTA />
      </section>
      
      {/* Key Benefits */}
      <section className="bg-background">
        <IOSKeyBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <IOSProcessTimeline />
      </section>
      
      {/* iOS Services */}
      <section className="bg-background">
        <IOSServicesGrid />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <IOSTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <IOSCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <IOSInlineCTA />
      </section>
      
      {/* Hire iOS Developers */}
      <section className="bg-background">
        <HireIOSDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <IOSFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <IOSFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};