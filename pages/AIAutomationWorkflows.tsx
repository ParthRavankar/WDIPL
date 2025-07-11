import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Brain, Target, Shield, TrendingUp, DollarSign, CheckCircle, Zap,
  ArrowRight, Clock, Lightbulb, Search, BarChart3, Settings, Layers,
  Users, Eye, FileText, MessageSquare, Award, HelpCircle, Send,
  Calendar, Rocket, Code, Database, Globe, Smartphone, Monitor,
  Building, Briefcase, GraduationCap, UserPlus, MapPin, Network,
  GitBranch, Activity, Compass, Workflow, Route, Puzzle, Star,
  RefreshCw, AlertTriangle, Lock, ThumbsUp, Handshake, Gauge,
  PieChart, LineChart, BarChart2, TrendingDown, Cpu, CloudCog,
  Factory, Cog, Wrench, Package, Boxes, Container, Component,
  Repeat, Analytics, Percent, Hash, Grid, Scale, Filter, Table,
  FileChartBar, CircuitBoard, HardDrive, Terminal, GitCommit,
  RotateCcw, MonitorSpeaker, Cable, ArrowUpDown, Shuffle, PlugIcon,
  Waypoints, SendHorizontal, FileCode, Layers as LayersIcon,
  Forward, Rewind, Pen, Move, SquareStack, MousePointer2, Ruler,
  Wand2, Paintbrush, TestTube, FlaskConical, Focus, Beaker, UserCheck2,
  Microscope as TestIcon, UserCog, Group, Accessibility, Contrast,
  Type, Frame, PenTool, Dribbble, Eraser, Crop, Scissors, Image,
  ImageIcon, Artboard, Blend, Swatch, Shapes, PaintBucket, EyeDropper,
  Pipette, Vector, MousePointer as ClickIcon, PlayCircle, Hand,
  TouchpadOff, Vibrate, Menu, Home, Mail, Phone, BookOpen, Edit3,
  Mic, Video, Users2, Tablet, Layout, Square, Circle, Triangle,
  Hexagon, Plus, Minus, X, Check, ChevronRight, ChevronDown, Bot,
  Server, ArrowDownRight, ArrowUpRight, Loader, Repeat2, Play,
  FastForward, SkipForward, ChevronLeft, ChevronUp, MoreHorizontal,
  MoreVertical, Maximize, Minimize, ExternalLink, Download, Upload,
  Share, Copy, Trash, Archive, Bookmark, Flag, Tag, Link2, Unlink,
  Scissors as CutIcon, ClipboardCopy, ClipboardPaste, RotateCw,
  FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Maximize2, Minimize2,
  Truck, Camera
} from "lucide-react";

// AI Automation & Workflows Hero Section
const AutomationHeroWithCTA = () => {
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
            {/* AI Automation Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">AI & ML</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                AI-Powered Automation & Workflow Solutions
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Revolutionize your operations by embedding Artificial Intelligence into workflows, automating repetitive tasks, and enhancing efficiency across your organization.
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
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  <span>Automate Your Business</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  <span>Request a Demo</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with AI Automation Flowchart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* AI Automation Flowchart Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Automation Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* AI Automation Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-center mb-6"
                    >
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Workflow className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Automation Workflow</h3>
                      </div>
                      <div className="w-full h-1 bg-gradient-to-r from-accent via-blue-500 to-green-500 rounded-full"></div>
                    </motion.div>
                    
                    {/* Workflow Steps */}
                    <div className="space-y-4">
                      {/* Input Step */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="relative"
                      >
                        <div className="h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 p-3 flex items-center gap-3">
                          <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                            <Database className="w-2 h-2 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Data Input</div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 border border-blue-400 border-t-transparent rounded-full"
                          ></motion.div>
                        </div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-3 h-3 text-accent" />
                        </div>
                      </motion.div>
                      
                      {/* AI Processing Step */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="relative"
                      >
                        <div className="h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-3 flex items-center gap-3">
                          <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
                            <Brain className="w-2 h-2 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">AI Processing</div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          ></motion.div>
                        </div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-3 h-3 text-accent" />
                        </div>
                      </motion.div>
                      
                      {/* Automation Step */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="relative"
                      >
                        <div className="h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 p-3 flex items-center gap-3">
                          <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                            <Cog className="w-2 h-2 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Automation</div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 text-green-400"
                          >
                            <Cog className="w-3 h-3" />
                          </motion.div>
                        </div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-3 h-3 text-accent" />
                        </div>
                      </motion.div>
                      
                      {/* Output Step */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="relative"
                      >
                        <div className="h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 p-3 flex items-center gap-3">
                          <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                            <CheckCircle className="w-2 h-2 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Output</div>
                          </div>
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-orange-400 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Efficiency Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-green-500/20 rounded-lg border border-accent/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-medium">Efficiency Gain</div>
                          <div className="text-accent text-xs">vs Manual Process</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">85%</div>
                          <div className="text-xs text-white/70">Time Saved</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Robot/Automation Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-green-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Bot className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Workflow Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Workflow className="w-4 h-4" />
                    <span>Smart Workflow</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-accent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* People Working More Efficiently */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <Users className="w-10 h-10 text-green-400" />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400/30 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Automation Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Intelligent
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Cog className="w-3 h-3 mr-1" />
                  Automated
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

// Key Benefits of AI Automation
const AutomationBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Reduce manual labor and operational overhead."
    },
    {
      icon: Target,
      title: "Increased Accuracy",
      description: "Minimize human error in repetitive tasks."
    },
    {
      icon: Zap,
      title: "Accelerated Processes",
      description: "Speed up workflows and improve turnaround times."
    },
    {
      icon: TrendingUp,
      title: "Enhanced Productivity",
      description: "Free up human capital for strategic work."
    },
    {
      icon: Scale,
      title: "Scalability",
      description: "Automate processes to handle growing demands effortlessly."
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
            Drive Efficiency and Innovation with AI Automation
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        {/* Second row with remaining benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
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

// AI Automation Process
const AutomationProcess = () => {
  const steps = [
    {
      title: "Process Audit & Identification of Opportunities",
      description: "Analyzing existing workflows to identify repetitive tasks and automation opportunities for maximum impact.",
      icon: Search
    },
    {
      title: "AI Solution Design",
      description: "Designing intelligent automation solutions tailored to your specific business processes and requirements.",
      icon: PenTool
    },
    {
      title: "Custom Model Development (if needed)",
      description: "Developing custom AI models when off-the-shelf solutions don't meet your unique automation needs.",
      icon: Brain
    },
    {
      title: "Integration & Deployment",
      description: "Seamlessly integrating automation solutions into your existing systems and deploying them across your organization.",
      icon: PlugIcon
    },
    {
      title: "Performance Monitoring & Optimization",
      description: "Continuously monitoring automation performance and optimizing workflows for maximum efficiency and accuracy.",
      icon: BarChart3
    },
    {
      title: "Training & Change Management",
      description: "Providing comprehensive training and change management support to ensure successful adoption across your team.",
      icon: GraduationCap
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
            Our Strategic Approach to Workflow Automation
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

// AI Automation Services
const AutomationServices = () => {
  const services = [
    {
      title: "Intelligent Process Automation (IPA)",
      description: "Automating complex, decision-based workflows.",
      icon: Brain,
      features: ["Decision Trees", "Cognitive Automation", "Process Mining", "Workflow Intelligence"]
    },
    {
      title: "Robotic Process Automation (RPA) with AI",
      description: "Enhancing RPA bots with AI for cognitive tasks.",
      icon: Bot,
      features: ["Smart Bots", "Cognitive RPA", "Exception Handling", "Adaptive Automation"]
    },
    {
      title: "Document Processing Automation",
      description: "Extracting and processing data from unstructured documents.",
      icon: FileText,
      features: ["OCR Processing", "Data Extraction", "Document Classification", "Content Analysis"]
    },
    {
      title: "AI-Driven Customer Service Automation",
      description: "Intelligent routing, self-service portals, chatbot integration.",
      icon: MessageSquare,
      features: ["Smart Routing", "Chatbot Integration", "Self-Service", "Customer Analytics"]
    },
    {
      title: "Supply Chain Optimization",
      description: "AI for demand forecasting, inventory management, logistics.",
      icon: Truck,
      features: ["Demand Forecasting", "Inventory Management", "Logistics Optimization", "Supply Planning"]
    },
    {
      title: "Automated Data Entry & Validation",
      description: "Minimizing manual data handling.",
      icon: Database,
      features: ["Data Validation", "Quality Checks", "Automated Entry", "Error Detection"]
    },
    {
      title: "AI for Quality Control",
      description: "Automated inspection and anomaly detection.",
      icon: CheckCircle,
      features: ["Automated Inspection", "Anomaly Detection", "Quality Metrics", "Defect Analysis"]
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
            Our Specialized AI-Powered Automation Solutions
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-muted">
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-muted">
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

// AI Automation Tech Stack
const AutomationTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "TensorFlow", icon: Brain, category: "ML Framework", color: "orange" },
    { name: "PyTorch", icon: Cpu, category: "ML Framework", color: "red" },
    { name: "Azure AI", icon: CloudCog, category: "Cloud AI", color: "blue" },
    { name: "AWS AI Services", icon: Server, category: "Cloud AI", color: "yellow" },
    { name: "Google AI Platform", icon: Globe, category: "Cloud AI", color: "green" },
    { name: "UiPath", icon: Bot, category: "RPA Platform", color: "purple" },
    { name: "Automation Anywhere", icon: Cog, category: "RPA Platform", color: "indigo" },
    { name: "OCR Technologies", icon: Eye, category: "Document Processing", color: "teal" },
    { name: "NLP Libraries", icon: MessageSquare, category: "Text Processing", color: "pink" },
    { name: "Computer Vision", icon: Camera, category: "Image Processing", color: "cyan" },
    { name: "Workflow Engines", icon: Workflow, category: "Process Management", color: "lime" }
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
            AI Automation Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leveraging advanced AI and automation tools for maximum impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
              indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
              teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
              pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
              cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
              lime: "bg-lime-500/20 text-lime-400 border-lime-500/30"
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
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl p-4 text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${colorClasses[tech.color as keyof typeof colorClasses] || 'bg-accent/20 text-accent border-accent/30'}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// AI Automation Case Studies
const AutomationCaseStudies = () => {
  const caseStudies = [
    {
      title: "Healthcare Document Automation",
      client: "Regional Healthcare Network",
      description: "Implemented AI-powered document processing for patient records and insurance claims, reducing processing time by 80% and improving accuracy to 99.5%, saving $1.2M annually.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "80% faster processing, $1.2M annual savings",
      engagement: "4-month automation implementation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Manufacturing Quality Control Automation",
      client: "Automotive Parts Manufacturer",
      description: "Deployed AI-powered visual inspection system with robotic automation, achieving 99.8% defect detection accuracy and reducing quality control costs by 65%.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format",
      results: "99.8% accuracy, 65% cost reduction",
      engagement: "6-month automation project",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Financial Services RPA Implementation",
      client: "Investment Management Firm",
      description: "Automated complex financial reporting and compliance workflows using intelligent RPA, reducing manual effort by 90% and eliminating human errors in regulatory reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "90% manual effort reduction, zero errors",
      engagement: "5-month RPA deployment",
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
            Real-World Impact of AI-Powered Automation
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
              <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-accent" />
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {study.engagement}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300 h-auto py-3"
                    >
                      <span className="text-sm font-medium">VIEW FULL CASE STUDY</span>
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
const AutomationInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">AI Automation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Identify Your{" "}
              <span className="text-accent">Automation Opportunities</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover how AI can transform your most repetitive and time-consuming tasks.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Search className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Automation Assessment</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire AI/Automation Engineers
const HireAutomationEngineers = () => {
  const engineerTypes = [
    {
      title: "AI Automation Engineers",
      description: "Specialists in designing and implementing AI-powered automation solutions",
      icon: Brain,
      skills: ["AI Integration", "Process Automation", "Machine Learning", "Workflow Design"]
    },
    {
      title: "RPA Developers",
      description: "Experts in robotic process automation and bot development",
      icon: Bot,
      skills: ["RPA Development", "Bot Creation", "Process Mining", "Exception Handling"]
    },
    {
      title: "Intelligent Process Automation Specialists",
      description: "Professionals who combine RPA with AI for cognitive automation",
      icon: Workflow,
      skills: ["IPA Design", "Cognitive Automation", "Decision Trees", "Process Intelligence"]
    },
    {
      title: "Document Processing Engineers",
      description: "Specialists in automated document processing and data extraction",
      icon: FileText,
      skills: ["OCR Implementation", "Data Extraction", "Document Classification", "Content Analysis"]
    },
    {
      title: "Quality Control Automation Engineers",
      description: "Experts in automated inspection and quality assurance systems",
      icon: CheckCircle,
      skills: ["Computer Vision", "Defect Detection", "Quality Metrics", "Inspection Automation"]
    },
    {
      title: "Supply Chain Automation Specialists",
      description: "Professionals who optimize supply chain operations through AI automation",
      icon: Truck,
      skills: ["Supply Chain Optimization", "Demand Forecasting", "Inventory Management", "Logistics Automation"]
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
            Access Expert AI Automation Engineers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialists in RPA, intelligent process automation, and workflow optimization with AI.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {engineerTypes.map((type, index) => {
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
                <Card className="bg-card/20 backdrop-blur-md border-white/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-muted">
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
                <UserPlus className="w-5 h-5 flex-shrink-0" />
                <span>Hire AI Automation Engineers</span>
              </div>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/20 text-muted-foreground hover:bg-muted hover:text-foreground"
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

// AI Automation FAQs
const AutomationFAQs = () => {
  const faqs = [
    {
      question: "What types of processes are best suited for AI automation?",
      answer: "AI automation works best for repetitive, rule-based processes with high volume and predictable patterns. Ideal candidates include data entry, document processing, customer service routing, quality control inspection, invoice processing, and compliance reporting. Processes with clear inputs/outputs, minimal exceptions, and measurable outcomes typically yield the highest ROI. We conduct process assessments to identify automation opportunities that deliver maximum value."
    },
    {
      question: "How do you measure the ROI of AI automation?",
      answer: "We measure ROI through multiple metrics including time savings (hours reduced), cost savings (labor and operational costs), accuracy improvements (error reduction), productivity gains (throughput increase), and compliance benefits. Our ROI calculation considers implementation costs, ongoing maintenance, and quantifiable benefits over 12-36 months. Most clients see 200-400% ROI within the first year, with payback periods typically ranging from 6-18 months depending on process complexity and volume."
    },
    {
      question: "What's the difference between RPA and IPA?",
      answer: "RPA (Robotic Process Automation) handles rule-based, structured tasks by mimicking human actions on screens and systems. IPA (Intelligent Process Automation) combines RPA with AI technologies like machine learning, natural language processing, and computer vision to handle unstructured data and make decisions. While RPA follows predefined rules, IPA can learn, adapt, and handle exceptions. IPA is ideal for complex workflows requiring cognitive capabilities, document understanding, or decision-making based on variable inputs."
    },
    {
      question: "Do you provide training for staff after automation implementation?",
      answer: "Yes, comprehensive training and change management are integral parts of our automation implementation. We provide role-specific training for system administrators, process owners, and end-users. This includes hands-on workshops, documentation, troubleshooting guides, and ongoing support. Our change management approach ensures smooth adoption, addresses concerns, and helps teams adapt to new workflows. We also offer train-the-trainer programs to build internal capabilities for scaling automation across your organization."
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
const AutomationFinalCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">AI Automation</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Automate for Growth:{" "}
            <span className="text-accent">Intelligent Workflows by WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Drive unprecedented efficiency, accuracy, and scalability by integrating AI into your core business processes.
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
                <span>Transform Your Workflows</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Process Automation • AI Integration • Workflow Optimization
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main AI Automation & Workflows Page
export const AIAutomationWorkflows = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <AutomationHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <AutomationBenefits />
      </section>
      
      {/* Automation Process */}
      <section className="bg-card">
        <AutomationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <AutomationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <AutomationTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <AutomationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <AutomationInlineCTA />
      </section>
      
      {/* Hire Engineers */}
      <section className="bg-background">
        <HireAutomationEngineers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <AutomationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <AutomationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};