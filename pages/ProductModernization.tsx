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
  Gamepad, Building, Briefcase, Microscope, WifiOff, CloudDownload, Repeat,
  Server, PhoneCall, MousePointer, PlusCircle, Code2, Store,
  FileText, ShoppingBag, Newspaper, TicketIcon, Lightbulb as IdeaIcon,
  TrendingUp as GrowthIcon, HelpCircle, ArrowUpRight, Workflow, 
  BarChart, CloudCog, Layers2, Boxes, Puzzle, Cloud, CloudLightning,
  Scaling, Container, Component, Repeat2, Analytics, Percent, Tag,
  ShoppingCart as CartIcon, Banknote, PackageCheck, Headphones, Scan,
  Megaphone, Paintbrush2, PieChart, ShieldX, CogIcon, ArrowUpCircle,
  BadgeCheck, FastForward, RotateCcw, ArrowRightLeft, Link, ArrowLeftRight,
  BarChart2, LineChart, Table, Filter, Grid3X3, Settings2, UserCheck,
  ClipboardList, Receipt, Briefcase as CaseIcon, FolderOpen, Archive,
  MoreHorizontal, Sliders, ToggleLeft, Edit, Trash2, Plus, Upload, 
  FileChartBar, Users as UsersIcon, Building2, ShieldIcon, FlexIcon,
  HardDrive, Terminal, CircuitBoard, GitBranch, Cloudy, Key,
  PlugZap, Workflow as WorkflowIcon, Factory, Combine, BarChart3 as PresentationChart,
  FileBarChart, CircuitBoard as ChipIcon, Blocks, Construction, LockKeyhole,
  Timer, Flame, Scaling as ScaleIcon, GitCommit, RotateCw, Repeat as RepeatIcon,
  MonitorSpeaker, Gauge as MetricsIcon, AlertTriangle, TrendingDown, Wrench as ToolIcon,
  Cable, ArrowUpDown, Shuffle, GitPullRequest, PlugIcon, Waypoints, SendHorizontal,
  FileCode, Layers as LayersIcon, Smartphone as MobileIcon, Forward, Rewind
} from "lucide-react";

// Product Modernization Hero Section
const ModernizationHeroWithCTA = () => {
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
            {/* Modernization Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Software Engineering</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Product Modernization & Legacy System Rebuilds
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Revitalize your outdated software and digital products, transforming them into modern, scalable, and high-performing solutions.
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
                  <RefreshCcw className="w-5 h-5 flex-shrink-0" />
                  <span>Modernize Your Product</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <ClipboardList className="w-4 h-4 flex-shrink-0" />
                <span>Assess Your Legacy System</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Before/After transformation visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Before & After Transformation */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Before/After Container */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {/* BEFORE - Legacy System */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
                        BEFORE
                      </Badge>
                    </div>
                    
                    {/* Legacy Interface */}
                    <div className="bg-gray-700 rounded-lg border border-gray-600 p-4 space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Database className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">Legacy System</span>
                      </div>
                      
                      {/* Old UI Elements */}
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-600 rounded w-full"></div>
                        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                      </div>
                      
                      {/* Old Code Block */}
                      <div className="bg-gray-800 rounded p-2 text-xs font-mono">
                        <div className="text-gray-400"># Legacy Code</div>
                        <div className="text-red-300">if (condition) &#123;</div>
                        <div className="text-gray-300">  // Old logic</div>
                        <div className="text-red-300">&#125;</div>
                      </div>
                      
                      {/* Issues */}
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                        <span className="text-red-300 text-xs">Slow Performance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bug className="w-3 h-3 text-red-400" />
                        <span className="text-red-300 text-xs">Security Issues</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* AFTER - Modern System */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                        AFTER
                      </Badge>
                    </div>
                    
                    {/* Modern Interface */}
                    <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg border border-accent/30 p-4 space-y-3 shadow-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-white text-sm">Modern System</span>
                      </div>
                      
                      {/* Modern UI Elements */}
                      <div className="space-y-2">
                        <div className="h-3 bg-gradient-to-r from-accent to-blue-500 rounded w-full"></div>
                        <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-4/5"></div>
                        <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/5"></div>
                      </div>
                      
                      {/* Modern Code Block */}
                      <div className="bg-gray-900/50 rounded p-2 text-xs font-mono border border-accent/20">
                        <div className="text-green-400"># Modern Code</div>
                        <div className="text-blue-300">const result = async () =&gt; &#123;</div>
                        <div className="text-white">  return optimized();</div>
                        <div className="text-blue-300">&#125;;</div>
                      </div>
                      
                      {/* Benefits */}
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-green-400" />
                        <span className="text-green-300 text-xs">High Performance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-green-400" />
                        <span className="text-green-300 text-xs">Enhanced Security</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Transformation Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                {/* Technology Evolution Icons */}
                <div className="grid grid-cols-4 gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Code2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs text-gray-300">Modern Code</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Cloud className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-xs text-gray-300">Cloud Native</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MobileIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xs text-gray-300">Responsive</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-orange-400" />
                    </div>
                    <span className="text-xs text-gray-300">Secure</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <FastForward className="w-3 h-3 mr-1" />
                  Faster
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Scalable
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Product Modernization
const ModernizationBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Improved Performance",
      description: "Faster load times, smoother operations."
    },
    {
      icon: Palette,
      title: "Enhanced User Experience",
      description: "Modern UI/UX, intuitive workflows."
    },
    {
      icon: DollarSign,
      title: "Reduced Maintenance Costs",
      description: "Easier to update and support."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Agility",
      description: "Ready for future growth and feature additions."
    },
    {
      icon: Shield,
      title: "Strengthened Security",
      description: "Addressing vulnerabilities in older codebases."
    },
    {
      icon: Target,
      title: "Competitive Relevance",
      description: "Keeping pace with evolving market demands."
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
            Why Modernize Your Existing Product?
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
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
      </div>
    </section>
  );
};

// Product Modernization Process
const ModernizationProcess = () => {
  const steps = [
    {
      title: "Discovery & Assessment",
      description: "Comprehensive evaluation of existing system architecture, codebase quality, performance bottlenecks, and business requirements to create modernization roadmap.",
      icon: Search
    },
    {
      title: "Modernization Strategy",
      description: "Defining the optimal approach: Re-platform (lift and shift), Re-architect (restructure), or Re-host (move to cloud) based on system complexity and business goals.",
      icon: Target
    },
    {
      title: "Phased Implementation",
      description: "Executing modernization in carefully planned phases to minimize business disruption, with parallel system operation and gradual migration strategies.",
      icon: Layers
    },
    {
      title: "Data Migration & Integration",
      description: "Secure data migration with validation, integrity checks, and seamless integration with existing business systems and third-party services.",
      icon: Database
    },
    {
      title: "Rigorous Testing",
      description: "Comprehensive testing including functional, performance, security, and user acceptance testing to ensure the modernized system meets all requirements.",
      icon: CheckCircle
    },
    {
      title: "Deployment & Ongoing Support",
      description: "Smooth production deployment with monitoring, optimization, user training, and continuous support to ensure successful modernization adoption.",
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
            Our Strategic Phased Approach to Modernization
          </h2>
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

// Modernization Services
const ModernizationServices = () => {
  const services = [
    {
      title: "Technology Stack Migration",
      description: "Moving from outdated languages/frameworks to modern ones.",
      icon: Code2,
      features: ["Framework Upgrade", "Language Migration", "Dependency Updates", "Performance Optimization"]
    },
    {
      title: "Architecture Re-engineering",
      description: "Shifting from monolithic to microservices.",
      icon: Component,
      features: ["Microservices Design", "API Gateway", "Service Decomposition", "Event-Driven Architecture"]
    },
    {
      title: "Cloud Migration",
      description: "Moving on-premise applications to scalable cloud environments.",
      icon: Cloud,
      features: ["Cloud Strategy", "Infrastructure Migration", "Serverless Computing", "Cost Optimization"]
    },
    {
      title: "UI/UX Revamp",
      description: "Redesigning outdated interfaces for modern usability.",
      icon: Palette,
      features: ["Modern Design", "Responsive Layout", "User Experience", "Accessibility"]
    },
    {
      title: "Database Modernization",
      description: "Upgrading or migrating databases for performance.",
      icon: Database,
      features: ["Schema Migration", "Performance Tuning", "Data Optimization", "Backup & Recovery"]
    },
    {
      title: "Code Refactoring & Optimization",
      description: "Improving existing codebase for efficiency.",
      icon: Wrench,
      features: ["Code Cleanup", "Performance Improvement", "Best Practices", "Documentation"]
    },
    {
      title: "Security Enhancement",
      description: "Identifying and patching vulnerabilities in legacy systems.",
      icon: Shield,
      features: ["Security Audit", "Vulnerability Patching", "Authentication", "Data Protection"]
    },
    {
      title: "Feature Re-implementation",
      description: "Rebuilding or enhancing core functionalities.",
      icon: Sparkles,
      features: ["Feature Enhancement", "New Capabilities", "Integration", "User Feedback"]
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
            Our Comprehensive Product Modernization Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service, index) => {
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
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                            {feature}
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

        {/* Last two service cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8"
        >
          {services.slice(6).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index + 6}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
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
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                            {feature}
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

// Modernization Tech Stack - Legacy vs Modern
const ModernizationTechStack = () => {
  const legacyTechnologies = [
    { name: ".NET Framework", icon: Code, category: "Legacy Framework", status: "legacy" },
    { name: "Java 8", icon: Code2, category: "Legacy Language", status: "legacy" },
    { name: "PHP 5", icon: Server, category: "Legacy Backend", status: "legacy" },
    { name: "jQuery", icon: Code, category: "Legacy Frontend", status: "legacy" }
  ];

  const modernTechnologies = [
    { name: ".NET Core", icon: Code, category: "Modern Framework", status: "modern" },
    { name: "Java 17+", icon: Code2, category: "Modern Language", status: "modern" },
    { name: "Node.js", icon: Server, category: "Modern Backend", status: "modern" },
    { name: "React/Angular", icon: Globe, category: "Modern Frontend", status: "modern" }
  ];

  const cloudPlatforms = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud Platform" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud Platform" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud Platform" }
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
            Bridging the Gap Between Legacy and Modern
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming outdated systems with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Legacy vs Modern Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Legacy Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Legacy Technologies</h3>
            <div className="space-y-4">
              {legacyTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="bg-red-500/10 backdrop-blur-md border-red-500/20 hover:border-red-500/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.category}</p>
                        </div>
                        <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                          Legacy
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Modern Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Modern Technologies</h3>
            <div className="space-y-4">
              {modernTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="bg-green-500/10 backdrop-blur-md border-green-500/20 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.category}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          Modern
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Cloud Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">Cloud Migration Targets</h3>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <ImageWithFallback
                      src={platform.logo}
                      alt={platform.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Modernization Case Studies
const ModernizationCaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise ERP System Modernization",
      client: "Manufacturing Corp",
      description: "Transformed legacy .NET Framework ERP system to modern cloud-native architecture, improving performance by 300% and reducing operational costs by 40%",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop&auto=format",
      results: "300% performance boost, 40% cost reduction",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Legacy Migration, Cloud Native, Performance Optimization"
    },
    {
      title: "Healthcare Platform UI/UX Overhaul",
      client: "HealthTech Solutions",
      description: "Complete redesign and modernization of patient management system interface, improving user satisfaction by 85% and reducing training time by 60%",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "85% user satisfaction increase, 60% less training",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "UI/UX Redesign, Modern Interface, User Experience"
    },
    {
      title: "Banking System Security Enhancement",
      client: "Regional Bank",
      description: "Modernized legacy banking application with enhanced security features, achieving SOC 2 compliance and eliminating critical vulnerabilities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "100% vulnerability elimination, SOC 2 compliance",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Security Enhancement, Compliance, Vulnerability Patching"
    }
  ];

  return (
    <section className="py-32 bg-black" id="case-studies">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            Successful Product Modernization Stories
          </h2>
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
              <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <RefreshCcw className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                          {study.client}
                        </div>
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                          {study.results}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="px-8 pb-6 flex-1">
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-gray-700`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-white uppercase tracking-wider">Key Features:</h4>
                      <p className="text-xs text-gray-400">
                        {study.features}
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
const ModernizationInlineCTA = () => {
  return (
    <section className="py-20">
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
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Legacy Modernization</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Is Your Legacy System{" "}
              <span className="text-accent">Holding You Back?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our experts can outline a clear path to a modern, high-performing product.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <ClipboardList className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Legacy System Assessment</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Modernization Specialists
const HireModernizationTalent = () => {
  const talentTypes = [
    {
      title: "Software Modernization Architects",
      description: "System architects specialized in legacy modernization",
      icon: Building2,
      skills: ["Legacy Assessment", "Modernization Strategy", "Architecture Design", "Migration Planning"]
    },
    {
      title: "Full-Stack Modernization Developers",
      description: "Developers experienced in cross-platform migrations",
      icon: Code2,
      skills: ["Multi-language Expertise", "Framework Migration", "Code Refactoring", "Performance Optimization"]
    },
    {
      title: "Cloud Migration Specialists",
      description: "Experts in cloud-native transformations",
      icon: Cloud,
      skills: ["AWS/Azure/GCP", "Containerization", "Serverless Architecture", "Cost Optimization"]
    },
    {
      title: "Database Modernization Engineers",
      description: "Database specialists for data migration and optimization",
      icon: Database,
      skills: ["Data Migration", "Schema Optimization", "Performance Tuning", "Backup & Recovery"]
    },
    {
      title: "Security Modernization Experts",
      description: "Security specialists for legacy system hardening",
      icon: Shield,
      skills: ["Security Assessment", "Vulnerability Patching", "Compliance", "Access Control"]
    },
    {
      title: "UI/UX Modernization Designers",
      description: "Designers specialized in interface modernization",
      icon: Palette,
      skills: ["Modern Design", "User Experience", "Accessibility", "Responsive Design"]
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
            Access Expert Talent for Your Modernization Project
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hire skilled architects and developers experienced in safely migrating and upgrading complex legacy systems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {talentTypes.map((type, index) => {
            const IconComponent = type.icon;
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
                      {type.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700">
                            {skill}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShimmerButton className="text-lg px-8 py-4">
              <div className="inline-flex items-center gap-2">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Hire Modernization Experts</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <div className="inline-flex items-center gap-2">
                <FileText className="w-5 h-5 flex-shrink-0" />
                <span>Request Profiles</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Modernization FAQs
const ModernizationFAQs = () => {
  const faqs = [
    {
      question: "What are the common risks associated with product modernization?",
      answer: "Common modernization risks include business disruption during migration, data loss or corruption, functionality gaps in the new system, user adoption challenges, and budget overruns. We mitigate these risks through comprehensive planning, phased implementation, extensive testing, parallel system operation, thorough backup strategies, and user training programs. Our approach includes detailed risk assessment and contingency planning for each modernization project."
    },
    {
      question: "How do you ensure business continuity during the modernization process?",
      answer: "We ensure business continuity through several strategies: phased migration with parallel system operation, minimal downtime deployment windows, comprehensive backup and rollback procedures, thorough testing in staging environments, user training before go-live, and 24/7 support during critical migration phases. We also maintain the legacy system as a fallback until the new system is fully validated and stable."
    },
    {
      question: "What's the difference between re-platforming and re-architecting?",
      answer: "Re-platforming (lift-and-shift) involves moving applications to new infrastructure with minimal code changes, focusing on hosting environment migration. Re-architecting involves fundamental changes to the application structure, often moving from monolithic to microservices architecture, updating frameworks, and redesigning components. Re-platforming is faster and less risky but provides limited modernization benefits, while re-architecting offers greater long-term benefits but requires more time and investment."
    },
    {
      question: "Can we modernize specific modules rather than the entire system?",
      answer: "Yes, modular modernization is often the recommended approach, especially for large, complex systems. We can modernize specific modules, features, or components while maintaining integration with existing systems. This approach reduces risk, allows for incremental investment, enables faster time-to-benefit, and provides opportunity to validate modernization strategies before full system transformation. We design integration layers to ensure seamless communication between modernized and legacy components."
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
const ModernizationFinalCTA = () => {
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
                <RefreshCcw className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Product Modernization</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Future-Proof Your Product with{" "}
            <span className="text-accent">WDI's Modernization Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Don't let outdated technology hinder your growth. Transform your software into a modern, competitive asset.
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
                <span>Start Your Modernization Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Legacy Migration • Cloud Modernization • UI/UX Revamp
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

// Main Product Modernization Page
export const ProductModernization = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <ModernizationHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <ModernizationBenefits />
      </section>
      
      {/* Modernization Process */}
      <section className="bg-card">
        <ModernizationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <ModernizationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <ModernizationTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <ModernizationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <ModernizationInlineCTA />
      </section>
      
      {/* Hire Talent */}
      <section className="bg-background">
        <HireModernizationTalent />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <ModernizationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <ModernizationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};