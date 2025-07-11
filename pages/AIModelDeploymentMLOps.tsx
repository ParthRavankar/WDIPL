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
  ArrowRight, Clock, Heart, Lightbulb, Search, BarChart3, Settings,
  Users, Eye, FileText, MessageSquare, Award, HelpCircle, Send,
  Calendar, Rocket, Code, Database, Globe, Smartphone, Monitor,
  Building, Briefcase, GraduationCap, UserPlus, MapPin, Network,
  GitBranch, Activity, Compass, Workflow, Route, Puzzle, Star,
  RefreshCw, AlertTriangle, Lock, ThumbsUp, Handshake, Gauge,
  PieChart, LineChart, BarChart2, TrendingDown, Cpu, CloudCog,
  Factory, Cog, Wrench, Package, Boxes, Container, Component,
  Repeat, Analytics, Percent, Hash, Grid, Scale, Filter, Table,
  FileChartBar, CircuitBoard, HardDrive, Terminal, GitCommit,
  RotateCw, MonitorSpeaker, Cable, ArrowUpDown, Shuffle, PlugIcon,
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
  Scissors as CutIcon, ClipboardCopy, ClipboardPaste, RotateCw as RotateIcon,
  FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Maximize2, Minimize2,
  Truck, Camera, Sparkles, Layers, Scan, Megaphone, MessageCircle,
  Cloud, Cpu as ProcessorIcon, Mic2, Feather, Palette, Aperture,
  Waves, Zap as Lightning, Lightbulb as BulbIcon, Layers3, Boxes as CubeIcon,
  Bot as RobotIcon, MessageSquare as ChatIcon, Headphones, UserCheck,
  ShoppingCart, CreditCard, Volume2, Languages, Smile, GitPullRequest,
  Deployment, HardDriveIcon, CloudIcon, MonitorIcon, AlertCircle
} from "lucide-react";

// AI Model Deployment & MLOps Hero Section
const MLOpsHeroWithCTA = () => {
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
            {/* MLOps Label */}
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
                AI Model Deployment & MLOps
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Ensuring your Machine Learning models are seamlessly deployed, efficiently managed, and continuously optimized for peak performance in production environments.
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
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <span>Optimize Your ML Operations</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Request MLOps Consultation</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with MLOps Pipeline Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* MLOps CI/CD Pipeline Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main MLOps Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-6 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* MLOps Dashboard Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* Dashboard Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-semibold">MLOps Dashboard</h3>
                          <p className="text-gray-400 text-xs">Model Performance Monitoring</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Live</span>
                      </div>
                    </motion.div>
                    
                    {/* CI/CD Pipeline Stages */}
                    <div className="space-y-4 mb-6">
                      {/* Data Ingestion */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Database className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Data Pipeline</div>
                            <div className="text-blue-300 text-xs">Processing new data</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-green-400">✓</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Model Training */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Model Training</div>
                            <div className="text-purple-300 text-xs">Epoch 85/100</div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 text-purple-400"
                          >
                            <Loader className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      {/* Model Validation */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Validation</div>
                            <div className="text-green-300 text-xs">Accuracy: 94.2%</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-green-400">✓</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Deployment */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Rocket className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Deployment</div>
                            <div className="text-orange-300 text-xs">Rolling out v2.1.3</div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-orange-400 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Performance Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="p-3 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg border border-accent/30">
                        <div className="text-accent text-lg font-bold">99.9%</div>
                        <div className="text-white text-xs">Uptime</div>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                        <div className="text-green-400 text-lg font-bold">12ms</div>
                        <div className="text-white text-xs">Latency</div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating MLOps Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <GitBranch className="w-6 h-6 text-blue-400" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Infrastructure Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Server className="w-4 h-4" />
                    <span>Infrastructure</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Model Performance Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <TrendingUp className="w-10 h-10 text-green-400" />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400/30 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* MLOps Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <GitBranch className="w-3 h-3 mr-1" />
                  CI/CD
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Activity className="w-3 h-3 mr-1" />
                  Monitoring
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Auto-scaling
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of MLOps & Model Management
const MLOpsBenefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Reliable Deployment",
      description: "Get models to production faster and more consistently."
    },
    {
      icon: Activity,
      title: "Continuous Performance",
      description: "Monitor, retrain, and update models to prevent drift."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Efficiency",
      description: "Manage complex ML pipelines at scale."
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Ensure model integrity, security, and compliance."
    },
    {
      icon: Zap,
      title: "Faster Iteration",
      description: "Accelerate experimentation and model improvement cycles."
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
            Why Robust MLOps is Crucial for Your AI Success
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

// MLOps Process
const MLOpsProcess = () => {
  const steps = [
    {
      title: "Model Assessment & Readiness",
      description: "Evaluating model architecture, performance metrics, and production readiness to ensure seamless deployment.",
      icon: Search
    },
    {
      title: "Infrastructure Setup & Containerization", 
      description: "Setting up scalable cloud infrastructure and containerizing models for consistent deployment across environments.",
      icon: Server
    },
    {
      title: "CI/CD for ML Models",
      description: "Implementing continuous integration and deployment pipelines specifically designed for machine learning workflows.",
      icon: GitBranch
    },
    {
      title: "Deployment & API Integration",
      description: "Deploying models to production environments and creating robust APIs for seamless integration with applications.",
      icon: Rocket
    },
    {
      title: "Monitoring & Alerting",
      description: "Setting up comprehensive monitoring systems to track model performance, data drift, and system health in real-time.",
      icon: Activity
    },
    {
      title: "Retraining & Versioning",
      description: "Implementing automated retraining pipelines and version control systems to maintain model accuracy over time.",
      icon: RefreshCw
    },
    {
      title: "Governance & Documentation",
      description: "Establishing governance frameworks and comprehensive documentation for model lifecycle management and compliance.",
      icon: FileText
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
            Our Strategic Approach to MLOps Excellence
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

// MLOps Services
const MLOpsServices = () => {
  const services = [
    {
      title: "MLOps Strategy & Implementation",
      description: "Building end-to-end operational pipelines.",
      icon: Target,
      features: ["Strategy Planning", "Pipeline Design", "Process Automation", "Best Practices"]
    },
    {
      title: "Model Deployment",
      description: "Deploying models to cloud (AWS SageMaker, Azure ML, GCP AI Platform) or on-premise.",
      icon: Rocket,
      features: ["Cloud Deployment", "On-premise Setup", "Container Orchestration", "API Development"]
    },
    {
      title: "Model Monitoring & Alerting",
      description: "Tracking performance, drift, and data integrity.",
      icon: Activity,
      features: ["Performance Tracking", "Drift Detection", "Real-time Alerts", "Health Monitoring"]
    },
    {
      title: "Automated Retraining Pipelines",
      description: "Ensuring models adapt to new data.",
      icon: RefreshCw,
      features: ["Data Pipeline", "Auto-retraining", "Performance Triggers", "Version Control"]
    },
    {
      title: "Model Versioning & Experiment Tracking",
      description: "Managing multiple model iterations.",
      icon: GitBranch,
      features: ["Version Management", "Experiment Logging", "Model Registry", "Rollback Capabilities"]
    },
    {
      title: "Bias Detection & Explainability (XAI)",
      description: "Ensuring fair and transparent models.",
      icon: Shield,
      features: ["Bias Detection", "Model Explanations", "Fairness Metrics", "Transparency Reports"]
    },
    {
      title: "Cloud Infrastructure for ML",
      description: "Setting up scalable, cost-effective environments.",
      icon: Cloud,
      features: ["Infrastructure Setup", "Auto-scaling", "Cost Optimization", "Resource Management"]
    },
    {
      title: "Security & Compliance for ML Models",
      description: "Protecting data and model integrity.",
      icon: Lock,
      features: ["Data Security", "Model Protection", "Compliance Audits", "Access Control"]
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
            Our Specialized MLOps Capabilities
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
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

// MLOps Tech Stack
const MLOpsTechStack = () => {
  const technologies = [
    { name: "AWS SageMaker", icon: CloudCog, category: "ML Platform", color: "orange" },
    { name: "Azure ML", icon: Cloud, category: "ML Platform", color: "blue" },
    { name: "Google AI Platform", icon: Brain, category: "ML Platform", color: "green" },
    { name: "Kubeflow", icon: Container, category: "ML Orchestration", color: "blue" },
    { name: "MLflow", icon: GitBranch, category: "ML Lifecycle", color: "green" },
    { name: "Docker", icon: Package, category: "Containerization", color: "blue" },
    { name: "Kubernetes", icon: Boxes, category: "Orchestration", color: "blue" },
    { name: "TensorFlow Extended (TFX)", icon: Brain, category: "ML Pipeline", color: "orange" },
    { name: "Airflow", icon: Workflow, category: "Workflow Management", color: "green" },
    { name: "Prometheus", icon: Activity, category: "Monitoring", color: "orange" },
    { name: "Grafana", icon: BarChart3, category: "Visualization", color: "orange" },
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "Jenkins", icon: GitBranch, category: "CI/CD", color: "blue" },
    { name: "GitLab CI", icon: GitCommit, category: "CI/CD", color: "orange" }
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
            MLOps Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leveraging industry-leading platforms and tools for robust MLOps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const colorClasses = {
              blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
              orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30"
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

// MLOps Case Studies
const MLOpsCaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise ML Pipeline Optimization",
      client: "Financial Services Company",
      description: "Implemented comprehensive MLOps infrastructure reducing model deployment time by 80% and improving model performance monitoring, resulting in 99.9% uptime and 40% cost reduction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "80% faster deployment, 40% cost reduction",
      engagement: "4-month MLOps implementation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Automated Model Retraining System",
      client: "Healthcare Technology Platform",
      description: "Built automated retraining pipelines with drift detection, ensuring model accuracy above 95% and reducing manual intervention by 90% while maintaining regulatory compliance.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "95% accuracy maintained, 90% less manual work",
      engagement: "6-month MLOps project",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Multi-Cloud ML Infrastructure",
      client: "E-commerce Technology Giant",
      description: "Designed scalable multi-cloud MLOps architecture supporting 100+ models in production, achieving 99.99% availability and 60% improvement in resource utilization.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      results: "99.99% availability, 60% resource optimization",
      engagement: "8-month infrastructure project",
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
            Ensuring AI Performance in Production
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
                        <Activity className="w-6 h-6 text-accent" />
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
const MLOpsInlineCTA = () => {
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
                <Activity className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">MLOps Excellence</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Maximize the Value of{" "}
              <span className="text-accent">Your ML Models</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ensure your AI investments deliver continuous value with expert deployment and maintenance.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free MLOps Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire MLOps Engineers
const HireMLOpsEngineers = () => {
  const specialistTypes = [
    {
      title: "MLOps Engineers",
      description: "Specialists in deploying, monitoring, and maintaining production-grade ML models",
      icon: Rocket,
      skills: ["Model Deployment", "CI/CD Pipelines", "Infrastructure Management", "Performance Monitoring"]
    },
    {
      title: "ML Infrastructure Engineers",
      description: "Experts in building scalable infrastructure for machine learning workloads",
      icon: Server,
      skills: ["Cloud Architecture", "Container Orchestration", "Auto-scaling", "Resource Optimization"]
    },
    {
      title: "DevOps Engineers (ML Focus)",
      description: "DevOps specialists with expertise in machine learning deployment workflows",
      icon: GitBranch,
      skills: ["CI/CD Design", "Automation", "Version Control", "Deployment Strategies"]
    },
    {
      title: "ML Monitoring Specialists",
      description: "Experts in model performance monitoring and drift detection",
      icon: Activity,
      skills: ["Performance Monitoring", "Drift Detection", "Alerting Systems", "Model Analytics"]
    },
    {
      title: "Data Pipeline Engineers",
      description: "Specialists in building robust data pipelines for ML model training and inference",
      icon: Database,
      skills: ["Data Pipeline Design", "ETL Processes", "Data Quality", "Stream Processing"]
    },
    {
      title: "ML Security Engineers",
      description: "Experts in securing ML models and ensuring compliance in production environments",
      icon: Shield,
      skills: ["Model Security", "Data Protection", "Compliance Auditing", "Access Control"]
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
            Access Expert MLOps & ML Infrastructure Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialized engineers proficient in deploying, monitoring, and maintaining production-grade ML models.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {specialistTypes.map((type, index) => {
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
                <span>Hire MLOps Engineers</span>
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

// MLOps FAQs
const MLOpsFAQs = () => {
  const faqs = [
    {
      question: "What is \"model drift\" and how do you handle it?",
      answer: "Model drift occurs when a machine learning model's performance degrades over time due to changes in the underlying data distribution or relationships between variables. There are two main types: data drift (changes in input features) and concept drift (changes in the relationship between inputs and outputs). We handle drift through continuous monitoring systems that track statistical properties of incoming data, model performance metrics, and prediction distributions. Our automated systems detect drift using statistical tests, distance metrics, and performance thresholds, then trigger alerts and potentially automatic retraining workflows to maintain model accuracy."
    },
    {
      question: "How do you ensure data security for models in production?",
      answer: "We implement comprehensive security measures at multiple levels: data encryption in transit and at rest, secure API endpoints with authentication and authorization, network isolation using VPCs and firewalls, access control with role-based permissions, audit logging for all model interactions, and compliance with industry standards like GDPR, HIPAA, and SOC 2. We also employ techniques like differential privacy, federated learning where appropriate, and secure multi-party computation for sensitive data. Regular security audits, vulnerability assessments, and penetration testing ensure ongoing protection of your ML infrastructure and data."
    },
    {
      question: "What is the difference between DevOps and MLOps?",
      answer: "While DevOps focuses on software development and deployment, MLOps extends these practices to machine learning workflows with unique considerations: MLOps manages data pipelines alongside code, handles model versioning and experiment tracking, monitors model performance and data drift (not just system metrics), deals with non-deterministic outcomes and model retraining, requires specialized infrastructure for GPU/TPU workloads, and addresses ML-specific compliance and explainability requirements. MLOps also involves continuous training alongside continuous integration/deployment, and requires different tooling for model registries, feature stores, and ML-specific monitoring systems."
    },
    {
      question: "Can you help migrate existing models to a new MLOps platform?",
      answer: "Yes, we specialize in MLOps platform migrations and model modernization. Our migration process includes: comprehensive assessment of existing models, infrastructure, and workflows; compatibility analysis and gap identification; migration strategy development with minimal downtime; model containerization and standardization; data pipeline recreation and optimization; CI/CD pipeline setup for the new platform; performance testing and validation; team training on new tools and processes; and gradual rollout with fallback capabilities. We support migrations between major platforms (AWS SageMaker, Azure ML, Google AI Platform, on-premise to cloud, etc.) and ensure all model governance, monitoring, and compliance requirements are maintained throughout the transition."
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
const MLOpsFinalCTA = () => {
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
                <Activity className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">MLOps Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Seamless AI Deployment, Continuous Performance{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ensure your Machine Learning models are not just built, but also flawlessly integrated, monitored, and maintained in live environments.
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
                <span>Optimize Your AI Lifecycle</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Model Deployment • Performance Monitoring • Continuous Optimization
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

// Main AI Model Deployment & MLOps Page
export const AIModelDeploymentMLOps = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <MLOpsHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <MLOpsBenefits />
      </section>
      
      {/* MLOps Process */}
      <section className="bg-card">
        <MLOpsProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <MLOpsServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <MLOpsTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <MLOpsCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <MLOpsInlineCTA />
      </section>
      
      {/* Hire Engineers */}
      <section className="bg-background">
        <HireMLOpsEngineers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <MLOpsFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <MLOpsFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};