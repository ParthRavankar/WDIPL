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
  HardDrive, Terminal, Branes, CircuitBoard, GitBranch, Cloudy, Key,
  PlugZap, Workflow as WorkflowIcon, Factory, Combine, BarChart3 as PresentationChart,
  FileBarChart, CircuitBoard as ChipIcon, Blocks, Construction, LockKeyhole,
  Timer, Flame, Scaling as ScaleIcon, GitCommit, RotateCw, Repeat as RepeatIcon,
  MonitorSpeaker, Gauge as MetricsIcon, AlertTriangle, TrendingDown, Wrench as ToolIcon,
  Cable, ArrowUpDown, Shuffle, GitPullRequest, PlugIcon, Waypoints, SendHorizontal
} from "lucide-react";

// Third-Party Integrations Hero Section
const IntegrationsHeroWithCTA = () => {
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
            {/* Integration Label */}
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
                Seamless Third-Party Integrations
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Connecting your disparate software systems and applications for unified data flow, automated workflows, and enhanced functionality.
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
                  <Link className="w-5 h-5 flex-shrink-0" />
                  <span>Streamline Your Systems</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Discuss Your Integration Needs</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Integration Systems visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Integration Ecosystem Diagram */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Central Integration Hub */}
                <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-accent to-purple-600 rounded-full border border-accent/30 shadow-2xl flex items-center justify-center mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Cog className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></div>
                </div>
                
                {/* Integration Systems - Positioned around the central hub */}
                <div className="relative">
                  {/* CRM System - Top Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -top-20 -left-20 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl border border-blue-400/30 shadow-lg p-4 text-center"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <Users className="w-8 h-8 text-white mx-auto mb-1" />
                    <div className="text-white text-xs font-medium">CRM</div>
                    <div className="text-white/70 text-xs">Salesforce</div>
                  </motion.div>
                  
                  {/* ERP System - Top Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute -top-20 -right-20 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-xl border border-green-400/30 shadow-lg p-4 text-center"
                    style={{ transform: 'translate(50%, -50%)' }}
                  >
                    <Factory className="w-8 h-8 text-white mx-auto mb-1" />
                    <div className="text-white text-xs font-medium">ERP</div>
                    <div className="text-white/70 text-xs">SAP</div>
                  </motion.div>
                  
                  {/* Payment Gateway - Bottom Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -bottom-20 -left-20 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl border border-yellow-400/30 shadow-lg p-4 text-center"
                    style={{ transform: 'translate(-50%, 50%)' }}
                  >
                    <CreditCard className="w-8 h-8 text-white mx-auto mb-1" />
                    <div className="text-white text-xs font-medium">Payment</div>
                    <div className="text-white/70 text-xs">Stripe</div>
                  </motion.div>
                  
                  {/* Marketing Automation - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="absolute -bottom-20 -right-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl border border-purple-400/30 shadow-lg p-4 text-center"
                    style={{ transform: 'translate(50%, 50%)' }}
                  >
                    <Mail className="w-8 h-8 text-white mx-auto mb-1" />
                    <div className="text-white text-xs font-medium">Marketing</div>
                    <div className="text-white/70 text-xs">Mailchimp</div>
                  </motion.div>
                  
                  {/* Cloud Services - Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="absolute left-0 top-1/2 w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg border border-indigo-400/30 shadow-lg p-3 text-center"
                    style={{ transform: 'translate(-100%, -50%)' }}
                  >
                    <Cloud className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">AWS</div>
                  </motion.div>
                  
                  {/* Legacy System - Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="absolute right-0 top-1/2 w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg border border-gray-400/30 shadow-lg p-3 text-center"
                    style={{ transform: 'translate(100%, -50%)' }}
                  >
                    <Database className="w-6 h-6 text-white mx-auto mb-1" />
                    <div className="text-white text-xs">Legacy</div>
                  </motion.div>
                </div>
                
                {/* Data Flow Arrows - Animated SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{top: '-100px', left: '-100px', width: 'calc(100% + 200px)', height: 'calc(100% + 200px)'}}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#E5195E" />
                    </marker>
                  </defs>
                  <g className="opacity-60">
                    {/* Bidirectional arrows between central hub and systems */}
                    <line x1="200" y1="180" x2="140" y2="120" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="180" x2="260" y2="120" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.2s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="180" x2="140" y2="240" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.4s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="180" x2="260" y2="240" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.6s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="180" x2="120" y2="180" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.8s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="180" x2="280" y2="180" stroke="#E5195E" strokeWidth="2" strokeDasharray="6,6" markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;-12" dur="3s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <ArrowRightLeft className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Automated
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

// Key Benefits of Integrations
const IntegrationBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Eliminate manual data entry and reduce errors."
    },
    {
      icon: Database,
      title: "Unified Data",
      description: "Single source of truth for improved insights and reporting."
    },
    {
      icon: Puzzle,
      title: "Enhanced Functionality",
      description: "Extend capabilities by leveraging existing tools."
    },
    {
      icon: TrendingUp,
      title: "Improved Efficiency",
      description: "Save time and resources, boosting productivity."
    },
    {
      icon: Scaling,
      title: "Scalability & Flexibility",
      description: "Future-proof your architecture for new connections."
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
            Why Integrate Your Systems with WDI?
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

// Integration Process
const IntegrationProcess = () => {
  const steps = [
    {
      title: "Discovery & System Analysis",
      description: "Comprehensive evaluation of existing systems, data structures, and integration requirements to develop optimal connectivity strategy.",
      icon: Search
    },
    {
      title: "API Design & Strategy",
      description: "Designing robust API architecture and integration patterns, selecting appropriate protocols and establishing data mapping strategies.",
      icon: Code
    },
    {
      title: "Development & Connector Building",
      description: "Building custom connectors, middleware solutions, and integration components using industry best practices and secure coding standards.",
      icon: Wrench
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing including unit tests, integration tests, performance testing, and data validation to ensure reliable connectivity.",
      icon: CheckCircle
    },
    {
      title: "Deployment & Monitoring",
      description: "Seamless deployment with real-time monitoring, error handling, and automated alerts to ensure continuous operation and data integrity.",
      icon: Activity
    },
    {
      title: "Support & Optimization",
      description: "Ongoing maintenance, performance optimization, troubleshooting, and enhancements to adapt to changing business requirements.",
      icon: Settings
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
            Our Strategic Approach to Seamless Integration
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

// Integration Services
const IntegrationServices = () => {
  const services = [
    {
      title: "CRM Integrations",
      description: "Salesforce, HubSpot, Zoho, Microsoft Dynamics.",
      icon: Users,
      features: ["Contact Sync", "Sales Pipeline", "Marketing Automation", "Custom Fields"]
    },
    {
      title: "ERP Integrations",
      description: "SAP, Oracle, NetSuite.",
      icon: Factory,
      features: ["Financial Data", "Inventory Management", "Order Processing", "Real-time Sync"]
    },
    {
      title: "Payment Gateway Integrations",
      description: "Stripe, PayPal, Square, custom solutions.",
      icon: CreditCard,
      features: ["Secure Transactions", "Recurring Billing", "Multi-currency", "Fraud Detection"]
    },
    {
      title: "Marketing Automation Integrations",
      description: "Mailchimp, Marketo, Pardot.",
      icon: Mail,
      features: ["Email Campaigns", "Lead Scoring", "Campaign Analytics", "Customer Segmentation"]
    },
    {
      title: "Cloud Service Integrations",
      description: "AWS, Azure, Google Cloud services.",
      icon: Cloud,
      features: ["Storage Services", "Computing Resources", "Database Sync", "Serverless Functions"]
    },
    {
      title: "Legacy System Integration",
      description: "Connecting modern applications with older systems.",
      icon: Database,
      features: ["Data Migration", "Protocol Translation", "Wrapper Services", "Gradual Modernization"]
    },
    {
      title: "Custom API Development for Integration",
      description: "Building bespoke connectors.",
      icon: Code,
      features: ["RESTful APIs", "GraphQL Endpoints", "Webhook Support", "Custom Protocols"]
    },
    {
      title: "Data Synchronization & Migration",
      description: "Ensuring consistent and accurate data across systems.",
      icon: RefreshCcw,
      features: ["Real-time Sync", "Batch Processing", "Data Validation", "Error Handling"]
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
            Our Comprehensive Integration Capabilities
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

// Integration Tech Stack
const IntegrationTechStack = () => {
  const protocols = [
    { name: "REST", icon: Globe, description: "RESTful API Standards" },
    { name: "SOAP", icon: Code, description: "Web Service Protocol" },
    { name: "GraphQL", icon: BarChart3, description: "Query Language" },
    { name: "Webhooks", icon: PlugZap, description: "Event-driven Integration" }
  ];

  const security = [
    { name: "OAuth", icon: Key, description: "Authorization Framework" },
    { name: "SAML", icon: Shield, description: "Single Sign-On" }
  ];

  const platforms = [
    { name: "MuleSoft", icon: Network, description: "Enterprise Service Bus" },
    { name: "Apache Camel", icon: Workflow, description: "Integration Framework" },
    { name: "Zapier", icon: Zap, description: "Automation Platform" },
    { name: "Workato", icon: Cog, description: "Integration Platform" }
  ];

  const languages = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Runtime" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Language" }
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
            Utilizing Robust Protocols and Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For reliable system connectivity and seamless data exchange.
          </p>
        </motion.div>

        {/* Protocols & Standards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Protocols & Standards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protocols.map((protocol, index) => {
              const IconComponent = protocol.icon;
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
                    <h4 className="font-semibold text-foreground mb-2">{protocol.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{protocol.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security & Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Security & Authentication</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {security.map((sec, index) => {
              const IconComponent = sec.icon;
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
                    <h4 className="font-semibold text-foreground mb-2">{sec.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sec.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Integration Platforms & Languages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Integration Platforms */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Integration Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => {
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

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Programming Languages</h3>
            <div className="grid grid-cols-3 gap-4">
              {languages.map((lang, index) => (
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
                        src={lang.logo}
                        alt={lang.name}
                        className="w-8 h-8 object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{lang.name}</h4>
                    <p className="text-xs text-muted-foreground">{lang.category}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Integration Case Studies
const IntegrationCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Multi-Platform Integration",
      client: "Retail Solutions Inc",
      description: "Integrated Shopify, Salesforce CRM, NetSuite ERP, and Mailchimp for unified customer experience and streamlined operations across multiple sales channels",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "80% reduction in manual work, 99.9% data accuracy",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Multi-platform Sync, Real-time Data, Automated Workflows"
    },
    {
      title: "Healthcare System Integration",
      client: "MedTech Solutions",
      description: "Connected legacy patient management system with modern EMR, billing software, and lab equipment for seamless healthcare delivery and compliance",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h-300&fit=crop&auto=format",
      results: "50% faster patient processing, HIPAA compliant",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Legacy Integration, HIPAA Compliance, Real-time Updates"
    },
    {
      title: "Financial Services API Integration",
      client: "FinanceFlow Corp",
      description: "Built comprehensive API integration connecting core banking system with payment gateways, credit scoring services, and regulatory reporting platforms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "Real-time transactions, 99.99% uptime",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "API Gateway, Real-time Processing, Security Standards"
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
            Systems That Speak: Our Integration Success Stories
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
                        <Link className="w-6 h-6 text-accent" />
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
const IntegrationInlineCTA = () => {
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
                <Link className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">System Integration</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Is Your Business Hampered by{" "}
              <span className="text-accent">Disconnected Systems?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss how seamless integrations can unlock your full potential.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Integration Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Integration Specialists
const HireIntegrationTalent = () => {
  const talentTypes = [
    {
      title: "Integration Specialists",
      description: "API development and system connectivity experts",
      icon: Link,
      skills: ["API Development", "System Architecture", "Data Mapping", "Protocol Integration"]
    },
    {
      title: "Middleware Developers",
      description: "Enterprise service bus and middleware specialists",
      icon: Network,
      skills: ["ESB Platforms", "Message Queuing", "Service Orchestration", "Data Transformation"]
    },
    {
      title: "API Architects",
      description: "REST, GraphQL, and API gateway specialists",
      icon: Code,
      skills: ["RESTful Design", "GraphQL", "API Gateways", "OpenAPI Specification"]
    },
    {
      title: "Data Integration Engineers",
      description: "ETL processes and data synchronization experts",
      icon: Database,
      skills: ["ETL Development", "Data Pipelines", "Real-time Sync", "Data Quality"]
    },
    {
      title: "Cloud Integration Experts",
      description: "Cloud-native integration specialists",
      icon: Cloud,
      skills: ["Serverless Functions", "Cloud APIs", "Event-driven Architecture", "Microservices"]
    },
    {
      title: "Legacy System Specialists",
      description: "Modernization and legacy integration experts",
      icon: RefreshCcw,
      skills: ["Legacy Modernization", "Protocol Translation", "System Migration", "Wrapper Services"]
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
            Need Expertise in System Integration?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hire our developers experienced in API development, middleware, and connecting diverse software platforms.
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
                <span>Hire Integration Specialists</span>
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

// Integration FAQs
const IntegrationFAQs = () => {
  const faqs = [
    {
      question: "What are the common challenges in third-party integrations?",
      answer: "Common integration challenges include data format mismatches, API rate limiting, authentication complexities, handling different data schemas, managing real-time vs batch synchronization, error handling and recovery, maintaining data consistency across systems, dealing with API versioning changes, and ensuring secure data transmission. We address these challenges through comprehensive planning, robust error handling, data validation, and implementing retry mechanisms and monitoring systems."
    },
    {
      question: "How do you ensure data security during integration?",
      answer: "We implement multiple security layers including end-to-end encryption for data in transit and at rest, OAuth 2.0 and API key authentication, secure API gateways, data masking for sensitive information, regular security audits and penetration testing, compliance with industry standards (SOC 2, GDPR, HIPAA), secure coding practices, input validation and sanitization, and comprehensive logging and monitoring. We also implement least-privilege access controls and secure data transformation processes."
    },
    {
      question: "Can you integrate with custom-built legacy systems?",
      answer: "Yes, we specialize in legacy system integration through various approaches: creating API wrappers around legacy systems, implementing middleware solutions for protocol translation, developing custom connectors for proprietary systems, using database-level integration where appropriate, implementing gradual modernization strategies, creating secure data bridges, and maintaining existing functionality while adding modern connectivity. We assess each legacy system individually to determine the best integration approach."
    },
    {
      question: "What's the difference between direct integration and using an iPaaS?",
      answer: "Direct integration involves point-to-point connections between specific systems, offering maximum customization and control but requiring more development effort and maintenance. iPaaS (Integration Platform as a Service) provides pre-built connectors and visual integration tools, faster implementation, managed infrastructure, and easier maintenance, but with less customization flexibility. We recommend direct integration for complex, unique requirements and iPaaS for standard business applications with common integration patterns. Often, a hybrid approach works best."
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
const IntegrationFinalCTA = () => {
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
                <Link className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">System Integration</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Connect Your Business Ecosystem with{" "}
            <span className="text-accent">WDI's Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Achieve unparalleled efficiency and data consistency by seamlessly integrating your essential software systems.
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
                <Workflow className="w-6 h-6 flex-shrink-0" />
                <span>Streamline Your Workflows</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              API Development • System Integration • Data Synchronization
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

// Main Third-Party Integrations Page
export const ThirdPartyIntegrations = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <IntegrationsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <IntegrationBenefits />
      </section>
      
      {/* Integration Process */}
      <section className="bg-card">
        <IntegrationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <IntegrationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <IntegrationTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <IntegrationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <IntegrationInlineCTA />
      </section>
      
      {/* Hire Talent */}
      <section className="bg-background">
        <HireIntegrationTalent />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <IntegrationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <IntegrationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};