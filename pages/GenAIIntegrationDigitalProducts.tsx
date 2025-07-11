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
  Waves, Zap as Lightning, Lightbulb as BulbIcon, Layers3, Boxes as CubeIcon
} from "lucide-react";

// Gen AI Integration Hero Section
const GenAIIntegrationHeroWithCTA = () => {
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
            {/* Gen AI Integration Label */}
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
                Generative AI Integration for Digital Products
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Infuse your applications with the power of Generative AI, enabling dynamic content creation, intelligent code generation, and hyper-personalized user experiences.
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
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>Innovate with GenAI</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span>Book a Strategy Session</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with GenAI Creation Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* GenAI Creation Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Central GenAI Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* GenAI Creation Interface */}
                  <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                    {/* GenAI Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-center mb-8"
                    >
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">GenAI Hub</h3>
                      </div>
                      <p className="text-gray-400 text-sm">Creating • Generating • Personalizing</p>
                    </motion.div>
                    
                    {/* Creation Categories */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {/* Text Generation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="relative"
                      >
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30 text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Type className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-white text-xs font-medium">Text</div>
                          <div className="text-blue-300 text-xs">Generation</div>
                        </div>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        ></motion.div>
                      </motion.div>
                      
                      {/* Image Generation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="relative"
                      >
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30 text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Image className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-white text-xs font-medium">Image</div>
                          <div className="text-purple-300 text-xs">Creation</div>
                        </div>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full"
                        ></motion.div>
                      </motion.div>
                      
                      {/* Code Generation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="relative"
                      >
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30 text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-white text-xs font-medium">Code</div>
                          <div className="text-green-300 text-xs">Generation</div>
                        </div>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                        ></motion.div>
                      </motion.div>
                    </div>
                    
                    {/* GenAI Models */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="space-y-3"
                    >
                      <h4 className="text-white text-sm font-medium text-center mb-4">Powered by Leading GenAI Models</h4>
                      <div className="flex justify-center gap-3 flex-wrap">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          GPT-4
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          Gemini
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                          Claude
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                          Llama
                        </Badge>
                      </div>
                    </motion.div>
                    
                    {/* Generation Progress */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-lg border border-accent/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-medium">Content Generated</div>
                          <div className="text-accent text-xs">Real-time Creation</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">∞</div>
                          <div className="text-xs text-white/70">Possibilities</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating AI Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="absolute -bottom-6 -left-6 transform -rotate-12"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Wand2 className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Creation Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Creating</span>
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
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Dynamic Generation Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-purple-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <Brain className="w-10 h-10 text-purple-400" />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center"
                      >
                        <Lightning className="w-3 h-3 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* GenAI Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Type className="w-3 h-3 mr-1" />
                  Generative
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Wand2 className="w-3 h-3 mr-1" />
                  Creative
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Lightning className="w-3 h-3 mr-1" />
                  Dynamic
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of GenAI Product Integration
const GenAIIntegrationBenefits = () => {
  const benefits = [
    {
      icon: Wand2,
      title: "Automated Content Creation",
      description: "Generate text, images, code, and more on demand."
    },
    {
      icon: Users,
      title: "Hyper-Personalization",
      description: "Deliver truly unique and dynamic user interactions."
    },
    {
      icon: Lightbulb,
      title: "Enhanced Creativity & Efficiency",
      description: "Augment human capabilities across various tasks."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Accelerate design and development cycles."
    },
    {
      icon: Target,
      title: "Adaptive User Experiences",
      description: "Products that dynamically respond to user input and context."
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
            Unlock New Dimensions with Generative AI
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

// GenAI Integration Process
const GenAIIntegrationProcess = () => {
  const steps = [
    {
      title: "Use Case Identification & Feasibility",
      description: "Analyzing your product to identify the most impactful GenAI use cases and assessing technical feasibility for implementation.",
      icon: Search
    },
    {
      title: "Data Preparation & Fine-tuning (if needed)",
      description: "Preparing your data for GenAI integration and fine-tuning models with your specific domain knowledge and requirements.",
      icon: Database
    },
    {
      title: "Model Selection & API Integration",
      description: "Selecting the most appropriate GenAI models for your use cases and integrating them through robust API connections.",
      icon: Brain
    },
    {
      title: "Prompt Engineering & Output Optimization",
      description: "Crafting precise prompts and optimizing model outputs to ensure high-quality, relevant, and consistent generated content.",
      icon: Wand2
    },
    {
      title: "Testing & Ethical Review",
      description: "Comprehensive testing of GenAI features and conducting ethical reviews to ensure responsible AI implementation.",
      icon: Shield
    },
    {
      title: "Deployment & Monitoring",
      description: "Deploying GenAI capabilities and implementing continuous monitoring to track performance, costs, and user satisfaction.",
      icon: Rocket
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
            Our Strategic Path to Embedding Generative AI
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

// GenAI Integration Services
const GenAIIntegrationServices = () => {
  const services = [
    {
      title: "Content Generation Engines",
      description: "For marketing copy, product descriptions, articles.",
      icon: Type,
      features: ["Text Generation", "Marketing Copy", "Product Descriptions", "Blog Articles"]
    },
    {
      title: "Intelligent Chatbots with GenAI",
      description: "More natural and context-aware conversational agents.",
      icon: MessageSquare,
      features: ["Natural Conversations", "Context Awareness", "Multi-turn Dialogue", "Personality Customization"]
    },
    {
      title: "Code Generation & Augmentation",
      description: "Assisting developers with smart code suggestions.",
      icon: Code,
      features: ["Code Completion", "Bug Fixing", "Code Explanation", "Documentation Generation"]
    },
    {
      title: "Personalized User Experiences",
      description: "Dynamic UI elements, adaptive recommendations.",
      icon: Users,
      features: ["Dynamic Content", "Adaptive UI", "Personalized Recommendations", "Context-aware Responses"]
    },
    {
      title: "Image & Video Generation",
      description: "Creating custom visual assets within products.",
      icon: Image,
      features: ["Custom Graphics", "Product Images", "Video Content", "Visual Variations"]
    },
    {
      title: "Data Synthesis & Augmentation",
      description: "Generating synthetic data for training or testing.",
      icon: Database,
      features: ["Synthetic Data", "Data Augmentation", "Privacy-safe Testing", "Model Training"]
    },
    {
      title: "Search & Summarization",
      description: "Advanced document understanding and content summarization.",
      icon: FileText,
      features: ["Document Search", "Content Summarization", "Key Insights", "Information Extraction"]
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
            Our Specialized Generative AI Integration Solutions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
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
          className="max-w-md mx-auto"
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

// GenAI Tech Stack
const GenAITechStack = () => {
  const technologies = [
    { name: "OpenAI (GPT)", icon: Brain, category: "Language Model", color: "green" },
    { name: "Google (Gemini)", icon: Brain, category: "Language Model", color: "blue" },
    { name: "Anthropic (Claude)", icon: Brain, category: "Language Model", color: "purple" },
    { name: "Meta (Llama)", icon: Brain, category: "Language Model", color: "blue" },
    { name: "Hugging Face", icon: MessageSquare, category: "Model Hub", color: "yellow" },
    { name: "TensorFlow", icon: Cpu, category: "ML Framework", color: "orange" },
    { name: "PyTorch", icon: Cpu, category: "ML Framework", color: "red" },
    { name: "LangChain", icon: Link2, category: "LLM Framework", color: "green" },
    { name: "LlamaIndex", icon: Database, category: "Data Framework", color: "purple" },
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "Node.js", icon: Server, category: "Runtime", color: "green" },
    { name: "AWS SageMaker", icon: CloudCog, category: "ML Platform", color: "orange" },
    { name: "Azure OpenAI", icon: Cloud, category: "AI Service", color: "blue" }
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
            GenAI Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Integrating cutting-edge Generative AI models for transformative product features.
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
              red: "bg-red-500/20 text-red-400 border-red-500/30",
              yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
              green: "bg-green-500/20 text-green-400 border-green-500/30",
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

// GenAI Case Studies
const GenAICaseStudies = () => {
  const caseStudies = [
    {
      title: "Dynamic Content Generation Platform",
      client: "Media & Publishing Company",
      description: "Implemented GenAI-powered content generation for personalized articles and marketing copy, resulting in 300% increase in content production speed and 85% reduction in content creation costs.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&auto=format",
      results: "300% faster production, 85% cost reduction",
      engagement: "4-month GenAI integration",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "AI-Powered Code Assistant",
      client: "Software Development Platform",
      description: "Integrated GenAI code generation and review capabilities, enabling developers to write code 40% faster while reducing bugs by 60% through intelligent suggestions and automated testing.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
      results: "40% faster coding, 60% fewer bugs",
      engagement: "5-month development project",
      gradient: "from-green-500/20 to-emerald-500/20"
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
            Digital Products Reimagined with Generative AI
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
                        <Sparkles className="w-6 h-6 text-accent" />
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
const GenAIInlineCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-black rounded-full px-6 py-3 flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">GenAI Integration</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Explore the Future of Your Product with{" "}
              <span className="text-accent">GenAI</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's unlock the creative and functional potential of Generative AI for your applications.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <Lightbulb className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free GenAI Discovery Call</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire GenAI Specialists
const HireGenAISpecialists = () => {
  const specialistTypes = [
    {
      title: "GenAI Integration Engineers",
      description: "Specialists in integrating large language models and generative AI into products",
      icon: Brain,
      skills: ["LLM Integration", "API Development", "Prompt Engineering", "Performance Optimization"]
    },
    {
      title: "Prompt Engineers",
      description: "Experts in crafting effective prompts for optimal GenAI model performance",
      icon: Wand2,
      skills: ["Prompt Design", "Output Optimization", "Model Fine-tuning", "Chain-of-Thought"]
    },
    {
      title: "GenAI Product Managers",
      description: "Product specialists who understand GenAI capabilities and user needs",
      icon: Target,
      skills: ["GenAI Strategy", "User Experience", "Ethical AI", "Product Roadmapping"]
    },
    {
      title: "AI Safety Engineers",
      description: "Specialists ensuring responsible and safe deployment of generative AI",
      icon: Shield,
      skills: ["AI Safety", "Bias Detection", "Content Moderation", "Ethical Guidelines"]
    },
    {
      title: "Data Scientists (GenAI)",
      description: "Data experts specializing in GenAI model training and evaluation",
      icon: BarChart3,
      skills: ["Model Training", "Data Curation", "Performance Metrics", "A/B Testing"]
    },
    {
      title: "GenAI UX Designers",
      description: "Designers who create intuitive interfaces for AI-powered features",
      icon: Paintbrush,
      skills: ["AI UX Design", "Conversational Interfaces", "User Research", "Interaction Design"]
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
            Access Expert Generative AI Engineers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our data scientists and developers specialized in prompt engineering, model fine-tuning, and integrating large language models.
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
                <span>Hire GenAI Talent</span>
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

// GenAI FAQs
const GenAIFAQs = () => {
  const faqs = [
    {
      question: "What are the ethical considerations for using Generative AI?",
      answer: "Ethical GenAI implementation involves several key considerations: bias prevention and mitigation, ensuring diverse training data, implementing content filtering and safety measures, maintaining transparency about AI-generated content, respecting intellectual property rights, protecting user privacy, and establishing clear guidelines for AI use. We work with you to develop comprehensive AI ethics policies, implement bias detection systems, create content moderation workflows, and ensure compliance with emerging AI regulations while maintaining responsible AI practices throughout the development lifecycle."
    },
    {
      question: "How do you ensure the accuracy and safety of AI-generated content?",
      answer: "We implement multi-layered content validation systems including automated fact-checking, human review processes, confidence scoring, and real-time monitoring. Our approach includes prompt engineering for consistent outputs, implementing guardrails and safety filters, creating feedback loops for continuous improvement, and establishing clear escalation procedures for problematic content. We also use techniques like retrieval-augmented generation (RAG) to ground AI responses in verified information sources and implement version control for prompt templates to maintain quality standards."
    },
    {
      question: "Can GenAI be customized with our own data?",
      answer: "Yes, GenAI can be extensively customized with your proprietary data through several approaches: fine-tuning models on your specific domain data, implementing retrieval-augmented generation (RAG) to access your knowledge base, creating custom prompt templates reflecting your brand voice, and developing domain-specific model variants. We ensure data privacy through secure training environments, implement data anonymization when needed, and can deploy models on-premises or in private cloud environments. The customization level depends on your specific use case, data volume, and privacy requirements."
    },
    {
      question: "What's the typical cost for GenAI integration?",
      answer: "GenAI integration costs vary based on several factors: the complexity of use cases, volume of API calls, model selection (GPT-4 vs. open-source models), level of customization required, and infrastructure needs. Costs typically include API usage fees, development time, fine-tuning expenses, and ongoing monitoring. We help optimize costs through efficient prompt engineering, model selection strategies, caching mechanisms, and usage optimization. We provide detailed cost projections during the planning phase and implement cost monitoring to ensure budget alignment throughout the project lifecycle."
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
const GenAIFinalCTA = () => {
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
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-blue-500">
              <div className="bg-background rounded-full px-6 py-3 flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">GenAI Integration</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Reshape Digital Experiences with{" "}
            <span className="text-accent">WDI's GenAI Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your products with dynamic content generation, smart automation, and unparalleled personalization.
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
                <Sparkles className="w-6 h-6 flex-shrink-0" />
                <span>Start Your GenAI Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Content Generation • Code Assistance • Hyper-Personalization
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Main Gen AI Integration into Digital Products Page
export const GenAIIntegrationDigitalProducts = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <GenAIIntegrationHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <GenAIIntegrationBenefits />
      </section>
      
      {/* GenAI Integration Process */}
      <section className="bg-card">
        <GenAIIntegrationProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <GenAIIntegrationServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <GenAITechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <GenAICaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <GenAIInlineCTA />
      </section>
      
      {/* Hire Specialists */}
      <section className="bg-background">
        <HireGenAISpecialists />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <GenAIFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <GenAIFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};