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
  TrendingUpIcon, FlaskIcon, CloudUpload, Laptop
} from "lucide-react";

// Legacy System Rebuilds Hero Section
const LegacySystemRebuildsHero = () => {
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
                Legacy System Rebuilds
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Modernize your core business operations by transforming outdated, inefficient systems into powerful, scalable, and future-ready solutions.
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
                  <Eye className="w-5 h-5 flex-shrink-0" />
                  <span>Explore Our Modernization Projects</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with Before/After System Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Before/After System Transformation Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Legacy Modernization Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Before/After Comparison */}
                  <div className="relative mb-8">
                    {/* Transformation Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="text-center mb-6"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">System Transformation</h3>
                      <div className="flex items-center justify-center gap-4">
                        <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                          Legacy
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-accent" />
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          Modern
                        </Badge>
                      </div>
                    </motion.div>
                    
                    {/* Before/After Systems */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {/* Legacy System */}
                      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                          >
                            <Laptop className="w-8 h-8 text-red-400" />
                          </motion.div>
                          <div className="text-red-300 text-xs font-medium">Legacy System</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                              <span className="text-red-300 text-xs">Slow</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                              <span className="text-red-300 text-xs">Insecure</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                              <span className="text-red-300 text-xs">Costly</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Modern System */}
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                          >
                            <Cloud className="w-8 h-8 text-green-400" />
                          </motion.div>
                          <div className="text-green-300 text-xs font-medium">Modern Platform</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                              <span className="text-green-300 text-xs">Fast</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                              <span className="text-green-300 text-xs">Secure</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                              <span className="text-green-300 text-xs">Scalable</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Modernization Progress */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-xs font-mono">Modernization Progress</span>
                      </div>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                        In Progress
                      </Badge>
                    </div>
                    
                    {/* Modernization Phases */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 1, delay: 2.0 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-xs">System Audit</span>
                        </div>
                        <span className="text-green-300 text-xs font-mono">Complete</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '75%' }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 text-xs">Re-architecture</span>
                        </div>
                        <span className="text-blue-300 text-xs font-mono">75%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '40%' }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-orange-300 text-xs">Data Migration</span>
                        </div>
                        <span className="text-orange-300 text-xs font-mono">40%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Performance Improvements */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.6 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">80%</div>
                      <div className="text-white text-xs">Faster</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">60%</div>
                      <div className="text-white text-xs">Cost Reduction</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Modernization Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                </motion.div>
                
                {/* Security Enhancement Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secured</span>
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
                
                {/* Modernization Status Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.2 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-accent text-sm font-bold">Next</div>
                      <div className="text-white text-xs">Gen</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Legacy Modernization Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.4 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Modernize
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Scale
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
const LegacySystemChallenge = () => {
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
              Breaking Free from Legacy Limitations
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
                    <p>Outdated legacy systems often hinder innovation, increase operational costs, pose security risks, and struggle to integrate with modern technologies, slowing down business growth and agility.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>High maintenance costs and technical debt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Security vulnerabilities and compliance issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Poor performance and user experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Difficulty integrating with modern tools</span>
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
                    <p>WDI specializes in strategically rebuilding and modernizing legacy systems. We help you migrate to robust, scalable, and secure platforms that improve performance, reduce technical debt, and unlock new business capabilities.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Strategic modernization with minimal disruption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Enhanced security and compliance standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Improved performance and scalability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Seamless integration with modern ecosystems</span>
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
const LegacySystemIncludes = () => {
  const includes = [
    {
      icon: Search,
      title: "System Audit & Assessment",
      description: "In-depth analysis of existing system, code, and infrastructure."
    },
    {
      icon: CloudCog,
      title: "Re-platforming & Migration",
      description: "Moving applications to new platforms (cloud, modern OS)."
    },
    {
      icon: Code,
      title: "Code Refactoring & Optimization",
      description: "Cleaning and improving existing codebases for efficiency."
    },
    {
      icon: Database,
      title: "Database Modernization",
      description: "Upgrading or migrating databases for better performance and scalability."
    },
    {
      icon: Network,
      title: "API Development",
      description: "Creating robust APIs for seamless integration with other systems."
    },
    {
      icon: Palette,
      title: "UI/UX Revitalization",
      description: "Designing modern, intuitive user interfaces for enhanced usability."
    },
    {
      icon: ArrowUpDown,
      title: "Data Migration Strategy",
      description: "Secure and accurate transfer of historical data."
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
            Our Comprehensive Legacy Modernization Services
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
                  <ArrowUpDown className="w-8 h-8 text-accent" />
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
const LegacySystemBenefits = () => {
  const benefits = [
    {
      icon: Gauge,
      title: "Enhanced Performance",
      description: "Drastically improve speed, reliability, and responsiveness."
    },
    {
      icon: DollarSign,
      title: "Reduced Operational Costs",
      description: "Lower maintenance, energy, and resource expenditure."
    },
    {
      icon: Shield,
      title: "Improved Security",
      description: "Address vulnerabilities and meet current security standards."
    },
    {
      icon: Scale,
      title: "Increased Agility & Scalability",
      description: "Adapt quickly to market changes and scale operations effortlessly."
    },
    {
      icon: Network,
      title: "Seamless Integrations",
      description: "Connect with modern tools and third-party services."
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
            Unlock New Potential with Modernized Systems
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

// Our Process for Legacy System Rebuilds
const LegacySystemProcess = () => {
  const steps = [
    {
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of the existing system, business needs, and future goals.",
      icon: Search
    },
    {
      title: "Strategy & Roadmap", 
      description: "Define the modernization approach (rebuild, re-platform, re-architect) and create a detailed plan.",
      icon: Target
    },
    {
      title: "Architecture & Design",
      description: "Design the new system's architecture, UI/UX, and data models.",
      icon: Building
    },
    {
      title: "Phased Development",
      description: "Iterative development and migration, minimizing disruption to current operations.",
      icon: GitBranch
    },
    {
      title: "Rigorous Testing",
      description: "Comprehensive testing to ensure functionality, performance, and data integrity.",
      icon: Shield
    },
    {
      title: "Deployment & Cutover",
      description: "Seamless transition to the new system with minimal downtime.",
      icon: Rocket
    },
    {
      title: "Post-Modernization Support",
      description: "Ongoing maintenance, optimization, and future enhancements.",
      icon: Headphones
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
            Our Structured Approach to System Modernization
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
const LegacySystemAudience = () => {
  const audiences = [
    {
      icon: Building,
      title: "Enterprises",
      description: "Burdened by outdated software and high maintenance costs."
    },
    {
      icon: Shield,
      title: "Organizations with Security Risks",
      description: "Facing security risks due to unpatched or unsupported systems."
    },
    {
      icon: Network,
      title: "Companies with Integration Issues",
      description: "Struggling with integration issues between legacy and modern applications."
    },
    {
      icon: TrendingUp,
      title: "Scaling Businesses",
      description: "Seeking to scale but limited by current infrastructure."
    },
    {
      icon: Users,
      title: "IT Departments",
      description: "Looking to reduce technical debt and improve developer productivity."
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
const LegacySystemCaseStudies = () => {
  const caseStudies = [
    {
      title: "Manufacturing ERP Modernization",
      client: "Manufacturing Company",
      description: "Rebuilt a core ERP system from legacy mainframe to modern cloud architecture, reducing processing time by 60% and improving data accuracy while maintaining 99.9% uptime during the transition process.",
      image: "https://images.unsplash.com/photo-1565514158740-3011dbf5b2ed?w=400&h=300&fit=crop&auto=format",
      results: "60% faster processing, improved accuracy",
      engagement: "Complete ERP transformation",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Financial Services Platform Re-platform",
      client: "Financial Institution",
      description: "Migrated an outdated financial platform to cloud infrastructure, achieving 99.9% uptime and enabling new service offerings while reducing operational costs by 40% and improving security compliance.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      results: "99.9% uptime, 40% cost reduction",
      engagement: "Financial platform modernization",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Healthcare System Integration",
      client: "Healthcare Provider",
      description: "Modernized legacy patient management system with cloud-based architecture, enabling real-time data access, improving patient care coordination, and achieving HIPAA compliance with enhanced security.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      results: "Real-time access, HIPAA compliant",
      engagement: "Healthcare system overhaul",
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
            Businesses Reimagined with Modern Systems
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
                        <RefreshCw className="w-6 h-6 text-accent" />
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
const LegacySystemInlineCTA = () => {
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
                <RefreshCw className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">System Modernization</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Ready to Future-Proof Your{" "}
              <span className="text-accent">Business Operations?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Unlock efficiency, security, and scalability with our expert modernization services.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Search className="w-6 h-6 flex-shrink-0" />
                <span>Get Your System Audit</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQs
const LegacySystemFAQs = () => {
  const faqs = [
    {
      question: "How long does a typical legacy system rebuild take?",
      answer: "The timeline for legacy system rebuilds varies significantly based on system complexity, scope, and business requirements. Simple system modernizations typically take 4-8 months, while complex enterprise-wide transformations can take 12-24 months. Our approach includes: Assessment and planning (4-6 weeks), phased development and migration (8-16 months), testing and validation (4-8 weeks), and deployment with support (2-4 weeks). We use agile methodologies and phased rollouts to minimize business disruption and deliver value incrementally throughout the project lifecycle."
    },
    {
      question: "What are the common risks associated with modernization projects?",
      answer: "Legacy modernization projects carry several risks that we actively mitigate: Data loss or corruption during migration (addressed through comprehensive backup and validation strategies), business disruption and downtime (minimized via phased rollouts and parallel systems), cost overruns and timeline delays (managed through detailed planning and agile execution), user adoption challenges (solved with training and change management), and integration failures with existing systems (prevented through thorough testing and compatibility analysis). We employ risk mitigation strategies including pilot programs, rollback plans, comprehensive testing, stakeholder communication, and experienced project management to ensure successful outcomes."
    },
    {
      question: "Do you support data migration from older databases?",
      answer: "Yes, we provide comprehensive data migration services for all major legacy database systems including: Mainframe databases (IBM DB2, IMS), legacy SQL systems (older versions of Oracle, SQL Server, MySQL), flat file systems and custom databases, cloud migration from on-premise to AWS/Azure/GCP, and cross-platform migrations between different database technologies. Our migration process includes: data assessment and mapping, migration strategy development, data cleansing and transformation, validation and integrity checking, performance optimization, and rollback planning. We ensure zero data loss and maintain data integrity throughout the migration process with comprehensive testing and validation procedures."
    },
    {
      question: "What technologies do you use for rebuilding legacy systems?",
      answer: "We use modern, enterprise-grade technologies based on your specific requirements: Cloud platforms (AWS, Azure, Google Cloud), containerization (Docker, Kubernetes), microservices architecture, modern programming languages (Java, C#, Python, Node.js), database technologies (PostgreSQL, MongoDB, Redis), API technologies (REST, GraphQL), and CI/CD pipelines for automated deployment. Frontend technologies include React, Angular, Vue.js for web applications and React Native, Flutter for mobile. We select technologies based on factors like scalability requirements, performance needs, integration requirements, security standards, maintenance considerations, and your team's expertise. Our architects design future-proof solutions that can evolve with your business needs."
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
const LegacySystemFinalCTA = () => {
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
                <RefreshCw className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Modernization Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Evolve Your Enterprise with{" "}
            <span className="text-accent">WDI's Modernization Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Don't let old technology hold you back. WDI helps you leap forward with robust, high-performing, and sustainable digital solutions.
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
                <span>Schedule a Consultation</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Assessment • Strategy • Migration • Testing • Deployment • Support
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

// Main Legacy System Rebuilds Page
export const LegacySystemRebuilds = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <LegacySystemRebuildsHero />
      </section>
      
      {/* Challenge */}
      <section className="bg-background">
        <LegacySystemChallenge />
      </section>
      
      {/* What's Included */}
      <section className="bg-card">
        <LegacySystemIncludes />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <LegacySystemBenefits />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <LegacySystemProcess />
      </section>
      
      {/* Target Audience */}
      <section className="bg-background">
        <LegacySystemAudience />
      </section>
      
      {/* Case Studies */}
      <section className="bg-card">
        <LegacySystemCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-background">
        <LegacySystemInlineCTA />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <LegacySystemFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <LegacySystemFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};