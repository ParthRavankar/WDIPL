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
  TrendingUpIcon, FlaskIcon, CloudUpload
} from "lucide-react";

// MVP & Startup Launch Packages Hero Section
const MVPStartupLaunchPackagesHero = () => {
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
                MVP & Startup Launch Packages
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Rapidly launch your innovative startup idea with a lean, functional Minimum Viable Product, validated for market fit.
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
                  <Star className="w-5 h-5 flex-shrink-0" />
                  <span>View Our Startup Success Stories</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Rocket Launch & MVP Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Rocket Launch Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main MVP Launch Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Rocket Launch Visualization */}
                  <div className="relative mb-8">
                    {/* Launch Trajectory */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="relative text-center"
                    >
                      <div className="space-y-6">
                        {/* Rocket */}
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.2, delay: 1.2 }}
                          className="flex justify-center"
                        >
                          <div className="relative">
                            <Rocket className="w-16 h-16 text-accent transform rotate-45" />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-400/30 rounded-full"
                            ></motion.div>
                            <motion.div
                              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400/30 rounded-full"
                            ></motion.div>
                          </div>
                        </motion.div>
                        
                        {/* Launch Path */}
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1.5 }}
                          className="flex justify-center"
                        >
                          <svg width="200" height="120" className="overflow-visible">
                            <motion.path
                              d="M 20 100 Q 100 20 180 40"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 2, delay: 1.5 }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E5195E" />
                                <stop offset="100%" stopColor="#60A5FA" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* MVP Milestones */}
                    <div className="absolute inset-0">
                      {[
                        { label: "Idea", position: { top: '80%', left: '10%' }, icon: Lightbulb },
                        { label: "MVP", position: { top: '50%', left: '40%' }, icon: Zap },
                        { label: "Launch", position: { top: '20%', right: '20%' }, icon: Rocket },
                        { label: "Growth", position: { top: '10%', right: '10%' }, icon: TrendingUp }
                      ].map((milestone, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 2.0 + i * 0.2 }}
                          className="absolute"
                          style={milestone.position}
                        >
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30 mb-1">
                              <milestone.icon className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-white text-xs">{milestone.label}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* MVP Development Progress */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-mono">MVP Development</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        Rapid Build
                      </Badge>
                    </div>
                    
                    {/* Development Phases */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 1, delay: 3.0 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-xs">Core Features</span>
                        </div>
                        <span className="text-green-300 text-xs font-mono">Complete</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '85%' }}
                        transition={{ duration: 1, delay: 3.2 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 text-xs">UI/UX Polish</span>
                        </div>
                        <span className="text-blue-300 text-xs font-mono">85%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '70%' }}
                        transition={{ duration: 1, delay: 3.4 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-orange-300 text-xs">Testing & QA</span>
                        </div>
                        <span className="text-orange-300 text-xs font-mono">70%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Launch Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.6 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">6-8</div>
                      <div className="text-white text-xs">Week Launch</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">60%</div>
                      <div className="text-white text-xs">Cost Savings</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Startup Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.8 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                </motion.div>
                
                {/* Growth Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.0 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Scaling</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* MVP Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 4.2 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-accent text-sm font-bold">MVP</div>
                      <div className="text-white text-xs">Ready</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Startup Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.4 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Rapid Launch
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Market Fit
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Growth Ready
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
const MVPStartupChallenge = () => {
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
              The Startup Dilemma: Launching Fast, Learning Faster
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
                    <p>Startups face immense pressure to get to market quickly, validate ideas with real users, and secure funding—all while managing limited resources and high risks. Building too much too soon can lead to wasted effort and missed opportunities.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Limited time and budget constraints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Uncertainty about market demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Risk of over-engineering before validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Difficulty attracting investors without proof of concept</span>
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
                    <p>WDI's MVP & Startup Launch Packages are designed to help you build the core functionality of your product efficiently, enabling rapid market entry, user feedback collection, and quick iteration to achieve product-market fit.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Lean development focused on core features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Rapid market validation and user feedback</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Cost-effective approach to minimize risk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Investor-ready product with proven traction</span>
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
const MVPStartupIncludes = () => {
  const includes = [
    {
      icon: Users2,
      title: "Discovery Workshop",
      description: "Collaborative sessions to define core features, user stories, and technical requirements."
    },
    {
      icon: Palette,
      title: "Lean UI/UX Design",
      description: "Essential user flows and interface design focused on core functionality."
    },
    {
      icon: Code,
      title: "Core Feature Development",
      description: "Building the critical features that define your MVP's value proposition."
    },
    {
      icon: Shield,
      title: "Quality Assurance & Testing",
      description: "Ensuring a stable, functional, and bug-free initial release."
    },
    {
      icon: CloudUpload,
      title: "Deployment & Hosting Setup",
      description: "Getting your product live and accessible to users."
    },
    {
      icon: Headphones,
      title: "Post-Launch Support (Initial)",
      description: "Basic support for critical issues during the initial feedback phase."
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Setting up tools to track user behavior and gather valuable insights."
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
            Key Components of Our MVP Launch Package
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
const MVPStartupBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Rapid Market Entry",
      description: "Get your product to users quickly to validate assumptions."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Validation",
      description: "Minimize initial investment by focusing only on essential features."
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Test your idea with real users before committing to full-scale development."
    },
    {
      icon: MessageSquare,
      title: "Early User Feedback",
      description: "Gather crucial insights for informed future development and pivoting."
    },
    {
      icon: TrendingUp,
      title: "Attract Investors",
      description: "Showcase a functional product and user traction to potential funders."
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
            Achieve Your Goals with Our MVP Solution
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

// Our Process for MVP & Startup Launch
const MVPStartupProcess = () => {
  const steps = [
    {
      title: "Ideation & Strategy",
      description: "Define your core value proposition and key features for the MVP.",
      icon: Lightbulb
    },
    {
      title: "Rapid Prototyping", 
      description: "Quickly build interactive prototypes for early user testing and feedback.",
      icon: Zap
    },
    {
      title: "Agile Development Sprints",
      description: "Focus on iterative development of the defined core features.",
      icon: Code
    },
    {
      title: "Testing & Refinement",
      description: "Ensure functionality and usability before launch.",
      icon: Shield
    },
    {
      title: "Launch & Monitor",
      description: "Deploy the MVP and set up analytics for performance tracking.",
      icon: Rocket
    },
    {
      title: "Analyze & Iterate",
      description: "Use feedback to inform the next phase of development.",
      icon: RefreshCw
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
            Our Streamlined MVP Development Process
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
const MVPStartupAudience = () => {
  const audiences = [
    {
      icon: Rocket,
      title: "New Startups",
      description: "With innovative product ideas seeking quick market validation."
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurs",
      description: "Looking to secure seed funding with a demonstrable product."
    },
    {
      icon: Building,
      title: "Established Companies",
      description: "Wanting to test new market concepts without large initial investments."
    },
    {
      icon: Lightbulb,
      title: "Visionary Individuals",
      description: "With a clear vision ready to take the first tangible step."
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {audiences.map((audience, index) => {
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
      </div>
    </section>
  );
};

// Case Studies
const MVPStartupCaseStudies = () => {
  const caseStudies = [
    {
      title: "Social Networking App MVP",
      client: "Social Media Startup",
      description: "Helped a startup launch their initial social networking app with core features, gaining 5,000 beta users in the first month and securing seed funding based on user traction and engagement metrics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      results: "5K beta users in first month",
      engagement: "Rapid user acquisition success",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "On-Demand Service Platform",
      client: "Logistics Startup",
      description: "Developed a lean MVP for an on-demand delivery platform that secured $1M in seed funding after successful launch validation, demonstrating clear product-market fit and scalable business model.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "$1M seed funding secured",
      engagement: "Post-launch validation success",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "FinTech Savings App",
      client: "Financial Technology Startup",
      description: "Built a minimal viable product for a personal finance app focused on automated savings, achieving 10,000 downloads and 75% user retention in the first 8 weeks after marketplace launch.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "10K downloads, 75% retention",
      engagement: "Strong market validation",
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
            Startups That Soared with Our MVPs
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
                        <Rocket className="w-6 h-6 text-accent" />
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
                        <Star className="w-3 h-3" />
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
const MVPStartupInlineCTA = () => {
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
                <Rocket className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">MVP Launch</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Launch Your{" "}
              <span className="text-accent">Innovative Product?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Start building your future with a clear, validated roadmap.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Target className="w-6 h-6 flex-shrink-0" />
                <span>Get Your Custom MVP Plan</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const MVPStartupFAQs = () => {
  const faqs = [
    {
      question: "What's the typical timeline for an MVP project?",
      answer: "Our typical MVP timeline ranges from 6-12 weeks, depending on complexity and feature scope. A basic MVP with 3-5 core features usually takes 6-8 weeks, while more complex MVPs with advanced functionality may take 10-12 weeks. Our process includes: Discovery & Strategy (1-2 weeks), Rapid Prototyping (1-2 weeks), Agile Development (4-6 weeks), Testing & Refinement (1-2 weeks), and Launch preparation (1 week). We work in 2-week sprints to ensure continuous progress and allow for feedback incorporation throughout the development process."
    },
    {
      question: "How do you help us define the core features for our MVP?",
      answer: "We use a structured approach to identify your MVP's core features: Discovery workshops to understand your vision and target users, competitive analysis to identify market gaps and opportunities, user story mapping to prioritize features based on user value, MoSCoW prioritization (Must have, Should have, Could have, Won't have), and validation techniques including user interviews and prototype testing. We help you focus on the 20% of features that will deliver 80% of the value, ensuring your MVP addresses the core problem while remaining lean and cost-effective. Our goal is to build the minimum feature set that proves your concept and attracts early users."
    },
    {
      question: "Can your MVP scale into a full product?",
      answer: "Absolutely! Our MVPs are designed with scalability in mind. We use: Modern, scalable technology stacks that can grow with your business, modular architecture that allows for easy feature additions, cloud infrastructure that scales automatically with user growth, clean code practices and documentation for future development, and database design that handles increasing data volumes. We provide a technical roadmap for scaling beyond the MVP, including performance optimization strategies, feature expansion plans, and infrastructure scaling recommendations. Many of our MVP clients have successfully scaled their products to serve thousands of users and secure significant funding rounds."
    },
    {
      question: "What's included in post-launch support for MVPs?",
      answer: "Our post-launch support includes: Critical bug fixes and performance issues resolution (30 days), basic technical support for deployment and hosting issues, analytics setup and initial data interpretation, user feedback collection and analysis guidance, and consultation on next development priorities. Extended support packages are available including: ongoing maintenance and updates, feature enhancement development, performance monitoring and optimization, user acquisition and retention analytics, and technical scaling guidance. We also offer product strategy sessions to help you interpret user feedback and plan your product roadmap based on real user data and market validation results."
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
const MVPStartupFinalCTA = () => {
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
                <Rocket className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">MVP Success</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accelerate Your Startup's Journey{" "}
            <span className="text-accent">with WDI</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From concept to launch, we provide the expertise and execution you need to succeed with your Minimum Viable Product.
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
                <span>Book Your Discovery Call</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Strategy • Design • Development • Launch • Analytics • Support
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

// Main MVP & Startup Launch Packages Page
export const MVPStartupLaunchPackages = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <MVPStartupLaunchPackagesHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <MVPStartupChallenge />
      </section>
      
      {/* What's Included */}
      <section className="bg-card">
        <MVPStartupIncludes />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <MVPStartupBenefits />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <MVPStartupProcess />
      </section>
      
      {/* Target Audience */}
      <section className="bg-background">
        <MVPStartupAudience />
      </section>
      
      {/* Case Studies */}
      <section className="bg-card">
        <MVPStartupCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <MVPStartupInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <MVPStartupFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <MVPStartupFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};