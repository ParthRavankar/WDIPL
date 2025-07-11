import React, { useState } from "react";
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
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  CheckCircle, Smartphone, Tablet, Watch, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Apple, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, Monitor,
  Download, Coffee, Calendar, Camera, Music, Gamepad2,
  CreditCard, Bell, Mail, Search, Home, MapPin, 
  Github, Slack, Figma, Chrome, Zap as ZapIcon, Video, MessageCircle, Brain,
  Cog, Layers3, Hexagon, Eye
} from "lucide-react";
import Group1597880681 from "../imports/Group1597880681";
import heroMockupReference from 'figma:asset/1e89556fa734658b6be2ce34ec888dfcc3fdee0e.png';
import { navigateTo } from "../App";

// Enhanced Hero Section with compact mockup and integrated stats
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
            {/* Mobile App Development Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Mobile App Development</span>
            </motion.div>

            {/* Main Heading - Updated Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Expert Mobile App Development Services
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Build secure, scalable, high-performance apps for iOS, Android, or cross-platform — fast.
              </p>
            </div>
            
            {/* Updated CTAs - Using provided code structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton className="text-lg px-8 py-4" onClick={() => navigateTo('/contact')}>
                <div className="inline-flex items-center gap-2">
                  <svg className="w-6 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Book a Discovery Call</span>
                </div>
              </ShimmerButton>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigateTo('/case-studies')}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>View our work</span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with compact phone mockups and integrated stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Compact Phone Mockups with Integrated Stats Layout */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Phone Mockups Component - Reduced Size */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[350px] w-full mb-8 scale-75 origin-top"
              >
                <Group1597880681 />
              </motion.div>
              
              {/* Integrated Statistics - Positioned to align with phones */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-8 text-center -mt-12 relative z-10"
              >
                {/* Left Phone Stats */}
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white">75+</div>
                  <div className="text-sm text-gray-400 leading-tight">App Developed</div>
                </div>
                
                {/* Center Phone Stats */}
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white">25+</div>
                  <div className="text-sm text-gray-400 leading-tight">App Deployed</div>
                </div>
                
                {/* Right Phone Stats */}
                <div className="space-y-2 flex flex-col items-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white">3M+</div>
                  <div className="text-sm text-gray-400 leading-tight">App downloads</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Horizontal Tag Scroller with Marquee Animation
const HorizontalTagScroller = () => {
  const industries = [
    { name: "FinTech", icon: DollarSign, color: "text-green-400" },
    { name: "HealthTech", icon: Stethoscope, color: "text-red-400" },
    { name: "EdTech", icon: BookOpen, color: "text-blue-400" },
    { name: "eCommerce", icon: ShoppingCart, color: "text-orange-400" },
    { name: "OTT & Streaming", icon: Play, color: "text-purple-400" },
    { name: "Logistics", icon: Truck, color: "text-yellow-400" },
    { name: "On-Demand Services", icon: Bolt, color: "text-cyan-400" }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Add subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Apps Built for High-Impact Industries
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our mobile apps power industries where user trust, speed, and uptime are critical.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee container */}
          <div className="flex animate-marquee hover:animate-marquee-paused">
            {/* First set of industries */}
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={`first-${industry.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${industry.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {industry.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Second set for seamless loop */}
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={`second-${industry.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + industries.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${industry.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {industry.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Third set for extra smoothness */}
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={`third-${industry.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + industries.length * 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 mx-3"
                >
                  <div className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-6 hover:border-accent/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl min-w-fit group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 flex items-center justify-center ${industry.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-foreground whitespace-nowrap">
                        {industry.name}
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

// Updated Title-Only Layout - No Body Text
const SideBySideContentWithIcons = () => {
  const trustFactors = [
    {
      id: "engineering",
      title: "24+ Years in App Engineering",
      icon: Award
    },
    {
      id: "ownership", 
      title: "100% Ownership, No Lock-ins",
      icon: Shield
    },
    {
      id: "agile",
      title: "Agile Sprints with Rapid Iteration",
      icon: Zap
    },
    {
      id: "security",
      title: "Enterprise Security & Compliance-Ready",
      icon: ShieldCheck
    },
    {
      id: "devices",
      title: "Deep Experience Across Devices",
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
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Why Founders and CTOs Trust WDI
          </h2>
          
          {/* Subtext */}
          <p className="text-2xl text-gray-300 leading-relaxed">
            Not just a dev agency. A product partner.
          </p>
        </motion.div>

        {/* Uniform Grid - Title Only Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon;

            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center min-h-[180px]">
                    {/* Icon - Clean without background */}
                    <div className="mb-6">
                      <IconComponent className="w-10 h-10 text-accent mx-auto" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {factor.title}
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

// Enhanced Mobile Expertise Grid
const TabbedServiceDisplay = () => {
  const services = [
    {
      title: "iOS App Development",
      icon: Smartphone,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
    },
    {
      title: "Android App Development", 
      icon: Smartphone,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
    },
    {
      title: "Wearable App Development",
      icon: Watch,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
    },
    {
      title: "Tablet",
      icon: Tablet,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
    },
    {
      title: "TV",
      icon: Tv,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
    },
    {
      title: "IoT",
      icon: Database,
      description: "Transforming Concepts Into Captivating Mobile Experiences With Our Expert App Developments Service"
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
            Innovating Mobility, Empowering Connectivity
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where creativity meets technology! We are a leading app development company committed to transforming your ideas into powerful, user-friendly, and cutting-edge mobile applications.
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

// Updated CTA Banner with ShimmerButton
const InlineCTA = () => {
  return (
    <section className="py-20 bg-gray-950/50 relative overflow-hidden">
      {/* Add subtle decorative elements matching site theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/3 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
            {/* Badge with black background and gradient border */}
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">AI-Driven Innovation</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Let's Architect{" "}
              <span className="text-accent">Intelligence</span>{" "}
              Into Your App
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Schedule a discovery call to explore how AI can give you a strategic edge.
            </p>
            
            {/* Updated CTA Button with ShimmerButton */}
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl" onClick={() => navigateTo('/contact')}>
              <div className="inline-flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Book an AI Discovery Call</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Updated Hire Developers Section with ShimmerButton
const HireDevelopersSection = () => {
  const developers = [
    {
      title: "Hire iOS Developers",
      icon: Apple,
      skills: ["Swift", "Objective-C"],
      iconBg: "bg-gray-800",
      iconColor: "text-white"
    },
    {
      title: "Hire Android Developers", 
      icon: Smartphone,
      skills: ["Kotlin", "Java"],
      iconBg: "bg-green-500",
      iconColor: "text-white"
    },
    {
      title: "Hire Flutter / React Native Developers",
      icon: Layers,
      skills: ["Flutter", "React Native"],
      iconBg: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      title: "Hire Mobile QA Testers",
      icon: Bug,
      skills: ["Mobile Testing", "Automation"],
      iconBg: "bg-red-500",
      iconColor: "text-white"
    },
    {
      title: "Hire UI/UX Designers",
      icon: Brush,
      skills: ["Mobile-first", "User Experience"],
      iconBg: "bg-purple-500",
      iconColor: "text-white"
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
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Need Talent? Hire Our Top App Developers
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get access to top-tier mobile developers who can bring your vision to life with cutting-edge technology and proven expertise.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {developers.map((developer, index) => {
            const IconComponent = developer.icon;
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
                    {/* Header with icon and title */}
                    <div className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 ${developer.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                          <IconComponent className={`w-6 h-6 ${developer.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            Mobile Development
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {developer.title}
                      </h3>
                    </div>
                    
                    {/* Skills section */}
                    <div className="px-8 pb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {developer.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-white/10 text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Buttons - Updated with ShimmerButton */}
                    <div className="p-8 pt-0 mt-auto space-y-3">
                      <ShimmerButton className="w-full py-3 text-sm rounded-xl shadow-lg hover:shadow-xl" onClick={() => navigateTo('/contact')}>
                        <div className="inline-flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                          </svg>
                          <span className="font-medium">Start Hiring</span>
                        </div>
                      </ShimmerButton>
                      <Button 
                        variant="outline"
                        className="w-full border-white/20 text-foreground hover:bg-white/10 py-3 text-sm rounded-xl transition-all duration-300"
                      >
                        <span className="font-medium">Request Profiles</span>
                        <UserPlus className="ml-2 w-4 h-4" />
                      </Button>
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

// Enhanced Case Study Highlight - Updated to match reference design
const CaseStudyHighlight = () => {
  const projects = [
    {
      title: "Automated management of IoT networks",
      brand: "RAK",
      icon: Wifi,
      description: "Comprehensive IoT device management and monitoring platform",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "HIPAA-compliant app for healthcare digitization",
      brand: "HealthVue",
      icon: Stethoscope,
      description: "Secure healthcare management system with patient data protection",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "SaaS transportation management system",
      brand: "FleetOps",
      icon: Truck,
      description: "Advanced fleet tracking and logistics optimization platform",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format",
      bgGradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Industry-agnostic cybersecurity system",
      brand: "SecureNet",
      icon: Shield,
      description: "Enterprise-grade security monitoring and threat detection",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      bgGradient: "from-purple-500/20 to-indigo-500/20"
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
            See What We've Built
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From IoT platforms to healthcare systems, our solutions drive real business impact across industries.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
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
                    {/* Header with title and brand */}
                    <div className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                            {project.brand}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* App screenshot/mockup */}
                    <div className="px-8 pb-6 flex-1">
                      <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${project.bgGradient} p-4 border border-white/10`}>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    
                    {/* CTA Button - Keep as secondary action */}
                    <div className="p-8 pt-0 mt-auto">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <span className="text-sm font-medium">SEE FULL CASE STUDY</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
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

// Tech Marquee Component 
const TechMarquee = () => {
  const logos = [
    "Swift", "Kotlin", "Flutter", "React Native", "Firebase", 
    "AWS", "PostgreSQL", "GraphQL", "Jest", "Figma"
  ];

  const techImages = [
    "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=80&h=80&fit=crop&auto=format", 
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=80&h=80&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=80&h=80&fit=crop&auto=format"
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
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Tools & Tech We Use Daily
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % logos.length) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 group"
              >
                <div className="w-24 h-24 bg-card/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <ImageWithFallback
                    src={techImages[index % techImages.length]}
                    alt={logo}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-300">
                  {logo}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced FAQ Accordion
const AccordionFAQs = () => {
  const items = [
    {
      question: "Do you help with app store publishing?",
      answer: "Yes. We help you publish, optimize, and comply with Apple & Google guidelines."
    },
    {
      question: "Can you build MVPs quickly?",
      answer: "Absolutely. Most MVPs are shipped in 4–6 weeks using cross-platform stacks."
    },
    {
      question: "How do you handle security?", 
      answer: "From secure APIs to encrypted storage, our apps are built with enterprise-grade security in mind."
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-8">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card/20 backdrop-blur-md rounded-2xl border border-white/10 px-10 shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-10 text-2xl">
                  <span className="font-semibold text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-10 text-xl leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// Updated Large Call to Action with ShimmerButton
const LargeCallToAction = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge with black background and gradient border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Ready to Launch Your App?</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight"
          >
            Build Your Next Mobile App with{" "}
            <span className="text-accent">WDI</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join the companies who trust us to bring their app ideas to life with cutting-edge technology and expert craftsmanship.
          </motion.p>

          {/* CTA Section - Updated with ShimmerButton */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main CTA Button with ShimmerButton */}
            <ShimmerButton className="px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-accent/25" onClick={() => navigateTo('/contact')}>
              <div className="inline-flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                <span>Get Started</span>
              </div>
            </ShimmerButton>

            {/* Secondary CTA */}
            <p className="text-gray-400 text-sm">
              Free consultation • No commitment • Quick turnaround
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main Mobile App Development Page
// FAQ data for Mobile App Development
const mobileAppFAQs = [
  {
    question: "What platforms do you develop mobile apps for?",
    answer: "We develop mobile apps for iOS, Android, and cross-platform solutions using technologies like React Native and Flutter. Our team has expertise in native development as well as hybrid approaches to ensure optimal performance and user experience."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "The development timeline varies based on app complexity, features, and platform requirements. Simple apps typically take 8-12 weeks, while complex enterprise applications can take 4-6 months. We provide detailed project timelines during the planning phase."
  },
  {
    question: "Do you provide app store submission and approval support?",
    answer: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store. Our team ensures your app meets all guidelines and requirements, and we provide ongoing support for app updates and maintenance."
  },
  {
    question: "Can you integrate AI and machine learning features into mobile apps?",
    answer: "Absolutely! We specialize in integrating AI and ML capabilities including chatbots, recommendation engines, image recognition, natural language processing, and predictive analytics to enhance user engagement and app functionality."
  },
  {
    question: "What is your approach to mobile app security?",
    answer: "We implement comprehensive security measures including data encryption, secure API connections, authentication systems, and compliance with industry standards like GDPR and HIPAA. Security is built into every layer of our development process."
  }
];

export function MobileAppDevelopment() {
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
        title="Mobile App Development Questions"
        subtitle="Get answers to common questions about our mobile app development services and process."
        faqs={mobileAppFAQs}
      />
      <Footer />
    </div>
  );
}