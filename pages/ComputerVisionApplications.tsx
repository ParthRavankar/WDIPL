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
  Crystal, Telescope, Radar, ScanLine, Crosshair, ScanFace, AlignHorizontalJustifyStart
} from "lucide-react";

// Computer Vision Applications Hero Section
const ComputerVisionHeroWithCTA = () => {
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
            {/* Computer Vision Label */}
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
                Computer Vision Applications
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Empowering your business with AI-driven image and video analysis, enabling object detection, facial recognition, quality control, and more.
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
                  <Eye className="w-5 h-5 flex-shrink-0" />
                  <span>See with AI</span>
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
          
          {/* Right side with Computer Vision Visualization Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Computer Vision Camera Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main Camera Lens Visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Camera Lens with Data Overlay */}
                  <div className="relative flex items-center justify-center mb-8">
                    {/* Camera Lens */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center shadow-2xl border border-blue-500/50 backdrop-blur-sm">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center border border-blue-400/30">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full flex items-center justify-center border border-blue-300/30">
                            <Camera className="w-8 h-8 text-blue-300" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Scanning Animation */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                      ></motion.div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                      ></motion.div>
                    </motion.div>
                    
                    {/* Data Overlay Points */}
                    <div className="absolute inset-0">
                      {/* Crosshair scanning lines */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                        className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      ></motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.7 }}
                        className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                      ></motion.div>
                      
                      {/* Detection Points */}
                      {[...Array(8)].map((_, i) => {
                        const positions = [
                          { top: '20%', left: '25%' },
                          { top: '25%', right: '20%' },
                          { top: '75%', left: '30%' },
                          { top: '80%', right: '25%' },
                          { top: '35%', left: '15%' },
                          { top: '40%', right: '10%' },
                          { top: '60%', left: '85%' },
                          { top: '65%', right: '85%' }
                        ];
                        
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                            className="absolute"
                            style={positions[i]}
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: i * 0.3 
                              }}
                              className="w-3 h-3 border-2 border-green-400 bg-green-400/20 rounded-sm shadow-lg"
                            ></motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Object Detection Interface */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-mono">Object Detection</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        Live
                      </Badge>
                    </div>
                    
                    {/* Detection Results */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        className="flex items-center justify-between p-2 bg-blue-500/10 rounded border border-blue-500/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 text-xs">Person</span>
                        </div>
                        <span className="text-blue-300 text-xs font-mono">98.5%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                        className="flex items-center justify-between p-2 bg-green-500/10 rounded border border-green-500/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-xs">Vehicle</span>
                        </div>
                        <span className="text-green-300 text-xs font-mono">94.2%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.8 }}
                        className="flex items-center justify-between p-2 bg-purple-500/10 rounded border border-purple-500/30"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-purple-300 text-xs">Product</span>
                        </div>
                        <span className="text-purple-300 text-xs font-mono">91.7%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Processing Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">30fps</div>
                      <div className="text-white text-xs">Processing</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-lg font-bold">95.8%</div>
                      <div className="text-white text-xs">Accuracy</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Computer Vision Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <ScanLine className="w-6 h-6 text-green-400" />
                  </div>
                </motion.div>
                
                {/* Factory Automation Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-orange-400 text-sm">
                    <Factory className="w-4 h-4" />
                    <span>Automated</span>
                  </div>
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-orange-400 rounded-full"
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
                
                {/* Recognition Confidence Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-green-400 text-sm font-bold">Real</div>
                      <div className="text-green-300 text-xs">Time</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Computer Vision Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Eye className="w-3 h-3 mr-1" />
                  Detection
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <ScanFace className="w-3 h-3 mr-1" />
                  Recognition
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Scan className="w-3 h-3 mr-1" />
                  Analysis
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Computer Vision
const ComputerVisionBenefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Automated Inspection",
      description: "Enhance quality control, reduce manual errors."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Facial recognition, anomaly detection in surveillance."
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Automate monitoring, counting, and tracking."
    },
    {
      icon: Heart,
      title: "Personalized Experiences",
      description: "Facial recognition for tailored interactions."
    },
    {
      icon: FileText,
      title: "Data Extraction",
      description: "Automatically recognize and extract information from images/videos."
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
            Transform Operations with Visual Intelligence
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

// Computer Vision Development Process
const ComputerVisionProcess = () => {
  const steps = [
    {
      title: "Use Case Definition & Data Collection",
      description: "Identifying specific computer vision applications and gathering relevant image and video datasets for training.",
      icon: Target
    },
    {
      title: "Image/Video Annotation & Preprocessing", 
      description: "Labeling visual data with bounding boxes, classifications, and preparing datasets for optimal model training.",
      icon: ImageIcon
    },
    {
      title: "Model Selection & Training",
      description: "Choosing appropriate computer vision architectures and training models on annotated datasets for accurate recognition.",
      icon: Brain
    },
    {
      title: "Performance Optimization & Validation",
      description: "Fine-tuning models for accuracy and speed, validating performance across diverse test scenarios and edge cases.",
      icon: Settings
    },
    {
      title: "Deployment & Integration",
      description: "Implementing computer vision models in production environments and integrating with existing systems and workflows.",
      icon: Rocket
    },
    {
      title: "Monitoring & Iteration",
      description: "Continuously monitoring model performance and iterating based on real-world usage patterns and feedback.",
      icon: Activity
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
            Our Strategic Approach to Vision AI Development
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

// Computer Vision Applications List (renamed from ComputerVisionApplications)
const CVApplicationsList = () => {
  const applications = [
    {
      title: "Object Detection & Recognition",
      description: "Identifying and locating objects in images/video.",
      icon: Eye,
      features: ["Real-time Detection", "Multi-object Tracking", "Bounding Boxes", "Classification"]
    },
    {
      title: "Facial Recognition & Analysis",
      description: "For security, access control, or personalization.",
      icon: ScanFace,
      features: ["Identity Verification", "Emotion Detection", "Age Estimation", "Liveness Detection"]
    },
    {
      title: "Image & Video Classification",
      description: "Categorizing visual content automatically.",
      icon: Image,
      features: ["Content Categorization", "Quality Assessment", "Scene Understanding", "Batch Processing"]
    },
    {
      title: "Optical Character Recognition (OCR)",
      description: "Extracting text from images and documents.",
      icon: FileText,
      features: ["Text Extraction", "Document Parsing", "Multi-language Support", "Handwriting Recognition"]
    },
    {
      title: "Quality Control & Anomaly Detection",
      description: "Automated inspection in manufacturing.",
      icon: AlertTriangle,
      features: ["Defect Detection", "Surface Inspection", "Dimensional Analysis", "Automated Sorting"]
    },
    {
      title: "Pose Estimation & Activity Recognition",
      description: "Analyzing human movement.",
      icon: Users,
      features: ["Posture Analysis", "Gesture Recognition", "Activity Tracking", "Sports Analytics"]
    },
    {
      title: "Augmented Reality (AR) Integration",
      description: "Overlaying digital info on real-world views.",
      icon: Scan,
      features: ["Marker Tracking", "Object Overlay", "Real-time Rendering", "Interactive Experiences"]
    },
    {
      title: "Retail Analytics",
      description: "Tracking foot traffic, shelf compliance, customer behavior.",
      icon: ShoppingCart,
      features: ["People Counting", "Heat Mapping", "Inventory Monitoring", "Behavior Analysis"]
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
            Our Specialized Computer Vision Solutions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {applications.map((application, index) => {
            const IconComponent = application.icon;
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
                      {application.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {application.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {application.features.map((feature) => (
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

// Computer Vision Tech Stack
const ComputerVisionTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "TensorFlow", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "PyTorch", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "OpenCV", icon: Eye, category: "Computer Vision", color: "green" },
    { name: "CUDA", icon: Cpu, category: "GPU Computing", color: "green" },
    { name: "YOLO", icon: Target, category: "Object Detection", color: "red" },
    { name: "ResNet", icon: Network, category: "CNN Architecture", color: "blue" },
    { name: "VGG", icon: Layers, category: "CNN Architecture", color: "blue" },
    { name: "AWS Rekognition", icon: CloudCog, category: "Cloud Vision API", color: "orange" },
    { name: "Google Vision AI", icon: Cloud, category: "Cloud Vision API", color: "green" },
    { name: "Azure Computer Vision", icon: CloudCog, category: "Cloud Vision API", color: "blue" },
    { name: "Edge AI Devices", icon: Cpu, category: "Edge Computing", color: "purple" }
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
            Computer Vision Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building powerful vision AI solutions with leading frameworks and hardware.
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
              green: "bg-green-500/20 text-green-400 border-green-500/30",
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30"
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

// Computer Vision Case Studies
const ComputerVisionCaseStudies = () => {
  const caseStudies = [
    {
      title: "Automated Quality Control System",
      client: "Manufacturing Corporation",
      description: "Implemented computer vision for product defect detection, achieving 99.2% accuracy in identifying manufacturing defects and reducing manual inspection time by 85% while improving product quality.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      results: "99.2% defect detection, 85% time reduction",
      engagement: "5-month quality control project",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Facial Recognition Security System",
      client: "Corporate Campus",
      description: "Deployed advanced facial recognition for access control across multiple buildings, processing 10,000+ daily entries with 98.7% accuracy and reducing security incidents by 60%.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&auto=format",
      results: "98.7% recognition accuracy, 60% incident reduction",
      engagement: "4-month security implementation",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Retail Analytics Platform",
      client: "Retail Chain Network",
      description: "Built computer vision system for customer behavior analysis and inventory monitoring across 200+ stores, increasing sales by 25% through optimized product placement and reducing stockouts by 40%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      results: "25% sales increase, 40% stockout reduction",
      engagement: "6-month retail analytics project",
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
            Computer Vision Solutions Driving Innovation
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
                        <Eye className="w-6 h-6 text-accent" />
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
const ComputerVisionInlineCTA = () => {
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
                <Eye className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Computer Vision</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to See Your Business{" "}
              <span className="text-accent">Through a New Lens?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Explore how vision AI can transform your operations and products.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free Computer Vision Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire Computer Vision Engineers
const HireComputerVisionEngineers = () => {
  const specialistTypes = [
    {
      title: "Computer Vision Engineers",
      description: "Specialists in image processing, deep learning for vision, and real-time video analysis",
      icon: Eye,
      skills: ["Image Processing", "Object Detection", "Neural Networks", "OpenCV"]
    },
    {
      title: "Machine Learning Engineers (CV Focus)",
      description: "Experts in training and optimizing computer vision models",
      icon: Brain,
      skills: ["Deep Learning", "Model Training", "TensorFlow/PyTorch", "Performance Optimization"]
    },
    {
      title: "Computer Vision Researchers",
      description: "Advanced specialists in cutting-edge vision AI research and development",
      icon: Microscope,
      skills: ["Research & Development", "Algorithm Innovation", "Academic Publications", "Novel Architectures"]
    },
    {
      title: "Edge AI Engineers",
      description: "Specialists in deploying computer vision on edge devices and embedded systems",
      icon: Cpu,
      skills: ["Edge Computing", "Model Optimization", "Embedded Systems", "Real-time Processing"]
    },
    {
      title: "AR/VR Vision Engineers",
      description: "Experts in computer vision for augmented and virtual reality applications",
      icon: Scan,
      skills: ["AR/VR Development", "3D Reconstruction", "Tracking Systems", "Real-time Rendering"]
    },
    {
      title: "Data Annotation Specialists",
      description: "Experts in creating high-quality labeled datasets for computer vision training",
      icon: Tag,
      skills: ["Data Annotation", "Quality Control", "Annotation Tools", "Dataset Curation"]
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
            Access Expert Computer Vision Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialized engineers proficient in image processing, deep learning for vision, and real-time video analysis.
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
                <span>Hire CV Engineers</span>
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

// Computer Vision FAQs
const ComputerVisionFAQs = () => {
  const faqs = [
    {
      question: "What kind of data is needed for computer vision models?",
      answer: "Computer vision models require labeled visual datasets including images or videos with annotations such as bounding boxes, classification labels, or segmentation masks. The quantity needed varies by complexity: simple classification may need thousands of images per class, while complex object detection requires tens of thousands. Data quality is crucial - images should represent real-world conditions including varied lighting, angles, backgrounds, and scenarios. We work with clients to assess existing data, identify gaps, and develop data collection strategies. We can also leverage transfer learning to reduce data requirements and use techniques like data augmentation to maximize dataset value."
    },
    {
      question: "How do you address bias in facial recognition?",
      answer: "We take a comprehensive approach to bias mitigation in facial recognition systems: First, we ensure diverse and representative training datasets across age, gender, ethnicity, and other demographic factors. We implement bias testing protocols throughout development, measuring performance across different demographic groups. We use fairness-aware machine learning techniques and regularly audit models for discriminatory patterns. We provide transparency through bias reporting and allow clients to set fairness thresholds. Additionally, we recommend ethical guidelines for deployment, including consent mechanisms, opt-out options, and clear usage policies. We stay current with regulations like GDPR and emerging AI ethics standards."
    },
    {
      question: "Can computer vision work on edge devices?",
      answer: "Yes, we specialize in edge computer vision deployment for real-time, low-latency applications. We use model optimization techniques including quantization, pruning, and knowledge distillation to reduce model size and computational requirements. We support various edge platforms including NVIDIA Jetson, Intel NCS, mobile devices, and custom embedded systems. Edge deployment offers benefits like reduced latency, improved privacy (data stays local), lower bandwidth usage, and offline operation. We balance accuracy with performance constraints and can implement hybrid architectures where edge devices handle simple tasks while cloud handles complex processing. Our edge solutions maintain high accuracy while meeting strict resource constraints."
    },
    {
      question: "What are the ethical implications of computer vision?",
      answer: "Computer vision raises important ethical considerations we actively address: Privacy concerns around surveillance and data collection require transparent policies and user consent. Bias and fairness issues, especially in facial recognition, need diverse datasets and ongoing monitoring. We implement privacy-by-design principles, including data minimization and anonymization techniques. We provide clear guidelines on appropriate use cases and help clients develop ethical AI policies. Security considerations include protecting against adversarial attacks and ensuring data integrity. We recommend regular ethical audits, stakeholder involvement in development, and compliance with emerging AI regulations. Our goal is building beneficial technology that respects human rights and promotes fairness."
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
const ComputerVisionFinalCTA = () => {
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
                <Eye className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Vision AI</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Empower Your Business with{" "}
            <span className="text-accent">Intelligent Sight</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            WDI develops cutting-edge Computer Vision applications that automate, analyze, and innovate across industries.
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
                <Scan className="w-6 h-6 flex-shrink-0" />
                <span>Explore Vision AI Possibilities</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Object Detection • Facial Recognition • Quality Control • Retail Analytics
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

// Main Computer Vision Applications Page
export const ComputerVisionApplications = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <ComputerVisionHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <ComputerVisionBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <ComputerVisionProcess />
      </section>
      
      {/* Applications */}
      <section className="bg-background">
        <CVApplicationsList />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <ComputerVisionTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <ComputerVisionCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <ComputerVisionInlineCTA />
      </section>
      
      {/* Hire Engineers */}
      <section className="bg-background">
        <HireComputerVisionEngineers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <ComputerVisionFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <ComputerVisionFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};