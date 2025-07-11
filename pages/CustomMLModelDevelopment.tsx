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
  Calculator, LineChartIcon, TestTubes, Binary, FlaskRound, Atom
} from "lucide-react";

// Custom ML Model Development Hero Section
const CustomMLHeroWithCTA = () => {
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
            {/* Custom ML Label */}
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
                Custom Machine Learning Model Development
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Building bespoke ML models tailored to your unique data and business challenges, extracting valuable insights and automating complex decisions.
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
                  <Brain className="w-5 h-5 flex-shrink-0" />
                  <span>Develop Your Custom ML Model</span>
                </div>
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <Search className="w-5 h-5 flex-shrink-0" />
                  <span>Explore ML Use Cases</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side with ML Data Visualization Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* ML Data Visualization Scene */}
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Main ML Brain Visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gray-900 rounded-2xl p-8 mx-auto max-w-lg shadow-2xl border border-gray-700"
                >
                  {/* Central Brain Icon with Data Streams */}
                  <div className="relative flex items-center justify-center">
                    {/* Central Brain */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="relative z-10"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-accent/20 border-2 border-accent/30"
                      ></motion.div>
                    </motion.div>
                    
                    {/* Data Streams */}
                    <div className="absolute inset-0">
                      {/* Data Stream 1 */}
                      <motion.div
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                        className="absolute top-2 left-2"
                      >
                        <svg width="100" height="100" viewBox="0 0 100 100" className="overflow-visible">
                          <motion.path
                            d="M10,10 Q30,30 50,10 T90,30"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </svg>
                      </motion.div>
                      
                      {/* Data Stream 2 */}
                      <motion.div
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.4 }}
                        className="absolute bottom-2 right-2"
                      >
                        <svg width="100" height="100" viewBox="0 0 100 100" className="overflow-visible">
                          <motion.path
                            d="M90,90 Q70,70 50,90 T10,70"
                            stroke="#10B981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Floating Data Points */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => {
                      const positions = [
                        { top: '10%', left: '20%' },
                        { top: '15%', right: '25%' },
                        { top: '30%', left: '10%' },
                        { top: '35%', right: '15%' },
                        { top: '60%', left: '15%' },
                        { top: '65%', right: '20%' },
                        { top: '80%', left: '25%' },
                        { top: '85%', right: '30%' },
                        { top: '20%', left: '70%' },
                        { top: '40%', right: '70%' },
                        { top: '70%', left: '75%' },
                        { top: '90%', right: '75%' }
                      ];
                      
                      const colors = ['bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400', 'bg-cyan-400'];
                      const randomColor = colors[i % colors.length];
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                          className="absolute"
                          style={positions[i]}
                        >
                          <motion.div
                            animate={{ 
                              y: [0, -10, 0],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              delay: i * 0.3 
                            }}
                            className={`w-2 h-2 ${randomColor} rounded-full shadow-lg`}
                          ></motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Code Snippets */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="mt-8 bg-black/50 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-xs font-mono">ML Model Training</span>
                    </div>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="text-blue-400">
                        <span className="text-purple-400">from</span> sklearn.ensemble <span className="text-purple-400">import</span> RandomForestClassifier
                      </div>
                      <div className="text-gray-300">
                        model = RandomForestClassifier()
                      </div>
                      <div className="text-yellow-400">
                        model.fit(X_train, y_train)
                      </div>
                      <div className="text-green-400">
                        accuracy = model.score(X_test, y_test)
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating ML Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="absolute -bottom-6 -left-6 transform -rotate-12"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                </motion.div>
                
                {/* Algorithm Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="absolute -top-8 -right-8 space-y-2"
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>Neural Networks</span>
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
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Accuracy Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-20 h-20 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-blue-400 text-lg font-bold">94.2%</div>
                      <div className="text-blue-300 text-xs">Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* ML Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.6 }}
                className="flex justify-center gap-4 flex-wrap mt-8"
              >
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Brain className="w-3 h-3 mr-1" />
                  Custom ML
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Predictive
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Tailored
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Key Benefits of Custom ML Models
const CustomMLBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Accuracy",
      description: "Optimized for your specific dataset and problem, delivering superior results."
    },
    {
      icon: Zap,
      title: "Competitive Edge",
      description: "Unique models provide proprietary insights and capabilities."
    },
    {
      icon: Cog,
      title: "Automation of Complex Tasks",
      description: "Solving problems that are difficult for traditional programming."
    },
    {
      icon: TrendingUp,
      title: "Predictive Power",
      description: "Anticipate trends, behaviors, and outcomes."
    },
    {
      icon: Scale,
      title: "Scalability",
      description: "Models designed to handle growing data volumes and prediction demands."
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
            Why Invest in a Custom ML Solution?
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

// Custom ML Development Process
const CustomMLDevelopmentProcess = () => {
  const steps = [
    {
      title: "Problem Definition & Data Assessment",
      description: "Analyzing your business problem and evaluating data quality, quantity, and relevance for ML model development.",
      icon: Search
    },
    {
      title: "Feature Engineering & Data Preprocessing", 
      description: "Cleaning, transforming, and engineering features from raw data to optimize model performance and accuracy.",
      icon: Wrench
    },
    {
      title: "Model Selection & Training",
      description: "Selecting appropriate algorithms and training multiple models to find the best fit for your specific problem.",
      icon: Brain
    },
    {
      title: "Evaluation & Hyperparameter Tuning",
      description: "Rigorously testing model performance and fine-tuning parameters to achieve optimal accuracy and reliability.",
      icon: Settings
    },
    {
      title: "Model Deployment & Integration",
      description: "Deploying trained models into production environments and integrating with existing systems and workflows.",
      icon: Rocket
    },
    {
      title: "Monitoring & Retraining",
      description: "Continuously monitoring model performance and implementing retraining procedures to maintain accuracy over time.",
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
            Our Strategic Process for Building Your ML Model
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

// Custom ML Services
const CustomMLServices = () => {
  const services = [
    {
      title: "Predictive Analytics Models",
      description: "Forecasting sales, churn, demand, fraud.",
      icon: TrendingUp,
      features: ["Sales Forecasting", "Churn Prediction", "Demand Planning", "Fraud Detection"]
    },
    {
      title: "Natural Language Processing (NLP) Models",
      description: "Sentiment analysis, text classification, entity recognition.",
      icon: FileText,
      features: ["Sentiment Analysis", "Text Classification", "Entity Recognition", "Language Understanding"]
    },
    {
      title: "Computer Vision Models",
      description: "Object detection, image classification, facial recognition.",
      icon: Eye,
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Image Segmentation"]
    },
    {
      title: "Recommendation Engines",
      description: "Personalizing product or content suggestions.",
      icon: Target,
      features: ["Product Recommendations", "Content Personalization", "Collaborative Filtering", "Hybrid Systems"]
    },
    {
      title: "Anomaly Detection Models",
      description: "Identifying unusual patterns in data.",
      icon: AlertTriangle,
      features: ["Fraud Detection", "System Monitoring", "Quality Control", "Security Analysis"]
    },
    {
      title: "Reinforcement Learning",
      description: "Developing intelligent agents for decision-making.",
      icon: Brain,
      features: ["Decision Optimization", "Game AI", "Resource Allocation", "Process Automation"]
    },
    {
      title: "Time Series Forecasting",
      description: "Predicting future values based on historical data.",
      icon: LineChart,
      features: ["Trend Analysis", "Seasonal Forecasting", "Stock Prediction", "Demand Planning"]
    },
    {
      title: "Model Optimization & Fine-tuning",
      description: "Improving performance of existing models.",
      icon: Settings,
      features: ["Hyperparameter Tuning", "Performance Optimization", "Model Compression", "Transfer Learning"]
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
            Our Specialized Custom ML Model Capabilities
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
                      <h4 className="text-xs font-medium text-foreground">Key Applications:</h4>
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

// Custom ML Tech Stack
const CustomMLTechStack = () => {
  const technologies = [
    { name: "Python", icon: Code, category: "Programming", color: "blue" },
    { name: "R", icon: BarChart3, category: "Statistical Computing", color: "blue" },
    { name: "TensorFlow", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "PyTorch", icon: Brain, category: "Deep Learning", color: "orange" },
    { name: "Keras", icon: Layers, category: "Neural Networks", color: "red" },
    { name: "Scikit-learn", icon: Cog, category: "Machine Learning", color: "orange" },
    { name: "Pandas", icon: Table, category: "Data Manipulation", color: "blue" },
    { name: "NumPy", icon: Calculator, category: "Numerical Computing", color: "blue" },
    { name: "AWS SageMaker", icon: CloudCog, category: "ML Platform", color: "orange" },
    { name: "Azure Machine Learning", icon: Cloud, category: "ML Platform", color: "blue" },
    { name: "Google AI Platform", icon: Brain, category: "ML Platform", color: "green" },
    { name: "SQL", icon: Database, category: "Databases", color: "blue" },
    { name: "NoSQL", icon: Database, category: "Databases", color: "green" }
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
            Custom ML Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leveraging powerful libraries and platforms for cutting-edge ML solutions.
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

// Custom ML Case Studies
const CustomMLCaseStudies = () => {
  const caseStudies = [
    {
      title: "Predictive Sales Forecasting Model",
      client: "E-commerce Retail Chain",
      description: "Developed custom ML model for sales forecasting, improving prediction accuracy by 85% and reducing inventory costs by 30% while optimizing stock levels across 200+ locations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      results: "85% prediction accuracy, 30% cost reduction",
      engagement: "3-month ML project",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Medical Image Classification System",
      client: "Healthcare Technology Company",
      description: "Built computer vision ML model for medical imaging diagnosis, achieving 96% accuracy in disease detection and reducing analysis time by 75% for radiologists.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      results: "96% diagnostic accuracy, 75% time reduction",
      engagement: "5-month computer vision project",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Customer Churn Prediction Engine",
      client: "SaaS Technology Platform",
      description: "Implemented advanced ML model for customer churn prediction, identifying at-risk customers with 92% accuracy and enabling proactive retention strategies that reduced churn by 40%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      results: "92% churn prediction, 40% retention improvement",
      engagement: "4-month predictive analytics project",
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
            Custom ML Models Driving Real Business Value
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
                        <Brain className="w-6 h-6 text-accent" />
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
const CustomMLInlineCTA = () => {
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
                <Brain className="w-5 h-5 text-white" />
                <span className="text-white text-base font-medium">Custom ML Models</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Have a Unique Problem Only{" "}
              <span className="text-accent">ML Can Solve?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's explore how a custom machine learning model can give you a decisive edge.
            </p>
            
            <ShimmerButton className="text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center gap-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <span>Get a Free ML Model Consultation</span>
              </div>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Hire ML Model Developers
const HireMLDevelopers = () => {
  const specialistTypes = [
    {
      title: "Machine Learning Engineers",
      description: "Specialists in developing, training, and deploying custom ML models",
      icon: Brain,
      skills: ["Model Development", "Algorithm Design", "Feature Engineering", "Performance Optimization"]
    },
    {
      title: "Data Scientists",
      description: "Experts in extracting insights and building predictive models from complex datasets",
      icon: BarChart3,
      skills: ["Statistical Analysis", "Predictive Modeling", "Data Mining", "Hypothesis Testing"]
    },
    {
      title: "Deep Learning Specialists",
      description: "Specialists in neural networks and advanced deep learning architectures",
      icon: Layers,
      skills: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP Models"]
    },
    {
      title: "MLOps Engineers",
      description: "Experts in deploying and managing ML models in production environments",
      icon: Settings,
      skills: ["Model Deployment", "Pipeline Automation", "Performance Monitoring", "Version Control"]
    },
    {
      title: "Computer Vision Engineers",
      description: "Specialists in developing image and video analysis ML models",
      icon: Eye,
      skills: ["Image Processing", "Object Detection", "Facial Recognition", "Video Analysis"]
    },
    {
      title: "NLP Engineers",
      description: "Experts in natural language processing and text analysis models",
      icon: FileText,
      skills: ["Text Processing", "Sentiment Analysis", "Language Models", "Speech Recognition"]
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
            Access Expert Machine Learning Scientists & Engineers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hire our specialized data scientists and ML engineers proficient in developing, training, and deploying custom ML models.
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
                <span>Hire ML Developers</span>
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

// Custom ML FAQs
const CustomMLFAQs = () => {
  const faqs = [
    {
      question: "What kind of data do I need for ML model development?",
      answer: "The data requirements depend on your specific problem, but generally you need: sufficient quantity (typically thousands to millions of records), relevant features that correlate with your target outcome, clean and consistent data formatting, and historical examples of the outcomes you want to predict. For supervised learning, you need labeled data showing correct answers. We can work with structured data (databases, spreadsheets), unstructured data (text, images, audio), or time-series data. During our initial assessment, we'll evaluate your data quality, identify gaps, and recommend data collection or preprocessing strategies to ensure optimal model performance."
    },
    {
      question: "How long does it take to build a custom ML model?",
      answer: "The timeline varies significantly based on complexity and scope. Simple models (like basic classification or regression) can take 4-8 weeks, while complex models (deep learning, computer vision, or NLP) may require 3-6 months. Factors affecting timeline include: data complexity and volume, model sophistication required, integration requirements, performance targets, and regulatory compliance needs. Our typical process includes 1-2 weeks for data assessment, 2-4 weeks for preprocessing and feature engineering, 2-6 weeks for model development and training, 1-2 weeks for testing and validation, and 1-2 weeks for deployment preparation. We provide detailed timelines during project planning."
    },
    {
      question: "What is \"model bias\" and how do you address it?",
      answer: "Model bias occurs when ML models make systematically unfair or inaccurate predictions for certain groups or scenarios, often reflecting biases present in training data or model design. Common types include historical bias (past discrimination in data), representation bias (underrepresented groups in training data), and measurement bias (inconsistent data collection). We address bias through: comprehensive bias auditing and fairness metrics evaluation, diverse and representative training datasets, bias detection algorithms and statistical tests, fair ML techniques like adversarial debiasing, regular model monitoring for bias drift, and transparent documentation of model limitations and recommendations for responsible use."
    },
    {
      question: "Do you provide ongoing support for the deployed model?",
      answer: "Yes, we offer comprehensive post-deployment support and maintenance services. This includes: performance monitoring and alerting systems to track model accuracy and detect drift, regular model retraining with new data to maintain performance, technical support for integration issues and troubleshooting, model updates and improvements based on new requirements, documentation and knowledge transfer to your team, compliance monitoring and audit support, and emergency response for critical model failures. We provide different support tiers ranging from basic monitoring to full managed ML services, allowing you to choose the level of ongoing support that best fits your needs and internal capabilities."
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
const CustomMLFinalCTA = () => {
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
                <Brain className="w-5 h-5 text-foreground" />
                <span className="text-foreground text-base font-medium">Custom ML Excellence</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Unlock Unprecedented Insights with{" "}
            <span className="text-accent">WDI's Custom ML Expertise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your data into a strategic asset with bespoke Machine Learning models designed for your unique challenges.
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
                <Brain className="w-6 h-6 flex-shrink-0" />
                <span>Start Your ML Project</span>
              </div>
            </ShimmerButton>

            <p className="text-muted-foreground text-sm">
              Predictive Analytics • Computer Vision • NLP • Recommendation Systems
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

// Main Custom ML Model Development Page
export const CustomMLModelDevelopment = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black">
        <CustomMLHeroWithCTA />
      </section>
      
      {/* Benefits */}
      <section className="bg-background">
        <CustomMLBenefits />
      </section>
      
      {/* Development Process */}
      <section className="bg-card">
        <CustomMLDevelopmentProcess />
      </section>
      
      {/* Services */}
      <section className="bg-background">
        <CustomMLServices />
      </section>
      
      {/* Tech Stack */}
      <section className="bg-card">
        <CustomMLTechStack />
      </section>
      
      {/* Case Studies */}
      <section className="bg-background">
        <CustomMLCaseStudies />
      </section>
      
      {/* Mid-Page CTA */}
      <section className="bg-card">
        <CustomMLInlineCTA />
      </section>
      
      {/* Hire Developers */}
      <section className="bg-background">
        <HireMLDevelopers />
      </section>
      
      {/* FAQs */}
      <section className="bg-card">
        <CustomMLFAQs />
      </section>
      
      {/* Final CTA */}
      <section className="bg-background">
        <CustomMLFinalCTA />
      </section>
      
      {/* Footer */}
      <section className="bg-card">
        <Footer />
      </section>
    </div>
  );
};