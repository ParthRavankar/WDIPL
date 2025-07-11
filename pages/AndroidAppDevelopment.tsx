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
  Cog, Layers3, Hexagon, Wallet, CreditCard as PaymentIcon, Users2
} from "lucide-react";

// Android Hero Section with Android device mockups
const AndroidHeroWithCTA = () => {
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
            {/* Android Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Android App Development</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Robust Android App Development Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building scalable, secure, and user-centric Android applications for the world's largest mobile ecosystem.
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
                  <span>Book a Free Consultation</span>
                </div>
              </ShimmerButton>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>Explore Our Android Portfolio</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Android device mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Android Device Mockups */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] w-full mb-8 flex items-center justify-center"
              >
                {/* Android Phone and Tablet mockup representation */}
                <div className="relative">
                  <div className="absolute -left-16 top-8 w-32 h-20 bg-gradient-to-br from-accent/80 to-accent/90 rounded-xl border border-accent/70 shadow-2xl transform -rotate-12">
                    <div className="w-full h-4 bg-accent/70 rounded-t-xl flex items-center justify-center">
                      <div className="w-12 h-0.5 bg-accent/60 rounded-full"></div>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="h-1.5 bg-white/60 rounded"></div>
                      <div className="h-1 bg-accent/60 rounded w-3/4"></div>
                      <div className="h-1 bg-accent/60 rounded w-1/2"></div>
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
                        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Android Technology Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Kotlin
                </Badge>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  Java
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Android Studio
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Android Development
const AndroidKeyBenefits = () => {
  const benefits = [
    {
      icon: Users2,
      title: "Massive Reach",
      description: "Access to billions of users globally across diverse markets and demographics with Android's dominant market share."
    },
    {
      icon: Settings,
      title: "Flexibility & Customization",
      description: "Open-source nature allows for extensive customization, diverse features, and innovative user experiences."
    },
    {
      icon: Monitor,
      title: "Device Versatility",
      description: "Optimized for a wide range of devices, screen sizes, and form factors from budget to premium devices."
    },
    {
      icon: Network,
      title: "Integration Potential",
      description: "Seamless connection with Google services, APIs, and diverse hardware capabilities for rich functionality."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Entry",
      description: "Lower entry barrier with flexible development options and cost-effective deployment strategies."
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
            Why Develop a Native Android App?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Android development offers unparalleled reach and flexibility for businesses looking to tap into the world's largest mobile ecosystem.
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

// Android Development Process Timeline
const AndroidProcessTimeline = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      description: "Comprehensive analysis of your Android app requirements, target audience, and optimal device compatibility strategy.",
      icon: Lightbulb
    },
    {
      title: "UI/UX Design",
      description: "Create stunning designs following Material Design principles for optimal Android user experience and platform consistency.",
      icon: Palette
    },
    {
      title: "Native Android Development",
      description: "Build your app using Kotlin/Java and modern Android frameworks for maximum performance and platform integration.",
      icon: Code
    },
    {
      title: "Thorough QA & Testing",
      description: "Comprehensive testing across diverse Android devices, OS versions, and screen sizes to ensure flawless functionality.",
      icon: Bug
    },
    {
      title: "Google Play Launch & Maintenance",
      description: "Handle Google Play Store submission, optimization, and provide ongoing maintenance and feature updates.",
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
            Our Comprehensive Android App Development Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to Google Play success, we guide you through every step of the Android development process.
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

// Android Specific Services
const AndroidServicesGrid = () => {
  const services = [
    {
      title: "Custom Android App Development",
      description: "Tailored apps for diverse business requirements with native Android performance and capabilities.",
      icon: Smartphone
    },
    {
      title: "Android Tablet App Development",
      description: "Creating immersive experiences for larger screens with optimized layouts and tablet-specific features.",
      icon: Tablet
    },
    {
      title: "Android UI/UX Design",
      description: "Crafting intuitive interfaces following Material Design principles for consistent user experiences.",
      icon: Brush
    },
    {
      title: "Android Wear & TV Apps",
      description: "Extending your app's presence to other Android devices including smartwatches and Android TV.",
      icon: Watch
    },
    {
      title: "Android App Modernization",
      description: "Upgrading existing apps for performance, security, and compatibility with latest Android versions.",
      icon: RefreshCcw
    },
    {
      title: "Google Play Store Optimization",
      description: "Improving app visibility and download rates through strategic ASO practices and store optimization.",
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
            Our Expertise in Android App Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From smartphones to smart TVs, we provide comprehensive Android development services across all device categories.
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

// Android Tech Stack
const AndroidTechStack = () => {
  const technologies = [
    { name: "Kotlin", logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=80&h=80&fit=crop&auto=format" },
    { name: "Java", logo: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=80&h=80&fit=crop&auto=format" },
    { name: "Android Studio", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&auto=format" },
    { name: "Material Design", logo: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=80&h=80&fit=crop&auto=format" },
    { name: "Firebase", logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=80&h=80&fit=crop&auto=format" },
    { name: "AWS", logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=80&h=80&fit=crop&auto=format" },
    { name: "Google APIs", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop&auto=format" },
    { name: "Jetpack Compose", logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=80&h=80&fit=crop&auto=format" }
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
            Leveraging Cutting-Edge Android Technologies
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We use the latest Android frameworks and tools to create superior mobile applications.
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

// Android Case Studies
const AndroidCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Android App with Google Pay",
      client: "ShopNow",
      description: "Comprehensive shopping platform with Google services integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "3M+ downloads",
      gradient: "from-accent/20 to-accent/10"
    },
    {
      title: "Fitness Tracking Android App",
      client: "FitAndroid Pro",
      description: "Advanced fitness tracking with Google Fit integration and wearable support",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "800K+ users",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Business Productivity Android Suite",
      client: "WorkFlow",
      description: "Enterprise-grade productivity app with Google Workspace integration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      results: "1.5M+ downloads",
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
            Android Apps That Define Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses succeed with powerful Android applications that leverage the platform's capabilities.
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
                        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
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
const AndroidInlineCTA = () => {
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
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2- 2-2-2 .8954-2 2 .8954 2 2 2z"/>
                </svg>
                <span className="text-white text-base font-medium">Android Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Tap into the{" "}
              <span className="text-accent">Android Ecosystem?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We'll help you navigate the vast Android landscape with confidence and create apps that stand out.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z" />
                </svg>
                <span>Get a Free Android Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Android Developers Section
const HireAndroidDevelopers = () => {
  const developerTypes = [
    {
      title: "Senior Android Developer",
      experience: "5+ Years",
      skills: ["Kotlin", "Java", "Jetpack Compose", "MVVM"],
      specialties: "Native Android, Google Services Integration"
    },
    {
      title: "Android UI/UX Designer",
      experience: "4+ Years", 
      skills: ["Material Design", "Sketch", "Figma", "Prototyping"],
      specialties: "Android Design Patterns, Material Design"
    },
    {
      title: "Android QA Specialist",
      experience: "3+ Years",
      skills: ["Espresso", "UI Automator", "Firebase Test Lab", "Device Testing"],
      specialties: "Android Testing, Cross-Device Compatibility"
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
            Augment Your Team with Top Android Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access our pool of skilled Android developers proficient in Kotlin and Java, ready to integrate with your existing team.
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
                      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/>
                      </svg>
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
              <span>Hire Android Developers</span>
            </div>
          </ShimmerButton>
          <Button 
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
          >
            <span>Request Profiles</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Android-Specific FAQs
const AndroidFAQs = () => {
  const faqs = [
    {
      question: "How do you ensure app compatibility across diverse Android devices?",
      answer: "We follow comprehensive testing strategies including device fragmentation testing, responsive design principles, and adaptive layouts. Our team tests across multiple screen sizes, Android versions, and hardware configurations to ensure consistent performance across the Android ecosystem."
    },
    {
      question: "What's your approach to Android UI/UX design?",
      answer: "We strictly follow Google's Material Design guidelines while incorporating your brand identity. Our designs prioritize usability, accessibility, and platform consistency while ensuring your app feels native to Android users and leverages platform-specific interaction patterns."
    },
    {
      question: "Do you provide post-launch updates and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including regular updates for new Android versions, security patches, performance optimizations, feature enhancements, and Google Play Store compliance. Our maintenance packages are tailored to your specific needs."
    },
    {
      question: "Can you integrate with specific Google services (e.g., Maps, Firebase)?",
      answer: "Absolutely! We specialize in Google services integration including Google Maps, Firebase, Google Pay, Google Drive, Google Analytics, and more. Our team has extensive experience leveraging the full Google ecosystem to enhance your app's functionality and user experience."
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
            Common questions about our Android app development services.
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
const AndroidFinalCTA = () => {
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
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5665-.0085-1.2274-.1111-2.0032-.2551.7758-.1511 1.4368-.2551 2.0032-.2551.5665 0 1.2274.1111 2.0032.2551-.7758.1511-1.4368.2551-2.0032.2551zM12 2C13.1046 2 14 2.8954 14 4s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm6 18c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/>
                </svg>
                <span className="text-foreground text-base font-medium">Ready to Build?</span>
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
            Build Your Next Big Idea on{" "}
            <span className="text-accent">Android with WDI</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with us to create powerful, user-friendly Android applications that stand out in the competitive market.
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
                <span>Start Your Android Project Now</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Free consultation • Expert guidance • Rapid development
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

// Main Android App Development Page
export const AndroidAppDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <AndroidHeroWithCTA />
      </section>
      
      {/* Key Benefits */}
      <section className="bg-background">
        <AndroidKeyBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <AndroidProcessTimeline />
      </section>
      
      {/* Android Services */}
      <section className="bg-background">
        <AndroidServicesGrid />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <AndroidTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <AndroidCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <AndroidInlineCTA />
      </section>
      
      {/* Hire Android Developers */}
      <section className="bg-background">
        <HireAndroidDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <AndroidFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <AndroidFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};