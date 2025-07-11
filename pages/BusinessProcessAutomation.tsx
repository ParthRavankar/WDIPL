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
  Deployment, HardDriveIcon, CloudIcon, MonitorIcon, AlertCircle,
  Scatter3D, ScanSearch, Regex, BrainCircuit, Microscope, FlaskConicalIcon,
  Calculator, LineChartIcon, TestTubes, Binary, FlaskRound, Atom,
  Crystal, Telescope, Radar, ScanLine, Crosshair, ScanFace, AlignHorizontalJustifyStart,
  Hash as HashIcon, Regex as RegexIcon, Languages as LanguagesIcon, Leaf,
  TrendingUpIcon, FlaskIcon, CloudUpload, Laptop, Building2, PersonStanding
} from "lucide-react";

// Business Process Automation Hero Section
const BusinessProcessAutomationHero = () => {
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
            {/* Solutions Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/70 text-sm font-medium">Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Business Process Automation
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Streamline your operations, reduce manual errors, and boost productivity by automating key business processes with intelligent solutions.
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
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Get a Free Consultation</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 flex-shrink-0" />
                  <span>Discover Our Automation Solutions</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Automation Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Automation Workflow Scene */}
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
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Automation Workflow */}
                  <div className="relative mb-8">
                    {/* Workflow Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="text-center mb-6"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">Automated Workflow</h3>
                      <div className="flex items-center justify-center gap-4">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          <Cog className="w-3 h-3 mr-1" />
                          RPA Active
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          <Bot className="w-3 h-3 mr-1" />
                          AI Enabled
                        </Badge>
                      </div>
                    </motion.div>
                    
                    {/* Workflow Steps Visualization */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="relative"
                    >
                      {/* Workflow Steps */}
                      <div className="space-y-4">
                        {[
                          { step: "Input", icon: Download, status: "complete", delay: 1.4 },
                          { step: "Process", icon: Cog, status: "active", delay: 1.6 },
                          { step: "Validate", icon: Shield, status: "pending", delay: 1.8 },
                          { step: "Output", icon: Upload, status: "pending", delay: 2.0 }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className="flex items-center gap-4"
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                              item.status === 'complete' 
                                ? 'bg-green-500/20 border-green-500/30' 
                                : item.status === 'active'
                                ? 'bg-blue-500/20 border-blue-500/30'
                                : 'bg-gray-500/20 border-gray-500/30'
                            }`}>
                              <item.icon className={`w-5 h-5 ${
                                item.status === 'complete' 
                                  ? 'text-green-400' 
                                  : item.status === 'active'
                                  ? 'text-blue-400'
                                  : 'text-gray-400'
                              }`} />
                              {item.status === 'active' && (
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="absolute -inset-1 bg-blue-400/20 rounded-full"
                                ></motion.div>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${
                                  item.status === 'complete' 
                                    ? 'text-green-300' 
                                    : item.status === 'active'
                                    ? 'text-blue-300'
                                    : 'text-gray-400'
                                }`}>
                                  {item.step}
                                </span>
                                {item.status === 'complete' && (
                                  <CheckCircle className="w-4 h-4 text-green-400" />
                                )}
                                {item.status === 'active' && (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                  >
                                    <Loader className="w-4 h-4 text-blue-400" />
                                  </motion.div>
                                )}
                              </div>
                              
                              <div className={`w-full h-1 rounded-full mt-2 ${
                                item.status === 'complete' 
                                  ? 'bg-green-500/30' 
                                  : item.status === 'active'
                                  ? 'bg-blue-500/30'
                                  : 'bg-gray-500/30'
                              }`}>
                                {item.status === 'active' && (
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-full bg-blue-400 rounded-full"
                                  ></motion.div>
                                )}
                                {item.status === 'complete' && (
                                  <div className="h-full w-full bg-green-400 rounded-full"></div>
                                )}
                              </div>
                            </div>
                            
                            {i < 3 && (
                              <div className="absolute left-5 top-12 w-0.5 h-4 bg-gray-600"></div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Automation Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-xs font-mono">Automation Metrics</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        Optimized
                      </Badge>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '92%' }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-xs">Efficiency</span>
                        </div>
                        <span className="text-green-300 text-xs font-mono">92%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '98%' }}
                        transition={{ duration: 1, delay: 2.6 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 text-xs">Accuracy</span>
                        </div>
                        <span className="text-blue-300 text-xs font-mono">98%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '87%' }}
                        transition={{ duration: 1, delay: 2.8 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-purple-300 text-xs">Cost Reduction</span>
                        </div>
                        <span className="text-purple-300 text-xs font-mono">87%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Efficiency & Cost Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">70%</div>
                      <div className="text-white text-xs">Time Saved</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">99%</div>
                      <div className="text-white text-xs">Error Reduction</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Automation Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <Bot className="w-6 h-6 text-orange-400" />
                  </div>
                </motion.div>
                
                {/* Automation Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Active</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* BPA Status Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-accent text-sm font-bold">BPA</div>
                      <div className="text-white text-xs">Live</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Automation Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Cog className="w-3 h-3 mr-1" />
                  Automated
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Bot className="w-3 h-3 mr-1" />
                  Intelligent
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Efficient
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// The Challenge We Solve
const BusinessProcessAutomationChallenge = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              Eliminating Inefficiency: The Path to Operational Excellence
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-500/5 border-red-500/20 p-8 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">The Problem</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Manual, repetitive tasks often lead to human errors, slow down operations, increase costs, and prevent employees from focusing on higher-value activities.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>High error rates in manual processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Slow processing times and bottlenecks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Expensive operational overhead</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Employees trapped in repetitive tasks</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-green-500/5 border-green-500/20 p-8 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Our Solution</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>WDI helps businesses identify, analyze, and automate their critical processes. We leverage advanced technologies like RPA, AI, and custom software to create intelligent automation solutions that drive efficiency, accuracy, and significant cost savings.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Intelligent automation with RPA and AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Dramatic reduction in processing times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Significant cost savings and ROI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Employees freed for strategic work</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What's Included in This Solution
const BusinessProcessAutomationIncludes = () => {
  const includes = [
    {
      icon: Search,
      title: "Process Discovery & Analysis",
      description: "Identifying bottlenecks and opportunities for automation."
    },
    {
      icon: Target,
      title: "Automation Strategy & Roadmapping",
      description: "Defining the scope, technology, and implementation plan."
    },
    {
      icon: Bot,
      title: "RPA Implementation",
      description: "Deploying Robotic Process Automation for repetitive tasks."
    },
    {
      icon: Code,
      title: "Custom Workflow Development",
      description: "Building bespoke software to automate complex, unique processes."
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Incorporating intelligence for decision-making and data processing."
    },
    {
      icon: Network,
      title: "System Integration",
      description: "Connecting disparate systems for seamless data flow."
    },
    {
      icon: BarChart3,
      title: "Monitoring & Optimization",
      description: "Ensuring automated processes run smoothly and continuously improving them."
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
            Our Business Process Automation Services
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {includes.slice(0, 6).map((item, index) => {
            const IconComponent = item.icon;
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Seventh item centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group max-w-sm"
          >
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {includes[6].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {includes[6].description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Key Benefits & Outcomes
const BusinessProcessAutomationBenefits = () => {
  const benefits = [
    {
      icon: Gauge,
      title: "Increased Efficiency",
      description: "Accelerate workflows and reduce task completion times."
    },
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Lower operational expenses by minimizing manual labor."
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      description: "Eliminate human errors, leading to higher data quality."
    },
    {
      icon: Shield,
      title: "Enhanced Compliance",
      description: "Ensure consistent adherence to regulations and policies."
    },
    {
      icon: TrendingUp,
      title: "Boosted Productivity",
      description: "Free up employees for strategic and creative work."
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
            The Tangible Impact of Intelligent Automation
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

// Our Process for Business Process Automation
const BusinessProcessAutomationProcess = () => {
  const steps = [
    {
      title: "Assess & Identify",
      description: "Analyze existing processes to pinpoint automation opportunities.",
      icon: Search
    },
    {
      title: "Design & Plan", 
      description: "Develop the automation strategy, define scope, and select technologies.",
      icon: Target
    },
    {
      title: "Develop & Configure",
      description: "Build and configure automation solutions (RPA bots, custom software).",
      icon: Code
    },
    {
      title: "Test & Refine",
      description: "Rigorously test automated workflows to ensure accuracy and robustness.",
      icon: Shield
    },
    {
      title: "Deploy & Implement",
      description: "Integrate and launch automated processes within your systems.",
      icon: Rocket
    },
    {
      title: "Monitor & Optimize",
      description: "Continuously track performance and refine processes for maximum efficiency.",
      icon: BarChart3
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
            Our Automation Journey: From Concept to Efficiency
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

// Who Benefits from This Solution
const BusinessProcessAutomationAudience = () => {
  const audiences = [
    {
      icon: Factory,
      title: "High-Volume Task Businesses",
      description: "With high volumes of repetitive, rule-based tasks."
    },
    {
      icon: Target,
      title: "Error-Prone Operations",
      description: "Struggling with data entry errors or slow processing times."
    },
    {
      icon: DollarSign,
      title: "Cost-Conscious Organizations",
      description: "Seeking to reduce operational costs and reallocate resources."
    },
    {
      icon: Users,
      title: "Key Departments",
      description: "HR, Finance, Operations, or Customer Service departments."
    },
    {
      icon: Building,
      title: "Digital Transformation Enterprises",
      description: "Aiming for digital transformation and greater operational agility."
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
            Ideal For...
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {audiences.slice(0, 3).map((audience, index) => {
            const IconComponent = audience.icon;
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
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second row with remaining audiences */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
        >
          {audiences.slice(3).map((audience, index) => {
            const IconComponent = audience.icon;
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
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
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

// Case Studies
const BusinessProcessAutomationCaseStudies = () => {
  const caseStudies = [
    {
      title: "Automated Invoice Processing",
      client: "Logistics Company",
      description: "Reduced invoice processing time by 70% for a logistics company, eliminating manual errors and improving cash flow management through intelligent document processing and automated approval workflows.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format",
      results: "70% time reduction, zero errors",
      engagement: "Invoice automation success",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Customer Onboarding Workflow Automation",
      client: "Financial Services Firm",
      description: "Streamlined onboarding for a financial firm, cutting the process duration by 50% while improving compliance and customer satisfaction through automated document verification and KYC processes.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "50% process duration reduction",
      engagement: "Customer onboarding optimization",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "HR Process Automation Suite",
      client: "Manufacturing Enterprise",
      description: "Automated employee onboarding, payroll processing, and compliance reporting for a manufacturing company, reducing HR administrative overhead by 60% and improving employee experience significantly.",
      image: "https://images.unsplash.com/photo-1565514158740-3011dbf5b2ed?w=400&h=300&fit=crop&auto=format",
      results: "60% admin overhead reduction",
      engagement: "HR transformation success",
      gradient: "from-purple-500/20 to-pink-500/20"
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
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8">
            Operations Transformed Through Automation
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
                        <Cog className="w-6 h-6 text-accent" />
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
                    <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${study.gradient} p-4 border border-white/10`}>
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
                    <div className="flex gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
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

// Mid-Page Lead Capture CTA
const BusinessProcessAutomationInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-blue-500 to-green-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Cog className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Process Automation</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Automate Your Business for{" "}
              <span className="text-accent">Peak Performance?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover how intelligent automation can revolutionize your operations.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Search className="w-6 h-6 flex-shrink-0" />
                <span>Get Your Automation Assessment</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const BusinessProcessAutomationFAQs = () => {
  const faqs = [
    {
      question: "What types of processes are best suited for automation?",
      answer: "The best candidates for automation are repetitive, rule-based processes with high volume and predictable patterns: Data entry and validation tasks, invoice processing and accounts payable/receivable, customer onboarding and KYC processes, report generation and distribution, inventory management and order processing, and HR processes like payroll and employee onboarding. Processes with clear business rules, frequent execution, high error rates, or significant manual effort provide the greatest ROI. We evaluate factors like process complexity, data quality, exception handling requirements, and integration needs to determine automation feasibility and potential impact."
    },
    {
      question: "What's the difference between RPA and custom automation?",
      answer: "RPA (Robotic Process Automation) and custom automation serve different purposes: RPA uses software robots to mimic human interactions with existing applications, ideal for processes that work with multiple systems without APIs, require no system changes, and need quick deployment. Custom automation involves building tailored software solutions with direct system integration, API development, and purpose-built workflows. RPA is faster to implement but may be less robust, while custom automation provides more flexibility and scalability. We often recommend hybrid approaches: RPA for quick wins and immediate ROI, custom automation for long-term strategic processes, and integration between both for comprehensive automation coverage."
    },
    {
      question: "How long does it take to implement a BPA solution?",
      answer: "Implementation timelines vary based on complexity and scope: Simple RPA implementations: 4-8 weeks for basic process automation, Medium complexity projects: 8-16 weeks for multi-system integrations, Complex enterprise automation: 16-24 weeks for comprehensive workflow overhauls. Our phased approach includes: Discovery and analysis (2-4 weeks), solution design and planning (2-3 weeks), development and configuration (4-12 weeks), testing and refinement (2-4 weeks), deployment and training (1-2 weeks), and post-implementation optimization (ongoing). We prioritize quick wins and incremental value delivery, often implementing automation in phases to demonstrate ROI early while building toward comprehensive automation coverage."
    },
    {
      question: "How do you measure the ROI of automation?",
      answer: "We measure automation ROI through comprehensive metrics: Quantitative benefits include time savings (hours reduced per process), cost reduction (labor and operational savings), error reduction (quality improvements), throughput increase (volume processing capability), and compliance improvements (audit and regulatory benefits). Qualitative benefits include employee satisfaction, customer experience enhancement, and strategic capability development. Our ROI calculation considers: implementation costs, ongoing maintenance expenses, training and change management costs, and both direct and indirect benefits. Typical automation projects achieve 200-400% ROI within 12-18 months. We provide detailed ROI projections during planning and track actual performance post-implementation to ensure projected benefits are realized."
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
const BusinessProcessAutomationFinalCTA = () => {
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
                <Cog className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Smart Automation</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Automate Smart, Grow Faster{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Let WDI empower your business with intelligent automation solutions that drive efficiency, reduce costs, and free up your team for what truly matters.
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
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <span>Schedule a Free Consultation</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Discovery • Strategy • Implementation • Testing • Deployment • Optimization
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

// Main Business Process Automation Page
export const BusinessProcessAutomation = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <BusinessProcessAutomationHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <BusinessProcessAutomationChallenge />
      </section>
      
      {/* What's Included */}
      <section className="bg-card">
        <BusinessProcessAutomationIncludes />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <BusinessProcessAutomationBenefits />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <BusinessProcessAutomationProcess />
      </section>
      
      {/* Target Audience */}
      <section className="bg-background">
        <BusinessProcessAutomationAudience />
      </section>
      
      {/* Case Studies */}
      <section className="bg-card">
        <BusinessProcessAutomationCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <BusinessProcessAutomationInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <BusinessProcessAutomationFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <BusinessProcessAutomationFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};