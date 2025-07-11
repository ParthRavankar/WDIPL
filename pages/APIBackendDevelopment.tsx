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
  HardDrive, Terminal, Braces, CircuitBoard, GitBranch, Cloudy, Key,
  PlugZap, Workflow as WorkflowIcon
} from "lucide-react";

// API & Backend Development Hero Section
const APIHeroWithCTA = () => {
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
            {/* API Backend Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Web & Cloud Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Robust API & Backend Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building powerful, scalable, and secure backend infrastructure and APIs to fuel your web, mobile, and IoT applications.
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
                  <Server className="w-5 h-5 flex-shrink-0" />
                  <span>Strengthen Your Backend</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>Discuss Your API Needs</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with API & Backend visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Server Infrastructure */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Server Rack */}
                <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-accent to-purple-600 rounded-2xl border border-accent/30 shadow-2xl p-6 mb-8">
                  {/* Server Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">Backend Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-white/80" />
                      <Network className="w-4 h-4 text-white/80" />
                      <Shield className="w-4 h-4 text-white/80" />
                    </div>
                  </div>
                  
                  {/* API Endpoints Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* REST API */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">REST API</span>
                      </div>
                      <div className="space-y-1">
                        {['GET /users', 'POST /data', 'PUT /update'].map((endpoint, i) => (
                          <div key={i} className="text-white/70 text-xs bg-white/10 rounded px-2 py-1">
                            {endpoint}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* GraphQL */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">GraphQL</span>
                      </div>
                      <div className="h-12 bg-white/20 rounded flex items-center justify-center">
                        <Braces className="w-6 h-6 text-white/60" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Flow Indicator */}
                  <div className="bg-white/20 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-white text-xs">Data Flow</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Backend Services */}
                <div className="relative grid grid-cols-4 gap-4 mb-8">
                  {/* Database */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <Database className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Database</div>
                  </motion.div>
                  
                  {/* Authentication */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <Key className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Auth</div>
                  </motion.div>
                  
                  {/* Microservices */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <Component className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Services</div>
                  </motion.div>
                  
                  {/* Cloud */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl border border-purple-400/30 shadow-lg p-4 text-center"
                  >
                    <Cloud className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Cloud</div>
                  </motion.div>
                </div>
                
                {/* Infrastructure Layer */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg border border-indigo-400/30 shadow-lg p-3 text-center"
                  >
                    <Container className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Docker</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg border border-pink-400/30 shadow-lg p-3 text-center"
                  >
                    <GitBranch className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">CI/CD</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg border border-teal-400/30 shadow-lg p-3 text-center"
                  >
                    <Activity className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Monitor</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '450px'}}>
                  <g className="opacity-30">
                    {/* Lines from Server to services */}
                    <line x1="200" y1="140" x2="120" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="160" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="240" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="140" x2="280" y2="220" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3.5s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Scalable
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  High-Performance
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Strong Backend & APIs
const APIBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability for Growth",
      description: "Handles increased data volume and user traffic seamlessly."
    },
    {
      icon: Zap,
      title: "Enhanced Performance",
      description: "Fast data retrieval and processing for responsive applications."
    },
    {
      icon: Shield,
      title: "Ironclad Security",
      description: "Protecting sensitive data and ensuring secure transactions."
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Facilitates communication between diverse systems and services."
    },
    {
      icon: GitBranch,
      title: "Future-Proof Architecture",
      description: "Modular and flexible for future expansion and innovation."
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
            The Foundation of Your Digital Success
          </h2>
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

// API & Backend Development Process
const APIProcess = () => {
  const steps = [
    {
      title: "Requirements & Architecture Design",
      description: "Deep analysis of your system requirements, data flows, and designing robust, scalable architecture that supports your business goals.",
      icon: ClipboardList
    },
    {
      title: "Database Design & Modeling",
      description: "Creating optimized database schemas, relationships, and data models for efficient storage, retrieval, and performance.",
      icon: Database
    },
    {
      title: "API Development & Logic Implementation",
      description: "Building RESTful APIs, GraphQL endpoints, and implementing core business logic with clean, maintainable code.",
      icon: Code
    },
    {
      title: "Security & Performance Testing",
      description: "Comprehensive security audits, load testing, and performance optimization to ensure robust and fast backend systems.",
      icon: ShieldCheck
    },
    {
      title: "Deployment & DevOps",
      description: "Setting up CI/CD pipelines, container orchestration, and cloud infrastructure for reliable production deployment.",
      icon: CloudCog
    },
    {
      title: "Monitoring & Maintenance",
      description: "Implementing monitoring systems, logging, and providing ongoing maintenance to ensure optimal performance and uptime.",
      icon: Activity
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
            Our Methodical Approach to Backend Excellence
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

// API & Backend Services
const APIServices = () => {
  const services = [
    {
      title: "RESTful API Development",
      description: "Building robust and well-documented APIs for diverse applications.",
      icon: Globe,
      features: ["REST Architecture", "OpenAPI Documentation", "Versioning Strategy", "Rate Limiting"]
    },
    {
      title: "Microservices Architecture",
      description: "Designing scalable, independent service components.",
      icon: Component,
      features: ["Service Decomposition", "Inter-service Communication", "Data Consistency", "Service Discovery"]
    },
    {
      title: "GraphQL API Development",
      description: "Efficient data fetching for complex client needs.",
      icon: Layers,
      features: ["Schema Design", "Query Optimization", "Real-time Subscriptions", "Federation"]
    },
    {
      title: "Database Design & Management",
      description: "Optimizing SQL and NoSQL databases for performance.",
      icon: Database,
      features: ["Schema Optimization", "Query Performance", "Data Migration", "Backup Strategies"]
    },
    {
      title: "Cloud Backend Solutions",
      description: "Leveraging AWS, Azure, GCP for scalable infrastructure.",
      icon: Cloud,
      features: ["Serverless Architecture", "Auto-scaling", "Load Balancing", "Multi-region Deployment"]
    },
    {
      title: "Backend for IoT & Devices",
      description: "Building server-side logic for connected devices.",
      icon: Wifi,
      features: ["Device Management", "Real-time Data Processing", "Protocol Integration", "Edge Computing"]
    },
    {
      title: "Third-Party API Integration",
      description: "Seamlessly connecting your applications with external services.",
      icon: PlugZap,
      features: ["API Integration", "Data Synchronization", "Error Handling", "Webhook Management"]
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
            Our Specialized Backend Development Services
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

        {/* Last service card centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="w-full max-w-md">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// API & Backend Tech Stack
const APITechStack = () => {
  const backends = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Runtime" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Language" },
    { name: "Ruby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", category: "Language" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", category: "Language" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Language" }
  ];

  const frameworks = [
    { name: "Express.js", icon: Terminal, description: "Fast Node.js web framework" },
    { name: "Django", icon: Code, description: "High-level Python web framework" },
    { name: "Spring Boot", icon: Layers, description: "Java application framework" },
    { name: "Ruby on Rails", icon: GitBranch, description: "Full-stack web framework" }
  ];

  const databases = [
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "SQL" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "SQL" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "NoSQL" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Cache" }
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: Cloud, description: "Amazon Web Services" },
    { name: "Azure", icon: CloudCog, description: "Microsoft Azure" },
    { name: "Google Cloud", icon: CloudLightning, description: "Google Cloud Platform" }
  ];

  const devOpsTools = [
    { name: "Docker", icon: Container, description: "Containerization platform" },
    { name: "Kubernetes", icon: Boxes, description: "Container orchestration" },
    { name: "GraphQL", icon: Layers, description: "Query language for APIs" },
    { name: "REST", icon: Globe, description: "RESTful API architecture" }
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
            Building Secure and High-Performance Backends
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With industry-leading technologies that ensure scalability, security, and reliability.
          </p>
        </motion.div>

        {/* Backend Languages & Runtimes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Backend Languages & Runtimes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {backends.map((tech, index) => (
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
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Backend Frameworks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => {
              const IconComponent = framework.icon;
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{framework.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{framework.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Database Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {databases.map((db, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                    <ImageWithFallback
                      src={db.logo}
                      alt={db.name}
                      className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{db.name}</h4>
                  <p className="text-xs text-muted-foreground">{db.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud & DevOps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Cloud Platforms */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Cloud Platforms</h3>
            <div className="grid grid-cols-3 gap-4">
              {cloudPlatforms.map((platform, index) => {
                const IconComponent = platform.icon;
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
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center h-full">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{platform.name}</h4>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">DevOps & API Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {devOpsTools.map((tool, index) => {
                const IconComponent = tool.icon;
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
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center h-full">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// API & Backend Case Studies
const APICaseStudies = () => {
  const caseStudies = [
    {
      title: "High-Traffic Social Platform Backend",
      client: "SocialConnect",
      description: "Scalable microservices architecture supporting 10M+ daily active users with real-time messaging, content feeds, and comprehensive analytics systems",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "99.9% uptime at 10M+ DAU",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Microservices, Real-time APIs, Auto-scaling"
    },
    {
      title: "Financial Services API Gateway",
      client: "FinTech Pro",
      description: "Secure, compliant API infrastructure for banking services with multi-layer security, transaction processing, and regulatory compliance features",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "PCI DSS compliant with 99.99% SLA",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Security Compliance, Transaction APIs, Real-time Processing"
    },
    {
      title: "IoT Device Management Platform",
      client: "SmartTech Solutions",
      description: "Backend infrastructure managing 500K+ connected devices with real-time data processing, device monitoring, and predictive analytics capabilities",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
      results: "500K+ devices managed seamlessly",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "IoT Integration, Real-time Data, Device Management"
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
            Robust Backends Powering Digital Innovation
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
                        <Server className="w-6 h-6 text-accent" />
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
const APIInlineCTA = () => {
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
                <Server className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Backend Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Need a Rock-Solid{" "}
              <span className="text-accent">Backend for Your Application?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our architects and developers ensure your digital products are built on a strong foundation.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Backend Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Backend Developers
const HireBackendDevelopers = () => {
  const developerTypes = [
    {
      title: "Node.js Developers",
      description: "Specialists in JavaScript backend development",
      icon: Terminal,
      skills: ["Express.js", "NestJS", "RESTful APIs", "Real-time Applications"]
    },
    {
      title: "Python Developers",
      description: "Experts in Django, Flask, and FastAPI",
      icon: Code,
      skills: ["Django", "Flask", "FastAPI", "Data Processing"]
    },
    {
      title: "Java Developers",
      description: "Spring Boot and enterprise application specialists",
      icon: Layers,
      skills: ["Spring Boot", "Microservices", "Enterprise Solutions", "API Development"]
    },
    {
      title: "DevOps Engineers",
      description: "Infrastructure and deployment automation experts",
      icon: CloudCog,
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"]
    },
    {
      title: "Database Architects",
      description: "SQL and NoSQL database design specialists",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Database Optimization"]
    },
    {
      title: "API Architects",
      description: "RESTful and GraphQL API design experts",
      icon: Globe,
      skills: ["REST Design", "GraphQL", "API Security", "Documentation"]
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
            Hire Specialized Backend & API Developers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our pool of expert backend engineers proficient in various languages, databases, and cloud platforms.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {developerTypes.map((type, index) => {
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
                <span>Hire Backend Developers</span>
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

// API & Backend FAQs
const APIFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between REST and GraphQL APIs?",
      answer: "REST is a architectural style using standard HTTP methods with multiple endpoints for different resources, while GraphQL uses a single endpoint with a query language that allows clients to request exactly the data they need. REST is simpler and widely adopted, making it great for straightforward CRUD operations. GraphQL offers more flexibility and efficiency for complex data fetching, reducing over-fetching and under-fetching of data. We help you choose the right approach based on your specific use case, team expertise, and performance requirements."
    },
    {
      question: "How do you ensure the security of APIs?",
      answer: "We implement multiple layers of API security including authentication (JWT, OAuth 2.0), authorization with role-based access control, rate limiting to prevent abuse, input validation and sanitization, HTTPS encryption, API key management, and comprehensive logging for audit trails. We also conduct security testing, implement CORS policies, use API gateways for additional protection, and follow OWASP guidelines. Regular security audits and penetration testing ensure your APIs remain secure against emerging threats."
    },
    {
      question: "Can you help scale our existing backend infrastructure?",
      answer: "Absolutely! We specialize in scaling existing backends through various approaches: performance auditing to identify bottlenecks, database optimization and query tuning, implementing caching strategies (Redis, CDN), load balancing, horizontal scaling with microservices architecture, cloud migration for auto-scaling capabilities, and code optimization. We can also refactor monolithic applications into microservices, implement container orchestration with Kubernetes, and set up monitoring systems to proactively manage performance as you grow."
    },
    {
      question: "What's the importance of microservices architecture?",
      answer: "Microservices architecture breaks down applications into small, independent services that communicate via APIs. Key benefits include: independent deployment and scaling of services, technology diversity (different services can use different tech stacks), fault isolation (one service failure doesn't crash the entire system), team independence, and easier maintenance. However, microservices add complexity in service communication, data consistency, and deployment orchestration. We help you determine if microservices are right for your use case and handle the complex transition if needed."
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
const APIFinalCTA = () => {
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
                <Server className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Backend Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Build a Powerful Digital Core with{" "}
            <span className="text-accent">WDI's Backend Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ensure your applications are fast, secure, and scalable with our expert API and backend development services.
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
                <span>Empower Your Digital Products</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              API Development • Microservices Architecture • Cloud Infrastructure
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

// Main API & Backend Development Page
export const APIBackendDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <APIHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <APIBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <APIProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <APIServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <APITechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <APICaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <APIInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireBackendDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <APIFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <APIFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};