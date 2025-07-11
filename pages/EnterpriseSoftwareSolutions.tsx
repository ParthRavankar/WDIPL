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
  PlugZap, Workflow as WorkflowIcon, Factory, Combine, BarChart3 as PresentationChart,
  FileBarChart, CircuitBoard as ChipIcon, Blocks, Construction, LockKeyhole
} from "lucide-react";

// Enterprise Software Solutions Hero Section
const EnterpriseHeroWithCTA = () => {
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
            {/* Enterprise Label */}
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
                Enterprise Software Solutions
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Crafting custom, high-impact software tailored to streamline large-scale operations, enhance productivity, and drive digital transformation for enterprises.
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
                  <Building2 className="w-5 h-5 flex-shrink-0" />
                  <span>Transform Your Enterprise</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>Explore Our Enterprise Work</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Enterprise Systems visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Enterprise Systems Architecture */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Enterprise Hub */}
                <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-accent to-purple-600 rounded-2xl border border-accent/30 shadow-2xl p-6 mb-8">
                  {/* Enterprise Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">Enterprise Hub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-white/80" />
                      <Network className="w-4 h-4 text-white/80" />
                      <Activity className="w-4 h-4 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Enterprise Systems Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* ERP System */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Factory className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">ERP</span>
                      </div>
                      <div className="space-y-1">
                        {['Finance', 'HR', 'Supply'].map((module, i) => (
                          <div key={i} className="text-white/70 text-xs bg-white/10 rounded px-1 py-0.5">
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CRM System */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">CRM</span>
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                        <Handshake className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    
                    {/* BI Tools */}
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart className="w-4 h-4 text-white/80" />
                        <span className="text-white text-xs font-medium">BI</span>
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-end gap-1 p-1">
                        <div className="w-1 bg-white/60 rounded" style={{height: '50%'}}></div>
                        <div className="w-1 bg-white/80 rounded" style={{height: '70%'}}></div>
                        <div className="w-1 bg-white rounded" style={{height: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Integration Status */}
                  <div className="bg-white/20 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-white text-xs">Integration Status</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Enterprise Modules */}
                <div className="relative grid grid-cols-4 gap-4 mb-8">
                  {/* SCM */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <Truck className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">SCM</div>
                  </motion.div>
                  
                  {/* Workflow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <Workflow className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Workflow</div>
                  </motion.div>
                  
                  {/* Security */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <LockKeyhole className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Security</div>
                  </motion.div>
                  
                  {/* Legacy */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl border border-purple-400/30 shadow-lg p-4 text-center"
                  >
                    <RefreshCcw className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Legacy</div>
                  </motion.div>
                </div>
                
                {/* Supporting Systems */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg border border-indigo-400/30 shadow-lg p-3 text-center"
                  >
                    <Cloud className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Cloud</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg border border-pink-400/30 shadow-lg p-3 text-center"
                  >
                    <Users2 className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">B2B Portal</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg border border-teal-400/30 shadow-lg p-3 text-center"
                  >
                    <PresentationChart className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Analytics</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '450px'}}>
                  <g className="opacity-30">
                    {/* Lines from Enterprise Hub to modules */}
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
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Network className="w-3 h-3 mr-1" />
                  Integrated
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Custom Enterprise Software
const EnterpriseBenefits = () => {
  const benefits = [
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "Automate complex workflows and reduce manual errors."
    },
    {
      icon: BarChart,
      title: "Enhanced Data Insights",
      description: "Centralized data for comprehensive reporting and analytics."
    },
    {
      icon: Network,
      title: "Scalability & Integration",
      description: "Designed to grow with your business and integrate with existing systems."
    },
    {
      icon: Shield,
      title: "Robust Security & Compliance",
      description: "Built to meet stringent industry standards and regulations."
    },
    {
      icon: Zap,
      title: "Competitive Agility",
      description: "Rapidly adapt to market changes and new opportunities."
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
            Why Custom Enterprise Solutions from WDI?
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

// Enterprise Software Development Process
const EnterpriseProcess = () => {
  const steps = [
    {
      title: "Business Analysis & Strategy",
      description: "Comprehensive assessment of current systems, business processes, and strategic goals to define the optimal enterprise solution roadmap.",
      icon: ClipboardList
    },
    {
      title: "Architecture Design & Planning",
      description: "Designing scalable, secure system architecture with detailed technical specifications, integration points, and infrastructure requirements.",
      icon: Building2
    },
    {
      title: "Agile Development & Iteration",
      description: "Iterative development using agile methodologies with regular stakeholder feedback, ensuring alignment with business objectives throughout the process.",
      icon: Code
    },
    {
      title: "System Integration & Testing",
      description: "Comprehensive integration with existing enterprise systems, rigorous testing including performance, security, and user acceptance testing.",
      icon: Network
    },
    {
      title: "Deployment & Training",
      description: "Seamless production deployment with comprehensive user training, change management support, and knowledge transfer to internal teams.",
      icon: GraduationCap
    },
    {
      title: "Support & Evolution",
      description: "Ongoing maintenance, performance monitoring, feature enhancements, and system evolution to meet changing business requirements.",
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
            Our Strategic Approach to Enterprise Software
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

// Enterprise Software Services
const EnterpriseServices = () => {
  const services = [
    {
      title: "Enterprise Resource Planning (ERP) Customization",
      description: "Tailoring ERP systems to unique business needs.",
      icon: Factory,
      features: ["Custom Modules", "Workflow Design", "Integration APIs", "User Training"]
    },
    {
      title: "Customer Relationship Management (CRM) Development",
      description: "Bespoke CRM solutions for sales, marketing, and service.",
      icon: Handshake,
      features: ["Sales Pipeline", "Customer Analytics", "Automation", "Multi-channel Support"]
    },
    {
      title: "Supply Chain Management (SCM) Systems",
      description: "Optimizing logistics and inventory.",
      icon: Truck,
      features: ["Inventory Tracking", "Supplier Management", "Logistics Optimization", "Real-time Visibility"]
    },
    {
      title: "Business Intelligence (BI) Tools",
      description: "Custom dashboards and reporting for data-driven decisions.",
      icon: BarChart,
      features: ["Custom Dashboards", "Advanced Analytics", "Data Mining", "Predictive Insights"]
    },
    {
      title: "Workflow Automation Platforms",
      description: "Automating repetitive tasks across departments.",
      icon: Workflow,
      features: ["Process Automation", "Approval Workflows", "Task Management", "Integration Hub"]
    },
    {
      title: "Legacy System Migration & Modernization",
      description: "Updating outdated systems for current needs.",
      icon: RefreshCcw,
      features: ["Data Migration", "System Upgrade", "Cloud Migration", "Zero Downtime"]
    },
    {
      title: "Custom B2B Portals & Platforms",
      description: "Secure, efficient digital interfaces for business partners.",
      icon: Users2,
      features: ["Partner Portals", "API Management", "Role-based Access", "Document Management"]
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
            Our Comprehensive Enterprise Software Capabilities
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

// Enterprise Software Tech Stack
const EnterpriseTechStack = () => {
  const enterpriseLanguages = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Language" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", category: "Framework" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Runtime" }
  ];

  const enterprisePlatforms = [
    { name: "SAP", icon: Factory, description: "Enterprise Resource Planning" },
    { name: "Oracle", icon: Database, description: "Database & Enterprise Applications" },
    { name: "Microsoft Dynamics", icon: Building2, description: "Business Applications" },
    { name: "Salesforce", icon: Handshake, description: "Customer Relationship Management" }
  ];

  const cloudPlatforms = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud" }
  ];

  const enterpriseTools = [
    { name: "Docker", icon: Container, description: "Containerization" },
    { name: "Kubernetes", icon: Boxes, description: "Container Orchestration" },
    { name: "Microservices", icon: Component, description: "Architecture Pattern" },
    { name: "Enterprise Databases", icon: Database, description: "Data Management" }
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
            Leveraging Robust Enterprise-Grade Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For reliability and performance at scale with proven enterprise solutions.
          </p>
        </motion.div>

        {/* Enterprise Languages & Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Enterprise Languages & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {enterpriseLanguages.map((tech, index) => (
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

        {/* Enterprise Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Enterprise Platforms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterprisePlatforms.map((platform, index) => {
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{platform.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cloud Platforms & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Cloud Platforms */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Cloud Platforms</h3>
            <div className="grid grid-cols-3 gap-4">
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <ImageWithFallback
                        src={platform.logo}
                        alt={platform.name}
                        className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{platform.name}</h4>
                    <p className="text-xs text-muted-foreground">{platform.category}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enterprise Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Enterprise Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {enterpriseTools.map((tool, index) => {
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

// Enterprise Software Case Studies
const EnterpriseCaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Manufacturing ERP Transformation",
      client: "MegaCorp Industries",
      description: "Complete ERP system overhaul for multinational manufacturing company with 50+ locations, streamlining operations and reducing costs by 30%",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop&auto=format",
      results: "30% cost reduction, 50% faster reporting",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "ERP Modernization, Multi-location Integration, Real-time Analytics"
    },
    {
      title: "Healthcare Enterprise Integration Platform",
      client: "HealthSystem Network",
      description: "Unified healthcare management system integrating patient records, billing, and compliance across 20+ hospitals with HIPAA-compliant security",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "95% compliance rating, 40% efficiency gain",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "HIPAA Compliance, System Integration, Workflow Automation"
    },
    {
      title: "Financial Services Legacy Modernization",
      client: "Premier Financial Group",
      description: "Migration of legacy banking systems to modern cloud-based architecture with enhanced security, compliance, and customer experience features",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "Zero downtime migration, 60% performance boost",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Legacy Migration, Cloud Architecture, Security Enhancement"
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
            Enterprise Solutions Driving Real Business Impact
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
                        <Building2 className="w-6 h-6 text-accent" />
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
const EnterpriseInlineCTA = () => {
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
                <Building2 className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Enterprise Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Streamline Your{" "}
              <span className="text-accent">Enterprise Operations?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our experts help you identify opportunities for digital transformation and build the right solutions.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Enterprise Software Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Enterprise Talent
const HireEnterpriseTalent = () => {
  const talentTypes = [
    {
      title: "Enterprise Architects",
      description: "System architects with enterprise-scale experience",
      icon: Building2,
      skills: ["System Architecture", "Enterprise Patterns", "Technology Strategy", "Integration Design"]
    },
    {
      title: "Senior Java Developers",
      description: "Expert Java developers for enterprise applications",
      icon: Code,
      skills: ["Spring Framework", "Enterprise Java", "Microservices", "REST APIs"]
    },
    {
      title: ".NET Enterprise Developers",
      description: "Microsoft technology stack specialists",
      icon: Terminal,
      skills: [".NET Core", "C#", "Azure", "Entity Framework"]
    },
    {
      title: "ERP Consultants",
      description: "Specialists in ERP implementation and customization",
      icon: Factory,
      skills: ["SAP", "Oracle ERP", "Business Process", "System Integration"]
    },
    {
      title: "DevOps Engineers",
      description: "Infrastructure and deployment automation experts",
      icon: CloudCog,
      skills: ["Kubernetes", "Docker", "CI/CD", "Cloud Platforms"]
    },
    {
      title: "Project Managers",
      description: "Enterprise project management specialists",
      icon: ClipboardList,
      skills: ["Agile", "Stakeholder Management", "Risk Management", "Change Management"]
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
            Build Your Enterprise Team with WDI Talent
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access highly experienced architects, project managers, and senior developers skilled in complex enterprise environments.
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
                <span>Hire Enterprise Talent</span>
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

// Enterprise Software FAQs
const EnterpriseFAQs = () => {
  const faqs = [
    {
      question: "How do you ensure data security and compliance for enterprise systems?",
      answer: "We implement comprehensive security frameworks including multi-layered encryption, role-based access controls, audit trails, and compliance with industry standards like SOC 2, GDPR, HIPAA, and PCI DSS. Our security approach includes regular penetration testing, vulnerability assessments, and adherence to enterprise security best practices. We also provide detailed compliance documentation and work with your security teams to meet specific regulatory requirements."
    },
    {
      question: "What is the typical timeline for enterprise software implementation?",
      answer: "Enterprise software timelines vary based on scope and complexity, typically ranging from 6-18 months. Simple ERP customizations may take 3-6 months, while comprehensive enterprise transformations can take 12-24 months. We use agile methodologies with phased delivery to provide value incrementally. Timeline factors include system complexity, integration requirements, data migration scope, user training needs, and change management requirements."
    },
    {
      question: "Do you provide post-implementation support and maintenance?",
      answer: "Yes, we offer comprehensive post-implementation support including 24/7 monitoring, regular maintenance updates, performance optimization, bug fixes, and feature enhancements. Our support packages include different service levels (bronze, silver, gold, platinum) to match your business requirements. We also provide ongoing training, documentation updates, and strategic consulting to help you maximize your enterprise software investment."
    },
    {
      question: "How do you integrate with existing legacy systems?",
      answer: "We have extensive experience in legacy system integration using various approaches: API development for modern connectivity, ETL processes for data synchronization, middleware solutions for system communication, and gradual migration strategies to minimize disruption. We assess your existing infrastructure, map data flows, and create integration architectures that preserve business continuity while enabling modernization. Our approach ensures minimal downtime and seamless data migration."
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
const EnterpriseFinalCTA = () => {
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
                <Building2 className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Digital Transformation</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accelerate Your Digital Transformation with{" "}
            <span className="text-accent">WDI's Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with us for custom enterprise software solutions that deliver efficiency, innovation, and a competitive edge.
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
                <span>Transform Your Enterprise Now</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              ERP Customization • CRM Development • Legacy Modernization
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

// Main Enterprise Software Solutions Page
export const EnterpriseSoftwareSolutions = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <EnterpriseHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <EnterpriseBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <EnterpriseProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <EnterpriseServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <EnterpriseTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <EnterpriseCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <EnterpriseInlineCTA />
      </section>
      
      {/* Hire Talent */}
      <section className="bg-background">
        <HireEnterpriseTalent />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <EnterpriseFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <EnterpriseFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};