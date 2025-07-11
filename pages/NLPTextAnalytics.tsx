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
  Hash as HashIcon, Regex as RegexIcon, Languages as LanguagesIcon
} from "lucide-react";

// NLP & Text Analytics Hero Section
const NLPHeroWithCTA = () => {
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
            {/* NLP Label */}
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
                Natural Language Processing (NLP) & Text Analytics
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Extracting meaningful insights, sentiments, and structures from unstructured text data to power intelligent applications and informed decisions.
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
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>Analyze Your Text Data</span>
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
          
          {/* Right side with NLP Visualization Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* NLP Text Analysis Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main NLP Dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Word Cloud Visualization */}
                  <div className="relative flex items-center justify-center mb-8">
                    {/* Central Word Cloud */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="relative z-10 text-center"
                    >
                      <div className="space-y-4">
                        {/* Floating Words with different sizes */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                          className="text-2xl font-bold text-blue-400"
                        >
                          sentiment
                        </motion.div>
                        
                        <div className="flex justify-center gap-4 items-center">
                          <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="text-lg text-green-400 font-medium"
                          >
                            positive
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="text-3xl font-bold text-white"
                          >
                            analysis
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="text-sm text-yellow-400"
                          >
                            insights
                          </motion.span>
                        </div>
                        
                        <div className="flex justify-center gap-2 items-center">
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.0 }}
                            className="text-xs text-purple-400"
                          >
                            entity
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                            className="text-lg text-cyan-400 font-medium"
                          >
                            classification
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.4 }}
                            className="text-xs text-orange-400"
                          >
                            text
                          </motion.span>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 2.6 }}
                          className="text-sm text-red-400"
                        >
                          processing
                        </motion.div>
                      </div>
                      
                      {/* Pulsing Animation */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400/10 rounded-full border border-blue-400/20"
                      ></motion.div>
                    </motion.div>
                    
                    {/* Floating Text Bubbles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => {
                        const positions = [
                          { top: '10%', left: '10%' },
                          { top: '15%', right: '15%' },
                          { top: '85%', left: '20%' },
                          { top: '80%', right: '10%' },
                          { top: '50%', left: '5%' },
                          { top: '45%', right: '5%' }
                        ];
                        
                        const texts = ['😊', '📊', '🔍', '💡', '📝', '🎯'];
                        
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 2.8 + i * 0.1 }}
                            className="absolute"
                            style={positions[i]}
                          >
                            <motion.div
                              animate={{ 
                                y: [0, -10, 0],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                delay: i * 0.5 
                              }}
                              className="w-8 h-8 bg-gray-800/80 rounded-lg flex items-center justify-center text-sm shadow-lg border border-gray-600"
                            >
                              {texts[i]}
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Sentiment Analysis Interface */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.4 }}
                    className="bg-black/50 rounded-lg p-4 border border-gray-700 mb-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-xs font-mono">Sentiment Analysis</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                        Real-time
                      </Badge>
                    </div>
                    
                    {/* Sentiment Results */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '75%' }}
                        transition={{ duration: 1, delay: 3.6 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 text-xs">Positive</span>
                        </div>
                        <span className="text-green-300 text-xs font-mono">75%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '15%' }}
                        transition={{ duration: 1, delay: 3.8 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-yellow-300 text-xs">Neutral</span>
                        </div>
                        <span className="text-yellow-300 text-xs font-mono">15%</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '10%' }}
                        transition={{ duration: 1, delay: 4.0 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-red-300 text-xs">Negative</span>
                        </div>
                        <span className="text-red-300 text-xs font-mono">10%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Processing Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4.2 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                      <div className="text-purple-400 text-lg font-bold">12.5K</div>
                      <div className="text-white text-xs">Texts/min</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-lg font-bold">97.3%</div>
                      <div className="text-white text-xs">Accuracy</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating NLP Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 4.4 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                </motion.div>
                
                {/* AI Processing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.6 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Brain className="w-4 h-4" />
                    <span>AI Processing</span>
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
                
                {/* Text Analytics Confidence Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 4.8 }}
                  className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-purple-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-purple-400 text-sm font-bold">Multi</div>
                      <div className="text-purple-300 text-xs">Lang</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* NLP Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 5.0 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <FileText className="w-3 h-3 mr-1" />
                  Text Analysis
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Sentiment
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Languages className="w-3 h-3 mr-1" />
                  Multi-Language
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of NLP & Text Analytics
const NLPBenefits = () => {
  const benefits = [
    {
      icon: Search,
      title: "Automated Information Extraction",
      description: "Quickly pull key data from vast text volumes."
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Understand customer emotions from reviews, social media."
    },
    {
      icon: Headphones,
      title: "Enhanced Customer Service",
      description: "Intelligent routing, automated responses from text queries."
    },
    {
      icon: Lightbulb,
      title: "Improved Decision Making",
      description: "Gain actionable insights from unstructured data."
    },
    {
      icon: FileText,
      title: "Content Generation & Summarization",
      description: "Automate creation or distillation of text."
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
            Unlock Insights from Your Textual Data
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

// NLP Process
const NLPProcess = () => {
  const steps = [
    {
      title: "Data Collection & Preprocessing",
      description: "Gathering text data from various sources and cleaning, tokenizing, and preparing it for analysis.",
      icon: Database
    },
    {
      title: "Feature Engineering & Representation", 
      description: "Converting text into numerical representations using techniques like TF-IDF, word embeddings, or transformer models.",
      icon: Wrench
    },
    {
      title: "Model Training (Classification, Clustering, etc.)",
      description: "Training specialized NLP models for specific tasks like sentiment analysis, classification, or entity recognition.",
      icon: Brain
    },
    {
      title: "Evaluation & Tuning",
      description: "Testing model performance using metrics like accuracy, precision, recall, and F1-score, then fine-tuning for optimal results.",
      icon: Settings
    },
    {
      title: "Deployment & Integration",
      description: "Implementing NLP models in production environments and integrating with existing systems and workflows.",
      icon: Rocket
    },
    {
      title: "Continuous Learning & Optimization",
      description: "Monitoring model performance and continuously improving accuracy through feedback loops and new data incorporation.",
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
            Our Comprehensive Approach to Text Intelligence
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

// NLP Services
const NLPServices = () => {
  const services = [
    {
      title: "Sentiment Analysis",
      description: "Determining emotional tone from text (reviews, social media).",
      icon: BarChart3,
      features: ["Emotion Detection", "Opinion Mining", "Rating Prediction", "Brand Monitoring"]
    },
    {
      title: "Named Entity Recognition (NER)",
      description: "Identifying key entities (people, places, organizations).",
      icon: Tag,
      features: ["Entity Extraction", "Relationship Mapping", "Data Anonymization", "Knowledge Graphs"]
    },
    {
      title: "Text Classification & Categorization",
      description: "Automatically tagging and organizing documents.",
      icon: Filter,
      features: ["Document Classification", "Content Tagging", "Spam Detection", "Topic Assignment"]
    },
    {
      title: "Topic Modeling",
      description: "Discovering themes and topics in large text corpora.",
      icon: Grid,
      features: ["Theme Discovery", "Content Analysis", "Trend Identification", "Document Clustering"]
    },
    {
      title: "Text Summarization",
      description: "Condensing long documents into concise summaries.",
      icon: FileText,
      features: ["Extractive Summary", "Abstractive Summary", "Key Points", "Multi-document"]
    },
    {
      title: "Natural Language Generation (NLG)",
      description: "Automatically generating human-like text.",
      icon: Edit3,
      features: ["Content Creation", "Report Generation", "Chatbot Responses", "Personalization"]
    },
    {
      title: "Spam Detection & Content Moderation",
      description: "Filtering unwanted or harmful text.",
      icon: Shield,
      features: ["Spam Filtering", "Toxicity Detection", "Content Safety", "Automated Moderation"]
    },
    {
      title: "Search Enhancement",
      description: "Improving relevance for natural language queries.",
      icon: Search,
      features: ["Query Understanding", "Semantic Search", "Relevance Scoring", "Auto-complete"]
    },
    {
      title: "Generative AI for Text",
      description: "Leveraging LLMs for advanced content creation and interaction.",
      icon: Sparkles,
      features: ["Content Generation", "Prompt Engineering", "Fine-tuning", "Custom LLMs"]
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
            Our Specialized NLP & Text Analytics Solutions
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

// NLP Tech Stack
const NLPTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "NLTK", icon: BookOpen, category: "NLP Library", color: "green" },
    { name: "spaCy", icon: Zap, category: "NLP Library", color: "blue" },
    { name: "scikit-learn", icon: Cog, category: "ML Library", color: "orange" },
    { name: "TensorFlow", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "PyTorch", icon: Brain, category: "Deep Learning", color: "red" },
    { name: "Hugging Face Transformers", icon: Sparkles, category: "Transformers", color: "yellow" },
    { name: "GPT", icon: MessageSquare, category: "Language Model", color: "green" },
    { name: "BERT", icon: Search, category: "Language Model", color: "blue" },
    { name: "RoBERTa", icon: Target, category: "Language Model", color: "purple" },
    { name: "AWS Comprehend", icon: CloudCog, category: "Cloud NLP API", color: "orange" },
    { name: "Google Natural Language AI", icon: Cloud, category: "Cloud NLP API", color: "blue" },
    { name: "Azure Text Analytics", icon: CloudCog, category: "Cloud NLP API", color: "blue" }
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
            NLP & Text Analytics Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge NLP libraries and deep learning models.
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
              purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
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

// NLP Case Studies
const NLPCaseStudies = () => {
  const caseStudies = [
    {
      title: "Customer Sentiment Analysis Platform",
      client: "E-commerce Enterprise",
      description: "Built comprehensive sentiment analysis system processing 50K+ customer reviews daily, achieving 94% accuracy in sentiment classification and enabling proactive customer service responses that improved satisfaction by 32%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "94% sentiment accuracy, 32% satisfaction increase",
      engagement: "4-month sentiment analysis project",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Document Classification System",
      client: "Legal Services Firm",
      description: "Developed automated document classification system for legal documents, processing 10K+ documents daily with 96% accuracy, reducing manual review time by 75% and improving case preparation efficiency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      results: "96% classification accuracy, 75% time reduction",
      engagement: "6-month document processing project",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Intelligent Content Moderation",
      client: "Social Media Platform",
      description: "Implemented real-time content moderation system using advanced NLP to detect toxic content, spam, and policy violations across multiple languages, reducing harmful content exposure by 88% while maintaining user engagement.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      results: "88% harmful content reduction, multi-language support",
      engagement: "8-month content moderation project",
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
            Text Analytics Driving Business Intelligence
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
                        <FileText className="w-6 h-6 text-accent" />
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
const NLPInlineCTA = () => {
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
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">NLP & Text Analytics</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Unlock the Hidden Value{" "}
              <span className="text-accent">in Your Text Data</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Transform unstructured text into actionable insights and intelligent applications.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free NLP Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire NLP Engineers
const HireNLPEngineers = () => {
  const specialistTypes = [
    {
      title: "NLP Engineers",
      description: "Specialists in natural language processing, text mining, and conversational AI for your data-driven projects",
      icon: FileText,
      skills: ["Text Processing", "Feature Engineering", "Model Development", "Pipeline Design"]
    },
    {
      title: "Computational Linguists",
      description: "Experts in language structure, syntax, and semantics for advanced NLP applications",
      icon: Languages,
      skills: ["Linguistic Analysis", "Grammar Modeling", "Phonetics", "Semantic Analysis"]
    },
    {
      title: "Data Scientists (NLP Focus)",
      description: "Data scientists specialized in extracting insights from textual data",
      icon: BarChart3,
      skills: ["Statistical Analysis", "Text Mining", "Sentiment Analysis", "Topic Modeling"]
    },
    {
      title: "ML Engineers (NLP)",
      description: "Machine learning engineers focused on deploying and scaling NLP models",
      icon: Brain,
      skills: ["Model Deployment", "MLOps", "Performance Optimization", "Production Systems"]
    },
    {
      title: "Conversation AI Specialists",
      description: "Experts in building chatbots, virtual assistants, and dialogue systems",
      icon: MessageSquare,
      skills: ["Dialogue Management", "Intent Recognition", "Response Generation", "Context Handling"]
    },
    {
      title: "Research Scientists (NLP)",
      description: "Advanced researchers developing cutting-edge NLP techniques and models",
      icon: Microscope,
      skills: ["Research & Development", "Algorithm Innovation", "Publication", "Model Architecture"]
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
            Access Expert NLP Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialists in natural language processing, text mining, and conversational AI for your data-driven projects.
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
                <span>Hire NLP Experts</span>
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

// NLP FAQs
const NLPFAQs = () => {
  const faqs = [
    {
      question: "What types of text data can be analyzed?",
      answer: "Our NLP solutions can analyze virtually any type of textual data including: customer reviews and feedback, social media posts and comments, emails and support tickets, documents and reports, survey responses, news articles and blogs, legal documents, medical records, chat logs and transcripts, product descriptions, and web content. We handle structured text (forms, databases), semi-structured text (emails, social media), and unstructured text (free-form documents). Our systems support multiple languages and can process data from various sources including APIs, databases, files, and real-time streams. We also work with domain-specific text like technical documentation, financial reports, and scientific literature."
    },
    {
      question: "How accurate is sentiment analysis?",
      answer: "Sentiment analysis accuracy varies by domain and complexity, but our systems typically achieve 85-95% accuracy for general sentiment classification. Accuracy depends on several factors: text quality and clarity, domain specificity (finance vs. social media), language and cultural context, and model training data quality. We provide confidence scores with each prediction and can fine-tune models for specific industries or use cases. For binary sentiment (positive/negative), we often achieve 90%+ accuracy. Multi-class sentiment (positive/neutral/negative) typically achieves 85-90%. We also offer emotion detection, aspect-based sentiment analysis, and sarcasm detection. Our models are continuously improved through active learning and domain adaptation techniques."
    },
    {
      question: "Can NLP be used for multiple languages?",
      answer: "Yes, our NLP solutions support multilingual processing across 50+ languages including English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, Portuguese, Russian, Italian, Korean, Dutch, Swedish, and many others. We offer: cross-lingual models that work across multiple languages simultaneously, language-specific models optimized for individual languages, automatic language detection, real-time translation integration, and multilingual sentiment analysis and entity recognition. Our systems handle different scripts (Latin, Cyrillic, Arabic, Chinese characters, etc.) and can process code-mixed text where multiple languages appear in the same document. We also support low-resource languages through transfer learning and can develop custom models for specific regional dialects or domain-specific terminology."
    },
    {
      question: "What is \"prompt engineering\" in the context of NLP?",
      answer: "Prompt engineering is the practice of designing and optimizing text prompts to get the best results from large language models (LLMs) like GPT, BERT, or custom models. It involves: crafting clear, specific instructions that guide the model's output, designing few-shot examples that demonstrate the desired behavior, iterating on prompt structure to improve accuracy and relevance, and optimizing for specific tasks like classification, generation, or extraction. Effective prompt engineering includes: context setting (providing background information), task specification (clearly defining what you want), format instruction (specifying output structure), and constraint definition (setting boundaries or requirements). Our team specializes in prompt optimization for business applications, ensuring consistent, high-quality outputs from LLMs while minimizing costs and latency. We also develop prompt templates and automated prompt optimization techniques."
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
const NLPFinalCTA = () => {
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
                <FileText className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Text Intelligence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Understand Your World Better with{" "}
            <span className="text-accent">WDI's NLP Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Leverage the power of Natural Language Processing to extract insights, automate tasks, and create intelligent textual applications.
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
                <Search className="w-6 h-6 flex-shrink-0" />
                <span>Analyze Your Text Data</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Sentiment Analysis • Text Classification • Entity Recognition • Content Generation
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

// Main NLP & Text Analytics Page
export const NLPTextAnalytics = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <NLPHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <NLPBenefits />
      </section>
      
      {/* Process */}
      <section className="bg-card">
        <NLPProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <NLPServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <NLPTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <NLPCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <NLPInlineCTA />
      </section>
      
      {/* Hire Engineers */}
      <section className="bg-background">
        <HireNLPEngineers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <NLPFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <NLPFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};