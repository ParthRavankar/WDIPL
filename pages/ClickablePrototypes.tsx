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
  CheckCircle, Smartphone, Tablet, Monitor, Code, Shield, Zap, Users, Star, 
  ArrowRight, ChevronRight, Clock, TrendingUp, Database, Globe, Layers, 
  Target, Layout, Rocket, Bug, Brush, Lock, RefreshCcw, ShieldCheck,
  MessageSquare, Heart, GraduationCap, ShoppingCart, Truck, Bolt, Palette, Tv,
  DollarSign, Stethoscope, BookOpen, Play, Package, Wifi, Activity, Map, Network,
  UserPlus, Award, Cpu, Settings, Sparkles, Lightbulb, Handshake, MonitorIcon,
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
  FileCode, Layers as LayersIcon, Smartphone as MobileIcon, Forward, Rewind,
  Pen, Move, SquareStack, MousePointer2, Grid, Ruler, Compass, Wand2, Paintbrush,
  TestTube, FlaskConical, Focus, Beaker, UserCheck2, Microscope as TestIcon,
  UserCog, Group, Accessibility, Contrast, Type, Frame, PenTool, Dribbble,
  Eraser, Crop, Scissors, Image, ImageIcon, Hash, Artboard, Blend, Swatch,
  Shapes, PaintBucket, EyeDropper, Pipette, Layers as LayerIcon, Vector,
  MousePointer as ClickIcon, PlayCircle, Hand, TouchpadOff, Vibrate, Route, Menu
} from "lucide-react";

// Clickable Prototypes Hero Section
const PrototypesHeroWithCTA = () => {
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
            {/* Prototypes Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Design & Experience</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Interactive Clickable Prototypes
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Visualize and test your digital product idea before development, ensuring flawless user flows and gathering invaluable feedback.
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
                  <PlayCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Test Your Idea Now</span>
                </div>
              </ShimmerButton>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span>Request a Prototype Demo</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side with Prototype Interaction Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Hand Holding Tablet with Prototype */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Tablet Device with Prototype */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-800 rounded-2xl p-4 mx-auto max-w-md shadow-2xl"
                >
                  {/* Tablet Frame */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between mb-4 text-white/70 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <span>9:41 AM</span>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-2 bg-white/50 rounded-sm"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Prototype Interface */}
                    <div className="space-y-4">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="h-12 bg-gradient-to-r from-accent to-purple-500 rounded-lg flex items-center px-4"
                      >
                        <div className="w-6 h-6 bg-white/30 rounded flex items-center justify-center">
                          <Menu className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-white font-medium">App Prototype</div>
                        </div>
                        <div className="w-6 h-6 bg-white/30 rounded flex items-center justify-center">
                          <Search className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* Interactive Elements */}
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 p-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                        >
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">User Dashboard</div>
                            <div className="text-gray-400 text-xs">View analytics</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 }}
                          className="h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 p-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                        >
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">Settings</div>
                            <div className="text-gray-400 text-xs">Configure preferences</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                          className="h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                        >
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">Reports</div>
                            <div className="text-gray-400 text-xs">Generate insights</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="pt-4"
                      >
                        <button className="w-full h-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg text-white font-medium hover:from-accent/90 hover:to-accent/70 transition-all">
                          Get Started
                        </button>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hand Holding Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="absolute -bottom-8 -right-8 transform rotate-12"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Hand className="w-8 h-8 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* User Flow Arrows */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="absolute -top-8 -left-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Route className="w-4 h-4" />
                    <span>User Flow</span>
                  </div>
                  <div className="space-y-1">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-0.5 bg-accent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ x: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="w-6 h-0.5 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ x: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-10 h-0.5 bg-green-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <ClickIcon className="w-3 h-3 mr-1" />
                  Interactive
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <TestTube className="w-3 h-3 mr-1" />
                  Testable
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Rapid
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Clickable Prototypes
const PrototypeBenefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Validate Ideas Early",
      description: "Test concepts with real users before significant investment."
    },
    {
      icon: Zap,
      title: "Iterate Rapidly",
      description: "Quick, cost-effective design changes based on feedback."
    },
    {
      icon: Route,
      title: "Clarify User Flows",
      description: "Ensure intuitive navigation and interaction."
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Provide a tangible vision for all parties involved."
    },
    {
      icon: Shield,
      title: "Reduce Development Risk",
      description: "Identify and fix issues at the design stage."
    },
    {
      icon: DollarSign,
      title: "Save Costs",
      description: "Avoid expensive rework by getting it right early."
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
            Why Prototype Before You Build?
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

// Prototyping Process
const PrototypingProcess = () => {
  const steps = [
    {
      title: "Concept & Wireframing",
      description: "Starting with basic sketches and wireframes to establish the foundation and core functionality of your digital product idea.",
      icon: Grid
    },
    {
      title: "Design Screens",
      description: "Creating detailed visual designs for each screen, incorporating your brand identity, user interface elements, and visual hierarchy.",
      icon: Palette
    },
    {
      title: "Prototype Assembly (Interactions)",
      description: "Connecting screens with interactive elements, animations, and transitions to create a realistic, clickable user experience.",
      icon: MousePointer2
    },
    {
      title: "Usability Testing",
      description: "Testing the prototype with real users to gather feedback on usability, navigation flow, and overall user experience effectiveness.",
      icon: TestTube
    },
    {
      title: "Feedback & Refinement",
      description: "Iterating on the design based on user feedback and stakeholder input to perfect the user experience before development begins.",
      icon: RefreshCcw
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
            Our Process for Bringing Your Idea to Life
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

// Prototyping Services
const PrototypingServices = () => {
  const services = [
    {
      title: "Low-Fidelity Prototypes",
      description: "Quick, basic functional mockups.",
      icon: Grid,
      features: ["Wireframe-based", "Core Functionality", "Rapid Testing", "Concept Validation"]
    },
    {
      title: "High-Fidelity Prototypes",
      description: "Pixel-perfect, interactive simulations.",
      icon: Palette,
      features: ["Realistic Design", "Brand Integration", "Detailed Interactions", "Production-Ready"]
    },
    {
      title: "User Flow Prototyping",
      description: "Mapping out complete user journeys.",
      icon: Route,
      features: ["Journey Mapping", "Flow Optimization", "Path Analysis", "Navigation Testing"]
    },
    {
      title: "Micro-Interaction Prototyping",
      description: "Detailing specific animations and transitions.",
      icon: Sparkles,
      features: ["Animation Design", "Transition Effects", "Hover States", "Loading States"]
    },
    {
      title: "Prototype for User Testing",
      description: "Creating testable versions for user feedback.",
      icon: TestTube,
      features: ["Test-Ready", "Feedback Collection", "Analytics Integration", "A/B Testing"]
    },
    {
      title: "Prototype for Investor Demos",
      description: "Impressive, interactive showcases for fundraising.",
      icon: Rocket,
      features: ["Polished Presentation", "Key Features", "Compelling Story", "Investment-Ready"]
    },
    {
      title: "Prototype for Developer Handoff",
      description: "Clear interactive specifications for engineering.",
      icon: Code2,
      features: ["Technical Specs", "Interaction Details", "Component Library", "Development Guide"]
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
            Our Specialized Prototyping Capabilities
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

        {/* Last service card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-8"
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

// Prototyping Tools
const PrototypingTools = () => {
  const tools = [
    { name: "Figma", icon: Figma, category: "Design & Prototype", color: "orange" },
    { name: "Adobe XD", icon: Palette, category: "Design & Prototype", color: "purple" },
    { name: "Sketch", icon: PenTool, category: "Design Tool", color: "blue" },
    { name: "InVision", icon: Eye, category: "Prototyping", color: "pink" },
    { name: "Principle", icon: PlayCircle, category: "Animation", color: "green" },
    { name: "ProtoPie", icon: MousePointer2, category: "Advanced Prototyping", color: "red" }
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
            Prototyping Tools We Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utilizing industry-leading tools to create realistic and testable prototypes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const colorClasses = {
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30"
            };
            
            return (
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
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${colorClasses[tool.color as keyof typeof colorClasses] || 'bg-accent/20 text-accent border-accent/30'}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Prototyping Case Studies
const PrototypingCaseStudies = () => {
  const caseStudies = [
    {
      title: "SaaS Dashboard Prototype Validation",
      client: "TechStart Inc.",
      description: "Created interactive prototype that validated user workflows before development, saving 40% in development time and preventing major UX issues.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "40% time saved, UX issues prevented",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: "Dashboard Prototype, User Testing, Workflow Validation"
    },
    {
      title: "Mobile App Investor Demo",
      client: "HealthTech Startup",
      description: "Developed high-fidelity clickable prototype that helped secure $2M funding by demonstrating app functionality and user experience to investors.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "$2M funding secured",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: "Mobile Prototype, Investor Demo, High-Fidelity Design"
    },
    {
      title: "E-commerce Flow Optimization",
      client: "Retail Solutions",
      description: "Prototyped new checkout flow that improved conversion rates by 35% when implemented, validated through extensive user testing with the prototype.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "35% conversion rate improvement",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: "Flow Optimization, User Testing, Conversion Improvement"
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
            Prototypes That Led to Successful Products
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
                        <PlayCircle className="w-6 h-6 text-accent" />
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
const PrototypingInlineCTA = () => {
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
                <PlayCircle className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Clickable Prototyping</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Curious How a Prototype Can{" "}
              <span className="text-accent">Save You Time and Money?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss your idea and how a clickable prototype can bring it to life.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageCircle className="w-6 h-6 flex-shrink-0" />
                <span>Book a Free Prototype Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire UI/UX Designers for Prototypes
const HirePrototypeDesigners = () => {
  const designerTypes = [
    {
      title: "Prototype Specialists",
      description: "Experts in creating interactive, testable prototypes",
      icon: PlayCircle,
      skills: ["Interactive Design", "User Flow Mapping", "Prototype Testing", "Stakeholder Demos"]
    },
    {
      title: "UX Researchers",
      description: "Specialists in validating prototypes with users",
      icon: TestTube,
      skills: ["User Testing", "Feedback Analysis", "Usability Studies", "Research Design"]
    },
    {
      title: "Interaction Designers",
      description: "Crafting engaging micro-interactions and animations",
      icon: Sparkles,
      skills: ["Micro-interactions", "Animation Design", "Transition Effects", "Interactive States"]
    },
    {
      title: "Visual Designers",
      description: "Creating high-fidelity, pixel-perfect prototypes",
      icon: Palette,
      skills: ["Visual Design", "Brand Integration", "High-Fidelity Mockups", "Design Systems"]
    },
    {
      title: "Mobile Prototype Designers",
      description: "Specialists in mobile app prototyping",
      icon: Smartphone,
      skills: ["Mobile UX", "Touch Interactions", "Responsive Design", "App Store Guidelines"]
    },
    {
      title: "Web Prototype Designers",
      description: "Experts in web application prototyping",
      icon: Globe,
      skills: ["Web UX", "Responsive Prototypes", "Browser Compatibility", "Web Standards"]
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
            Need Expertise in Interactive Prototyping?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our designers specialize in creating realistic and testable prototypes for web and mobile applications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Hire UI/UX Designers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <div className="inline-flex items-center gap-2">
                <Eye className="w-5 h-5 flex-shrink-0" />
                <span>View Portfolios</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Prototyping FAQs
const PrototypingFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between a wireframe, mockup, and prototype?",
      answer: "A wireframe is a basic structural blueprint showing layout and functionality without visual design. A mockup is a static high-fidelity visual representation with colors, typography, and branding. A prototype is an interactive simulation that allows users to click through and experience the actual user flow. Wireframes focus on structure, mockups on appearance, and prototypes on interaction and user experience validation."
    },
    {
      question: "How long does it take to create a clickable prototype?",
      answer: "Timeline depends on complexity and fidelity level. A low-fidelity prototype can take 1-2 weeks, while high-fidelity prototypes typically require 2-4 weeks. Factors affecting timeline include number of screens, complexity of interactions, level of detail required, and rounds of feedback and iteration. We provide detailed project timelines during the initial consultation based on your specific requirements."
    },
    {
      question: "Can a prototype be used for user testing?",
      answer: "Absolutely! Prototypes are ideal for user testing as they provide a realistic experience without full development costs. We create test-ready prototypes that allow users to interact with key features and workflows. This enables us to gather valuable feedback on usability, navigation, and user satisfaction before development begins, significantly reducing the risk of costly changes later in the process."
    },
    {
      question: "What information do you need to start a prototype?",
      answer: "To begin prototyping, we need your project goals, target audience information, key features and functionality requirements, user flow descriptions, and any existing brand guidelines or visual references. If available, competitor examples, user personas, and business requirements help us create more targeted prototypes. We'll conduct a discovery session to gather all necessary information and ensure the prototype aligns with your vision and objectives."
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
const PrototypingFinalCTA = () => {
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
                <PlayCircle className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Clickable Prototypes</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Validate Your Vision with a{" "}
            <span className="text-accent">WDI Clickable Prototype</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Reduce risk and ensure product-market fit by visualizing and testing your ideas before coding begins.
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
                <span>Start Your Prototyping Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Interactive Prototypes • User Testing • Rapid Iteration
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

// Main Clickable Prototypes Page
export const ClickablePrototypes = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <PrototypesHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <PrototypeBenefits />
      </section>
      
      {/* Prototyping Process */}
      <section className="bg-card">
        <PrototypingProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <PrototypingServices />
      </section>
      
      {/* Tools */}
      <section className="bg-card">
        <PrototypingTools />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <PrototypingCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <PrototypingInlineCTA />
      </section>
      
      {/* Hire Designers */}
      <section className="bg-background">
        <HirePrototypeDesigners />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <PrototypingFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <PrototypingFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};