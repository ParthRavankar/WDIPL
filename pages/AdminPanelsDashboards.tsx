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
  FileChartBar, Users as UsersIcon, Building2, ShieldIcon, FlexIcon
} from "lucide-react";

// Admin Panels & Dashboards Hero Section
const AdminHeroWithCTA = () => {
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
            {/* Admin Panel Label */}
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
                Intuitive Admin Panels & Dashboards
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Empower your team with custom, data-rich admin interfaces and dashboards for streamlined operations, reporting, and management.
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
                  <Monitor className="w-5 h-5 flex-shrink-0" />
                  <span>Request a Demo</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <TrendingUp className="w-4 h-4 flex-shrink-0" />
                <span>Optimize Your Operations</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Admin Dashboard visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Admin Dashboard Interface */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Dashboard Window */}
                <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-accent to-purple-600 rounded-2xl border border-accent/30 shadow-2xl p-6 mb-8">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">Admin Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-white/80" />
                      <UserCheck className="w-4 h-4 text-white/80" />
                      <Settings className="w-4 h-4 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Dashboard Content Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* Analytics Widget */}
                    <div className="bg-white/20 rounded-lg p-3 col-span-2">
                      <BarChart2 className="w-4 h-4 text-white/80 mb-2" />
                      <div className="h-8 bg-white/20 rounded flex items-end gap-1 p-1">
                        <div className="w-2 bg-white/60 rounded" style={{height: '60%'}}></div>
                        <div className="w-2 bg-white/80 rounded" style={{height: '80%'}}></div>
                        <div className="w-2 bg-white/60 rounded" style={{height: '40%'}}></div>
                        <div className="w-2 bg-white rounded" style={{height: '100%'}}></div>
                      </div>
                    </div>
                    
                    {/* Stats Widget */}
                    <div className="bg-white/20 rounded-lg p-3 flex flex-col items-center justify-center">
                      <UsersIcon className="w-4 h-4 text-white/80 mb-1" />
                      <span className="text-white text-xs font-medium">1,247</span>
                    </div>
                  </div>
                  
                  {/* Data Table Preview */}
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Table className="w-3 h-3 text-white/80" />
                      <span className="text-white text-xs">Data Management</span>
                    </div>
                    <div className="space-y-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="flex-1 h-2 bg-white/40 rounded"></div>
                          <div className="w-4 h-2 bg-white/60 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Feature Modules */}
                <div className="relative grid grid-cols-4 gap-4 mb-8">
                  {/* User Management */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                  >
                    <UsersIcon className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Users</div>
                  </motion.div>
                  
                  {/* Analytics */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                  >
                    <BarChart className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Analytics</div>
                  </motion.div>
                  
                  {/* Content Management */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400/30 shadow-lg p-4 text-center"
                  >
                    <FileText className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Content</div>
                  </motion.div>
                  
                  {/* Settings */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl border border-purple-400/30 shadow-lg p-4 text-center"
                  >
                    <Settings className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Settings</div>
                  </motion.div>
                </div>
                
                {/* Supporting Tools */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg border border-indigo-400/30 shadow-lg p-3 text-center"
                  >
                    <Shield className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Security</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg border border-pink-400/30 shadow-lg p-3 text-center"
                  >
                    <Database className="w-5 h-5 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Data</div>
                  </motion.div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-20px', width: '100%', height: '400px'}}>
                  <g className="opacity-30">
                    {/* Lines from Dashboard to modules */}
                    <line x1="200" y1="120" x2="120" y2="200" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="120" x2="160" y2="200" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="120" x2="240" y2="200" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="120" x2="280" y2="200" stroke="#E5195E" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-8" dur="3.5s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <BarChart className="w-3 h-3 mr-1" />
                  Data-Rich
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Intuitive
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

// Key Benefits of Custom Admin Panels
const AdminBenefits = () => {
  const benefits = [
    {
      icon: Workflow,
      title: "Streamlined Operations",
      description: "Centralized control for all business functions."
    },
    {
      icon: BarChart,
      title: "Actionable Insights",
      description: "Real-time data visualization for informed decisions."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Granular access controls and data protection."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Flexibility",
      description: "Adapts as your business processes evolve."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces for efficient team management."
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
            Why Choose a Bespoke Admin Panel from WDI?
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

// Admin Panel Development Process
const AdminProcess = () => {
  const steps = [
    {
      title: "Requirement Gathering & Workflow Analysis",
      description: "Deep dive into your business processes, user roles, and operational requirements to design the perfect admin solution.",
      icon: ClipboardList
    },
    {
      title: "UX/UI Design & Prototyping",
      description: "Creating intuitive, user-friendly interfaces with wireframes and interactive prototypes for efficient workflow management.",
      icon: Paintbrush2
    },
    {
      title: "Development & Backend Integration",
      description: "Building robust admin panels with secure backend systems, database integration, and real-time data processing capabilities.",
      icon: Code
    },
    {
      title: "Testing & Security Audit",
      description: "Comprehensive testing including functionality, performance, security vulnerabilities, and user acceptance testing.",
      icon: ShieldCheck
    },
    {
      title: "Deployment & Training",
      description: "Seamless deployment with comprehensive team training, documentation, and ongoing support for successful adoption.",
      icon: GraduationCap
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
            Our Approach to Building Your Operational Command Center
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

// Admin Panel Services
const AdminServices = () => {
  const services = [
    {
      title: "User & Content Management Systems",
      description: "For websites, apps, and platforms.",
      icon: UsersIcon,
      features: ["User Roles & Permissions", "Content Publishing", "Media Management", "Workflow Approval"]
    },
    {
      title: "Order & Inventory Management Dashboards",
      description: "Centralized control for eCommerce/logistics.",
      icon: PackageCheck,
      features: ["Real-time Inventory", "Order Processing", "Shipping Management", "Stock Alerts"]
    },
    {
      title: "Analytics & Reporting Dashboards",
      description: "Visualizing key performance indicators.",
      icon: BarChart,
      features: ["Custom Reports", "Data Visualization", "KPI Tracking", "Export Functions"]
    },
    {
      title: "Customer Relationship Management (CRM) Tools",
      description: "Custom interfaces for sales and support.",
      icon: Handshake,
      features: ["Contact Management", "Sales Pipeline", "Support Tickets", "Communication History"]
    },
    {
      title: "Financial & Billing Dashboards",
      description: "Managing transactions, invoices, and subscriptions.",
      icon: Receipt,
      features: ["Invoice Generation", "Payment Tracking", "Revenue Analytics", "Subscription Management"]
    },
    {
      title: "Internal Tools Development",
      description: "Bespoke applications for internal team productivity.",
      icon: Wrench,
      features: ["Custom Workflows", "Team Collaboration", "Task Management", "Resource Planning"]
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
            Our Specialized Admin & Dashboard Solutions
          </h2>
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

// Admin Panel Tech Stack
const AdminTechStack = () => {
  const frontends = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" }
  ];

  const backends = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python/Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "Ruby on Rails", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", category: "Backend" },
    { name: "PHP/Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Backend" }
  ];

  const databases = [
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" }
  ];

  const visualizationTools = [
    { name: "Chart.js", icon: BarChart2, description: "Interactive charts and graphs" },
    { name: "D3.js", icon: LineChart, description: "Advanced data visualization" }
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
            Building Powerful and Efficient Admin Interfaces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With reliable technologies that ensure performance, security, and scalability.
          </p>
        </motion.div>

        {/* Frontend Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Frontend Technologies</h3>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {frontends.map((tech, index) => (
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

        {/* Backend & Database */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Backend Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
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
                    <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                        <ImageWithFallback
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Database Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {databases.map((tech, index) => (
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
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visualization Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Data Visualization Tools</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visualizationTools.map((tool, index) => {
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
                  <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
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

// Admin Panel Case Studies
const AdminCaseStudies = () => {
  const caseStudies = [
    {
      title: "Healthcare Practice Management Dashboard",
      client: "MedCare Solutions",
      description: "Comprehensive admin panel for managing patient records, appointments, billing, and compliance reporting with HIPAA-compliant security features",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "75% reduction in admin time",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Patient Management, Appointment Scheduling, Billing Integration"
    },
    {
      title: "E-learning Platform Admin Console",
      client: "EduTech Pro",
      description: "Advanced admin dashboard for course management, student analytics, instructor tools, and automated grading systems with real-time progress tracking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
      results: "90% faster course deployment",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Course Management, Student Analytics, Automated Grading"
    },
    {
      title: "Multi-Store Inventory Management System",
      client: "RetailChain Inc",
      description: "Centralized admin panel for managing inventory across 50+ retail locations with real-time stock monitoring, automated reordering, and sales analytics",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "60% improvement in stock accuracy",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Multi-location Inventory, Automated Reordering, Sales Analytics"
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
            Streamlined Operations with WDI-Built Admin Panels
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
                        <Monitor className="w-6 h-6 text-accent" />
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
const AdminInlineCTA = () => {
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
                <Workflow className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Operational Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Streamline Your{" "}
              <span className="text-accent">Business Operations?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's design an admin panel that empowers your team and optimizes workflows.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Request a Custom Dashboard Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire UI/UX Designers
const HireDesigners = () => {
  const designerTypes = [
    {
      title: "UI/UX Designers",
      description: "Specialists in intuitive admin interface design",
      icon: Palette,
      skills: ["User Experience Design", "Interface Design", "Wireframing", "Prototyping"]
    },
    {
      title: "Dashboard Designers",
      description: "Experts in data visualization and dashboard layouts",
      icon: BarChart,
      skills: ["Data Visualization", "Dashboard Design", "Information Architecture", "User Research"]
    },
    {
      title: "Interaction Designers",
      description: "Focused on user interactions and workflow optimization",
      icon: MousePointer,
      skills: ["Interaction Design", "User Flow Design", "Usability Testing", "Accessibility Design"]
    },
    {
      title: "Product Designers",
      description: "End-to-end design for complex admin systems",
      icon: Briefcase,
      skills: ["Product Strategy", "Design Systems", "User Testing", "Cross-platform Design"]
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
            Need UI/UX Expertise for Your Admin Panel?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our designers specialize in creating intuitive and functional interfaces for complex dashboards and internal tools.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {designerTypes.map((type, index) => {
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
                <Palette className="w-5 h-5 flex-shrink-0" />
                <span>Hire UI/UX Designers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <div className="inline-flex items-center gap-2">
                <FileText className="w-5 h-5 flex-shrink-0" />
                <span>View Profiles</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Admin Panel FAQs
const AdminFAQs = () => {
  const faqs = [
    {
      question: "Can you integrate our admin panel with existing systems?",
      answer: "Absolutely! We specialize in creating admin panels that seamlessly integrate with your existing databases, APIs, CRM systems, and third-party tools. Our integration approach includes careful data mapping, secure API connections, and real-time synchronization to ensure your admin panel works harmoniously with your current technology stack while maintaining data integrity and security."
    },
    {
      question: "How do you ensure data security for internal tools?",
      answer: "Security is paramount in our admin panel development. We implement multi-layered security including role-based access controls, encrypted data transmission, secure authentication (including multi-factor authentication), regular security audits, and compliance with industry standards like GDPR, HIPAA, or SOC 2. All sensitive data is encrypted both in transit and at rest, with comprehensive audit trails for all user actions."
    },
    {
      question: "What is the importance of UX in admin panel design?",
      answer: "Great UX in admin panels is crucial for productivity and user adoption. Poor UX leads to errors, inefficiency, and user frustration. We focus on intuitive navigation, clear information hierarchy, efficient workflows, and user-friendly interfaces that reduce training time and increase accuracy. Good admin panel UX can improve operational efficiency by 40-70% and significantly reduce user errors and support requests."
    },
    {
      question: "Do you provide training for our staff on using the new dashboard?",
      answer: "Yes, we provide comprehensive training and support packages. This includes hands-on training sessions for different user roles, detailed documentation, video tutorials, and ongoing support during the initial rollout period. We also offer train-the-trainer programs so your internal team can support new users, and we're available for additional training as your team grows or when new features are added."
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
const AdminFinalCTA = () => {
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
                <Monitor className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Operational Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Empower Your Team with{" "}
            <span className="text-accent">WDI's Custom Admin Panels</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your internal operations with efficient, data-driven dashboards and management systems.
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
                <TrendingUp className="w-6 h-6 flex-shrink-0" />
                <span>Optimize Your Business Today</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Custom Admin Panels • Data Dashboards • User Management Systems
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

// Main Admin Panels & Dashboards Page
export const AdminPanelsDashboards = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <AdminHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <AdminBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <AdminProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <AdminServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <AdminTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <AdminCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <AdminInlineCTA />
      </section>
      
      {/* Hire Designers */}
      <section className="bg-background">
        <HireDesigners />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <AdminFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <AdminFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};